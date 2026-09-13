import { Mail } from "lucide-react";
import { Section } from "@/components/section";

export function Contact() {
  return (
    <Section id="contact" className="text-center">
      <p className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">
        What&apos;s next?
      </p>
      <h2 className="mb-4 font-sans text-4xl font-bold tracking-tight sm:text-5xl">
        Let&apos;s talk
      </h2>
      <p className="mx-auto mb-8 max-w-lg text-[15px] leading-relaxed text-ink/80">
        I&apos;m open to SWE internships, project collaborations, and fun ideas.
        Whether you&apos;re hiring or just want to chat, reach out!
      </p>
      <a
        href="mailto:minnadi@uwaterloo.ca"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
      >
        <Mail size={18} />
        Say hello
      </a>
    </Section>
  );
}
