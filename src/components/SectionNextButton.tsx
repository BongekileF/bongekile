import { ArrowRight } from "lucide-react";

interface SectionNextButtonProps {
  href: string;
  label: string;
  dark?: boolean;
}

export default function SectionNextButton({
  href,
  label,
  dark = false,
}: SectionNextButtonProps) {
  return (
    <a
      href={href}
      className={`mt-10 inline-flex items-center gap-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-500 ${
        dark
          ? "text-accent-300 hover:text-white"
          : "text-primary-700 hover:text-primary-900"
      }`}
    >
      {label}
      <ArrowRight size={17} aria-hidden="true" />
    </a>
  );
}
