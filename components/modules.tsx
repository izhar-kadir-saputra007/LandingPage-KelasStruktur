"use client";

import { useState } from "react";
import {
  ComputerDesktopIcon,
  BuildingOfficeIcon,
  CpuChipIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  PresentationChartLineIcon,
  ClipboardDocumentListIcon,
  CubeIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

const primaryColor = "#04a63e";

const modules = [
  {
    icon: ComputerDesktopIcon,
    title: "Modul 1. Pengenalan Awal & Overview Kelas",
    description:
      "Memahami roadmap pembelajaran, tools yang digunakan, dan gambaran lengkap apa yang akan dicapai selama mengikuti kelas ini. Termasuk pengenalan studi kasus gedung yang akan didesain.",
  },
  {
    icon: BuildingOfficeIcon,
    title: "Modul 3. Studi Kasus - Gedung Office 3 Lantai",
    description:
      "Pembahasan detail data perencanaan, preliminary design elemen struktur (pelat, balok, kolom), hingga tahapan modeling struktur dengan software. Dilengkapi studi kasus gedung perkantoran 3 lantai.",
  },
  {
    icon: CpuChipIcon,
    title: "Modul 4. Modeling Struktur Gedung Office 3 Lantai",
    description:
      "Penerapan SNI Gempa terbaru untuk analisis ragam, periode getar, gaya geser dasar, validasi dimensi, simpangan antar lantai, efek P-Delta, hingga faktor redundansi dan ketidakberaturan struktur.",
  },
  {
    icon: CircleStackIcon,
    title: "Modul 5. Analisis Struktur Gedung Tahan Gempa Sesuai SNI",
    description:
      "Step-by-step desain tulangan lentur dan geser balok, desain kolom dengan diagram interaksi, serta perhitungan tulangan pelat lantai sesuai SNI Beton. Dilengkapi contoh perhitungan manual.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Modul 6. Desain Struktur - Penulangan Balok",
    description:
      "Perencanaan atap baja mulai dari identifikasi komponen, denah atap, modeling struktur, pembebanan, analisis, hingga desain sambungan kritis sesuai standar.",
  },
  {
    icon: PresentationChartLineIcon,
    title: "Modul 7. Desain Struktur - Penulangan Kolom",
    description:
      "Penyelesaian akhir analisis struktur atas meliputi update file excel, kombinasi pembebanan, cek eksentrisitas, partisipasi massa, periode alami, ketidakberaturan, dan simpangan struktur.",
  },
  {
    icon: ClipboardDocumentListIcon,
    title: "Modul 8. Desain Struktur - Penulangan Pelat Lantai",
    description:
      "Panduan lengkap menyusun laporan analisis struktur yang profesional dan sesuai standar dengan template siap pakai.",
  },
  {
    icon: CubeIcon,
    title: "Modul 9. Desain Struktur - Desain Atap Baja Berat",
    description:
      "Pembahasan fondasi dalam, interpretasi data sondir, perhitungan daya dukung, validasi Geo5, hingga desain tulangan bore pile.",
  },
  {
    icon: MapIcon,
    title: "Modul 10. Finalisasi Analisis dan Desain Struktur Atas",
    description:
      "Kesimpulan akhir materi, tips karir bidang struktur, serta panduan langkah selanjutnya setelah menyelesaikan kelas.",
  },
  {
    icon: MapIcon,
    title: "Modul 11. Laporan Analisis Struktur",
    description:
      "Materi penyusunan laporan analisis struktur secara sistematis dan profesional.",
  },
  {
    icon: MapIcon,
    title: "Modul 12. Desain Struktur – Desain Fondasi Dalam Bore Pile",
    description:
      "Perencanaan fondasi dalam bore pile lengkap dengan analisis dan desain tulangan.",
  },
  {
    icon: MapIcon,
    title: "Modul 13. Penutupan Kelas Jago Analisis dan Desain Struktur Gedung",
    description:
      "Penutup kelas dan arahan pengembangan kompetensi selanjutnya.",
  },
];

interface ModulesProps {
  title?: string;
  subtitle?: string;
  title2?: string;
  subtitle2?: string;
  primaryColor?: string;
}

export default function Modules({
  title = "Apa Saja yang Dipelajari?",
  subtitle = "Lebih dari 150+ materi video terstruktur dari dasar hingga mahir.",
  title2 = "Saat ini terdapat 148+ Materi yang sudah bisa diakses dan akan terus diupdate dan ditambahakan dengan materibaru.",
  subtitle2 = "Cukup sekali daftar aja, bisa akses kelas selamanya. ini investasi jangka panjang, semumur hidup.",
  primaryColor: customPrimaryColor,
}: ModulesProps) {
  const color = customPrimaryColor || primaryColor;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-5 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: `${color}10`, color }}
          >
            📚 Kurikulum Terstruktur
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {title}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {modules.map((module, idx) => {
            const Icon = module.icon;
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${color}15`,
                        color,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {module.title}
                      </h3>
                      <p className="text-sm text-gray-500">Modul {idx + 1}</p>
                    </div>
                  </div>

                  {/* Chevron */}
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 text-gray-600 leading-relaxed">
                      {module.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: `${color}10`, color }}
          ></span>

          <h2 className="text-xl md:text-xl font-bold mb-6 text-gray-900">
            {title2}
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed">
            {subtitle2}
          </p>
        </div>
      </div>
    </section>
  );
}
