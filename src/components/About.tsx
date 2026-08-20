import { profile } from "../data/portfolio";
import SectionNextButton from "./SectionNextButton";
import { useInView } from "../hooks/useInView";

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="bg-neutral-50 py-20 sm:py-28" aria-label="About">
      <div ref={ref} className="section-container">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Image */}
          <div className={`lg:col-span-2 ${inView ? "animate-fade-in" : "opacity-0"}`}>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-accent-200" />
              <img
                src="/images/1000152466.jpg"
                alt="Bongekile Modutwane, Junior Financial Accountant, in professional attire"
                className="relative rounded-2xl object-cover shadow-lg"
                loading="lazy"
                width={400}
                height={520}
              />
            </div>
          </div>

          {/* Text */}
          <div className={`lg:col-span-3 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
            <p className="section-eyebrow">About Me</p>
            <h2 className="section-title mt-3">A numbers person with a people purpose</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-neutral-600">
              {profile.summary.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-primary-800">Location</dt>
                <dd className="mt-1 text-neutral-600">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-primary-800">Goal</dt>
                <dd className="mt-1 text-neutral-600">SAIPA Professional Accountant</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-primary-800">Experience</dt>
                <dd className="mt-1 text-neutral-600">2-year rotational graduate programme</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-primary-800">Sector</dt>
                <dd className="mt-1 text-neutral-600">Mining &amp; Financial Services</dd>
              </div>
            </dl>

            <SectionNextButton href="#skills" label="Continue to skills" />
          </div>
        </div>
      </div>
    </section>
  );
}
