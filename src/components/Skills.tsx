import Section from '@/components/Section';
import { skills } from '@/data/content';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A toolkit for thoughtful software.">
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="card p-6 transition-colors duration-300 hover:border-accentdeep"
          >
            <h3 className="text-base font-semibold text-heading">{group.category}</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">{group.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
