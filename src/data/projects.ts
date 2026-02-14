import { withBase } from "@/lib/withBase";

export type ProjectCategory = "Web" | "Data" | "Automation" | "Mobile";

export type Project = {
  title: string;
  description: string;
  impact?: string;
  category: ProjectCategory;
  stack: string[];
  logo: string;
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const featuredProjects: Project[] = [
  {
    title: "DIRGC - Otomatisasi Isian GC",
    description:
      "CLI berbasis Playwright untuk otomatisasi isian field GC dari Excel, dilengkapi logging pemantauan. Tersedia GUI PyQt5 + QFluentWidgets untuk non-terminal.",
    impact:
      "Mengurangi input manual dengan otomatisasi berbasis Excel dan logging terpusat.",
    category: "Automation",
    stack: ["Playwright", "Python", "Excel", "PyQt5", "QFluentWidgets"],
    logo: withBase("logos/gc.svg"),
    repoUrl: "https://github.com/bpskabbulungan/otomatisasidirgc-6502",
    featured: true,
  },
  {
    title: "SIGAP - Sistem Informasi Pengingat Presensi",
    description:
      "Memudahkan BPS Kabupaten Bulungan memantau dan mengatur WhatsApp Bot pengingat presensi lewat satu dashboard terpusat, lengkap dengan jadwal otomatis, penyesuaian manual, dan monitoring koneksi bot.",
    impact:
      "Kontrol bot presensi dan jadwal otomatis dalam satu dashboard terpusat.",
    category: "Automation",
    stack: ["Web Dashboard", "WhatsApp Bot", "Scheduling"],
    logo: withBase("logos/sigap.svg"),
    repoUrl: "https://github.com/bpskabbulungan/sigap-6502",
    featured: true,
  },
  {
    title: "TL BPK - Sistem Informasi Tindak Lanjut Rekomendasi BPK",
    description:
      "Sistem untuk mengelola proses tindak lanjut rekomendasi BPK secara end-to-end dengan akses terkontrol dan dokumentasi terpusat. Dievaluasi dengan black box testing dan CSUQ.",
    impact:
      "Merapikan tracking rekomendasi dengan dokumentasi terpusat dan akses terkontrol.",
    category: "Web",
    stack: ["Information System", "Workflow", "Audit Follow-up"],
    logo: withBase("logos/tl-bpk.svg"),
    repoUrl: "https://github.com/pradanain/tl-bpk-bps",
    featured: true,
  },
  {
    title: "SPBE BPS - Sistem Manajemen Perubahan TI",
    description:
      "Sistem informasi terpadu untuk perencanaan, pengajuan, pengelolaan, dan evaluasi kegiatan SPBE sesuai arahan perubahan Kementerian PAN-RB, lengkap dengan dokumentasi terpusat dan kolaborasi tim.",
    impact: "Mengelola perubahan TI end-to-end sesuai arahan PAN-RB.",
    category: "Web",
    stack: ["Information System", "SPBE", "Documentation"],
    logo: withBase("logos/spbe.svg"),
    repoUrl: "https://github.com/pradanain/spbe-bps",
    featured: true,
  },
];

export const projects: Project[] = [
  {
    title: "SPMB STIS - Java Spring Boot",
    description:
      "Aplikasi web pendukung SPMB STIS (hybrid) untuk verifikasi peserta, absensi, unggah laporan pengawas, serta monitoring panitia lewat pencarian dan unduh laporan.",
    impact:
      "Mempercepat verifikasi dan pelaporan pengawasan SPMB dalam satu platform terpusat.",
    category: "Web",
    stack: ["Java", "Spring Boot"],
    logo: withBase("logos/spmb.svg"),
    repoUrl: "https://github.com/pradanain/SPMB-STIS-Java-SpringBoot",
  },
  {
    title: "SIGMA STIS - Android App",
    description:
      "Aplikasi informasi kegiatan mahasiswa Politeknik Statistika STIS, mencakup kegiatan internal dan eksternal untuk meningkatkan partisipasi.",
    impact:
      "Mempermudah akses informasi kegiatan dan mendorong partisipasi mahasiswa.",
    category: "Mobile",
    stack: ["Android App", "Student Activities"],
    logo: withBase("logos/sigma.svg"),
    repoUrl: "https://github.com/pradanain/SIGMA-STIS-AndroidApp",
  },
];
