"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const isSelected = (path: string) => {
    return pathname === path ? "text-blue-500" : "text-gray-500";
  };
  const commonClasses =
    "text-lg hover:text-blue-500 p-2 rounded-lg transition-all duration-500 w-20";

  return (
    <header className="bg-zinc-50 shadow-md shadow-gray-100 backdrop-blur-xl sticky top-0 z-10 w-full h-18 opacity-95">
      <nav className="w-full h-full flex flex-row justify-center gap-5 p-4 items-center">
        <Link href="/" className={`${isSelected("/")} ${commonClasses}`}>
          Home
        </Link>
        <Link
          href="/about"
          className={`${isSelected("/about")} ${commonClasses}`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`${isSelected("/contact")} ${commonClasses}`}
        >
          Contact
        </Link>
        <Link
          href="/services"
          className={`${isSelected("/services")} ${commonClasses}`}
        >
          More
        </Link>
      </nav>
    </header>
  );
}
