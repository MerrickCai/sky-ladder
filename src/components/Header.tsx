import NavItem from "@/ui/NavItem";
import { navLinks } from "@/config/navLinks";

export default async function Header() {
  return (
    <header className="bg-zinc-50/70 dark:bg-black/70 shadow-none shadow-gray-100 dark:shadow-none backdrop-blur-sm sticky top-0 z-10 w-full h-18">
      <nav className="w-full h-full flex flex-row justify-center gap-5 p-2 items-center">
        {navLinks.map((link) => (
          <NavItem key={link.href} link={link} />
        ))}
      </nav>
    </header>
  );
}
