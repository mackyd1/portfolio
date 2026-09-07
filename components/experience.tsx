"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/section";
import { experience } from "@/lib/experience";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading>Where I&apos;ve worked</SectionHeading>
      <div className="relative border-l border-stone-200 pl-6 dark:border-stone-800 sm:pl-8">
        {experience.map((role, i) => (
          <motion.div
            key={`${role.company}-${role.period}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative mb-12 last:mb-0"
          >
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-stone-50 dark:bg-stone-950 sm:-left-[39px]" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">
                {role.role}{" "}
                <span className="text-accent">@ {role.company}</span>
              </h3>
              <span className="font-mono text-xs text-stone-500 dark:text-stone-400">
                {role.period}
              </span>
            </div>
            <p className="mb-3 text-sm text-stone-500 dark:text-stone-500">
              {role.location}
              {role.stack ? ` · ${role.stack}` : ""}
            </p>
            <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
              {role.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-0.5 text-accent">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
