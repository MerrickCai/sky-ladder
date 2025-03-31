"use client";

import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "system";
    setTheme(storedTheme);
  }, []);

  function applyTheme(theme: string) {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = theme === "dark" || ((theme === "system" || theme === null) && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
  }

  return (
    <div className="flex flex-row rounded overflow-hidden border border-gray-300 dark:border-gray-600">
      <button
        onClick={() => {
          applyTheme("light");
        }}
        className={`cursor-pointer px-2 py-1 text-sm transition-colors rounded ${
          theme === "light"
            ? "bg-gray-900 text-white dark:bg-white dark:text-black"
            : "bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        } `}
      >
        🌞Light
      </button>
      <button
        onClick={() => {
          applyTheme("dark");
        }}
        className={`cursor-pointer px-2 py-1 text-sm transition-colors rounded ${
          theme === "dark"
            ? "bg-gray-900 text-white dark:bg-white dark:text-black"
            : "bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        } `}
      >
        🌙Dark
      </button>
      <button
        onClick={() => {
          applyTheme("system");
        }}
        className={`cursor-pointer px-2 py-1 text-sm transition-colors rounded ${
          theme === "system"
            ? "bg-gray-900 text-white dark:bg-white dark:text-black"
            : "bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        } `}
      >
        🖥️System
      </button>
    </div>
  );
}
