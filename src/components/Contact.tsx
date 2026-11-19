import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { links } from '@/data/content';

const outlineButton =
  'inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-heading transition-colors duration-200 hover:border-accent hover:text-accent';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="card relative overflow-hidden p-8 md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accentdeep/20 blur-[100px]"
          />
          <h2 className="text-3xl font-semibold tracking-tight text-heading md:text-5xl">
            Let’s build something meaningful.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed">
            Interested in software engineering, Java development or full-stack opportunities. I’d
            love to connect and talk about the work.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={links.email}
              className="inline-flex items-center gap-2 rounded-full bg-accentdeep px-6 py-3 text-sm font-semibold text-heading transition-transform duration-200 hover:scale-[1.03] hover:bg-accent"
            >
              <Mail size={16} />
              Say Hello
            </a>
            <a href={links.github} target="_blank" rel="noreferrer" className={outlineButton}>
              <Github size={16} />
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className={outlineButton}>
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
          <p className="mt-9 inline-flex items-center gap-2 text-sm text-body">
            <MapPin size={15} className="text-accent" />
            Tirupati, Andhra Pradesh, India.
          </p>
        </div>
      </div>
    </section>
  );
}
