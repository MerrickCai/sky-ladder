"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-4 p-4 items-center">
      <Link
        href="/"
        className={
          pathname === "/" ? "font-bold text-blue-500" : "text-gray-500"
        }
      >
        Home
      </Link>
      <Link
        href="/about"
        className={
          pathname === "/about" ? "font-bold text-blue-500" : "text-gray-500"
        }
      >
        About
      </Link>
    </nav>
  );
}
