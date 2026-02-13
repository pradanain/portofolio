# Portfolio – Novanni Indi Pradana

Website portfolio personal modern menggunakan Astro + Tailwind + shadcn/ui (React islands).

## Scripts

```sh
npm install
npm run dev
npm run build
```

## Struktur Utama

```text
public/
  profile.jpg
  cv.pdf
  logos/placeholder.svg
src/
  components/
    layout/
    sections/
    islands/
    ui/
  data/
  lib/
  pages/index.astro
  styles/global.css
```

## Ganti Foto, CV, dan Sosial

- Foto profil: ganti file `public/profile.jpg`.
- CV: ganti file `public/cv.pdf`.
- Link sosial: update di `src/components/sections/Hero.astro` (socials) dan `src/components/layout/Navbar.astro` (socialItems), serta `src/components/sections/Contact.astro`.

## Catatan

- Komponen interaktif hanya menggunakan React islands: `ThemeToggle`, `RoleRotator`, `MobileNav`, `ContactForm`.
- Seluruh data dinamis ada di folder `src/data`.
