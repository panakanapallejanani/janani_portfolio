import { Briefcase } from 'lucide-react';
import Section from '@/components/Section';
import { experience } from '@/data/content';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Learning through doing.">
      <div className="relative mt-12 space-y-8 border-l border-border pl-8">
        {experience.map((item) => (
          <article key={item.organization} className="relative">
            <span
              aria-hidden
              className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-accentdeep bg-base"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <div className="card p-7 transition-colors duration-300 hover:border-accentdeep">
              <span className="chip">{item.period}</span>
              <h3 className="mt-4 text-xl font-semibold text-heading">{item.organization}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{item.role}</p>
              {item.listLabel && <p className="mt-4 text-sm text-body">{item.listLabel}</p>}
              <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <Briefcase size={14} className="mt-1 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
