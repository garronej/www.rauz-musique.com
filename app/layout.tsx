import type { Metadata } from "next";
import { Cinzel, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const displayFont = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const themeScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem("rauz-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const theme = storedTheme || systemTheme;
    document.documentElement.dataset.theme = theme;
  } catch (error) {}
})();
`;

export const metadata: Metadata = {
  title: "Rauz | Composer, Bassist, Synth Bass, Guitarist",
  description:
    "Rauz is a composer of cover music for feature films. Explore featured media, socials, and connect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <div className="page-shell">
          <div className="page-content">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
