
import { SectionHeader } from "./about";
import { 
  SiHtml5, SiCss3 as SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiRedux, SiTailwindcss, SiNodedotjs, SiExpress,
  SiMongodb, SiMongoose, SiGit, SiGithub,
  SiPostman, SiVite, SiFigma, SiVisualstudiocode, SiPostgresql, SiNestjs,
SiNpm, SiVercel
} from "react-icons/si";

const groups = [
  {
    name: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      

      
    ],
  },
  { 
    name: "Backend", 
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Nest.js", icon: SiNestjs },
    ] 
  },
  { 
    name: "Database", 
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
      { name: "PostgreSQL", icon: SiPostgresql },
    ] 
  },
  { 
    name: "Tools", 
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vite", icon: SiVite },
      { name: "Figma", icon: SiFigma },
      { name: "VS Code", icon: SiVisualstudiocode },
      { name: "NPM", icon: SiNpm },
      { name: "Vercel", icon: SiVercel },

    ] 
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader 
          eyebrow="03 — Skills" 
          title="The toolkit I reach for." 
          subtitle="A curated stack, refined through years of shipping." 
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.name} className="card-elegant p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl font-semibold">{g.name}</h3>
                <span className="font-mono text-xs text-muted-foreground">{g.items.length} skills</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {g.items.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-2 rounded-lg p-3 transition-colors hover:bg-accent/10"
                  >
                    <Icon className="text-2xl text-foreground" />
                    <span className="text-sm font-medium text-center">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}