import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/admin/messages")({
  component: MessagesAdmin,
});

const SEED = [
  { id: "m1", name: "Lerato M.", email: "lerato@example.com", subject: "Volunteer enquiry", body: "Hello, I'd like to help out in the kitchen on Saturdays — what do I need to do?", date: "2026-06-28", unread: true },
  { id: "m2", name: "Pick n Pay CSI", email: "csi@pnp.example", subject: "Sponsorship discussion", body: "Following up on the donor breakfast — keen to discuss a year-long partnership.", date: "2026-06-26", unread: true },
  { id: "m3", name: "Daily Maverick", email: "newsroom@dm.example", subject: "Feature interview", body: "Would the Director be available for a feature interview on the BBB Boys programme?", date: "2026-06-25", unread: true },
  { id: "m4", name: "Anonymous", email: "—", subject: "Thank you", body: "You walked with my sister through the protection order process. We will never forget.", date: "2026-06-22", unread: true },
];

function MessagesAdmin() {
  return (
    <div className="space-y-6">
      <header>
        <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Inbox</div>
        <h1 className="mt-1 font-display text-3xl font-bold tracking-tight">Messages</h1>
        <p className="mt-1 text-sm text-callas-ink/65">Enquiries submitted through the public contact form.</p>
      </header>

      <ul className="divide-y divide-callas-line/70 overflow-hidden rounded-2xl border border-callas-line bg-white">
        {SEED.map((m) => (
          <li key={m.id} className="flex gap-4 p-5 transition hover:bg-callas-canvas/60">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-callas-blue text-white">
              <Mail className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="font-bold">{m.name} {m.unread && <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-callas-red" />}</div>
                <div className="text-[11px] text-callas-ink/55">{new Date(m.date).toLocaleDateString("en-ZA", { day: "numeric", month: "short" })}</div>
              </div>
              <div className="text-xs text-callas-blue">{m.email}</div>
              <div className="mt-1 text-sm font-semibold">{m.subject}</div>
              <p className="mt-1 text-sm text-callas-ink/75 line-clamp-2">{m.body}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="text-xs text-callas-ink/50">
        Preview only. Wire <code className="rounded bg-callas-canvas px-1.5 py-0.5">GET /api/messages</code> to load real submissions.
      </p>
    </div>
  );
}
