"use client";

import { useRouter } from "next/navigation";

type Locale = "en" | "fr";

type LanguageToggleProps = {
  locale: Locale;
  label: string;
  englishLabel: string;
  frenchLabel: string;
};

const LOCALE_COOKIE = "rauz-locale";

export default function LanguageToggle({
  locale,
  label,
  englishLabel,
  frenchLabel,
}: LanguageToggleProps) {
  const router = useRouter();

  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return;
    }

    try {
      document.cookie = `${LOCALE_COOKIE}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    } catch {}
    document.documentElement.lang = nextLocale;
    router.refresh();
  };

  return (
    <div className="language-toggle" role="group" aria-label={label}>
      <button
        type="button"
        className={`language-option ${locale === "en" ? "is-active" : ""}`}
        aria-pressed={locale === "en"}
        aria-label={englishLabel}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <button
        type="button"
        className={`language-option ${locale === "fr" ? "is-active" : ""}`}
        aria-pressed={locale === "fr"}
        aria-label={frenchLabel}
        onClick={() => setLocale("fr")}
      >
        FR
      </button>
    </div>
  );
}
