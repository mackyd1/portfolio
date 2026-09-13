interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`container-page py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
      {children}
    </h2>
  );
}
