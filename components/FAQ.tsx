"use client";

import { useState } from "react";
import {
  QuestionMarkCircleIcon,
  ClockIcon,
  AcademicCapIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

const primaryColor = "#04a63e";

const faqs = [
  {
    icon: QuestionMarkCircleIcon,
    question: "Apa itu Kelas Jago Desain Struktur Gedung?",
    answer:
      "Kelas Jago Desain Struktur Gedung Membantu para mahasiswa, Fresh Graduate, Freelancer, ataupun Pemula/Umum agar dapat mendesain struktur sebuah bangunan gedung yang sesuai dengan Standar Nasional Indonesia (SNI) dan juga struktur tahan gempa sesuai yang disyaratkan. Tidak hanya prosedur analisis yang di pelajari, peserta kelas juga dapat mendesain sampai dengan penulangan pada struktur gedung sesuai dengan Standar yang berlaku, juga dilengkapi dengan materi bagaimana dapat memproduksi gambar kerja struktur yang informatif. Juga para peserta dapat membuat laporan analisis struktur yang dapat dipertanggungjawabkan.",
  },
  {
    icon: ClockIcon,
    question:
      "Apakah ada batasan akses kelasnya? misal 1 tahun atau dalam jangka waktu tertentu?",
    answer:
      "Tidak ada batasan akses kelas! Setelah Anda mendaftar, Anda akan mendapatkan akses SEUMUR HIDUP (Lifetime Access) ke semua materi kelas. Anda bisa mengakses materi kapan saja dan di mana saja, tanpa batasan waktu. Cocok untuk investasi jangka panjang pengembangan karir Anda.",
  },
  {
    icon: AcademicCapIcon,
    question: "Bagaimana metode pembelajaran di kelas ini?",
    answer:
      "Metode pembelajaran menggunakan video tutorial step-by-step yang terstruktur, dimulai dari dasar hingga mahir. Setiap modul dilengkapi dengan studi kasus gedung nyata, file pendukung (Excel, software), dan panduan praktis. Anda bisa belajar secara self-paced sesuai kecepatan Anda sendiri, dan tersedia forum diskusi untuk bertanya jika ada kesulitan.",
  },
  {
    icon: CalendarIcon,
    question: "Untuk materi coming soon kapan akan di Updatenya?",
    answer:
      "Materi coming soon akan diupdate secara berkala setiap bulannya. Tim instruktur terus mengembangkan konten baru untuk memastikan materi selalu relevan dengan perkembangan industri dan standar terbaru. Anda akan mendapatkan notifikasi setiap ada materi baru yang ditambahkan tanpa biaya tambahan.",
  },
];

interface FAQProps {
  title?: string;
  subtitle?: string;
  primaryColor?: string;
}

export default function FAQ({
  title = "Pertanyaan yang Sering Diajukan (FAQ)",
  subtitle = "Temukan jawaban atas pertanyaan umum seputar kelas, akses, metode belajar, dan update materi.",
  primaryColor: customPrimaryColor,
}: FAQProps) {
  const color = customPrimaryColor || primaryColor;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: `${color}10`, color }}
          >
            ❓ Ada Pertanyaan?
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {title}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>
        </div>

        {/* Accordion FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const Icon = faq.icon;
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
              >
                {/* Header - Question */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: `${color}15`,
                        color,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Question */}
                    <h3 className="font-semibold text-lg text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
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

                {/* Content - Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 pl-[72px] text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer - Additional Info */}
      </div>
    </section>
  );
}
