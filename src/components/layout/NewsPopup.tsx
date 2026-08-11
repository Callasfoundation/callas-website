import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, Calendar, ArrowRight } from "lucide-react";
import { api } from "@/lib/api";

const KEY = "callas_popup_seen";

type ApiEvent = { id: number; title: string; date: string; time: string; location: string; description: string };
type ApiNews = { id: number; title: string; excerpt: string };

export function NewsPopup() {
  const [show, setShow] = useState(false);
  const [feature, setFeature] = useState<ApiEvent | null>(null);
  const [latestNews, setLatestNews] = useState<ApiNews | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const today = new Date().toISOString().slice(0, 10);
    if (sessionStorage.getItem(KEY) === today) return;

    Promise.all([
      api.list<ApiEvent>("events").catch(() => []),
      api.list<ApiNews>("news").catch(() => []),
    ]).then(([events, news]) => {
      const now = new Date();
      const upcoming = events
        .filter((e) => new Date(e.date) >= now)
        .sort((a, b) => a.date.localeCompare(b.date))[0];
      setFeature(upcoming ?? null);
      setLatestNews(news[0] ?? null);
      setLoaded(true);
    });

    const t = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    sessionStorage.setItem(KEY, new Date().toISOString().slice(0, 10));
    setShow(false);
  }

  if (!show || !loaded || (!feature && !latestNews)) return null;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center p-4 bg-ink/60 backdrop-blur-sm" onClick={dismiss}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden">
        <div className="relative bg-brand-blue text-white p-5">
          <button aria-label="Close" onClick={dismiss} className="absolute top-3 right-3 text-white/80 hover:text-white"><X className="h-5 w-5" /></button>
          <div className="text-xs uppercase tracking-widest text-white/75 font-semibold flex items-center gap-2"><Calendar className="h-3.5 w-3.5" /> {feature ? "Upcoming Event" : "Latest News"}</div>
          <h2 className="mt-2 font-display text-2xl font-bold leading-tight">{feature ? feature.title : latestNews!.title}</h2>
        </div>
        <div className="p-5">
          {feature ? (
            <>
              <div className="text-sm text-muted-foreground">
                <div><strong className="text-ink">When:</strong> {new Date(feature.date).toLocaleDateString("en-ZA", { weekday: "long", day: "numeric", month: "long" })}, {feature.time}</div>
                <div className="mt-1"><strong className="text-ink">Where:</strong> {feature.location}</div>
              </div>
              <p className="mt-3 text-sm text-ink/80 leading-relaxed line-clamp-3">{feature.description}</p>
              <Link to="/events" onClick={dismiss} className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2.5 text-sm font-semibold">
                See all events <ArrowRight className="h-4 w-4" />
              </Link>
            </>
          ) : (
            <>
              <p className="text-sm text-ink/80 leading-relaxed">{latestNews!.excerpt}</p>
              <Link to="/news" onClick={dismiss} className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2.5 text-sm font-semibold">
                Read latest news <ArrowRight className="h-4 w-4" />
              </Link>
            </>
          )}
          <button onClick={dismiss} className="mt-3 text-xs text-muted-foreground hover:text-ink block mx-auto">Dismiss for today</button>
        </div>
      </div>
    </div>
  );
}
