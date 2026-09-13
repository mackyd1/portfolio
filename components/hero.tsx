"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl dark:bg-orange-500/10" />
        <div className="absolute right-1/4 top-1/2 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl dark:bg-amber-500/10" />
      </div>

      <div className="container-page grid items-center gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-sm uppercase tracking-widest text-accent"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
          >
            Macdonald
            <br />
            <span className="text-gradient">Nnadi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-stone-600 dark:text-stone-400"
          >
            I&apos;m a Computer Engineering student at the University of Waterloo
            with a good chunk of co-op experience under my belt. I like building
            reliable software, from healthcare APIs to real-time systems, and
            I&apos;m always tinkering with something new on the side. Incoming
            SWE Intern at TD.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-stone-300 px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent dark:border-stone-700"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-3 pl-2">
              <a
                href="https://github.com/mackyd1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-stone-500 transition-colors hover:text-accent dark:text-stone-400"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/macdonald-nnadi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-stone-500 transition-colors hover:text-accent dark:text-stone-400"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:minnadi@uwaterloo.ca"
                aria-label="Email"
                className="text-stone-500 transition-colors hover:text-accent dark:text-stone-400"
              >
                <Mail size={22} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2"
        >
          <div className="relative mx-auto aspect-[4/5] w-64 max-w-full md:w-full">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-accent" />
            {/* Swap the div below for a real photo:
                <img src="/photo.jpg" alt="Macdonald Nnadi" className="absolute inset-0 h-full w-full rounded-2xl object-cover" /> */}
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/90 to-amber-600/90 text-6xl font-bold text-white/90">
              MN
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#experience"
        aria-label="Scroll to experience"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </a>
    </section>
  );
}
