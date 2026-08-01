import { Github, Linkedin, Twitter } from "@/lib/lucide-shim";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Osama Abu Motlaq. Crafted with care.</div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/AbuMotlaq" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent"><Github size={16} /></a>
          <a href="https://linkedin.com/in/osamaabumotlaq" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent"><Linkedin size={16} /></a>
          <a href="https://x.com/abumotlaq1" target="_blank" rel="noreferrer" aria-label="X" className="hover:text-accent"><Twitter size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
