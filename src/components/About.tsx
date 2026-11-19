import Section from '@/components/Section';
import { aboutStats } from '@/data/content';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Curiosity, turned into craft.">
      <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 leading-relaxed">
          <p>
            I’m Panakanapalle Janani, a Computer Science Engineering student at Sri Venkateswara
            College of Engineering with an academic CGPA of 8.9/10.
          </p>
          <p>
            I am passionate about software engineering, Java development, web technologies, UI/UX
            design and data analytics.
          </p>
          <p>
            Through my internship at Codeon Technologies and the PwC Launchpad Advisory Program, I
            gained practical exposure to frontend development, interface design, Python
            programming, Generative AI, modern data systems and cloud engineering.
          </p>
          <p>
            I enjoy developing practical applications, solving problems and continuously improving
            my technical skills.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 self-start md:grid-cols-1">
          {aboutStats.map((stat) => (
            <div key={stat.value} className="card p-5 text-center md:text-left">
              <p className="text-lg font-semibold text-accent md:text-xl">{stat.value}</p>
              <p className="mt-1 text-xs text-body md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
