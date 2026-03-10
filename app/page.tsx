// app/page.tsx
import { Inter } from "next/font/google";
import Image from "next/image"; // Saran 3: Import Image dari Next.js
import {
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  BookOpenIcon, // Saran 1: Icon untuk 150 Materi
  CreditCardIcon, // Saran 1: Icon untuk Sekali Bayar
  UsersIcon, // Saran 1: Icon untuk Grup Komunitas
  UserCircleIcon, // Saran 1: Icon untuk Konsultasi Mentor
  ArrowPathIcon, // Saran 1: Icon untuk Update Materi
  QueueListIcon, // Saran 1: Icon untuk Materi Terstruktur
  DocumentDuplicateIcon, // Saran 1: Icon untuk Calculation Sheet
  FolderIcon, // Saran 1: Icon untuk File Pendukung
} from "@heroicons/react/24/outline";
import ModuleAccordion from "@/components/modules";
import PricingBatch from "@/components/PricingBatch";
import FAQ from "@/components/FAQ";
import StickyDaftar from "@/components/layout/StickyDaftar";

// Optimasi font dengan next/font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Warna hijau utama
const primaryColor = "#04a63e";
const primaryRgb = "4,166,62";

// Saran 1: Update data manfaat dengan icon yang sesuai
const benefits = [
  { icon: BookOpenIcon, text: "150 Materi + Update (Total 150+ Materi)" },
  { icon: CreditCardIcon, text: "Sekali Bayar, Akses Selamanya" },
  { icon: UsersIcon, text: "Grup Komunitas Eksklusif" },
  { icon: UserCircleIcon, text: "Konsultasi Langsung dengan Mentor" },
  { icon: ArrowPathIcon, text: "Gratis Update Materi Selamanya" },
  { icon: QueueListIcon, text: "Materi terstruktur dari Nol" },
  { icon: DocumentDuplicateIcon, text: "File Calculation Sheet Lengkap" },
  { icon: FolderIcon, text: "File Pendukung Belajar" },
];

// Data untuk target audience
const audiences = [
  {
    icon: AcademicCapIcon,
    title: "Mahasiswa Teknik Sipil",
    desc: "Yang ingin meningkatkan skill dalam menganalisis struktur gedung.",
  },
  {
    icon: BriefcaseIcon,
    title: "Fresh Graduate",
    desc: "Yang ingin mempelajari lebih lanjut mengenai analisis struktur gedung.",
  },
  {
    icon: UserGroupIcon,
    title: "Freelancer",
    desc: "Yang ingin mendapatkan penghasilan tambahan dengan mendesain struktur",
  },
  {
    icon: RocketLaunchIcon,
    title: "Pemula/Umum",
    desc: "Yang ingin tau dan ingin belajar tentang analisis struktur gedung.",
  },
];

// Data nilai paket
const valueItems = [
  { label: "Kelas dengan Materi Terstruktur", value: "Rp 1.200.000,-" },
  { label: "Grup Komunitas Eksklusif", value: "Rp 500.000,-" },
  { label: "Handbook & Ebook Premium", value: "Rp 500.000,-" },
  { label: "Template Calculation Sheet", value: "Rp 1.200.000,-" },
  { label: "Update Materi Seterusnya", value: "Rp 1.000.000,-" },
  { label: "Konsultasi Langsung dengan Mentor", value: "Rp 500.000,-" },
];

// Saran 4 & 5: Komponen Reusable untuk Benefit Item
const BenefitItem = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex items-center gap-4 p-2">
    {" "}
    {/* Saran 4: Konsisten gap-4 */}
    <div
      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
      style={{ backgroundColor: `${primaryColor}15` }}
    >
      <Icon className="w-6 h-6" style={{ color: primaryColor }} />
    </div>
    <span className="text-gray-700 font-medium text-base">{text}</span>
  </div>
);

