import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/data/site";

export const Route = createFileRoute("/_public/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Callas Foundation" },
      { name: "description", content: "How Callas Foundation uses cookies on this website. POPIA-compliant, strictly-necessary cookies only." },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  const updated = "5 July 2026";
  return (
    <>
      <PageHeader eyebrow="Legal" title="Cookie Policy" description={`How Callas Foundation uses cookies on this website. Last updated ${updated}.`} crumbs={[{ label: "Cookie Policy" }]} />
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose prose-slate">
          <h2 className="font-display text-2xl font-bold text-ink">1. Who we are</h2>
          <p className="text-muted-foreground leading-relaxed">
            This website is operated by <strong>Callas Foundation</strong>, a South African non-profit organisation (NPO {site.npo}) based at {site.address}. If you have any questions about this policy or how we handle your information, contact us at <a className="text-brand-blue underline" href={`mailto:${site.emailGeneral}`}>{site.emailGeneral}</a>.
          </p>

          <h2 className="mt-8 font-display text-2xl font-bold text-ink">2. What cookies are</h2>
          <p className="text-muted-foreground leading-relaxed">
            Cookies are small text files that a website places on your device to remember things between visits. They are not programs and cannot read anything else on your device.
          </p>

          <h2 className="mt-8 font-display text-2xl font-bold text-ink">3. The cookies we set</h2>
          <p className="text-muted-foreground leading-relaxed">
            We only use <strong>strictly-necessary</strong> cookies. We do not use advertising, analytics or third-party tracking cookies.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Name</th>
                  <th className="text-left px-4 py-3 font-semibold">Purpose</th>
                  <th className="text-left px-4 py-3 font-semibold">Lifetime</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-slate-100">
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">callas_session</td>
                  <td className="px-4 py-3">Keeps a Callas staff member signed in to the secure Admin portal. Set only after successful sign-in on <code>/admin</code>. HttpOnly + SameSite=Lax.</td>
                  <td className="px-4 py-3">12 hours</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">callas_cookie_consent</td>
                  <td className="px-4 py-3">Remembers that you have already answered the cookie banner so we don't ask again on every visit.</td>
                  <td className="px-4 py-3">1 year</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">callas_admin_session</td>
                  <td className="px-4 py-3">Local flag (browser storage, not a cookie) that lets the Admin UI render instantly. Contains no password or token — authorisation is always re-verified by the server.</td>
                  <td className="px-4 py-3">Until sign-out</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">callas_popup_seen</td>
                  <td className="px-4 py-3">Session-only flag so the "latest news" popup shows at most once per visit.</td>
                  <td className="px-4 py-3">Session</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-8 font-display text-2xl font-bold text-ink">4. Third-party embeds</h2>
          <p className="text-muted-foreground leading-relaxed">
            The About Us and Home pages embed a video from Google's <em>YouTube-nocookie</em> service. YouTube-nocookie does not store cookies on your device until you press play, and even then only for the purpose of playing the video. We do not receive any personal information from YouTube.
          </p>

          <h2 className="mt-8 font-display text-2xl font-bold text-ink">5. Your choices</h2>
          <p className="text-muted-foreground leading-relaxed">
            You can accept or decline the cookie banner at any time — declining will not stop the website from working, but staff will not be able to stay signed in to the Admin portal. You can also clear cookies at any time from your browser's settings.
          </p>

          <h2 className="mt-8 font-display text-2xl font-bold text-ink">6. POPIA</h2>
          <p className="text-muted-foreground leading-relaxed">
            Callas Foundation is committed to the Protection of Personal Information Act, 2013 (POPIA). We only process personal information that is necessary for the lawful purposes stated above, and we never sell your information.
          </p>

          <h2 className="mt-8 font-display text-2xl font-bold text-ink">7. Changes to this policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We will update this page when our practices change. The "last updated" date at the top of this policy reflects the most recent revision.
          </p>
        </div>
      </section>
    </>
  );
}