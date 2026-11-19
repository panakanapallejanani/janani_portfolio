import Section from '@/components/Section';
import { certifications } from '@/data/content';

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Always a student of what’s next.">
      <div className="card mt-10 flex flex-col items-start gap-6 p-8 md:flex-row md:items-center">
        <span className="text-6xl font-semibold text-accent md:text-7xl">
          {certifications.length}
        </span>
        <div>
          <h3 className="text-xl font-semibold text-heading">Industry-focused certifications</h3>
          <p className="mt-1 text-sm font-medium text-body">
            Continuous learning. Practical foundations.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed">
            Five certifications across Generative AI, web development, enterprise platforms,
            networking and databases.
          </p>
        </div>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <article
            key={cert.title}
            className="card group overflow-hidden transition-colors duration-300 hover:border-accentdeep"
          >
            <div className="overflow-hidden border-b border-border bg-raised/50 p-4">
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                className="h-44 w-full rounded-lg border border-border object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <p className="eyebrow">Certificate {cert.number}</p>
              <h3 className="mt-2 text-base font-semibold leading-snug text-heading">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-body">{cert.issuer}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
