"use client";

import { useState, useEffect, useCallback } from "react";

const commonClassNames = "cursor-pointer px-2 py-1 text-sm transition-colors rounded";
const activeClassNames = "bg-gray-900 text-white dark:bg-white dark:text-black";
const notActiveClassNames =
  "bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "system";
    setTheme(storedTheme);
  }, []);

  function applyTheme(theme: string) {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    themeScript();
  }

  const removeTheme = useCallback(() => {
    setTheme("system");
    localStorage.removeItem("theme");
    document.documentElement.classList.remove("dark");
  }, []);

  const themeScript = useCallback(() => {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = theme === "dark" || (theme === null && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  return (
    <div className="flex flex-row rounded overflow-hidden border border-gray-300 dark:border-gray-600">
      <button
        onClick={() => {
          applyTheme("light");
        }}
        className={`${commonClassNames} ${
          theme === "light" ? activeClassNames : notActiveClassNames
        } `}
      >
        🌞
      </button>
      <button
        onClick={() => {
          applyTheme("dark");
        }}
        className={`${commonClassNames} ${
          theme === "dark" ? activeClassNames : notActiveClassNames
        } `}
      >
        🌙
      </button>
      <button
        onClick={removeTheme}
        className={`${commonClassNames} ${
          theme === "system" ? activeClassNames : notActiveClassNames
        } `}
      >
        🖥️
      </button>
    </div>
  );
}
