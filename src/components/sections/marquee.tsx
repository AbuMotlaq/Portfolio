const items = [
    "React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL",
    "Tailwind CSS", "Redux Toolkit", "REST APIs", "Express", "Framer Motion", "Figma",
  ];
  
  export function Marquee() {
    const loop = [...items, ...items];
    return (
      <div className="relative border-y border-border overflow-hidden bg-card/30">
        <div className="flex whitespace-nowrap marquee py-6">
          {loop.map((it, i) => (
            <div key={i} className="flex items-center gap-8 px-8 font-display text-2xl md:text-3xl font-medium text-muted-foreground">
              {it}
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  