(function () {
  var STORAGE_KEY = "theme";
  var FILTER_BUTTON_BASE =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background h-9 px-3 rounded-full";
  var FILTER_BUTTON_ACTIVE = "bg-primary text-primary-foreground hover:bg-primary/90";
  var FILTER_BUTTON_IDLE = "bg-secondary text-secondary-foreground hover:bg-secondary/80";

  function getStoredTheme() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      return stored === "light" || stored === "dark" ? stored : null;
    } catch {
      return null;
    }
  }

  function getPreferredTheme() {
    var stored = getStoredTheme();
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme, persist) {
    var root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.setAttribute("data-theme", theme);

    if (persist === false) return;

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
  }

  function updateThemeToggle(button) {
    if (!(button instanceof HTMLButtonElement)) return;
    var dark = document.documentElement.classList.contains("dark");
    button.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }

  function syncThemeToggleLabels() {
    Array.from(document.querySelectorAll("[data-theme-toggle]")).forEach(updateThemeToggle);
  }

  function initTheme() {
    applyTheme(getPreferredTheme(), false);
    document.documentElement.classList.add("has-js");

    document.addEventListener("click", function (event) {
      var button = event.target instanceof Element
        ? event.target.closest("[data-theme-toggle]")
        : null;

      if (!(button instanceof HTMLButtonElement)) return;

      var nextTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
      applyTheme(nextTheme, true);
      syncThemeToggleLabels();
    });

    var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", function (event) {
        if (getStoredTheme()) return;
        applyTheme(event.matches ? "dark" : "light", false);
        syncThemeToggleLabels();
      });
    }
  }

  function initAnalytics() {
    var gaId = document.documentElement.dataset.gaId;
    if (!gaId) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", gaId);

    document.addEventListener("click", function (event) {
      var target = event.target instanceof Element
        ? event.target.closest("[data-ga-event]")
        : null;

      if (!target) return;

      var eventName = target.getAttribute("data-ga-event");
      if (!eventName || typeof window.gtag !== "function") return;

      var params = {};
      var channel = target.getAttribute("data-ga-channel");
      var location = target.getAttribute("data-ga-location");
      var projectName = target.getAttribute("data-ga-project");
      var type = target.getAttribute("data-ga-type");
      var fileName = target.getAttribute("data-ga-file");

      if (channel) params.channel = channel;
      if (location) params.location = location;
      if (projectName) params.project_name = projectName;
      if (type) params.type = type;
      if (fileName) params.file_name = fileName;

      if (target instanceof HTMLAnchorElement && target.href) {
        params.link_url = target.href;
      }

      window.gtag("event", eventName, params);
    });
  }

  function initNavbar() {
    var navbar = document.querySelector("[data-navbar]");
    if (!(navbar instanceof HTMLElement) || navbar.dataset.bound === "true") return;

    navbar.dataset.bound = "true";

    var sectionIds = [];
    try {
      sectionIds = JSON.parse(navbar.dataset.sectionIds || "[]");
    } catch {
      sectionIds = [];
    }

    var offset = Number(navbar.dataset.scrollOffset || "88");
    var links = Array.from(document.querySelectorAll("a[data-nav-link]"));

    function setActive(id) {
      links.forEach(function (link) {
        var href = link.getAttribute("href");
        var active = href === "#" + id;
        link.classList.toggle("is-active", active);

        if (active) {
          link.setAttribute("aria-current", "page");
          link.setAttribute("data-active", "true");
        } else {
          link.removeAttribute("aria-current");
          link.removeAttribute("data-active");
        }
      });
    }

    var sections = Array.isArray(sectionIds)
      ? sectionIds
          .map(function (id) {
            return document.getElementById(id);
          })
          .filter(function (section) {
            return section instanceof HTMLElement;
          })
      : [];

    if (sections.length > 0) {
      setActive(sections[0].id);

      if ("IntersectionObserver" in window) {
        var visible = new Map();
        var observer = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                visible.set(entry.target.id, entry.boundingClientRect.top);
              } else {
                visible.delete(entry.target.id);
              }
            });

            if (!visible.size) return;

            var next = Array.from(visible.entries()).sort(function (a, b) {
              return a[1] - b[1];
            })[0];

            if (next) setActive(next[0]);
          },
          {
            rootMargin: "-" + offset + "px 0px -55% 0px",
            threshold: [0, 0.2, 0.5, 1]
          }
        );

        sections.forEach(function (section) {
          observer.observe(section);
        });
      } else {
        var onScroll = function () {
          var scrollPos = window.scrollY + offset + 1;
          var current = sections[0] ? sections[0].id : null;

          sections.forEach(function (section) {
            if (section.offsetTop <= scrollPos) current = section.id;
          });

          if (current) setActive(current);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
      }
    }

    var dialog = navbar.querySelector("[data-mobile-nav]");
    var openButton = navbar.querySelector("[data-mobile-nav-open]");

    if (!(dialog instanceof HTMLDialogElement) || !(openButton instanceof HTMLButtonElement)) {
      return;
    }

    openButton.addEventListener("click", function () {
      if (!dialog.open) dialog.showModal();
    });

    navbar.addEventListener("click", function (event) {
      var button = event.target instanceof Element
        ? event.target.closest("[data-mobile-nav-close], [data-mobile-nav-link]")
        : null;

      if (button && dialog.open) {
        dialog.close();
      }
    });

    dialog.addEventListener("click", function (event) {
      var panel = dialog.querySelector(".mobile-nav-panel");
      if (panel instanceof HTMLElement && !panel.contains(event.target)) {
        dialog.close();
      }
    });
  }

  function initServicesFilter() {
    var root = document.querySelector("[data-services-filter]");
    if (!(root instanceof HTMLElement) || root.dataset.bound === "true") return;

    root.dataset.bound = "true";

    var buttons = Array.from(root.querySelectorAll("[data-filter-button]"));
    var cards = Array.from(root.querySelectorAll("[data-service-card]"));
    var count = root.querySelector("[data-filter-count]");

    function applyFilter(value) {
      var visible = 0;

      cards.forEach(function (card) {
        if (!(card instanceof HTMLElement)) return;
        var match = value === "All" || card.dataset.category === value;
        card.hidden = !match;
        if (match) visible += 1;
      });

      buttons.forEach(function (button) {
        if (!(button instanceof HTMLButtonElement)) return;
        var active = button.dataset.filterValue === value;
        button.setAttribute("aria-pressed", active ? "true" : "false");
        button.className = FILTER_BUTTON_BASE + " " + (active ? FILTER_BUTTON_ACTIVE : FILTER_BUTTON_IDLE);
      });

      if (count instanceof HTMLElement) {
        count.textContent = visible + " layanan";
      }
    }

    applyFilter(root.dataset.initialFilter || "All");

    root.addEventListener("click", function (event) {
      var button = event.target instanceof Element
        ? event.target.closest("[data-filter-button]")
        : null;

      if (!(button instanceof HTMLButtonElement)) return;
      applyFilter(button.dataset.filterValue || "All");
    });
  }

  function initRoleRotators() {
    var rotators = document.querySelectorAll("[data-role-rotator]");

    rotators.forEach(function (rotator) {
      if (!(rotator instanceof HTMLElement) || rotator.dataset.bound === "true") return;

      var value = rotator.querySelector("[data-role-rotator-value]");
      if (!(value instanceof HTMLElement)) return;

      var roles = [];
      try {
        roles = JSON.parse(rotator.dataset.roles || "[]");
      } catch {
        roles = [];
      }

      if (!Array.isArray(roles) || roles.length <= 1) return;

      var interval = Number(rotator.dataset.interval || "2500");
      var delay = Number.isFinite(interval) && interval > 0 ? interval : 2500;
      var index = 0;

      window.setInterval(function () {
        index = (index + 1) % roles.length;
        value.classList.remove("role-swap");
        void value.offsetWidth;
        value.textContent = roles[index];
        value.classList.add("role-swap");
      }, delay);

      rotator.dataset.bound = "true";
    });
  }

  function start() {
    syncThemeToggleLabels();
    initNavbar();
    initServicesFilter();
    initRoleRotators();
  }

  initTheme();
  initAnalytics();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
