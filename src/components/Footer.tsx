
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">&copy; {currentYear} Ipsit Mallik. All rights reserved.</p>
        <div className="flex items-center gap-1">
          <span className="text-sm text-muted-foreground mr-3">Connect with me:</span>
          <a href="https://www.linkedin.com/in/ipsit-mallik-b46390219" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-primary/10 hover:text-primary border border-border hover:border-primary/20 transition-all duration-200">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://github.com/ipsit-mallik" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-primary/10 hover:text-primary border border-border hover:border-primary/20 transition-all duration-200">
              <Github className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
