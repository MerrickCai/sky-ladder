"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = theme === "dark" || (!theme && prefersDark);
    setIsDark(enabled);
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const newDark = !isDark;
    if (newDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setIsDark(newDark);
  };

  return (
    <button onClick={toggle} className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded">
      {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