export default function Home() {
  return (
    <main
      className={`${inter.variable} font-sans bg-white text-gray-800`}
    >
      <StickyDaftar primaryColor={primaryColor} />
      {/* Hero Section */}
      <section className="relative py-10 md:py-12 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight pt-8 md:pt-16">
              <span className="text-gray-900">Analisis & Desain Struktur</span>{" "}
              <span style={{ color: primaryColor }}>itu Susah!!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Itu Kalo Nggak Paham Fundamentalnya..
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-5xl mx-auto border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Buat kalian para anak sipil, yang punya masalah:
              </h2>
              <ul className="space-y-3 text-left">
                {[
                  "Nggak paham cara baca SNI dan penerapannya",
                  "Nggak paham metode analisis strukturnya",
                  "Nggak paham teknik mendesain struktur gedung tahan gempa",
                  "Nggak tau alur kerja desain struktur yang benar",
                  "Belum tau teknik pengambilan keputusan dalam kasus tertentu",
                  "Belum tau metode penyusunan laporan analisis struktur yang baik",
                  "Udah belajar dari youtube tapi nggak paham paham",
                  "Udah belajar di kampus juga sama aja nggak paham-paham",
                ].map((problem, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl leading-5">
                      •
                    </span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-8 mb-4">
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{ color: primaryColor }}
            >
              Tenang...
            </h3>
          </div>
        </div>
      </section>

      {/* Bagian dengan layout gambar di samping kiri */}
      <section className="relative overflow-hidden pb-16">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="mt-8">
            <h3
              className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center"
              style={{ color: primaryColor }}
            >
              Ini PAKET LENGKAP Buat Kalian!!
            </h3>
            <p className="text-xl text-gray-600 mb-8 text-center font-bold">
              Daripada udah belajar mandiri nggak paham-paham, mending ikutan
              kelas yang udah disusun rapi dan terstruktur..
            </p>
            <h4
              className="text-5xl mb-6 text-center font-black leading-relaxed"
              style={{ color: primaryColor }}
            >
              JAGO DESAIN STRUKTUR GEDUNG
            </h4>

            {/* Saran 5: Layout flex dengan shadow dan tanpa border hijau */}
            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl shadow-lg bg-white">
              {/* Gambar responsif tanpa ukuran tetap */}
              <div className="md:w-1/2 w-full">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/course/DesainStrukturGedung.webp"
                    alt="Jago Desain Struktur Gedung - Kursus Desain Struktur"
                    fill
                    priority
                  />
                </div>
              </div>

              {/* Konten benefit */}
              <div className="md:w-1/2 w-full">
                <div className="grid grid-cols-1 gap-3">
                  {benefits.map((benefit, idx) => (
                    <BenefitItem
                      key={idx}
                      icon={benefit.icon}
                      text={benefit.text}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Kelas ini Cocok untuk Siapa?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audiences.map((audience, idx) => {
              const Icon = audience.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${primaryColor}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: primaryColor }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600">{audience.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ModuleAccordion */}
      <ModuleAccordion />

      <section
        className="py-16"
        style={{ backgroundColor: `${primaryColor}08` }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Apa Saja yang Didapatkan Peserta?
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="space-y-4 mb-8">
              {valueItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-3 border-b border-gray-100"
                >
                  <span className="text-gray-700">{item.label}</span>
                  <span className="font-bold text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="text-center py-6 border-t border-gray-200">
              <p className="text-xl text-gray-600 mb-2">
                Kalau ditotalkan, value dari kelas ini senilai:
              </p>
              <p
                className="text-4xl md:text-5xl font-black mb-4"
                style={{ color: primaryColor }}
              >
                Rp 4.900.000,-
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xl text-gray-600 mb-6">
            Yang seharusnya BAYAR MAHAL di luar sana untuk dapat semua value di
            atas, daftar sekarang cukup dengan investasi senilai 300ribuan,
            sekali untuk selamanya..
          </p>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Jago Desain Struktur Gedung
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Belajar Desain Struktur dari Cupu sampai Suhu
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-3xl text-gray-400 line-through">
                Rp879.000
              </span>
              <span
                className="text-5xl md:text-6xl font-black"
                style={{ color: primaryColor }}
              >
                Rp 397.000
              </span>
            </div>
            <p className="text-lg text-gray-300 mb-8">Khusus Massa Launching</p>
            <ul className="max-w-md mx-auto space-y-3 text-left mb-10">
              {benefits.slice(0, 6).map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <li key={idx} className="flex items-center gap-3">
                    <Icon
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: primaryColor }}
                    />
                    <span>{benefit.text}</span>
                  </li>
                );
              })}
            </ul>
            <a
              href="https://kelasstruktur.com/step/daftar-jdsg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                className="text-white font-bold py-5 px-12 rounded-full text-xl shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
                style={{
                  backgroundColor: primaryColor,
                  boxShadow: `0 10px 25px -5px rgba(${primaryRgb}, 0.5)`,
                }}
              >
                DAFTAR SEKARANG
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Value Bundle */}
      <PricingBatch />

      {/* FAQ */}
      <FAQ />

      {/* Footer Note */}
      <footer className="py-8 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          Copyright @ 2025 | Kelas Struktur. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
