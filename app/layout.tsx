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
  metadataBase: new URL("https://nkraoul.com"),
  title: {
    default: "Nana Kamdom Raoul | Software Engineer & Developer",
    template: "%s | Nana Kamdom Raoul",
  },
  description:
    "Portfolio of Nana Kamdom Raoul, a software engineering student building modern mobile and web experiences with Flutter, Next.js, PHP, and MySQL.",
  keywords: [
    "Nana Kamdom Raoul",
    "NKRaoul",
    "Software Engineer",
    "Portfolio",
    "Flutter developer",
    "Next.js developer",
    "PHP developer",
    "Cameroon developer",
  ],
  alternates: {
    canonical: "https://nkraoul.com",
  },
  authors: [{ name: "Nana Kamdom Raoul" }],
  openGraph: {
    title: "Nana Kamdom Raoul | Software Engineer & Developer",
    description:
      "Portfolio of Nana Kamdom Raoul, a software engineering student building modern mobile and web experiences with Flutter, Next.js, PHP, and MySQL.",
    url: "https://nkraoul.com",
    siteName: "Nana Kamdom Raoul",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nana Kamdom Raoul | Software Engineer & Developer",
    description:
      "Portfolio of Nana Kamdom Raoul, a software engineering student building modern mobile and web experiences with Flutter, Next.js, PHP, and MySQL.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
