import { projects } from "../data/portfolio";
import SectionNextButton from "./SectionNextButton";
import { useInView } from "../hooks/useInView";

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="bg-white py-20 sm:py-28" aria-label="Projects">
      <div ref={ref} className="section-container">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Selected work</p>
          <h2 className="section-title mt-3">Projects &amp; Contributions</h2>
          <p className="mt-4 text-lg text-neutral-600">
            Practical work connecting accurate finance processes with business and community outcomes.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`card flex h-full flex-col ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <p className="text-sm font-semibold text-accent-700">0{index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-primary-900">{project.title}</h3>
              <p className="mt-3 flex-1 text-neutral-600">{project.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tools used">
                {project.tools.map((tool) => (
                  <li key={tool} className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                    {tool}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <SectionNextButton href="#education" label="Continue to education" />
      </div>
    </section>
  );
}
