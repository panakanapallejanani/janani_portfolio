import { ArrowUpRight } from 'lucide-react';
import { links } from '@/data/content';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-body md:flex-row">
        <p>© 2026 Panakanapalle Janani. Built with logic. Shaped with care.</p>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 transition-colors hover:text-accent"
        >
          Find me on LinkedIn
          <ArrowUpRight size={13} />
        </a>
      </div>
    </footer>
  );
}
