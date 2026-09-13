import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-24">
      <div className="container-page grid items-center gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-accent">
            Software Engineer
          </p>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            Macdonald
            <br />
            <span className="text-accent">Nnadi</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/80">
            I&apos;m a Computer Engineering student at the University of Waterloo
            with a good chunk of co-op experience under my belt. I like building
            reliable software, from healthcare APIs to real-time systems, and
            I&apos;m always tinkering with something new on the side. Incoming
            SWE Intern at TD.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-3 pl-2">
              <a
                href="https://github.com/mackyd1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted transition-colors hover:text-accent"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/macdonald-nnadi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-accent"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:minnadi@uwaterloo.ca"
                aria-label="Email"
                className="text-muted transition-colors hover:text-accent"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="md:col-span-2">
          <div className="relative mx-auto aspect-[4/5] w-64 max-w-full md:w-full">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-accent" />
            {/* Swap the div below for a real photo:
                <img src="/photo.jpg" alt="Macdonald Nnadi" className="absolute inset-0 h-full w-full rounded-2xl object-cover" /> */}
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-warm text-6xl font-bold text-accent">
              MN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
