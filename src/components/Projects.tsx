import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/Section';
import { projects } from '@/data/content';

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Built to solve. Designed to make sense."
    >
      <div className="mt-12 space-y-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            open={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </Section>
  );
}
