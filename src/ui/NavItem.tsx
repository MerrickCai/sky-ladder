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
    "flex flex-row gap-1.5 md:gap-2 justify-center items-center text-sm md:text-lg hover:text-blue-500 p-0.5 md:p-2 rounded-lg transition-all duration-500 w-auto";

  const Icon = navIcons.get(link.icon) as React.ElementType;

  return (
    <Link
      href={link.href}
      className={`${
        isActive ? "text-blue-500 dark:text-blue-500" : "text-gray-500 dark:text-gray-200"
      } ${commonClassName}`}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon
        className={`w-4 h-4 md:w-5 md:h-5 hover:text-blue-500 ${isActive ? "text-blue-500" : ""}`}
      />
      {link.label}
    </Link>
  );
}
