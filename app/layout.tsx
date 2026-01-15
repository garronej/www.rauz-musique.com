import type { Metadata } from "next";
import { Cinzel, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { getDictionary, getLocale } from "./lib/i18n";

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
  } catch {}
})();
`;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const metadataBase = siteUrl.startsWith("http")
  ? siteUrl
  : `https://${siteUrl}`;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { metadata, home } = getDictionary(locale);
  const ogLocale = locale === "fr" ? "fr_FR" : "en_US";

  return {
    metadataBase: new URL(metadataBase),
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: "/",
      siteName: "Rauz",
      locale: ogLocale,
      alternateLocale: [locale === "fr" ? "en_US" : "fr_FR"],
      images: [
        {
          url: "/rauz.png",
          alt: home.imageAlt,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: ["/rauz.png"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const { header, footer } = getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <div className="page-shell">
          <div className="page-content">
            <SiteHeader locale={locale} labels={header} />
            {children}
            <SiteFooter labels={footer} />
          </div>
        </div>
      </body>
    </html>
  );
}
