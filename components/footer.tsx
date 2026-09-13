import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { href: "https://github.com/mackyd1", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/macdonald-nnadi/", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:minnadi@uwaterloo.ca", label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} Macdonald Nnadi
        </p>
        <div className="flex items-center gap-4">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted transition-colors hover:text-accent"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
