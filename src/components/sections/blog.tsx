import { ArrowUpRight } from "@/lib/lucide-shim";
import { SectionHeader } from "./about";

const posts = [
  { title: "Designing with tokens: a practical approach", tag: "Design Systems", date: "May 2026", read: "6 min" },
  { title: "TypeScript patterns I actually use", tag: "TypeScript", date: "Apr 2026", read: "8 min" },
  { title: "Making forms feel effortless", tag: "UX", date: "Mar 2026", read: "5 min" },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="06 — Writing" title="From the journal." subtitle="Occasional notes on craft, code, and the web." />
        <div className="mt-16 divide-y divide-border border-y border-border">
          {posts.map((p) => (
            <a key={p.title} href="#" className="group flex items-center justify-between py-8 hover:bg-card/50 transition-colors -mx-6 px-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{p.tag} · {p.date} · {p.read} read</div>
                <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold group-hover:text-accent transition-colors">{p.title}</h3>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
