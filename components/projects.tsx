"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading>Things I&apos;ve built</SectionHeading>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`group flex flex-col rounded-xl border border-stone-200 bg-white/60 p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg dark:border-stone-800 dark:bg-stone-900/50 ${
              project.featured ? "sm:col-span-1" : ""
            }`}
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold group-hover:text-accent">
                {project.title}
              </h3>
              <div className="flex flex-shrink-0 items-center gap-3 text-stone-500 dark:text-stone-400">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code`}
                    className="transition-colors hover:text-accent"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="transition-colors hover:text-accent"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="mb-4 text-sm text-stone-600 dark:text-stone-400">
              {project.description}
            </p>

            <ul className="mb-4 space-y-1.5 text-sm text-stone-600 dark:text-stone-400">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-accent">▹</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-stone-100 px-2.5 py-1 font-mono text-xs text-stone-600 dark:bg-stone-800 dark:text-stone-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
