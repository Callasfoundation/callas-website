import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/_public/shop")({
  head: () => ({ meta: [{ title: "Shop — Coming Soon | Callas Foundation" }, { name: "description", content: "The Callas Foundation shop is coming soon." }] }),
  component: () => (
    <>
      <PageHeader eyebrow="Coming Soon" title="The Callas Shop is on its way." description="Merch, art, and community-crafted goods — every rand back into the programmes." crumbs={[{ label: "Shop" }]} />
      <section className="bg-white"><div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand-blue/10 text-brand-blue"><ShoppingBag className="h-8 w-8" /></div>
        <h2 className="mt-6 font-display text-3xl font-bold text-ink">Launching soon.</h2>
        <p className="mt-3 text-muted-foreground">Leave your email and we'll let you know the moment we open.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex gap-2 max-w-md mx-auto">
          <input required type="email" placeholder="you@example.com" className="flex-1 rounded-full border border-slate-300 px-5 py-3" />
          <button className="rounded-full bg-brand-red text-white px-6 py-3 text-sm font-semibold hover:bg-brand-red-dark">Notify Me</button>
        </form>
      </div></section>
    </>
  ),
});