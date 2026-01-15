import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Rauz",
  description: "Get in touch with Rauz about film cover scoring and sessions.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto w-full max-w-6xl px-6 pb-8 pt-8">
        <div className="flex flex-col gap-4">
          <Link className="nav-link text-sm font-semibold" href="/">
            Back to home
          </Link>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
            Contact
          </p>
          <h1 className="font-display text-4xl text-[color:var(--foreground)] md:text-5xl">
            Let's build the next cinematic cover
          </h1>
          <p className="max-w-2xl text-lg leading-7 text-[color:var(--muted)]">
            Share your project goals, timeline, and sonic references. This draft
            form is ready to connect to your preferred contact service.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="glass-card flex flex-col gap-6 p-6 md:p-8" method="post">
            <div className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--foreground)]">
              Name
              <input
                className="form-field"
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--foreground)]">
              Email
              <input
                className="form-field"
                type="email"
                name="email"
                placeholder="you@email.com"
                autoComplete="email"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--foreground)]">
              Project focus
              <select className="form-field" name="project">
                <option value="cover-score">Cover score arrangement</option>
                <option value="bass-session">Bass session</option>
                <option value="synth-bass">Synth bass design</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--foreground)]">
              Message
              <textarea
                className="form-field min-h-[160px]"
                name="message"
                placeholder="Tell me about the film, scene, or release."
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[color:var(--muted)]">
                Connect this form to Formspree, Netlify, or your own endpoint.
              </p>
              <button className="btn" type="submit">
                Send message
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-6">
            <div className="glass-card flex flex-col gap-3 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                What helps
              </p>
              <h2 className="font-display text-2xl text-[color:var(--foreground)]">
                Share references
              </h2>
              <p className="text-sm leading-6 text-[color:var(--muted)]">
                Include a link to the original theme, the desired tone, and the
                delivery deadline.
              </p>
            </div>

            <div className="glass-card flex flex-col gap-4 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Socials
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
