"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { type FormEvent, useEffect, useState } from "react";

type Language = "en" | "fr";
type ThemeMode = "dark" | "light";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/237675993378?text=Hello%20Nana%2C%20I%20saw%20your%20portfolio.",
    bgClass: "bg-[#25D366] hover:bg-[#1ea952] shadow-[#25D366]/25",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white">
        <path d="M12 3.75A8.25 8.25 0 0 0 3.75 12c0 1.45.39 2.83 1.08 4.03L3.5 20.25l4.44-1.17a8.23 8.23 0 0 0 4.06 1.04A8.25 8.25 0 1 0 12 3.75Zm0 14.38a6.65 6.65 0 0 1-3.38-.89l-.24-.14-2.63.69.7-2.56-.16-.26A6.65 6.65 0 1 1 12 18.13Zm3.85-4.94c-.21-.1-1.24-.61-1.43-.68-.19-.07-.33-.1-.47.1-.14.2-.54.68-.66.82-.12.14-.24.16-.44.05-.2-.1-.84-.31-1.6-1-.59-.53-1-1.19-1.12-1.39-.12-.2-.01-.31.09-.41.09-.09.2-.24.3-.36.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.47-1.13-.65-1.55-.17-.42-.35-.36-.47-.36h-.4c-.14 0-.36.05-.55.25-.19.2-.73.72-.73 1.75 0 1.03.75 2.03.86 2.17.1.14 1.48 2.26 3.59 3.17.5.22.9.35 1.2.44.5.16.95.14 1.31.08.4-.06 1.24-.5 1.41-1 .17-.49.17-.91.12-1-.05-.09-.2-.14-.42-.24Z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@nkraoulrussel",
    bgClass: "bg-[#000000] hover:bg-[#111111] shadow-[#000000]/30",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white">
        <path d="M14.3 3h2.2c1.4 1.7 2.8 2.6 4.8 2.8v2.2c-1.4-.2-2.7-.7-3.9-1.7v6.7c0 3.2-2.4 5.8-5.6 5.8-2.3 0-4.5-1.2-5.7-3.2C4 12.9 4.1 10 5.6 8.2c1.4-1.7 3.5-2.7 5.7-2.7.2 0 .4 0 .6.1V8c-.2 0-.4-.1-.6-.1-1.6 0-3 1.2-3.4 2.8-.2 1 .1 2.1.8 2.9.8 1 2.1 1.6 3.4 1.6 2 0 3.6-1.6 3.6-3.6V3Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nana-kamdom-raoul",
    bgClass: "bg-[#0A66C2] hover:bg-[#084b97] shadow-[#0A66C2]/25",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white">
        <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.37a1.56 1.56 0 0 0 0 3.13ZM5.5 9.75h2.88V18H5.5V9.75Zm4.7 0h2.76v1.12h.04c.38-.72 1.32-1.48 2.72-1.48 2.91 0 3.45 1.91 3.45 4.4V18H16.3v-7.58c0-1.81-.03-4.13-2.52-4.13-2.52 0-2.9 1.97-2.9 4.01V18H10.2V9.75Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/nanakamdomraoulrusselalvares-cmky",
    bgClass: "bg-[#24292F] hover:bg-[#1b1f24] shadow-[#24292F]/25",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.21.66-.47v-1.65c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.84c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.67.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.94.36.31.68.91.68 1.84v2.73c0 .26.16.56.67.47A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10Z" />
      </svg>
    ),
  },
];

