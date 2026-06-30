import { createFileRoute } from "@tanstack/react-router";
import { UserPlus } from "lucide-react";

export const Route = createFileRoute("/admin/team")({
  component: TeamAdmin,
});

const SEED_TEAM = [
  { name: "Nomvula Dlamini", role: "Executive Director", email: "nomvula@callasfoundation.org.za" },
  { name: "Sipho Naidoo", role: "Programmes Lead", email: "sipho@callasfoundation.org.za" },
  { name: "Aisha Petersen", role: "Counselling Lead", email: "aisha@callasfoundation.org.za" },
  { name: "Thabo Mokoena", role: "BBB Boys Coordinator", email: "thabo@callasfoundation.org.za" },
  { name: "Rachel van Wyk", role: "Community Kitchen Manager", email: "rachel@callasfoundation.org.za" },
];

function TeamAdmin() {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">People</div>
          <h1 className="mt-1 font-display text-3xl font-bold tracking-tight">Team</h1>
          <p className="mt-1 text-sm text-callas-ink/65">Manage staff and field leads shown on the public team page.</p>
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-callas-red px-4 py-2 text-xs font-bold text-white hover:bg-callas-red-dark">
          <UserPlus className="h-3.5 w-3.5" /> Invite member
        </button>
      </header>

      <div className="overflow-hidden rounded-2xl border border-callas-line bg-white">
        <table className="w-full text-sm">
          <thead className="bg-callas-canvas text-xs uppercase tracking-wider text-callas-ink/60">
            <tr>
              <th className="px-5 py-3 text-left">Name</th>
              <th className="px-5 py-3 text-left">Role</th>
              <th className="px-5 py-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-callas-line/70">
            {SEED_TEAM.map((m) => (
              <tr key={m.email}>
                <td className="px-5 py-3 font-semibold">{m.name}</td>
                <td className="px-5 py-3 text-callas-ink/75">{m.role}</td>
                <td className="px-5 py-3 text-callas-blue">{m.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-callas-ink/50">
        Read-only preview. Wire <code className="rounded bg-callas-canvas px-1.5 py-0.5">GET /api/team</code> to load live records.
      </p>
    </div>
  );
}
