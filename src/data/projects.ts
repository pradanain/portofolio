import type { ImageMetadata } from "astro";

import dirgcGui from "@/assets/screenshots/dirgc-gui.webp";
import sigapScreenshot from "@/assets/screenshots/sigap-6502.webp";
import tlBpkScreenshot from "@/assets/screenshots/tl-bpk.webp";
import spbeScreenshot from "@/assets/screenshots/spbe-bps.webp";
import spmbScreenshot from "@/assets/screenshots/spmb-stis.webp";
import sigmaScreenshot from "@/assets/screenshots/sigma-stis.webp";

export type ProjectCategory = "Web" | "Data" | "Automation" | "Mobile";

export type Project = {
  title: string;
  description: string;
  impact?: string;
  category: ProjectCategory;
  stack: string[];
  image?: ImageMetadata;
  demoUrl?: string;
  repoUrl?: string;
};

export const featuredProjects: Project[] = [
  {
    title: "DIRGC - Otomatisasi Isian GC",
    description:
      "CLI berbasis Playwright untuk otomatisasi isian field GC dari Excel, dilengkapi logging pemantauan. Tersedia GUI PyQt5 + QFluentWidgets untuk non-terminal.",
    impact:
      "Mengurangi input manual dengan otomatisasi berbasis Excel dan logging terpusat.",
    category: "Automation",
    stack: ["BPS", "Playwright", "Python", "Excel", "PyQt5", "QFluentWidgets"],
    image: dirgcGui,
    repoUrl: "https://github.com/bpskabbulungan/otomatisasidirgc-6502"
  },
  {
    title: "SIGAP - Sistem Informasi Pengingat Presensi",
    description:
      "Memudahkan BPS Kabupaten Bulungan memantau dan mengatur WhatsApp Bot pengingat presensi lewat satu dashboard terpusat, lengkap dengan jadwal otomatis, penyesuaian manual, dan monitoring koneksi bot.",
    impact:
      "Kontrol bot presensi dan jadwal otomatis dalam satu dashboard terpusat.",
    category: "Automation",
    stack: ["BPS", "Web Dashboard", "WhatsApp Bot", "Scheduling"],
    image: sigapScreenshot,
    repoUrl: "https://github.com/bpskabbulungan/sigap-6502"
  },
  {
    title: "TL BPK - Sistem Informasi Tindak Lanjut Rekomendasi BPK",
    description:
      "Sistem untuk mengelola proses tindak lanjut rekomendasi BPK secara end-to-end dengan akses terkontrol dan dokumentasi terpusat. Dievaluasi dengan black box testing dan CSUQ.",
    impact:
      "Merapikan tracking rekomendasi dengan dokumentasi terpusat dan akses terkontrol.",
    category: "Web",
    stack: ["BPS", "BPK", "Information System", "Workflow", "Audit", "Laravel"],
    image: tlBpkScreenshot,
    repoUrl: "https://github.com/pradanain/tl-bpk-bps"
  },
  {
    title: "SPBE BPS - Sistem Manajemen Perubahan TI",
    description:
      "Sistem informasi terpadu untuk perencanaan, pengajuan, pengelolaan, dan evaluasi kegiatan SPBE sesuai arahan perubahan Kementerian PAN-RB, lengkap dengan dokumentasi terpusat dan kolaborasi tim.",
    impact: "Mengelola perubahan TI end-to-end sesuai arahan PAN-RB.",
    category: "Web",
    stack: ["BPS", "Information System", "SPBE", "Documentation", "Laravel"],
    image: spbeScreenshot,
    repoUrl: "https://github.com/pradanain/spbe-bps"
  }
];

export const projects: Project[] = [
  {
    title: "SPMB STIS - Seleksi Penerimaan Mahasiswa Baru",
    description:
      "Aplikasi web pendukung SPMB STIS (hybrid) untuk verifikasi peserta, absensi, unggah laporan pengawas, serta monitoring panitia lewat pencarian dan unduh laporan.",
    impact:
      "Mempercepat verifikasi dan pelaporan pengawasan SPMB dalam satu platform terpusat.",
    category: "Web",
    stack: ["STIS", "Java", "Spring Boot", "Web", "Entrance Exam"],
    image: spmbScreenshot,
    repoUrl: "https://github.com/pradanain/SPMB-STIS-Java-SpringBoot"
  },
  {
    title: "SIGMA STIS - Sistem Informasi Kegiatan Mahasiswa",
    description:
      "Aplikasi informasi kegiatan mahasiswa Politeknik Statistika STIS, mencakup kegiatan internal dan eksternal untuk meningkatkan partisipasi.",
    impact:
      "Mempermudah akses informasi kegiatan dan mendorong partisipasi mahasiswa.",
    category: "Mobile",
    stack: ["STIS", "Java", "Android", "Student Activities"],
    image: sigmaScreenshot,
    repoUrl: "https://github.com/pradanain/SIGMA-STIS-AndroidApp"
  }
];
