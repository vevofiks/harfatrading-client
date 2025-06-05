import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "harfatrading | best car accessories wholesale in Qatar, Doha",
    template: "%s | harfatrading",
  },
  description: "Discover top-quality car accessories at wholesale prices in Qatar. Harfa Trading offers a wide range of products for all vehicle types, ensuring customer satisfaction.",
  keywords: [
    "Car accessories Qatar",
    "Wholesale car parts",
    "Auto accessories Doha",
    "Harfa Trading Qatar",
    "Best car accessories supplier",
    "Automotive parts wholesale",
    "Qatar car upgrades",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "harfatrading | Best Car Accessories Wholesale in Qatar, Doha",
    description: "Discover premium car accessories and auto parts at unbeatable wholesale prices in Qatar.",
    url: "https://www.harfatrading.com",
    siteName: "harfatrading",
    images: [
      {
        url: "https://www.harfatrading.com/logo2.png",
        width: 1200,
        height: 630,
        alt: "Harfa Trading Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  metadataBase: new URL("https://www.harfatrading.com"),
};





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