const contentByLanguage = {
  en: {
    nav: { projects: "Projects", experience: "Experience", education: "Education", contact: "Contact" },
    hero: {
      badge: "Software Engineering Student • Mobile & Web",
      title: "I’m Nana Kamdom Raoul — building practical digital products with purpose.",
      description:
        "I am a software engineering student passionate about mobile and web development. I specialize in Flutter, PHP, MySQL, and modern web technologies, focusing on building scalable and user-friendly applications.",
      ctaPrimary: "Download CV",
      ctaSecondary: "Let’s build together",
      availability: "Available for ambitious product work",
      cardA: { title: "Mobile-first mindset", body: "Focused on fluid user experiences." },
      cardB: { title: "Scalable by design", body: "Built to grow with the product." },
    },
    stats: [
      { value: "2+", label: "Years of hands-on project building" },
      { value: "3", label: "Key project domains explored" },
      { value: "100%", label: "Focus on practical, user-friendly solutions" },
    ],
    projects: [
      {
        title: "TerraMark",
        type: "Land Sale Platform",
        year: "2025",
        description:
          "A mobile-first marketplace for buying and selling land, designed with a clear user journey and strong trust-building experience.",
        tags: ["Flutter", "PHP", "MySQL"],
      },
      {
        title: "E-voting System",
        type: "Secure Digital Voting",
        year: "2024",
        description:
          "A reliable and accessible voting platform tailored for transparent decision-making and modern digital participation.",
        tags: ["PHP", "MySQL", "Web App"],
      },
      {
        title: "E-Commerce Platform",
        type: "Online Store Experience",
        year: "2023",
        description:
          "A scalable shopping experience focused on smooth product discovery, checkout flow, and maintainable architecture.",
        tags: ["Next.js", "TypeScript", "MySQL"],
      },
    ],
    sections: {
      projects: {
        eyebrow: "Featured Projects",
        heading: "Examples of projects I have worked on.",
        body: "Each project reflects a strong mix of product thinking, clean architecture, and practical delivery.",
      },
      stack: {
        eyebrow: "Tech Stack",
        heading: "A stack built for performant mobile and web products.",
        body: "I combine modern frameworks and backend tools to create applications that feel fast, reliable, and polished.",
      },
      experience: {
        eyebrow: "Experience",
        heading: "Practical experience across internships, freelancing, and community work.",
      },
      education: {
        eyebrow: "Education",
        heading: "Building a strong foundation in software engineering.",
      },
      certifications: {
        eyebrow: "Certifications",
        heading: "Continuing to grow through professional certifications.",
      },
      contact: {
        eyebrow: "Contact",
        heading: "Let’s connect and build a meaningful product.",
        body: "I am open to collaborations, internships, freelance work, and opportunities that value thoughtful execution.",
      },
    },
    stack: [
      { name: "Flutter", detail: "Modern mobile apps with elegant UX" },
      { name: "React Native", detail: "Cross-platform interfaces" },
      { name: "Next.js", detail: "Fast and SEO-friendly web products" },
      { name: "TypeScript", detail: "Reliable and scalable development" },
      { name: "PHP/MySQL", detail: "Robust backend systems" },
      { name: "Framer Motion", detail: "High-end motion design" },
    ],
    experience: [
      {
        title: "Internship",
        company: "BlackTech",
        position: "Nvog-Mbi",
        duration: "3 months",
        achievement: "Built an online library called OcAli.",
      },
      {
        title: "Freelance Work",
        company: "DIJITAL",
        position: "TitiGarage",
        duration: "3 months",
        achievement: "Built a mobile application called TerraMark for buying and selling land.",
      },
      {
        title: "Volunteer Projects",
        company: "Community initiatives",
        position: "Builder & contributor",
        duration: "Ongoing",
        achievement: "Supported local digital projects and helped improve accessibility and product quality.",
      },
      {
        title: "Professional Jobs",
        company: "Open to opportunities",
        position: "Software Engineer / Developer",
        duration: "Available",
        achievement: "Interested in building impactful mobile and web applications for teams and startups.",
      },
    ],
    education: [
      {
        degree: "Bachelor Degree",
        institution: "African Institute of Computer Science (AICS)",
        year: "Year 2",
        field: "Software Engineering",
      },
    ],
    certifications: [
      "Flutter Development Certification",
      "Google Developer Certifications",
      "AWS Certifications",
      "Huawei Certification",
      "Cisco Certification",
    ],
    contact: {
      emailLabel: "Email",
      phoneLabel: "Phone",
      location: "Location",
      formName: "Your name",
      formEmail: "Your email",
      formMessage: "Tell me about your idea or project",
      send: "Send message",
      github: "GitHub",
      linkedin: "LinkedIn",
      instagram: "Instagram",
    },
    footer: {
      title: "Nana Kamdom Raoul",
      subtitle: "Software Engineering Student • Mobile & Web Developer",
      backToTop: "Back to top",
      email: "Email",
      contact: "Contact",
      rights: "© 2026 Nana Kamdom Raoul. All rights reserved.",
    },
  },
  fr: {
    nav: { projects: "Projets", experience: "Expérience", education: "Éducation", contact: "Contact" },
    hero: {
      badge: "Étudiant en génie logiciel • Mobile & Web",
      title: "Je suis Nana Kamdom Raoul — je construis des produits numériques pratiques avec un véritable sens.",
      description:
        "Je suis étudiant en génie logiciel passionné par le développement mobile et web. Je me spécialise dans Flutter, PHP, MySQL et les technologies modernes du web, avec pour objectif de créer des applications fiables et faciles à utiliser.",
      ctaPrimary: "Télécharger le CV",
      ctaSecondary: "Construisons ensemble",
      availability: "Disponible pour des projets ambitieux",
      cardA: { title: "Esprit mobile-first", body: "Axé sur des expériences fluides." },
      cardB: { title: "Évolutif par design", body: "Conçu pour grandir avec le produit." },
    },
    stats: [
      { value: "2+", label: "Années de construction de projets concrets" },
      { value: "3", label: "Domaines de projets majeurs explorés" },
      { value: "100%", label: "Focus sur des solutions pratiques et conviviales" },
    ],
    projects: [
      {
        title: "TerraMark",
        type: "Plateforme de vente foncière",
        year: "2025",
        description:
          "Une marketplace mobile pour acheter et vendre des terres, pensée pour une expérience claire et rassurante.",
        tags: ["Flutter", "PHP", "MySQL"],
      },
      {
        title: "Système de vote électronique",
        type: "Vote numérique sécurisé",
        year: "2024",
        description:
          "Une plateforme de vote fiable et accessible, pensée pour une participation moderne et transparente.",
        tags: ["PHP", "MySQL", "Application Web"],
      },
      {
        title: "Plateforme e-commerce",
        type: "Expérience boutique en ligne",
        year: "2023",
        description:
          "Une expérience d’achat scalable orientée découverte produit, checkout fluide et architecture maintenable.",
        tags: ["Next.js", "TypeScript", "MySQL"],
      },
    ],
    sections: {
      projects: {
        eyebrow: "Projets en vedette",
        heading: "Exemples de projets sur lesquels j’ai travaillé.",
        body: "Chaque projet reflète un mélange solide de réflexion produit, d’architecture propre et de livraison pratique.",
      },
      stack: {
        eyebrow: "Stack technique",
        heading: "Une stack pensée pour des produits mobiles et web performants.",
        body: "J’associe des frameworks modernes et des outils backend pour créer des applications rapides, fiables et soignées.",
      },
      experience: {
        eyebrow: "Expérience",
        heading: "Une expérience concrète à travers les stages, le freelance et le travail communautaire.",
      },
      education: {
        eyebrow: "Éducation",
        heading: "Construire une base solide en génie logiciel.",
      },
      certifications: {
        eyebrow: "Certifications",
        heading: "Continuer à progresser grâce aux certifications professionnelles.",
      },
      contact: {
        eyebrow: "Contact",
        heading: "Connectons-nous et construisons un produit significatif.",
        body: "Je suis ouvert aux collaborations, stages, missions freelance et aux opportunités qui valorisent une exécution réfléchie.",
      },
    },
    stack: [
      { name: "Flutter", detail: "Applications mobiles modernes avec une UX élégante" },
      { name: "React Native", detail: "Interfaces cross-platform" },
      { name: "Next.js", detail: "Produits web rapides et SEO-friendly" },
      { name: "TypeScript", detail: "Développement fiable et scalable" },
      { name: "PHP/MySQL", detail: "Systèmes backend robustes" },
      { name: "Framer Motion", detail: "Design de mouvement haut de gamme" },
    ],
    experience: [
      {
        title: "Stage",
        company: "BlackTech",
        position: "Nvog-Mbi",
        duration: "3 mois",
        achievement: "Création d’une bibliothèque en ligne appelée OcAli.",
      },
      {
        title: "Travail freelance",
        company: "DIJITAL",
        position: "TitiGarage",
        duration: "3 mois",
        achievement: "Création d’une application mobile TerraMark pour l’achat et la vente de terres.",
      },
      {
        title: "Projets bénévoles",
        company: "Initiatives communautaires",
        position: "Constructeur & contributeur",
        duration: "En cours",
        achievement: "Soutien à des projets numériques locaux et amélioration de l’accessibilité et de la qualité produit.",
      },
      {
        title: "Postes professionnels",
        company: "Ouvert aux opportunités",
        position: "Ingénieur logiciel / Développeur",
        duration: "Disponible",
        achievement: "Intérêt pour la création d’applications mobiles et web impactantes pour des équipes et startups.",
      },
    ],
    education: [
      {
        degree: "Licence",
        institution: "African Institute of Computer Science (AICS)",
        year: "Année 2",
        field: "Génie logiciel",
      },
    ],
    certifications: [
      "Certification en développement Flutter",
      "Certifications Google Developer",
      "Certifications AWS",
      "Certification Huawei",
      "Certification Cisco",
    ],
    contact: {
      emailLabel: "Courriel",
      phoneLabel: "Téléphone",
      location: "Localisation",
      formName: "Votre nom",
      formEmail: "Votre e-mail",
      formMessage: "Parlez-moi de votre idée ou projet",
      send: "Envoyer",
      github: "GitHub",
      linkedin: "LinkedIn",
      instagram: "Instagram",
    },
    footer: {
      title: "Nana Kamdom Raoul",
      subtitle: "Étudiant en génie logiciel • Développeur mobile & web",
      backToTop: "Retour en haut",
      email: "Courriel",
      contact: "Contact",
      rights: "© 2026 Nana Kamdom Raoul. Tous droits réservés.",
    },
  },
} as const;

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [language, setLanguage] = useState<Language>("en");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    const savedTheme = window.localStorage.getItem("portfolio-theme") as ThemeMode | null;
    const savedLanguage = window.localStorage.getItem("portfolio-language") as Language | null;

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    }

    if (savedLanguage === "en" || savedLanguage === "fr") {
      setLanguage(savedLanguage);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light-theme", theme === "light");
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  const content = contentByLanguage[language];
  const isDark = theme === "dark";
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nana Kamdom Raoul",
    jobTitle: "Software Engineer and Developer",
    url: "https://nkraoul.com",
    sameAs: [
      "https://www.linkedin.com/in/nana-kamdom-raoul",
      "https://github.com/nanakamdomraoulrusselalvares-cmky",
      "https://www.tiktok.com/@nkraoulrussel",
    ],
    description:
      "Software engineering student building modern mobile and web experiences with Flutter, Next.js, PHP, and MySQL.",
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !message) {
      setFormStatus(language === "fr" ? "Veuillez renseigner votre nom et votre message." : "Please enter your name and a message.");
      return;
    }

    const whatsappText = [
      "Hello Nana, I saw your portfolio.",
      `Name: ${name}`,
      email ? `Email: ${email}` : null,
      `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/237675993378?text=${encodeURIComponent(whatsappText)}`;
    const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!newWindow) {
      window.location.href = whatsappUrl;
    }

    setFormData({ name: "", email: "", message: "" });
    setFormStatus(language === "fr" ? "Ouverture de WhatsApp…" : "Opening WhatsApp…");
  };

  const ui = isDark
    ? {
        shell: "bg-[#050816] text-zinc-100",
        panel: "border-white/10 bg-white/5 backdrop-blur",
        panelAlt: "border-white/10 bg-slate-950/70",
        muted: "text-zinc-400",
        subtle: "text-zinc-300",
        heading: "text-white",
        buttonPrimary: "bg-white text-slate-950",
        buttonSecondary: "border-white/15 bg-white/5 text-zinc-200 hover:border-cyan-400/50 hover:text-cyan-200",
        footer: "border-white/10 bg-slate-950/40 text-zinc-400",
        input: "border-white/10 bg-white/5 text-white placeholder:text-zinc-500",
      }
    : {
        shell: "bg-[#f5f7ff] text-slate-900",
        panel: "border-slate-200/80 bg-white/90 shadow-sm backdrop-blur",
        panelAlt: "border-slate-200/80 bg-white/95 shadow-sm",
        muted: "text-slate-600",
        subtle: "text-slate-700",
        heading: "text-slate-900",
        buttonPrimary: "bg-slate-900 text-white",
        buttonSecondary: "border-slate-300 bg-white text-slate-700 hover:border-cyan-500/50 hover:text-cyan-700",
        footer: "border-slate-200 bg-white/80 text-slate-600",
        input: "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400",
      };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    <div className={`relative min-h-screen overflow-x-hidden transition-colors duration-300 ${ui.shell}`}>
      <div className={`pointer-events-none absolute inset-0 -z-10 ${isDark ? "bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.26),_transparent_34%),radial-gradient(circle_at_90%_10%,_rgba(6,182,212,0.24),_transparent_30%)]" : "bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_34%),radial-gradient(circle_at_90%_10%,_rgba(16,185,129,0.16),_transparent_30%)]"}`} />

      <header className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-8 lg:px-12">
        <a href="#hero" className={`text-lg font-semibold uppercase tracking-[0.3em] ${isDark ? "text-zinc-200" : "text-slate-800"}`}>
          NANA KAMDOM RAOUL
        </a>
        <div className="flex flex-wrap items-center gap-3">
          <div className={`flex rounded-full border p-1 ${ui.panel}`}>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-sm font-medium ${language === "en" ? (isDark ? "bg-white text-slate-900" : "bg-slate-900 text-white") : "text-zinc-500"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("fr")}
              className={`rounded-full px-3 py-1 text-sm font-medium ${language === "fr" ? (isDark ? "bg-white text-slate-900" : "bg-slate-900 text-white") : "text-zinc-500"}`}
            >
              FR
            </button>
          </div>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`rounded-full border px-3 py-2 text-sm ${ui.panel}`}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
        <nav className={`hidden items-center gap-6 text-sm md:flex ${ui.muted}`}>
          <a href="#projects" className={`transition ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}>
            {content.nav.projects}
          </a>
          <a href="#experience" className={`transition ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}>
            {content.nav.experience}
          </a>
          <a href="#education" className={`transition ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}>
            {content.nav.education}
          </a>
          <a href="#contact" className={`transition ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}>
            {content.nav.contact}
          </a>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <section id="hero" className="grid gap-10 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className={`mb-4 inline-flex rounded-full border px-3 py-1 text-sm backdrop-blur ${ui.panel}`}>
              {content.hero.badge}
            </p>
            <h1 className={`text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl ${ui.heading}`}>
              {content.hero.title}
            </h1>
            <p className={`mt-6 text-lg leading-8 sm:text-xl ${ui.muted}`}>
              {content.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/Nana_Kamdom_Raoul_CV.pdf"
                download
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-[1.01] ${ui.buttonPrimary}`}
              >
                {content.hero.ctaPrimary}
              </a>
              <a
                href="#contact"
                className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold backdrop-blur transition ${ui.buttonSecondary}`}
              >
                {content.hero.ctaSecondary}
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {content.stats.map((item) => (
                <div key={item.label} className={`rounded-2xl border p-4 backdrop-blur ${ui.panel}`}>
                  <p className={`text-xl font-semibold ${ui.heading}`}>{item.value}</p>
                  <p className={`mt-1 text-sm ${ui.muted}`}>{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 -translate-y-6 rounded-[2rem] bg-gradient-to-br from-fuchsia-500/30 via-cyan-400/20 to-transparent blur-3xl" />
            <div className="relative p-0 shadow-none">
              <div className={`mb-4 flex items-center justify-between rounded-full border px-4 py-2 text-sm backdrop-blur ${ui.panel}`}>
                <span>{content.hero.availability}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-transparent">
                <div className="absolute inset-[-10px] -z-10 rounded-[2.3rem] bg-[radial-gradient(circle,_rgba(34,211,238,0.35),_transparent_70%)] blur-3xl" />
                <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_65%)] opacity-80" />
                <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_rgba(5,8,22,0.2),_rgba(5,8,22,0.7)_60%,_rgba(5,8,22,0.95)_100%)]" />
                <Image
                  src="/1.png"
                  alt="Nana Kamdom Raoul portrait"
                  fill
                  priority
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-sm text-cyan-100">
                  <p className="font-semibold">{content.hero.cardA.title}</p>
                  <p className="mt-1 text-cyan-200/80">{content.hero.cardA.body}</p>
                </div>
                <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/10 p-3 text-sm text-fuchsia-100">
                  <p className="font-semibold">{content.hero.cardB.title}</p>
                  <p className="mt-1 text-fuchsia-200/80">{content.hero.cardB.body}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className={`text-sm uppercase tracking-[0.3em] ${ui.muted}`}>{content.sections.projects.eyebrow}</p>
              <h2 className={`mt-2 text-3xl font-semibold sm:text-4xl ${ui.heading}`}>
                {content.sections.projects.heading}
              </h2>
            </div>
            <p className={`max-w-2xl ${ui.muted}`}>{content.sections.projects.body}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {content.projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group rounded-[1.75rem] border p-6 backdrop-blur transition hover:-translate-y-1 ${ui.panel} ${isDark ? "hover:border-cyan-400/40" : "hover:border-cyan-500/40"}`}
              >
                <div className={`mb-6 flex items-center justify-between text-sm ${ui.muted}`}>
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className={`text-2xl font-semibold ${ui.heading}`}>{project.title}</h3>
                <p className={`mt-4 text-sm leading-7 ${ui.muted}`}>{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`rounded-full border px-3 py-1 text-xs ${ui.panelAlt} ${ui.subtle}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <section id="stack" className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className={`rounded-[1.75rem] border p-8 ${ui.panel}`}
          >
            <p className={`text-sm uppercase tracking-[0.3em] ${ui.muted}`}>{content.sections.stack.eyebrow}</p>
            <h2 className={`mt-3 text-3xl font-semibold sm:text-4xl ${ui.heading}`}>
              {content.sections.stack.heading}
            </h2>
            <p className={`mt-4 ${ui.muted}`}>{content.sections.stack.body}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {content.stack.map((tool) => (
              <div key={tool.name} className={`rounded-[1.5rem] border p-5 ${ui.panelAlt}`}>
                <p className={`text-lg font-semibold ${ui.heading}`}>{tool.name}</p>
                <p className={`mt-2 text-sm ${ui.muted}`}>{tool.detail}</p>
              </div>
            ))}
          </motion.div>
        </section>

        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className={`rounded-[2rem] border p-8 sm:p-10 ${ui.panel}`}
        >
          <div className="mb-8">
            <p className={`text-sm uppercase tracking-[0.3em] ${ui.muted}`}>{content.sections.experience.eyebrow}</p>
            <h2 className={`mt-3 text-3xl font-semibold sm:text-4xl ${ui.heading}`}>
              {content.sections.experience.heading}
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {content.experience.map((item) => (
              <div key={item.title} className={`rounded-[1.5rem] border p-5 ${ui.panelAlt}`}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-lg font-semibold ${ui.heading}`}>{item.title}</h3>
                  <span className={`rounded-full border px-3 py-1 text-xs ${isDark ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-100" : "border-cyan-500/20 bg-cyan-500/10 text-cyan-700"}`}>
                    {item.duration}
                  </span>
                </div>
                <p className={`mt-3 text-sm ${ui.muted}`}>Company: {item.company}</p>
                <p className={`mt-1 text-sm ${ui.muted}`}>Position: {item.position}</p>
                <p className={`mt-4 text-sm leading-7 ${ui.subtle}`}>{item.achievement}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="education"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className={`rounded-[2rem] border p-8 ${ui.panel}`}>
            <p className={`text-sm uppercase tracking-[0.3em] ${ui.muted}`}>{content.sections.education.eyebrow}</p>
            <h2 className={`mt-3 text-3xl font-semibold sm:text-4xl ${ui.heading}`}>
              {content.sections.education.heading}
            </h2>
          </div>
          <div className="space-y-4">
            {content.education.map((item) => (
              <div key={item.degree} className={`rounded-[1.5rem] border p-6 ${ui.panelAlt}`}>
                <p className={`text-xl font-semibold ${ui.heading}`}>{item.degree}</p>
                <p className={`mt-3 text-sm ${ui.muted}`}>Institution: {item.institution}</p>
                <p className={`mt-1 text-sm ${ui.muted}`}>Year: {item.year}</p>
                <p className={`mt-1 text-sm ${ui.muted}`}>Field: {item.field}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className={`rounded-[2rem] border p-8 sm:p-10 ${isDark ? "border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10" : "border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10"}`}
        >
          <div className="mb-8">
            <p className={`text-sm uppercase tracking-[0.3em] ${ui.muted}`}>{content.sections.certifications.eyebrow}</p>
            <h2 className={`mt-3 text-3xl font-semibold sm:text-4xl ${ui.heading}`}>
              {content.sections.certifications.heading}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.certifications.map((item) => (
              <div key={item} className={`rounded-[1.25rem] border p-4 text-sm ${ui.panelAlt} ${ui.subtle}`}>
                {item}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className={`rounded-[2rem] border p-8 sm:p-10 ${isDark ? "border-cyan-400/20 bg-cyan-400/10" : "border-cyan-500/20 bg-cyan-500/10"}`}
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className={`text-sm uppercase tracking-[0.3em] ${isDark ? "text-cyan-100/80" : "text-cyan-700"}`}>{content.sections.contact.eyebrow}</p>
              <h2 className={`mt-3 text-3xl font-semibold sm:text-4xl ${ui.heading}`}>
                {content.sections.contact.heading}
              </h2>
              <p className={`mt-4 max-w-2xl ${isDark ? "text-zinc-300" : "text-slate-700"}`}>
                {content.sections.contact.body}
              </p>
              <div className="mt-6 space-y-3">
                <a href="mailto:nanakamdomraoulrusselalvares@gmail.com" className={`block text-sm ${ui.heading}`}>
                  {content.contact.emailLabel}: nanakamdomraoulrusselalvares@gmail.com
                </a>
                <a href="tel:+237675993378" className={`block text-sm ${ui.heading}`}>
                  {content.contact.phoneLabel}: +237 675-99-33-78
                </a>
                <p className={`text-sm ${ui.heading}`}>{content.contact.location}: Ngousso</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className={`text-sm underline-offset-4 hover:underline ${isDark ? "text-cyan-100" : "text-cyan-700"}`}>
                  {content.contact.github}
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className={`text-sm underline-offset-4 hover:underline ${isDark ? "text-cyan-100" : "text-cyan-700"}`}>
                  {content.contact.linkedin}
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className={`text-sm underline-offset-4 hover:underline ${isDark ? "text-cyan-100" : "text-cyan-700"}`}>
                  {content.contact.instagram}
                </a>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className={`rounded-[1.5rem] border p-6 ${ui.panelAlt}`}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                  placeholder={content.contact.formName}
                  className={`rounded-2xl border px-4 py-3 text-sm outline-none ${ui.input}`}
                  required
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                  placeholder={content.contact.formEmail}
                  className={`rounded-2xl border px-4 py-3 text-sm outline-none ${ui.input}`}
                />
              </div>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                placeholder={content.contact.formMessage}
                className={`mt-4 w-full rounded-2xl border px-4 py-3 text-sm outline-none ${ui.input}`}
                required
              />
              {formStatus ? <p className={`mt-3 text-sm ${isDark ? "text-cyan-100" : "text-cyan-700"}`}>{formStatus}</p> : null}
              <button
                type="submit"
                className={`mt-4 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-[1.01] ${ui.buttonPrimary}`}
              >
                {content.contact.send}
              </button>
            </form>
          </div>
        </motion.section>
      </main>

      <footer className={`border-t px-6 py-8 text-sm sm:px-8 lg:px-12 ${ui.footer}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className={`text-base font-semibold ${ui.heading}`}>{content.footer.title}</p>
            <p className="mt-1">{content.footer.subtitle}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#hero" className={`transition ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}>
              {content.footer.backToTop}
            </a>
            <a href="mailto:nanakamdomraoulrusselalvares@gmail.com" className={`transition ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}>
              {content.footer.email}
            </a>
            <a href="#contact" className={`transition ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}>
              {content.footer.contact}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-7xl flex-wrap items-center gap-3">
          {socialLinks.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.06, rotate: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              aria-label={item.name}
              className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/10 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:scale-105 ${item.bgClass}`}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        <div className={`mx-auto mt-5 max-w-7xl border-t pt-4 text-center text-xs uppercase tracking-[0.25em] md:text-left ${isDark ? "border-white/10 text-zinc-500" : "border-slate-200 text-slate-500"}`}>
          {content.footer.rights}
        </div>
      </footer>

      <motion.button
        type="button"
        aria-label="Scroll to top"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 24, scale: 0.95 }}
        animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 24, scale: showScrollTop ? 1 : 0.95 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border shadow-[0_0_30px_rgba(34,211,238,0.25)] backdrop-blur ${isDark ? "border-cyan-400/30 bg-slate-950/80 text-cyan-200 hover:border-cyan-300 hover:text-white" : "border-cyan-500/30 bg-white/90 text-cyan-700 hover:border-cyan-400 hover:text-cyan-600"}`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </motion.button>
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    </>
  );
}
