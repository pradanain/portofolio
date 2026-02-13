import * as React from "react";

type ScrollSpyProps = {
  sectionIds: string[];
  offset?: number;
};

export default function ScrollSpy({ sectionIds, offset = 88 }: ScrollSpyProps) {
  React.useEffect(() => {
    if (!sectionIds.length) return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("a[data-nav-link]")
    );

    const setActive = (id: string) => {
      links.forEach((link) => {
        const href = link.getAttribute("href");
        const isActive = href === `#${id}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const onScroll = () => {
      const scrollPos = window.scrollY + offset + 1;
      let current = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= scrollPos) {
          current = section.id;
        } else {
          break;
        }
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds, offset]);

  return null;
}
