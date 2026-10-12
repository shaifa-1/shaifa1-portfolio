"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-md border border-stone-300 px-2.5 py-1.5 font-mono text-xs text-stone-700 transition hover:border-amber-600 hover:text-amber-700 dark:border-stone-700 dark:text-stone-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
    >
      {dark ? "light" : "dark"}
    </button>
  );
}
