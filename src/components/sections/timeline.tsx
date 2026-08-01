import { Briefcase, GraduationCap, Award } from "@/lib/lucide-shim";
import { SectionHeader } from "./about";

const experiences = [
  { role: "Full Stack Developer", org: "Freelance", period: "2023 — Now", desc: "Building web apps and dashboards for clients across the region." },
  { role: "Frontend Developer", org: "Various projects", period: "2022 — 2023", desc: "Shipped React interfaces with strong attention to design and DX." },
];

const education = [
  { degree: "B.Sc. in Computer Science", org: "Al-Azhar University — Gaza", period: "Graduated" },
];

const certificates = [
  { name: "Advanced React & TypeScript", issuer: "Self-directed" },
  { name: "Modern Backend with Node.js", issuer: "Self-directed" },
  { name: "UI/UX Fundamentals", issuer: "Self-directed" },
];

export function Timeline() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="05 — Journey" title="Experience, education & certificates." />
        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          <TimelineCol icon={Briefcase} label="Experience" items={experiences.map(e => ({ title: e.role, sub: e.org, date: e.period, desc: e.desc }))} />
          <TimelineCol icon={GraduationCap} label="Education" items={education.map(e => ({ title: e.degree, sub: e.org, date: e.period }))} />
          <TimelineCol icon={Award} label="Certificates" items={certificates.map(c => ({ title: c.name, sub: c.issuer }))} />
        </div>
      </div>
    </section>
  );
}

function TimelineCol({ icon: Icon, label, items }: { icon: React.ComponentType<{ size?: number }>; label: string; items: Array<{ title: string; sub: string; date?: string; desc?: string }> }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
          <Icon size={16} />
        </div>
        <h3 className="font-display text-xl font-semibold">{label}</h3>
      </div>
      <div className="mt-6 relative pl-6 border-l border-border space-y-6">
        {items.map((it, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
            <div className="text-sm font-medium">{it.title}</div>
            <div className="text-xs text-muted-foreground">{it.sub}{it.date && ` · ${it.date}`}</div>
            {it.desc && <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
