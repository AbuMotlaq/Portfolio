import { Code2, Layout, Zap, Server } from "@/lib/lucide-shim";
import { Rocket, Palette } from "@/lib/lucide-shim";
import { SectionHeader } from "./about";

const services = [
  { icon: Layout, title: "Web Design", desc: "Elegant, on-brand interfaces designed with intent — from moodboard to component library." },
  { icon: Code2, title: "Frontend Engineering", desc: "Type-safe React & Next.js apps that stay maintainable as they grow." },
  { icon: Server, title: "Backend & APIs", desc: "REST APIs with Node.js and Express, secure auth, and clean data models." },
  { icon: Zap, title: "Performance", desc: "Core Web Vitals, bundle diet, and rendering strategy — measurable wins." },
  { icon: Palette, title: "Design Systems", desc: "Token-based systems in Tailwind that scale across products and teams." },
  { icon: Rocket, title: "Launch & Support", desc: "From staging to production — CI/CD, monitoring, and iteration after launch." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="04 — Services" title="What I can help you build." />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card-elegant p-8 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <s.icon size={20} />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
