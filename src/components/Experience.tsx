import { experience, type ExperienceItem } from "../data/portfolio";
import SectionNextButton from "./SectionNextButton";
import { useInView } from "../hooks/useInView";

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`relative pl-10 ${inView ? "animate-slide-in" : "opacity-0"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary-500 bg-white" />
      {index < experience.length - 1 && (
        <div className="absolute left-[7px] top-6 h-full w-0.5 bg-primary-200" />
      )}

      <div className="card mb-8">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-xl font-semibold text-primary-900">{item.role}</h3>
            <p className="mt-1 font-medium text-accent-700">{item.company}</p>
          </div>
          <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">{item.period}</span>
        </div>
        <p className="mt-1 text-sm text-neutral-500">{item.location}</p>
        <p className="mt-4 text-neutral-600">{item.description}</p>
        <ul className="mt-4 space-y-2">
          {item.highlights.map((highlight, i) => (
            <li key={i} className="flex gap-3 text-sm text-neutral-600">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20 sm:py-28" aria-label="Work experience">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Career</p>
          <h2 className="section-title mt-3">Work Experience</h2>
          <p className="mt-4 text-lg text-neutral-600">
            Hands-on finance experience across mining, banking, and retail.
          </p>
        </div>

        <div className="mt-12 max-w-3xl">
          {experience.map((item, i) => (
            <ExperienceCard key={item.role} item={item} index={i} />
          ))}
        </div>

        <SectionNextButton href="#contact" label="Continue to contact" />
      </div>
    </section>
  );
}
