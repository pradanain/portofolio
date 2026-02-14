export const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL ?? "/";
  const normalized = path.startsWith("/") ? path.slice(1) : path;

  if (base.endsWith("/")) {
    return `${base}${normalized}`;
  }

  return `${base}/${normalized}`;
};
