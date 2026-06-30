import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { useNews } from "@/lib/store";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Updates — Callas Foundation" },
      { name: "description", content: "Latest from the Callas Foundation field — court support wins, BBB cohort updates, community kitchen milestones and advocacy campaigns." },
      { property: "og:title", content: "News & Updates — Callas Foundation" },
      { property: "og:description", content: "Latest from the Callas Foundation field." },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  const [news] = useNews();
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <SiteLayout>
      <PageHero eyebrow="News & Updates" title={<>From the field. <span className="text-white/80">Every week.</span></>} subtitle="Community activities, court support, advocacy campaigns, media appearances and the everyday work that doesn’t make headlines." variant="blue" />
      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((n) => (
              <Link key={n.id} to="/news/$slug" params={{ slug: n.id }} className="group flex flex-col rounded-2xl border border-callas-line bg-white transition hover:-translate-y-1 hover:border-callas-red hover:shadow-xl">
                <div className="aspect-[4/3] rounded-t-2xl bg-gradient-to-br from-callas-red via-callas-red-dark to-callas-blue" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-callas-red/10 px-2.5 py-1 font-bold uppercase tracking-wider text-callas-red">{n.category}</span>
                    <span className="text-callas-ink/60">{new Date(n.date).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold leading-tight">{n.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-callas-ink/70">{n.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-callas-blue">Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </SiteLayout>
  );
}
