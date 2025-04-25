'use client';
import { FadeIn } from "./ui/motion";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-secondary/30">
      <div className="container-custom">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Bashar Khan. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/Basharkhan7776" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/bashar-khan-ba2564291/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href="https://twitter.com/_Bashar_khan_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon size={18} />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
