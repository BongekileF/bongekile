import { education } from "../data/portfolio";
import SectionNextButton from "./SectionNextButton";
import { useInView } from "../hooks/useInView";

export default function Education() {
  const [ref, inView] = useInView();

  return (
    <section id="education" className="bg-white py-20 sm:py-28" aria-label="Education and qualifications">
      <div ref={ref} className="section-container">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Learning</p>
          <h2 className="section-title mt-3">Education &amp; Qualifications</h2>
          <p className="mt-4 text-lg text-neutral-600">
            Academic foundation and ongoing professional development.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {education.map((item, i) => (
            <div
              key={item.qualification}
              className={`card ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary-900">{item.qualification}</h3>
                  <p className="mt-1 text-neutral-600">{item.institution}</p>
                </div>
                <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${item.status === "Completed" ? "bg-green-50 text-green-700" : "bg-accent-50 text-accent-700"}`}>
                  {item.status}
                </span>
              </div>
              <p className="mt-4 text-sm text-neutral-500">{item.period}</p>
            </div>
          ))}
        </div>

        <SectionNextButton href="#certifications" label="Continue to certifications" />
      </div>
    </section>
  );
}
