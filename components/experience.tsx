import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { experience } from "@/lib/experience";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-12">
        {experience.map((role) => (
          <div
            key={`${role.company}-${role.period}`}
            className="grid gap-2 border-t border-ink/10 pt-8 md:grid-cols-4 md:gap-6"
          >
            <p className="font-mono text-sm text-muted md:col-span-1">
              {role.period}
            </p>

            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold">{role.role}</h3>
              <p className="mb-3 text-sm font-medium text-accent">
                {role.company}
                <span className="text-muted"> · {role.location}</span>
              </p>

              <ul className="space-y-2 text-[15px] leading-relaxed text-ink/80">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 text-accent">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {role.stack && (
                <p className="mt-3 font-mono text-xs text-muted">{role.stack}</p>
              )}

              {role.learnMoreUrl && (
                <a
                  href={role.learnMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  Learn more
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
