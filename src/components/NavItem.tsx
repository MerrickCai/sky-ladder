"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({
  link,
}: {
  link: { href: string; label: string };
}) {
  const pathname = usePathname();

  const isActive = pathname === link.href;

  const commonClassName =
    "text-lg hover:text-blue-500 p-2 rounded-lg transition-all duration-500 w-20";

  return (
    <Link
      href={link.href}
      className={`${
        isActive ? "text-blue-500" : "text-gray-500"
      } ${commonClassName}`}
    >
      {link.label}
    </Link>
  );
}
