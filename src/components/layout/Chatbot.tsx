import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/data/site";

type Msg = { from: "bot" | "user"; text: string; options?: { label: string; next: string }[] };

const tree: Record<string, Msg> = {
  start: {
    from: "bot",
    text: "Hi, I'm the Callas assistant. What can I help you with today?",
    options: [
      { label: "I need help now", next: "help" },
      { label: "What does Callas do?", next: "about" },
      { label: "How can I donate?", next: "donate" },
      { label: "I want to volunteer", next: "volunteer" },
      { label: "Where are you based?", next: "location" },
    ],
  },
  help: { from: "bot", text: "If you are in immediate danger, call SAPS 10111 or the GBV Command Centre on 0800 428 428. Then reach us — a Callas advocate will walk with you.", options: [{ label: "Continue on WhatsApp", next: "wa" }, { label: "Back", next: "start" }] },
  about: { from: "bot", text: "Callas Foundation is a Cape Flats NPO (217-433) working on gender justice, trauma care, legal support and food security. Seven core programmes serve women, children, boys and men.", options: [{ label: "How can I help?", next: "donate" }, { label: "Back", next: "start" }] },
  donate: { from: "bot", text: "Every rand keeps meals on plates and advocates in courtrooms. You can donate securely on our donate page or ask our team for banking details.", options: [{ label: "Continue on WhatsApp", next: "wa" }, { label: "Back", next: "start" }] },
  volunteer: { from: "bot", text: "We welcome volunteers in fieldwork, kitchen logistics and professional advocacy. Complete the short volunteer form and we'll match you to a team.", options: [{ label: "Continue on WhatsApp", next: "wa" }, { label: "Back", next: "start" }] },
  location: { from: "bot", text: `We're at ${site.address}. Open Monday to Saturday.`, options: [{ label: "Back", next: "start" }] },
  wa: { from: "bot", text: "Opening WhatsApp so you can chat directly with our team…" },
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([tree.start]);

  function pick(next: string, label: string) {
    if (next === "wa") {
      window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Callas Foundation, I'd like to chat.")}`, "_blank");
      setMessages((m) => [...m, { from: "user", text: label }, tree.wa]);
      return;
    }
    setMessages((m) => [...m, { from: "user", text: label }, tree[next]]);
  }

  return (
    <>
      <button onClick={() => setOpen((o) => !o)} aria-label="Chat with Callas"
              className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand-blue text-white shadow-2xl shadow-brand-blue/40 hover:bg-brand-blue-dark transition-colors">
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.96 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="fixed bottom-24 right-6 z-40 w-[min(24rem,calc(100vw-2rem))] rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
            <div className="bg-ink text-white px-4 py-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">Callas Assistant</div>
                <div className="text-[11px] text-white/60">Typically replies within minutes</div>
              </div>
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="p-4 max-h-80 overflow-y-auto space-y-3 bg-canvas">
              {messages.map((m, i) => (
                <div key={i}>
                  <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${m.from === "bot" ? "bg-white border border-slate-200 text-ink" : "ml-auto bg-brand-blue text-white"}`}>
                    {m.text}
                  </div>
                  {m.options && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {m.options.map((o) => (
                        <button key={o.label} onClick={() => pick(o.next, o.label)} className="text-xs rounded-full border border-brand-blue/30 text-brand-blue px-3 py-1 hover:bg-brand-blue hover:text-white transition-colors">
                          {o.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 bg-brand-red text-white text-sm font-semibold py-3 hover:bg-brand-red-dark transition-colors">
              <Send className="h-4 w-4" /> Continue on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}