export function About() {
    return (
      <section id="about" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="01 — About" title="A developer who cares about the details." />
          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a Full Stack Developer based in Gaza, Palestine. I build web
                products end-to-end — designing thoughtful interfaces, writing
                maintainable code, and shipping features that feel effortless to
                the people who use them.
              </p>
              <p>
                My work sits at the intersection of design and engineering.
                I care about typography as much as query performance, about
                motion timing as much as API contracts. That balance is what
                turns a working product into a memorable one.
              </p>
              <p className="text-foreground">
                Currently open to freelance and full-time opportunities.
              </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <Stat n="3+" l="Years building for the web" />
              <Stat n="40+" l="Projects delivered" />
              <Stat n="15+" l="Happy clients" />
              <Stat n="∞" l="Cups of coffee" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function Stat({ n, l }: { n: string; l: string }) {
    return (
      <div className="card-elegant p-6">
        <div className="font-display text-4xl font-bold">{n}</div>
        <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
      </div>
    );
  }
  
  export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
    return (
      <div className="max-w-3xl">
        <div className="font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</div>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">{title}</h2>
        {subtitle && <p className="mt-4 text-muted-foreground text-balance">{subtitle}</p>}
      </div>
    );
  }
  