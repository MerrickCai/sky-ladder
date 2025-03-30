import NavItem from "@/ui/NavItem";
import { navLinks } from "@/config/navLinks";

export default async function Header() {
  return (
    <header className="bg-zinc-50 shadow-md shadow-gray-100 backdrop-blur-xl sticky top-0 z-10 w-full h-18 opacity-95">
      <nav className="w-full h-full flex flex-row justify-center gap-5 p-2 items-center">
        {navLinks.map((link) => (
          <NavItem key={link.href} link={link} />
        ))}
      </nav>
    </header>
  );
}
