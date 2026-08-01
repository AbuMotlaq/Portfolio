import { ArrowDown, Github, Linkedin, Twitter, Download, Mail } from "@/lib/lucide-shim";
import profileImg from "@/assets/osama-dev.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12 items-center gap-12 px-6">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-mono text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Available for new projects
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-balance">
            Building <span className="italic font-normal text-muted-foreground">refined</span>
            <br />
            digital <span className="text-accent">experiences</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground text-balance">
            I'm <span className="text-foreground font-medium">Osama Abu Motlaq</span>, a Full Stack Developer
            focused on crafting fast, accessible interfaces and resilient backends —
            from pixel to production.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full btn-accent px-6 py-3 text-sm font-medium">
              View my work <ArrowDown size={16} />
            </a>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:border-accent transition-colors">
              <Download size={16} /> Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm text-muted-foreground hover:text-foreground">
              <Mail size={16} /> Contact
            </a>
          </div>
          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a href="https://github.com/AbuMotlaq" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/osamaabumotlaq" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
            <a href="https://x.com/abumotlaq1" target="_blank" rel="noreferrer" aria-label="X" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
            <span className="h-px w-16 bg-border" />
            <span className="font-mono text-xs">Gaza · Palestine</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <div className="absolute -inset-4 border border-border rounded-3xl -rotate-3" aria-hidden />
            <div className="absolute -inset-2 border border-accent/40 rounded-3xl rotate-2" aria-hidden />
            <img
                          src={profileImg.src ?? (profileImg as unknown as string)}
              alt="Osama Abu Motlaq"
              width={1024}
              height={1280}
              className="relative h-full w-full object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-background/80 backdrop-blur border border-border p-3 text-xs font-mono">
              <span className="text-muted-foreground">./osama.dev</span>
              <span className="text-accent">v2026.1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
