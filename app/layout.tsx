import "../src/style.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Osama Abu Motlaq — Full Stack Developer",
  description:
    "Portfolio of Osama Abu Motlaq — Full Stack Developer specializing in React, Next.js, and modern web experiences.",
  openGraph: {
    title: "Osama Abu Motlaq — Full Stack Developer",
    description:
      "Crafting fast, elegant, production-ready web experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/osama.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect and Google Fonts to restore exact original typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
