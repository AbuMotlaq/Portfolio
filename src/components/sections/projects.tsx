import { useMemo, useState } from "react";
import { Github, ExternalLink, Search, Star } from "@/lib/lucide-shim";
import { SectionHeader } from "./about";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: string;
  github?: string;
  live?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "ToDo App",
    description: "A minimal, keyboard-first task manager with local persistence, tags, and quick filters.",
    tech: ["React", "Vite"],
    category: "Web App",
    github: "https://github.com/AbuMotlaq",
    featured: true,
  },
  {
    title: "Portfolio ",
    description: "This very site. A black-and-white editorial portfolio with a full custom design system.",
    tech: ["React","Next.js", "Tailwind"],
    category: "Website",
     github: "https://github.com/AbuMotlaq/portfolio",
    featured: true,
  },
  {
    title: "Admin Dashboard",
    description: "Reusable admin shell with charts, tables, filters, and role-based access.",
    tech: ["Next.js", "TypeScript", "Recharts"],
    category: "Dashboard",
     github: "https://github.com/AbuMotlaq/admin-dashboard",
  },
  {
    title: "E-commerce UI",
    description: "Storefront with cart, checkout flow, and search — powered by a headless backend.",
    tech: ["ReactJs", "Tailwind CSS"],
    category: "E-commerce",
     github: "https://github.com/AbuMotlaq/e-commerce",
  },
];

const categories = ["All", "Featured", ...Array.from(new Set(projects.map((p) => p.category)))];

export function Projects() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = cat === "All" || (cat === "Featured" ? p.featured : p.category === cat);
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(q.toLowerCase()));
      return matchCat && matchQ;
    });
  }, [q, cat]);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="02 — Selected work" title="Recent projects & experiments." subtitle="A snapshot of what I've been building lately." />

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium border transition-colors ${
                  cat === c ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground hover:border-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects…"
              className="w-full rounded-full border border-border bg-card pl-9 pr-4 py-2 text-sm outline-none focus:border-accent"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.title} className="card-elegant p-6 flex flex-col">
              <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-muted to-secondary relative overflow-hidden mb-5 grid-bg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-4xl font-bold text-foreground/10">{p.title[0]}</span>
                </div>
                {p.featured && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[10px] font-medium text-accent-foreground">
                    <Star size={10} /> Featured
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{p.category}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-mono text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-accent">
                    <Github size={14} /> Code
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-accent">
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">No projects match your filter.</p>
        )}
      </div>
    </section>
  );
}
