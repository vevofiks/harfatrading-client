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
    default: "harfatrading - Best Car Accessories Wholesale in Qatar, Doha",
    template: "%s | harfatrading",
  },
  description: "Buy top-quality car accessories at wholesale prices from harfatrading in Doha, Qatar. Trusted automotive partner.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "harfatrading - Best Car Accessories Wholesale in Qatar, Doha",
    description: "Explore Qatar's best wholesale auto accessories with harfatrading. Shop trusted quality parts.",
    url: "https://www.harfatrading.com",
    type: "website",
    siteName: "harfatrading",
    images: [
      {
        url: "https://www.harfatrading.com/logo2.png",
        width: 1200,
        height: 630,
        alt: "harfatrading logo",
      },
    ],
  },
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
