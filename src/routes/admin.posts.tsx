import { createFileRoute } from "@tanstack/react-router";
import { Plus, Trash2, RotateCcw } from "lucide-react";
import { useNews, SEED } from "@/lib/store";

export const Route = createFileRoute("/admin/posts")({
  component: PostsAdmin,
});

function PostsAdmin() {
  const [news, setNews] = useNews();
  const update = (i: number, patch: Partial<(typeof news)[number]>) => {
    const next = [...news];
    next[i] = { ...next[i], ...patch };
    setNews(next);
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Content</div>
          <h1 className="mt-1 font-display text-3xl font-bold tracking-tight">Posts &amp; News</h1>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setNews(SEED.news)} className="inline-flex items-center gap-1.5 rounded-full border border-callas-line bg-white px-4 py-2 text-xs font-bold text-callas-ink hover:border-callas-red hover:text-callas-red">
            <RotateCcw className="h-3 w-3" /> Reset
          </button>
          <button onClick={() => setNews([{ id: "n" + Date.now(), title: "New post", excerpt: "", body: "", date: new Date().toISOString().slice(0, 10), category: "General" }, ...news])} className="inline-flex items-center gap-1.5 rounded-full bg-callas-red px-4 py-2 text-xs font-bold text-white hover:bg-callas-red-dark">
            <Plus className="h-3.5 w-3.5" /> New post
          </button>
        </div>
      </header>

      <div className="space-y-3">
        {news.map((n, i) => (
          <details key={n.id} className="rounded-xl border border-callas-line bg-white p-5 open:shadow-sm">
            <summary className="cursor-pointer text-sm font-bold">
              {n.title || "Untitled"}
              <span className="ml-2 text-xs font-normal text-callas-ink/60">{n.category} · {n.date}</span>
            </summary>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input value={n.title} onChange={(e) => update(i, { title: e.target.value })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm sm:col-span-2" placeholder="Title" />
              <input value={n.category} onChange={(e) => update(i, { category: e.target.value })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm" placeholder="Category" />
              <input type="date" value={n.date} onChange={(e) => update(i, { date: e.target.value })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm" />
              <input value={n.excerpt} onChange={(e) => update(i, { excerpt: e.target.value })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm sm:col-span-2" placeholder="Excerpt" />
              <textarea rows={5} value={n.body} onChange={(e) => update(i, { body: e.target.value })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm sm:col-span-2" placeholder="Body" />
            </div>
            <button onClick={() => setNews(news.filter((_, j) => j !== i))} className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-callas-red">
              <Trash2 className="h-3 w-3" /> Delete
            </button>
          </details>
        ))}
      </div>
    </div>
  );
}
