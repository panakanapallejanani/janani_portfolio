import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { links, profileImage } from '@/data/content';

const iconLink =
  'inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-body transition-colors hover:border-accent hover:text-accent';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-accentdeep/20 blur-[140px]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 md:grid-cols-[1.2fr_0.8fr] md:pb-28">
        <div>
          <p className="eyebrow animate-fade-up">Developer by logic. Designer at heart.</p>
          <h1 className="animate-fade-up-delay-1 mt-4 text-5xl font-semibold leading-[1.1] tracking-tight text-heading md:text-6xl">
            Hello, I’m <span className="text-accent">Janani</span>.
          </h1>
          <p className="animate-fade-up-delay-2 mt-4 text-base font-medium text-body md:text-lg">
            Software Engineer | Java Developer | UI/UX Enthusiast
          </p>
          <p className="animate-fade-up-delay-2 mt-5 max-w-xl leading-relaxed">
            I’m a Computer Science Engineering student passionate about building practical software
            solutions, developing modern web applications and creating intuitive digital
            experiences. I enjoy combining programming, problem-solving and creative design to turn
            ideas into useful applications.
          </p>
          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accentdeep px-6 py-3 text-sm font-semibold text-heading transition-transform duration-200 hover:scale-[1.03] hover:bg-accent"
            >
              Explore My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-heading transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              Let’s Connect
            </a>
          </div>
          <div className="animate-fade-up-delay-3 mt-8 flex items-center gap-3">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className={iconLink}>
              <Github size={17} />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className={iconLink}>
              <Linkedin size={17} />
            </a>
            <a href={links.email} aria-label="Send an email" className={iconLink}>
              <Mail size={17} />
            </a>
          </div>
        </div>
        <div className="animate-fade-up-delay-2 relative mx-auto w-full max-w-sm">
          <div
            aria-hidden
            className="absolute inset-0 -m-3 rounded-[2rem] bg-gradient-to-br from-accentdeep/40 to-transparent blur-2xl"
          />
          <img
            src={profileImage}
            alt="Portrait of Panakanapalle Janani"
            className="relative w-full rounded-[1.75rem] border border-border object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
