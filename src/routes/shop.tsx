import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ShoppingBag, Bell, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Coming Soon — Callas Foundation" },
      { name: "description", content: "The Callas Foundation shop is coming soon — branded merchandise where every rand of profit funds our programmes." },
      { property: "og:title", content: "Shop — Coming Soon" },
      { property: "og:description", content: "Branded merchandise that funds Callas programmes." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <section className="bg-callas-ink text-white">
        <div className="container-x grid min-h-[70vh] place-items-center py-20 text-center">
          <div className="max-w-2xl">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-callas-red text-white"><ShoppingBag className="h-9 w-9" /></div>
            <h1 className="mt-8 font-display text-5xl font-bold leading-[1.02] sm:text-6xl">Shop. <span className="text-callas-red">Coming soon.</span></h1>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              We’re launching a small line of Callas-branded essentials — tees, hoodies, tote bags, and prints. Every rand of profit funds our community kitchen and BBB Boys cohorts.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll email you when the shop is live."); }}
              className="mx-auto mt-8 flex max-w-md gap-2"
            >
              <input required type="email" placeholder="Email me when it opens" className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-callas-red" />
              <button type="submit" className="inline-flex items-center gap-1 rounded-full bg-callas-red px-5 py-3 text-sm font-bold text-white hover:bg-callas-red-dark"><Bell className="h-4 w-4" /> Notify</button>
            </form>
            <div className="mt-8">
              <Link to="/donate" className="inline-flex items-center gap-1 text-sm font-bold text-callas-red">Or donate now <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  ),
});
