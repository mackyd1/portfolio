"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { featuredProjects, smallProjects } from "@/lib/projects";

function DeepDive({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h4 className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
        {label}
      </h4>
      <p className="text-sm text-stone-600 dark:text-stone-400">{text}</p>
    </div>
  );
}

export function Work() {
  return (
    <Section id="work">
      <SectionHeading>Work</SectionHeading>

      {/* Featured projects */}
      <div className="space-y-16">
        {featuredProjects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-stone-200 bg-white/60 p-6 dark:border-stone-800 dark:bg-stone-900/50 sm:p-8"
          >
            {project.role && (
              <p className="mb-1 font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
                {project.role}
              </p>
            )}
            <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
            <p className="mt-1 text-base font-medium text-accent">
              {project.tagline}
            </p>

            <p className="mt-4 max-w-3xl text-sm text-stone-600 dark:text-stone-400">
              {project.description}
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <DeepDive label="The Problem" text={project.problem} />
              <DeepDive label="The Approach" text={project.approach} />
              <DeepDive label="Why This" text={project.why} />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-stone-100 px-2.5 py-1 font-mono text-xs text-stone-600 dark:bg-stone-800 dark:text-stone-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {(project.liveUrl || project.repoUrl) && (
              <div className="mt-6 flex flex-wrap items-center gap-5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    View Live
                    <ArrowUpRight size={16} />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 transition-colors hover:text-accent dark:text-stone-400"
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                )}
              </div>
            )}
          </motion.article>
        ))}
      </div>

      {/* Small projects grid */}
      {smallProjects.length > 0 && (
        <>
          <h3 className="mb-6 mt-16 text-lg font-semibold text-stone-500 dark:text-stone-400">
            Other things I&apos;ve built
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {smallProjects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex flex-col rounded-xl border border-stone-200 bg-white/60 p-5 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg dark:border-stone-800 dark:bg-stone-900/50"
              >
                <p className="mb-1 font-mono text-xs text-stone-500 dark:text-stone-400">
                  {project.year}
                </p>
                <h4 className="text-base font-semibold group-hover:text-accent">
                  {project.title}
                </h4>
                <p className="mt-2 flex-grow text-sm text-stone-600 dark:text-stone-400">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors hover:text-accent-hover"
                    >
                      Live
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="text-stone-500 transition-colors hover:text-accent dark:text-stone-400"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
