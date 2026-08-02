import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Github, Linkedin, Twitter, Mail } from "@/lib/lucide-shim";
import { supabase } from "@/integrations/supabase/client";
import { SectionHeader } from "./about";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Required").max(200),
  message: z.string().trim().min(5, "Too short").max(5000),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    const { error } = await supabase.from("messages").insert(values);
    setLoading(false);

   if (error) {
  console.log(error);
  toast.error(error.message);
  return;
}

    toast.success("Thanks — I'll get back to you soon.");
    reset();
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-card/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeader eyebrow="07 — Contact" title="Let's build something worth remembering." subtitle="Have a project in mind or just want to say hi? The inbox is open." />
          <div className="mt-10 space-y-3 text-sm">
            <a href="mailto:hello@example.com" className="flex items-center gap-3 text-muted-foreground hover:text-accent">
              <Mail size={16} /> oabumotlaq@gmail.com
            </a>
            <a href="https://github.com/AbuMotlaq" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-accent">
              <Github size={16} /> github.com/AbuMotlaq
            </a>
            <a href="https://linkedin.com/in/osamaabumotlaq" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-accent">
              <Linkedin size={16} /> linkedin.com/in/osamaabumotlaq
            </a>
            <a href="https://x.com/abumotlaq1" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-accent">
              <Twitter size={16} /> @abumotlaq1
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-elegant p-8 space-y-4">
          <Field label="Name" error={errors.name?.message}>
            <input {...register("name")} className={inputCls} placeholder="Your name" />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input {...register("email")} type="email" className={inputCls} placeholder="you@domain.com" />
          </Field>
          <Field label="Subject" error={errors.subject?.message}>
            <input {...register("subject")} className={inputCls} placeholder="Project inquiry" />
          </Field>
          <Field label="Message" error={errors.message?.message}>
            <textarea {...register("message")} rows={5} className={inputCls} placeholder="Tell me a little about your project…" />
          </Field>
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full btn-accent px-6 py-3 text-sm font-medium disabled:opacity-60"
          >
            {loading ? "Sending…" : (<>Send message <Send size={14} /></>)}
          </button>
        </form>
      </div>
    </section>
  );
}

const inputCls = "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent transition-colors";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="flex justify-between text-xs mb-1.5">
        <span className="font-medium">{label}</span>
        {error && <span className="text-destructive">{error}</span>}
      </div>
      {children}
    </label>
  );
}
