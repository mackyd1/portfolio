import { Section, SectionHeading } from "@/components/section";
import { skillGroups } from "@/lib/skills";

const quickFacts = [
  "Based in Waterloo, ON",
  "Computer Engineering @ University of Waterloo (2027)",
  "Incoming SWE Intern at TD",
  "Into sports, chess, and side projects",
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading>About</SectionHeading>

      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-4 text-[15px] leading-relaxed text-ink/80 md:col-span-3">
          <p>
            I&apos;m Macdonald, a Computer Engineering student at the University
            of Waterloo. I got into engineering because I liked taking things
            apart to see how they work, and somewhere along the way I started
            building my own.
          </p>
          <p>
            When I&apos;m not coding you&apos;ll usually find me playing sports,
            overthinking a chess game, or getting a little too invested in a
            side project I probably didn&apos;t need to build.
          </p>
        </div>

        <div className="md:col-span-2">
          <ul className="space-y-2 text-sm text-ink/80">
            {quickFacts.map((fact) => (
              <li key={fact} className="flex gap-2">
                <span className="mt-0.5 text-accent">▹</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-14">
        <h3 className="mb-6 text-xl font-semibold">Skills &amp; tools</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h4 className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent">
                {group.category}
              </h4>
              <ul className="space-y-1.5 text-sm text-ink/80">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
