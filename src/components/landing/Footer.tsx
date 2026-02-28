import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { SkillMatchLogo } from "@/components/SkillMatchLogo";

const footerLinks = {
  Product: ["Features", "Pricing", "Demo", "Changelog"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Documentation", "Help Center", "API", "Status"],
  Legal: ["Privacy", "Terms", "Cookie Policy"],
};

export function Footer() {
  return (
    <footer className="bg-accent border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <SkillMatchLogo size="md" />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs leading-relaxed">
              AI-powered skill matching platform connecting talent with the right opportunities.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-lg bg-card border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground text-muted-foreground transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 SkillMatch AI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ for skill-based hiring
          </p>
        </div>
      </div>
    </footer>
  );
}
