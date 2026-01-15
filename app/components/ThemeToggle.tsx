"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_KEY = "rauz-theme";

const getPreferredTheme = (): Theme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    try {
      const storedTheme = window.localStorage.getItem(THEME_KEY) as Theme | null;
      const initialTheme = storedTheme ?? getPreferredTheme();
      setTheme(initialTheme);
      document.documentElement.dataset.theme = initialTheme;
    } catch {
      document.documentElement.dataset.theme = "light";
    }
  }, []);

  const handleToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem(THEME_KEY, nextTheme);
    } catch {}
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={handleToggle}
      aria-pressed={theme === "dark"}
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "dark" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.75A9.75 9.75 0 1 1 11.25 3a7.5 7.5 0 1 0 9.75 9.75Z"
          />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1.5m0 15V21m8.485-8.485H21M3 12h1.5m12.02 6.52 1.06 1.06M4.42 4.42l1.06 1.06m0 12.04-1.06 1.06m12.04-12.04 1.06-1.06M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"
          />
        </svg>
      )}
      <span className="hidden text-[10px] font-semibold uppercase tracking-[0.3em] sm:inline">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
