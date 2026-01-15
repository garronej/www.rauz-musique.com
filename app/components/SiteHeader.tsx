import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-display text-2xl tracking-[0.12em] text-[color:var(--foreground)]">
            Rauz
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.35em] text-[color:var(--muted)] sm:inline">
            Composer
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold">
          <Link className="nav-link" href="/#media">
            Media
          </Link>
          <Link className="nav-link" href="/contact">
            Contact
          </Link>
          <a
            className="nav-link"
            href="https://www.instagram.com/rauz.mazz/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="nav-link"
            href="https://www.tiktok.com/@rauzmusique"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
