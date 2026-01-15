import Link from "next/link";

type SiteFooterProps = {
  labels: {
    tagline: string;
    nav: {
      contact: string;
      instagram: string;
      tiktok: string;
    };
  };
};

export default function SiteFooter({ labels }: SiteFooterProps) {
  return (
    <footer className="w-full">
      <div className="mx-auto w-full max-w-6xl px-6 pb-10 pt-6">
        <div className="flex flex-col gap-6 border-t border-[color:var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-display text-lg tracking-[0.2em] text-[color:var(--foreground)]">
              Rauz
            </span>
            <span className="text-sm text-[color:var(--muted)]">
              {labels.tagline}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
