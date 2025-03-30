"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

export default function NavItem({ link }: { link: NavItemProps }) {
  const pathname = usePathname();

  // Use startsWith() if you want to highlight parent routes as well
  // const isActive = pathname.startsWith(link.href);
  const isActive = pathname === link.href;

  const commonClassName =
    "text-lg hover:text-blue-500 p-2 rounded-lg transition-all duration-500 w-20";

  return (
    <Link
      href={link.href}
      className={`${
        isActive ? "text-blue-500" : "text-gray-500"
      } ${commonClassName}`}
      aria-current={isActive ? "page" : undefined}
    >
      {link.icon}
      {link.label}
    </Link>
  );
}
