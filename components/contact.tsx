"use client";

import { Mail } from "lucide-react";
import { Section } from "@/components/section";

export function Contact() {
  return (
    <Section id="contact" className="text-center">
      <p className="mb-3 font-mono text-sm text-accent">What&apos;s next?</p>
      <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Let&apos;s talk
      </h2>
      <p className="mx-auto mb-8 max-w-lg text-stone-600 dark:text-stone-400">
        I&apos;m always up for a good project or a chat about one. Whether
        you&apos;re hiring, want to build something, or just have a question,
        send it over and I&apos;ll get back to you.
      </p>
      <a
        href="mailto:minnadi@uwaterloo.ca"
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
      >
        <Mail size={18} />
        Say hello
      </a>
    </Section>
  );
}
