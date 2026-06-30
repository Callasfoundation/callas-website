import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CTASection } from "@/components/CTASection";
import { useNews } from "@/lib/store";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/news/$slug")({
  component: NewsArticle,
});

function NewsArticle() {
  const { slug } = Route.useParams();
  const [news] = useNews();
  const item = news.find((n) => n.id === slug);
  if (!item) {
    return (
      <SiteLayout>
        <div className="container-x py-32 text-center">
          <h1 className="font-display text-3xl font-bold">Article not found</h1>
          <Link to="/news" className="mt-4 inline-block text-callas-blue">Back to news</Link>
        </div>
      </SiteLayout>
    );
  }
  return (
    <SiteLayout>
      <article className="bg-white">
        <div className="container-x mx-auto max-w-3xl py-16 lg:py-24">
          <Link to="/news" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-callas-blue">
            <ArrowLeft className="h-3 w-3" /> All news
          </Link>
          <div className="mt-6 flex items-center gap-3 text-xs">
            <span className="rounded-full bg-callas-red/10 px-2.5 py-1 font-bold uppercase tracking-wider text-callas-red">{item.category}</span>
            <span className="text-callas-ink/60">{new Date(item.date).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] text-balance">{item.title}</h1>
          <p className="mt-5 font-display text-xl italic text-callas-ink/75">{item.excerpt}</p>
          <div className="my-8 aspect-[16/9] rounded-2xl bg-gradient-to-br from-callas-red via-callas-red-dark to-callas-blue" />
          <div className="space-y-5 text-base leading-relaxed text-callas-ink/85">
            <p>{item.body}</p>
            <p>For deeper reporting on our programmes, follow our monthly newsletter — or get in touch with our communications team directly.</p>
          </div>
        </div>
      </article>
      <CTASection />
    </SiteLayout>
  );
}
