"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { experience } from "@/lib/experience";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-12">
        {experience.map((role, i) => (
          <motion.div
            key={`${role.company}-${role.period}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="grid gap-2 border-t border-stone-200 pt-8 dark:border-stone-800 md:grid-cols-4 md:gap-6"
          >
            <p className="font-mono text-sm text-stone-500 dark:text-stone-400 md:col-span-1">
              {role.period}
            </p>

            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold">{role.role}</h3>
              <p className="mb-3 text-sm font-medium text-accent">
                {role.company}
                <span className="text-stone-500 dark:text-stone-400">
                  {" "}
                  · {role.location}
                </span>
              </p>

              <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-0.5 text-accent">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {role.stack && (
                <p className="mt-3 font-mono text-xs text-stone-500 dark:text-stone-500">
                  {role.stack}
                </p>
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
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
