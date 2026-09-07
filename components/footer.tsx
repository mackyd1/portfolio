import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { href: "https://github.com/mackyd1", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/macdonald-nnadi/", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:minnadi@uwaterloo.ca", label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-200/60 py-10 dark:border-stone-800/60">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-stone-500 dark:text-stone-400">
          &copy; {new Date().getFullYear()} Macdonald Nnadi. Built with Next.js &amp; Tailwind.
        </p>
        <div className="flex items-center gap-4">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-stone-500 transition-colors hover:text-accent dark:text-stone-400 dark:hover:text-white"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
