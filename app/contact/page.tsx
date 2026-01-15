import Link from "next/link";
import { getDictionary, getLocale } from "../lib/i18n";

export async function generateMetadata() {
  const locale = await getLocale();
  const { contact } = getDictionary(locale);

  return {
    title: contact.metadataTitle,
    description: contact.metadataDescription,
  };
}

export default async function ContactPage() {
  const locale = await getLocale();
  const { contact } = getDictionary(locale);

  return (
    <main>
      <section className="mx-auto w-full max-w-6xl px-6 pb-8 pt-8">
        <div className="flex flex-col gap-4">
          <Link className="nav-link text-sm font-semibold" href="/">
            {contact.backLink}
          </Link>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
            {contact.label}
          </p>
          <h1 className="font-display text-4xl text-[color:var(--foreground)] md:text-5xl">
            {contact.title}
          </h1>
          <p className="max-w-2xl text-lg leading-7 text-[color:var(--muted)]">
            {contact.description}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="glass-card flex flex-col gap-6 p-6 md:p-8" method="post">
            <div className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--foreground)]">
              {contact.form.nameLabel}
              <input
                className="form-field"
                type="text"
                name="name"
                placeholder={contact.form.namePlaceholder}
                autoComplete="name"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--foreground)]">
              {contact.form.emailLabel}
              <input
                className="form-field"
                type="email"
                name="email"
                placeholder={contact.form.emailPlaceholder}
                autoComplete="email"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--foreground)]">
              {contact.form.projectLabel}
              <select className="form-field" name="project">
                <option value="cover-score">{contact.form.projectOptions.cover}</option>
                <option value="bass-session">{contact.form.projectOptions.bass}</option>
                <option value="synth-bass">{contact.form.projectOptions.synth}</option>
                <option value="collaboration">
                  {contact.form.projectOptions.collaboration}
                </option>
                <option value="other">{contact.form.projectOptions.other}</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--foreground)]">
              {contact.form.messageLabel}
              <textarea
                className="form-field min-h-[160px]"
                name="message"
                placeholder={contact.form.messagePlaceholder}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[color:var(--muted)]">
                {contact.form.helper}
              </p>
              <button className="btn" type="submit">
                {contact.form.submit}
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-6">
            <div className="glass-card flex flex-col gap-3 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                {contact.helpLabel}
              </p>
              <h2 className="font-display text-2xl text-[color:var(--foreground)]">
                {contact.helpTitle}
              </h2>
              <p className="text-sm leading-6 text-[color:var(--muted)]">
                {contact.helpDescription}
              </p>
            </div>

            <div className="glass-card flex flex-col gap-4 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                {contact.socialsLabel}
              </p>
              <div className="flex flex-col gap-3">
                <a
                  className="link-row"
                  href="https://www.instagram.com/rauz.mazz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Instagram</span>
                  <span className="text-[color:var(--muted)]">@rauz.mazz</span>
                </a>
                <a
                  className="link-row"
                  href="https://www.tiktok.com/@rauzmusique"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>TikTok</span>
                  <span className="text-[color:var(--muted)]">@rauzmusique</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
