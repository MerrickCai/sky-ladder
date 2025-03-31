"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "system";

const modes: { value: ThemeMode; label: string }[] = [
  { value: "light", label: "🌞 Light" },
  { value: "dark", label: "🌙 Dark" },
  { value: "system", label: "🖥️ System" },
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeMode>("system");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as ThemeMode | null;
    setTheme(saved ?? "system");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const apply = (mode: ThemeMode) => {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const shouldDark = mode === "dark" || (mode === "system" && prefersDark);
      root.classList.toggle("dark", shouldDark);
    };
    apply(theme);
  }, [theme]);

  const handleSelect = (mode: ThemeMode) => {
    setTheme(mode);
    localStorage.setItem("theme", mode);
  };

  return (
    <div className="inline-flex rounded overflow-hidden border border-gray-300 dark:border-gray-600">
      {modes.map((m) => (
        <button
          key={m.value}
          onClick={() => handleSelect(m.value)}
          className={`px-3 py-1 text-sm transition-colors
            ${
              theme === m.value
                ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                : "bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}
