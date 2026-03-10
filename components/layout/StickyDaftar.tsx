"use client";

import Link from "next/link";

const primaryColor = "#04a63e";

interface StickyDaftarProps {
  text?: string;
  buttonText?: string;
  buttonLink?: string;
  primaryColor?: string;
}

export default function StickyDaftar({
  text = "DAFTAR",
  buttonText = "DAFTAR SEKARANG >",
  buttonLink = "https://kelasstruktur.com/step/daftar-jdsg/",
  primaryColor: customPrimaryColor,
}: StickyDaftarProps) {
  const color = customPrimaryColor || primaryColor;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-emerald-500/40 max-w-7xl mx-auto rounded-3xl">
      {/* Gradient background dengan blur effect */}

      {/* Content */}
      <div className="relative container mx-auto px-4 py-4 max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          {/* Left side - Text */}
          <div className="flex-1">
            <span className="text-2xl md:text-3xl font-bold text-gray-900">
              {text}
            </span>
          </div>

          {/* Right side - Button */}
          <div className="flex-shrink-0">
            <Link
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                backgroundColor: color,
                boxShadow: `0 10px 20px -5px ${color}80`,
              }}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>

      {/* Optional: Small shadow at the top for depth */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </div>
  );
}
