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
  metadataBase: new URL("https://nkraoul.vercel.app"),
  title: {
    default: "Nana Kamdom Raoul | Software Engineer & Developer",
    template: "%s | Nana Kamdom Raoul",
  },
  description:
    "Nana Kamdom Raoul — software engineering student building mobile & web experiences (Flutter, Next.js, PHP, MySQL). Available for internships, freelance and collaborations.",
  keywords: [
    "Nana Kamdom Raoul",
    "software engineer",
    "mobile developer",
    "web developer",
    "Flutter",
    "Next.js",
    "TypeScript",
    "PHP",
    "MySQL",
    "portfolio",
    "Cameroon",
  ],
  alternates: {
    canonical: "https://nkraoul.vercel.app",
    languages: {
      "en-US":"https://nkraoul.vercel.app/en",
      "fr-FR":"https://nkraoul.vercel.app/fr",
    },
  },
  authors: [{ name: "Nana Kamdom Raoul", url: "https://nkraoul.vercel.app" }],
  openGraph: {
    title: "Nana Kamdom Raoul | Software Engineer & Developer",
    description:
      "Practical mobile & web products built with Flutter, Next.js, PHP and MySQL. Portfolio and contact information for hiring or collaborations.",
    url: "https://nkraoul.vercel.app",
    siteName: "Nana Kamdom Raoul",
    type: "website",
    images: [
      {
        url: "https://nkraoul.vercel.app/portrait.svg",
        alt: "Portrait of Nana Kamdom Raoul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nana Kamdom Raoul | Software Engineer & Developer",
    description:
      "Portfolio of Nana Kamdom Raoul — mobile & web developer (Flutter, Next.js, PHP).",
    images: ["https://nkraoul.vercel.app/portrait.svg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    <head>
        {/* Collez votre balise de vérification Google ici */}
        <meta 
          name="google-site-verification" 
          content="google-site-verification=ELpSLuxQj8F5jCDGz0lhXMuj9Xg4JVrwXldXTd3X824" 
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
