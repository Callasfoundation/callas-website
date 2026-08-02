import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { Award, BookOpen, Users, ArrowRight } from "lucide-react";
import founderPhoto from "@/assets/images/team/founder.jpg";

export const Route = createFileRoute("/_public/founder")({
  head: () => ({
    meta: [
      { title: "Caroline Peters — Founder & Executive Director | Callas Foundation" },
      { name: "description", content: "Caroline Peters — African feminist, three decades on the frontlines of the GBV response, Chair of MenEngage South Africa." },
      { property: "og:title", content: "Caroline Peters — Callas Foundation" },
      { property: "og:description", content: "Founder & Executive Director of Callas Foundation." },
    ],
  }),
  component: FounderPage,
});

function FounderPage() {
  return (
    <>
      <PageHeader eyebrow="Our Founder" title="Caroline Peters" description="African feminist, seasoned social justice advocate and community leader with over three decades on the frontlines of the gender-based violence response."
        crumbs={[{ label: "About", to: "/about" }, { label: "Founder" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-5 items-start">
          <Reveal className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-3 bg-brand-blue/15 rounded-3xl blur-xl" />
              <img src={founderPhoto} alt="Caroline Peters" className="relative w-full rounded-2xl object-cover aspect-[4/5]" />
            </div>
            <div className="mt-6 rounded-2xl bg-ink text-white p-6">
              <div className="text-xs uppercase tracking-[0.22em] text-brand-red font-semibold">National Leadership</div>
              <div className="mt-2 font-display text-2xl font-bold">Chair, MenEngage South Africa</div>
              <p className="mt-2 text-sm text-white/80">Leading nationwide initiatives that engage men and boys as proactive allies in eliminating GBV.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ink">
              <p className="text-xl leading-relaxed text-ink">
                Caroline Peters is the Founder and Executive Director of the Callas Foundation and one of South Africa's most respected voices on gender-based violence. Her career has spanned crisis rooms, community halls, magistrates' courts and the highest chambers of legislative reform.
              </p>
              <h2 className="font-display text-3xl font-bold mt-10">Early Advocacy</h2>
              <p className="text-muted-foreground">
                Caroline began her journey in the early 1990s as a rape crisis volunteer, sitting through the long nights and longer aftermaths beside survivors nobody else knew how to help. In 1999 she started working at the Saartjie Baartman Centre for Women and Children in Manenberg from the year it was founded, and has since been active with Ilitha Labantu — the first women and children's centre founded in a township — and the 1000 Women Trust, an initiative supporting women and children's organisations across the country.
              </p>
              <p className="text-muted-foreground mt-4">
                In 2014 Caroline made history as the first woman to start a running club in Cape Town, bringing a source of hope and physical freedom to women in a working-class neighbourhood with few support structures of its own.
              </p>
              <h2 className="font-display text-3xl font-bold mt-8">Legislative Impact</h2>
              <p className="text-muted-foreground">
                Her grassroots expertise has informed national law. Caroline has given input at Parliament on gender-based violence legislation, and has trained magistrates, clinic staff and community leaders on sensitivity toward survivors of sexual violence — contributing to national conversations around the Domestic Violence Act and the Sexual Offences Bill.
              </p>
              <h2 className="font-display text-3xl font-bold mt-8">National & Provincial Roles</h2>
              <p className="text-muted-foreground">
                Beyond Callas, Caroline coordinates the Cape Flats Women's Movement and serves as Provincial Coordinator for South African Women in Dialogue. She works closely with the Women's Legal Centre and the Human Rights Defenders Programme, and coordinates a UNODC-backed programme on non-custodial measures for women in conflict with the law. In 2025 she was named a finalist in the Santam Women of the Future Awards, in the Social Entrepreneur category.
              </p>
              <h2 className="font-display text-3xl font-bold mt-8">Community Leadership</h2>
              <p className="text-muted-foreground">
                In 2018 Caroline formally registered the Callas Foundation, translating three decades of relationships across the Cape Flats into an organisation that now serves 500+ meals a day, supports over 1,200 cases a year, and trains community responders across nine suburbs.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { icon: BookOpen, label: "Policy contributions", value: "DVA · SOB" },
                { icon: Award, label: "2025 Santam Finalist", value: "Social Entrepreneur" },
                { icon: Users, label: "Communities served", value: "9 Suburbs" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-slate-200 p-5">
                  <s.icon className="h-5 w-5 text-brand-blue" />
                  <div className="mt-3 font-display text-2xl font-bold text-ink">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 text-sm font-semibold transition-colors">
              Get in touch with Caroline's office <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}