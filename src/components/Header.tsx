import NavItem from "@/components/NavItem";

export default function Header() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/more", label: "More" },
  ];

  return (
    <header className="bg-zinc-50 shadow-md shadow-gray-100 backdrop-blur-xl sticky top-0 z-10 w-full h-18 opacity-95">
      <nav className="w-full h-full flex flex-row justify-center gap-5 p-4 items-center">
        {links.map((link) => (
          <NavItem key={link.href} link={link} />
        ))}
      </nav>
    </header>
  );
}
