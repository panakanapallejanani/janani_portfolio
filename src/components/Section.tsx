import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-heading md:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
