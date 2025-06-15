
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#home" className="text-xl font-bold text-primary">Ipsit Mallik</a>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact">
          <Button>Contact Me</Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
