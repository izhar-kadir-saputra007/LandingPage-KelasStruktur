import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://landing-page-kelas-struktur.vercel.app"),

  title: "Jago Desain Struktur Gedung - Kelas Struktur",
  description:
    "Kelas online untuk belajar desain struktur gedung sesuai SNI dan tahan gempa. Materi lengkap, praktis, dan terstruktur untuk mahasiswa, fresh graduate, freelancer, dan pemula.",

  openGraph: {
    title: "Jago Desain Struktur Gedung - Kelas Struktur",
    description:
      "Belajar desain struktur gedung sesuai SNI & tahan gempa dengan materi terstruktur dan praktis.",
    url: "https://landing-page-kelas-struktur.vercel.app/",
    siteName: "Kelas Struktur",
    images: [
      {
        url: "/og-kelas-struktur.jpg", // otomatis jadi full URL karena metadataBase
        width: 1200,
        height: 630,
        alt: "Kelas Struktur - Desain Struktur Gedung",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jago Desain Struktur Gedung - Kelas Struktur",
    description:
      "Belajar desain struktur gedung sesuai SNI & tahan gempa dengan materi terstruktur dan praktis.",
    images: ["/og-kelas-struktur.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}