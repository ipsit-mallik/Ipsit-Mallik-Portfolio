
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">&copy; {currentYear} Ipsit Mallik. All rights reserved.</p>
        <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/ipsit-mallik-b46390219" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                    <Linkedin className="h-4 w-4" />
                </Button>
            </a>
            <a href="https://github.com/ipsitmallik" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                    <Github className="h-4 w-4" />
                </Button>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
