import { certifications } from "../data/portfolio";
import SectionNextButton from "./SectionNextButton";
import { useInView } from "../hooks/useInView";

export default function Certifications() {
  const [ref, inView] = useInView();

  return (
    <section id="certifications" className="bg-neutral-50 py-20 sm:py-28" aria-label="Certifications">
      <div ref={ref} className="section-container">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Professional development</p>
          <h2 className="section-title mt-3">Certifications</h2>
          <p className="mt-4 text-lg text-neutral-600">
            Continuing to build practical, professional, and future-ready capability.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {certifications.map((certification, index) => (
            <article
              key={certification.name}
              className={`card ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-primary-900">{certification.name}</h3>
                <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${certification.status === "Completed" ? "bg-green-50 text-green-700" : "bg-accent-50 text-accent-700"}`}>
                  {certification.status}
                </span>
              </div>
            </article>
          ))}
        </div>
        <SectionNextButton href="#experience" label="Continue to experience" />
      </div>
    </section>
  );
}
