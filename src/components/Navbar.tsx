import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "../data/portfolio";
import { useScrolled } from "../hooks/useScrolled";

export default function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-transparent"}`}>
      <nav className="section-container flex h-16 items-center justify-between" aria-label="Primary navigation">
        <a
          href="#home"
          className={`font-serif text-lg font-semibold transition-colors ${scrolled ? "text-primary-800" : "text-white"}`}
          onClick={handleNavClick}
        >
          {profile.name}
        </a>

        {/* Desktop nav */}
        <ul className={`hidden items-center gap-0.5 lg:flex ${scrolled ? "text-neutral-700" : "text-white/90"}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="btn-ghost"
                style={scrolled ? undefined : { color: "rgba(255,255,255,0.9)" }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.cvUrl} className="btn-primary ml-2" download aria-label="Download CV (PDF)">
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors lg:hidden ${scrolled ? "text-primary-800 hover:bg-neutral-100" : "text-white hover:bg-white/10"}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-neutral-200 bg-white shadow-lg lg:hidden">
          <ul className="section-container flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary-800"
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a href={profile.cvUrl} className="btn-primary w-full" download onClick={handleNavClick}>
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
