
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#home" className="text-xl font-bold text-primary">Ipsit Mallik</a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6">
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

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-4 border-b">
                <a href="#home" className="text-xl font-bold text-primary" onClick={closeMobileMenu}>Ipsit Mallik</a>
              </div>
              <nav className="grid gap-6 text-lg font-medium p-4 mt-4">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-primary" onClick={closeMobileMenu}>
                    {link.label}
                  </a>
                ))}
                <a href="#contact" onClick={closeMobileMenu} className="mt-4">
                  <Button className="w-full">Contact Me</Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
