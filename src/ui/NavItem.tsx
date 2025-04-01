"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navIcons } from "@/config/navLinks";

type NavItemProps = {
  href: string;
  label: string;
  icon: string;
};

export default function NavItem({ link }: { link: NavItemProps }) {
  const pathname = usePathname();

  // Use startsWith() if you want to highlight parent routes as well
  // const isActive = pathname.startsWith(link.href);
  const isActive = pathname === link.href;

  const commonClassName =
    "flex flex-row gap-2 justify-center items-center text-lg hover:text-blue-500 p-2 rounded-lg transition-all duration-500 w-auto";

  const Icon = navIcons.get(link.icon) as React.ElementType;

  return (
    <Link
      href={link.href}
      className={`${
        isActive ? "text-blue-500 dark:text-blue-500" : "text-gray-500 dark:text-gray-200"
      } ${commonClassName}`}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon className={`w-5 h-5 hover:text-blue-500 ${isActive ? "text-blue-500" : ""}`} />
      {link.label}
    </Link>
  );
}
