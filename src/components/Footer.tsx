import { Github, Linkedin, Mail } from "lucide-react";
import { navItems, profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 py-12" aria-label="Site footer">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-serif text-lg font-semibold text-white">
              {profile.name}
            </p>
            <p className="mt-1 text-sm text-primary-200">
              {profile.title}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-200 transition-colors hover:text-accent-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-200 transition-colors hover:text-accent-300"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-200 transition-colors hover:text-accent-300"
              aria-label="GitHub profile (opens in new tab)"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-primary-200 transition-colors hover:text-accent-300"
              aria-label={`Send email to ${profile.email}`}
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-primary-300">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
