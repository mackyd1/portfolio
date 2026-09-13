import { ArrowUpRight, Github } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { featuredProjects, smallProjects } from "@/lib/projects";

function DeepDive({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h4 className="mb-1 font-mono text-xs font-medium uppercase tracking-widest text-accent">
        {label}
      </h4>
      <p className="text-sm leading-relaxed text-ink/75">{text}</p>
    </div>
  );
}

export function Work() {
  return (
    <Section id="work">
      <SectionHeading>Work</SectionHeading>

      {/* Featured projects */}
      <div className="space-y-10">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-ink/10 bg-card p-6 sm:p-8"
          >
            {project.role && (
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">
                {project.role}
              </p>
            )}
            <h3 className="text-2xl font-bold tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 text-base font-medium text-accent">
              {project.tagline}
            </p>

            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink/80">
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
                  className="rounded-full bg-warm px-2.5 py-1 font-mono text-xs text-ink/70"
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
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/70 transition-colors hover:text-accent"
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Small projects grid */}
      {smallProjects.length > 0 && (
        <>
          <h3 className="mb-6 mt-14 font-mono text-sm uppercase tracking-widest text-muted">
            Other things I&apos;ve built
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {smallProjects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-xl border border-ink/10 bg-card p-5 transition-colors hover:border-accent"
              >
                <p className="mb-1 font-mono text-xs text-muted">
                  {project.year}
                </p>
                <h4 className="text-base font-semibold group-hover:text-accent">
                  {project.title}
                </h4>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-ink/75">
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
                      className="text-muted transition-colors hover:text-accent"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
