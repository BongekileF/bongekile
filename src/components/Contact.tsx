import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" className="bg-primary-900 py-20 sm:py-28" aria-label="Contact information">
      <div ref={ref} className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow text-accent-300">Get in touch</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">Let&apos;s work together</h2>
          <p className="mt-4 text-lg text-primary-100">
            Whether you need a detail-oriented accountant for your team or help with your books, I&apos;d love to hear from you.
          </p>
        </div>

        <div className={`mx-auto mt-12 max-w-2xl ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-5 text-white transition-all duration-200 hover:border-accent-300/50 hover:bg-white/10" aria-label={`Send email to ${profile.email}`}>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-500/20 text-accent-300">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-200">Email</p>
                <p className="mt-0.5 truncate font-medium">{profile.email}</p>
              </div>
            </a>

            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-5 text-white transition-all duration-200 hover:border-accent-300/50 hover:bg-white/10" aria-label={`Call ${profile.phone}`}>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-500/20 text-accent-300">
                <Phone size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-200">Phone</p>
                <p className="mt-0.5 truncate font-medium">{profile.phone}</p>
              </div>
            </a>

            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-5 text-white transition-all duration-200 hover:border-accent-300/50 hover:bg-white/10" aria-label="LinkedIn profile (opens in new tab)">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-500/20 text-accent-300">
                <Linkedin size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-200">LinkedIn</p>
                <p className="mt-0.5 truncate font-medium">Bongekile Modutwane</p>
              </div>
            </a>

            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-5 text-white transition-all duration-200 hover:border-accent-300/50 hover:bg-white/10" aria-label="GitHub profile (opens in new tab)">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-500/20 text-accent-300">
                <Github size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-200">GitHub</p>
                <p className="mt-0.5 truncate font-medium">{profile.githubHandle}</p>
              </div>
            </a>
          </div>

          <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-xl border border-white/15 bg-white/5 p-5 sm:flex-row">
            <div className="flex items-center gap-3 text-white">
              <MapPin size={20} className="shrink-0 text-accent-300" />
              <span className="font-medium">{profile.location}</span>
            </div>
            <a href={profile.cvUrl} download className="btn-primary" aria-label="Download CV (PDF)">
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
