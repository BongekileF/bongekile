import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary-900"
      aria-label="Introduction"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7054399/pexels-photo-7054399.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Office desk with calculator, budget planning documents, and pens"
          className="h-full w-full object-cover opacity-20"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/80 to-primary-800/70" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-20">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="section-eyebrow text-accent-300">
            {profile.title}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-100 sm:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={profile.cvUrl}
              className="btn-primary"
              download
              aria-label="Download CV (PDF)"
            >
              <Download size={18} />
              Download CV
            </a>
            <a href="#contact" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-5">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-100 transition-colors hover:text-accent-300"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-100 transition-colors hover:text-accent-300"
              aria-label="GitHub profile (opens in new tab)"
            >
              <Github size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-primary-100 transition-colors hover:text-accent-300"
              aria-label={`Send email to ${profile.email}`}
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-primary-200 transition-colors hover:text-accent-300"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="animate-bounce" size={28} />
      </a>
    </section>
  );
}
