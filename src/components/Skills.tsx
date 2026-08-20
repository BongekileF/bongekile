import { softSkills, technicalSkills } from "../data/portfolio";
import SectionNextButton from "./SectionNextButton";
import { useInView } from "../hooks/useInView";

function SkillColumn({
  title,
  items,
  inView,
  delay,
}: {
  title: string;
  items: { name: string; icon: typeof technicalSkills[0]["icon"] }[];
  inView: boolean;
  delay: number;
}) {
  return (
    <div className={`card h-full ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ transitionDelay: `${delay}ms` }}>
      <h3 className="text-xl font-semibold text-primary-900">{title}</h3>
      <ul className="mt-6 space-y-3">
        {items.map((skill) => {
          const Icon = skill.icon;
          return (
            <li key={skill.name} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                <Icon size={18} />
              </span>
              <span className="font-medium text-neutral-800">{skill.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="bg-white py-20 sm:py-28" aria-label="Skills and tools">
      <div ref={ref} className="section-container">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Capabilities</p>
          <h2 className="section-title mt-3">Skills</h2>
          <p className="mt-4 text-lg text-neutral-600">
            Technical accounting competencies and the professional strengths I bring to a team.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <SkillColumn title="Technical Skills" items={technicalSkills} inView={inView} delay={0} />
          <SkillColumn title="Soft Skills" items={softSkills} inView={inView} delay={120} />
        </div>

        <SectionNextButton href="#projects" label="Continue to projects" />
      </div>
    </section>
  );
}
