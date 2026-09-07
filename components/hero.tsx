"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl dark:bg-orange-500/10" />
        <div className="absolute right-1/4 top-1/2 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl dark:bg-amber-500/10" />
      </div>

      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm text-accent"
        >
          Hey, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          Macdonald Nnadi.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2 text-3xl font-bold tracking-tight text-stone-500 dark:text-stone-400 sm:text-5xl md:text-6xl"
        >
          Software engineer.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 max-w-xl text-lg text-stone-600 dark:text-stone-400"
        >
          I&apos;m a Computer Engineering student at Waterloo with a good chunk
          of co-op experience under my belt (more on that below). Next up:
          a SWE internship at TD.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            See what I&apos;ve built
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-stone-300 px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent dark:border-stone-700"
          >
            Say hi
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
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </a>
    </section>
  );
}
