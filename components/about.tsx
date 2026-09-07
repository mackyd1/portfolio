"use client";

import { Section, SectionHeading } from "@/components/section";

const skills = [
  "Java",
  "Python",
  "C / C++",
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "NestJS",
  "GraphQL",
  "Django / Flask",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Playwright",
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading>About me</SectionHeading>
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-4 text-stone-600 dark:text-stone-400 md:col-span-3">
          <p>
            I&apos;m Macdonald, a Computer Engineering student at Waterloo
            (graduating in 2027). I got into engineering because I liked taking
            things apart to see how they work, and somewhere along the way I
            started building my own.
          </p>
          <p>
            A lot of my time goes into co-ops, and I&apos;ve been lucky to work
            on some genuinely interesting problems, which you can read more about
            just below. When I&apos;m not coding, you&apos;ll usually find me
            playing sports, overthinking a chess game, or getting a little too
            invested in a side project I probably didn&apos;t need to build.
          </p>
          <p>
            At the end of the day I&apos;m an engineer. I like problems with
            constraints, and I like the feeling of something finally working.
            These are the tools I reach for most:
          </p>
          <ul className="grid grid-cols-2 gap-2 pt-2 font-mono text-sm">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <span className="text-accent">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="relative mx-auto aspect-square w-56 max-w-full">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-xl border-2 border-accent" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/90 to-amber-600/90" />
            <div className="absolute inset-0 flex items-center justify-center rounded-xl text-5xl font-bold text-white/90">
              MN
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
