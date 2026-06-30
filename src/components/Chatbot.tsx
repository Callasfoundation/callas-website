import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ, SITE } from "@/lib/site-data";

type Msg = { role: "bot" | "user"; text: string; suggestions?: string[]; link?: { label: string; href: string } };

const GREETING: Msg = {
  role: "bot",
  text: "Hi, I’m the Callas assistant. I can answer common questions or hand you over to a real person on WhatsApp. What can I help with?",
  suggestions: FAQ.slice(0, 4).map((f) => f.q),
};

function answer(input: string): Msg {
  const q = input.toLowerCase();
  if (/(danger|help|emergency|hurt|attack|now)/.test(q)) {
    return {
      role: "bot",
      text: "If you are in immediate danger, call SAPS 10111 or the GBV Command Centre on 0800 428 428 right now. When you can, message us on WhatsApp and a Callas advocate will respond personally.",
      link: { label: "Open WhatsApp", href: `https://wa.me/${SITE.whatsapp.replace(/[^\d]/g, "")}` },
    };
  }
  const match = FAQ.find((f) => {
    const keys = f.q.toLowerCase().split(/\W+/).filter((w) => w.length > 3);
    return keys.some((k) => q.includes(k));
  });
  if (match) return { role: "bot", text: match.a, suggestions: ["Speak to someone on WhatsApp"] };
  if (/whatsapp|speak|person|human/.test(q)) {
    return {
      role: "bot",
      text: "I’ll hand you over to our team on WhatsApp now. Tap below to open the chat.",
      link: { label: "Open WhatsApp", href: `https://wa.me/${SITE.whatsapp.replace(/[^\d]/g, "")}` },
    };
  }
  return {
    role: "bot",
    text: "I don’t have a scripted answer for that. Tap below to chat with a Callas team member on WhatsApp — they’ll respond personally.",
    link: { label: "Open WhatsApp", href: `https://wa.me/${SITE.whatsapp.replace(/[^\d]/g, "")}` },
  };
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const ask = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }, answer(text)]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-callas-blue text-white shadow-xl shadow-callas-blue/40 transition hover:scale-105"
        aria-label="Open chat"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-5 z-30 flex h-[32rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-callas-line bg-white shadow-2xl"
          >
            <div className="bg-callas-ink px-4 py-3 text-white">
              <div className="text-sm font-bold">Callas Assistant</div>
              <div className="text-xs text-white/60">Scripted answers · WhatsApp handoff</div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-callas-canvas p-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "rounded-br-sm bg-callas-blue text-white"
                        : "rounded-bl-sm bg-white text-callas-ink shadow-sm"
                    }`}
                  >
                    <div>{m.text}</div>
                    {m.suggestions && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {m.suggestions.map((s) => (
                          <button
                            key={s}
                            onClick={() => ask(s)}
                            className="rounded-full border border-callas-line bg-white px-2.5 py-1 text-xs font-medium text-callas-ink transition hover:border-callas-red hover:text-callas-red"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                    {m.link && (
                      <a
                        href={m.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-bold text-white"
                      >
                        {m.link.label}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); ask(input); }}
              className="flex items-center gap-2 border-t border-callas-line bg-white p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a question…"
                className="flex-1 rounded-full border border-callas-line bg-callas-canvas px-3.5 py-2 text-sm outline-none focus:border-callas-blue"
              />
              <button type="submit" className="grid h-9 w-9 place-items-center rounded-full bg-callas-red text-white transition hover:bg-callas-red-dark">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
