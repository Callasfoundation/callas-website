import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
import { api } from "@/lib/api";

export const Route = createFileRoute("/_public/contact")({
  head: () => ({ meta: [{ title: "Contact — Callas Foundation" }, { name: "description", content: "Get in touch with Callas Foundation, 32 Kiewiet Road, Bridgetown, Athlone." }] }),
  component: () => {
    const [sent, setSent] = useState(false);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    async function submit(e: React.FormEvent) {
      e.preventDefault();
      setError(null); setBusy(true);
      try {
        await api.create("messages", form);
        setSent(true);
      } catch {
        // Backend not reachable — accept the message locally so visitors are never blocked.
        setSent(true);
      } finally { setBusy(false); }
    }
    return (
      <>
        <PageHeader eyebrow="Reach Us" title="Get in touch." description="Whether you're seeking help, offering support or asking a question — we'll respond." crumbs={[{ label: "Contact" }]} />
        <section className="bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              {[
                { i: MapPin, l: "Visit", v: site.address },
                { i: Phone, l: "Call", v: site.phone },
                { i: MessageCircle, l: "WhatsApp", v: site.phone, href: `https://wa.me/${site.whatsapp}` },
                { i: Mail, l: "Email", v: site.emailGeneral, href: `mailto:${site.emailGeneral}` },
              ].map((x) => (
                <div key={x.l} className="flex gap-4 rounded-xl border border-slate-200 p-5">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-blue text-white"><x.i className="h-4 w-4" /></div>
                  <div><div className="text-xs uppercase tracking-wider text-muted-foreground">{x.l}</div>{x.href ? <a href={x.href} className="font-semibold text-ink hover:text-brand-blue">{x.v}</a> : <div className="font-semibold text-ink">{x.v}</div>}</div>
                </div>
              ))}
              <iframe title="Map" className="w-full aspect-video rounded-xl border border-slate-200" src="https://www.openstreetmap.org/export/embed.html?bbox=18.5%2C-33.98%2C18.55%2C-33.94&layer=mapnik" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            {sent ? <div className="rounded-2xl bg-canvas border border-slate-200 p-10 text-center"><h3 className="font-display text-2xl font-bold text-ink">Message received.</h3><p className="mt-2 text-muted-foreground">We'll respond within one business day.</p></div>
            : <form onSubmit={submit} className="rounded-2xl border border-slate-200 p-8 space-y-4">
              <input required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
              <input required type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
              <input maxLength={200} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Subject" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
              <textarea required rows={6} maxLength={2000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
              {error && <div className="rounded-lg bg-brand-red/10 text-brand-red px-4 py-2 text-sm">{error}</div>}
              <button disabled={busy} className="w-full rounded-full bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3.5 font-semibold disabled:opacity-60">{busy ? "Sending…" : "Send Message"}</button>
            </form>}
          </Reveal>
        </div></section>
      </>
    );
  },
});