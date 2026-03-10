// components/PricingBatch.tsx
import {
  CalendarIcon,
  ClockIcon,
  TagIcon,
  FireIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const primaryColor = "#04a63e";
const primaryRgb = "4,166,62";

// Data batch dari gambar
const batches = [
  {
    name: "BATCH 1",
    period: "Oktober 2024",
    price: "Rp 349.000",
    status: "tutup",
    isComingSoon: false,
  },
  {
    name: "BATCH 2",
    period: "Januari 2025",
    price: "Rp 397.000",
    status: "tutup",
    isComingSoon: false,
  },
  {
    name: "BATCH 3",
    period: "Februari 2025",
    price: "Rp 397.000",
    status: "tutup",
    isComingSoon: false,
  },
  {
    name: "BATCH 4",
    period: "April 2025",
    price: "Rp 397.000",
    status: "tutup",
    isComingSoon: false,
  },
  {
    name: "BATCH 5",
    period: "Desember 2025",
    price: "Rp 397.000",
    status: "aktif",
    isComingSoon: false,
    isHighlighted: true, // Batch yang sedang aktif
  },
  {
    name: "BATCH 6",
    period: "Coming Soon 2026",
    price: "Rp 4xx.000",
    status: "coming",
    isComingSoon: true,
  },
];

interface PricingBatchProps {
  title?: string;
  description?: string;
  discountText?: string;
  primaryColor?: string;
  daftarLink?: string;
}

export default function PricingBatch({
  title = "Daftar sekarang Juga, Mumpung masih ada diskon 45% Khusus Massa Launching..",
  description = "Jangan lewatkan kesempatan mendapatkan harga spesial untuk batch terbatas",
  primaryColor: customPrimaryColor,
  daftarLink = "https://kelasstruktur.com/step/daftar-jdsg/",
}: PricingBatchProps) {
  const color = customPrimaryColor || primaryColor;

  // Fungsi untuk memisahkan teks dan memberi warna pada "diskon 45%"
  const formatTitle = (titleText: string) => {
    const parts = titleText.split("diskon 45%");
    return (
      <>
        {parts[0]}
        <span style={{ color: color }} className="font-bold">
          diskon 45%
        </span>
        {parts[1]}
      </>
    );
  };

  // Fungsi untuk mendapatkan style badge status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "tutup":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-600 border border-red-100">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            Tutup
          </span>
        );
      case "aktif":
        return (
          <span
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: `${color}15`,
              color: color,
              borderColor: `${color}30`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: color }}
            ></span>
            Aktif
          </span>
        );
      case "coming":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
            <ClockIcon className="w-3 h-3" />
            Coming Soon
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header dengan style modern */}
        <div className="text-center mb-12">
          {/* Badge Diskon */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
            style={{
              backgroundColor: `${color}15`,
              color: color,
              borderColor: `${color}30`,
            }}
          >
            <FireIcon className="w-5 h-5" />
            <span className="font-semibold">Diskon 45%</span>
          </div>

          {/* Title dengan "diskon 45%" berwarna hijau */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
            {formatTitle(title)}
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Batch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {batches.map((batch, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                batch.isHighlighted
                  ? "border-transparent shadow-lg scale-105 md:scale-105 z-10"
                  : "border-gray-200 hover:border-transparent"
              }`}
              style={
                batch.isHighlighted
                  ? {
                      boxShadow: `0 20px 30px -10px rgba(${primaryRgb}, 0.2)`,
                      borderColor: color,
                    }
                  : {}
              }
            >
              {/* Highlight Badge untuk batch aktif */}
              {batch.isHighlighted && (
                <div
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap"
                  style={{ backgroundColor: color }}
                >
                  🎯 Sedang Aktif
                </div>
              )}

              {/* Coming Soon Overlay */}
              {batch.isComingSoon && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] rounded-2xl flex items-center justify-center z-20">
                  <div className="text-center">
                    <ClockIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <span className="text-gray-400 font-medium">
                      Segera Hadir
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Header Card */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {batch.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{batch.period}</span>
                    </div>
                  </div>
                  {getStatusBadge(batch.status)}
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-gray-900">
                      {batch.price}
                    </span>
                    {batch.status !== "coming" && (
                      <span className="text-sm text-gray-400">/batch</span>
                    )}
                  </div>

                  {/* Original Price untuk batch aktif */}
                  {batch.isHighlighted && (
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm text-gray-400 line-through">
                        Rp 725.000
                      </span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-50 text-green-600">
                        Hemat 45%
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg
                      className="w-4 h-4"
                      style={{ color: color }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Akses Selamanya</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg
                      className="w-4 h-4"
                      style={{ color: color }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>150+ Materi Video</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg
                      className="w-4 h-4"
                      style={{ color: color }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Grup Komunitas</span>
                  </li>
                </ul>

                {/* CTA Button dengan Link */}
                {batch.status === "aktif" ? (
                  <Link
                    href={daftarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <button
                      className="w-full text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                      style={{
                        backgroundColor: color,
                        boxShadow: `0 10px 20px -5px rgba(${primaryRgb}, 0.3)`,
                      }}
                    >
                      Daftar Sekarang
                    </button>
                  </Link>
                ) : batch.status === "tutup" ? (
                  <button
                    className="w-full bg-gray-100 text-gray-400 font-semibold py-3 px-4 rounded-xl cursor-not-allowed border border-gray-200"
                    disabled
                  >
                    Batch Ditutup
                  </button>
                ) : (
                  <button
                    className="w-full bg-gray-50 text-gray-400 font-semibold py-3 px-4 rounded-xl border border-gray-200 cursor-not-allowed"
                    disabled
                  >
                    Segera Dibuka
                  </button>
                )}
              </div>

              {/* Batch Number Background (decorative) */}
              <div
                className="absolute bottom-0 right-0 text-8xl font-black opacity-5 pointer-events-none select-none"
                style={{ color: batch.isHighlighted ? color : "#e5e7eb" }}
              >
                {String(idx + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note dengan Link */}
        <div className="text-center mt-12">
          <Link
            href={daftarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <TagIcon className="w-5 h-5" style={{ color: color }} />
              <p className="text-gray-600">
                <span className="font-semibold">Harga akan naik</span> setiap
                batch berikutnya, daftar sekarang di batch aktif!
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
