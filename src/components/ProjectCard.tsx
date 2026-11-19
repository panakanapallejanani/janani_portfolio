import { ChevronDown } from 'lucide-react';
import type { Project } from '@/data/content';

interface ProjectCardProps {
  project: Project;
  open: boolean;
  onToggle: () => void;
}

export default function ProjectCard({ project, open, onToggle }: ProjectCardProps) {
  const { preview } = project;

  return (
    <article className="card overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="border-b border-border bg-raised/50 p-7 lg:border-b-0 lg:border-r">
          <p className="eyebrow">{project.previewTag}</p>
          <div className="mt-6 rounded-xl border border-border bg-base p-5">
            <p className="text-2xl font-semibold tracking-tight text-accent">{preview.heading}</p>
            <p className="mt-1 text-sm text-body">{preview.subheading}</p>
            {preview.badges.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {preview.badges.map((badge) => (
                  <span key={badge} className="chip">
                    {badge}
                  </span>
                ))}
              </div>
            )}
            <img
              src={preview.image}
              alt={`${project.title} preview`}
              className="mt-5 w-full rounded-lg border border-border object-cover"
              loading="lazy"
            />
          </div>
          {preview.disclaimer && (
            <p className="mt-4 text-xs italic text-body/70">{preview.disclaimer}</p>
          )}
        </div>

        <div className="p-7">
          <p className="eyebrow">{project.tag}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-heading">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            className="mt-7 flex w-full items-center justify-between rounded-xl border border-border px-5 py-4 text-left text-sm font-semibold text-heading transition-colors hover:border-accentdeep"
          >
            {project.detailsTitle}
            <ChevronDown
              size={18}
              className={`shrink-0 text-accent transition-transform duration-300 ${
                open ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`grid transition-all duration-300 ease-out ${
              open ? 'mt-5 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <ul className="space-y-3 overflow-hidden text-sm leading-relaxed">
              {project.contributions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
