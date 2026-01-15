import Link from "next/link";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

type Locale = "en" | "fr";

type SiteHeaderProps = {
  locale: Locale;
  labels: {
    composer: string;
    nav: {
      media: string;
      contact: string;
      instagram: string;
      tiktok: string;
    };
    theme: {
      label: string;
      light: string;
      dark: string;
    };
    language: {
      label: string;
      english: string;
      french: string;
    };
  };
};

export default function SiteHeader({ locale, labels }: SiteHeaderProps) {
  return (
    <header className="w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-display text-2xl tracking-[0.12em] text-[color:var(--foreground)]">
            Rauz
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.35em] text-[color:var(--muted)] sm:inline">
            {labels.composer}
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold">
          <Link className="nav-link" href="/#media">
            {labels.nav.media}
          </Link>
          <Link className="nav-link" href="/contact">
            {labels.nav.contact}
          </Link>
          <a
            className="nav-link"
            href="https://www.instagram.com/rauz.mazz/"
            target="_blank"
            rel="noreferrer"
          >
            {labels.nav.instagram}
          </a>
          <a
            className="nav-link"
            href="https://www.tiktok.com/@rauzmusique"
            target="_blank"
            rel="noreferrer"
          >
            {labels.nav.tiktok}
          </a>
          <LanguageToggle
            locale={locale}
            label={labels.language.label}
            englishLabel={labels.language.english}
            frenchLabel={labels.language.french}
          />
          <ThemeToggle
            label={labels.theme.label}
            lightLabel={labels.theme.light}
            darkLabel={labels.theme.dark}
          />
        </nav>
      </div>
    </header>
  );
}
