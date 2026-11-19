import { GraduationCap } from 'lucide-react';
import Section from '@/components/Section';
import { education } from '@/data/content';

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Foundations that shaped me.">
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <article
            key={item.level}
            className="card group p-7 transition-colors duration-300 hover:border-accentdeep"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-raised text-accent">
                <GraduationCap size={20} />
              </div>
              <span className="chip">{item.years}</span>
            </div>
            <p className="eyebrow mt-6">{item.level}</p>
            <h3 className="mt-2 text-xl font-semibold text-heading">{item.field}</h3>
            <p className="mt-1 text-sm text-body">{item.school}</p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
              <p className="text-sm font-semibold text-accent">{item.cgpa}</p>
              <p className="text-xs text-body">{item.location}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
