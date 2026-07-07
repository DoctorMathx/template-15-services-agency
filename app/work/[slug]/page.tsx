import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, caseBySlug } from "@/mock/products";
import { testimonials } from "@/mock/testimonials";
import { Section, SectionHeader } from "@/components/ui/section";
import { CaseCard } from "@/components/ui/case-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { CtaSection } from "@/components/ui/cta-section";
import { categoryLabel, industryLabel } from "@/lib/utils";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

export function generateStaticParams() { return caseStudies.map((c) => ({ slug: c.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const c = caseBySlug(slug); return { title: c ? `${c.title} · ${c.client}` : "Case study", description: c?.summary }; }

export default async function CaseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = caseBySlug(slug);
  if (!c) notFound();
  const related = caseStudies.filter((x) => x.id !== c.id).slice(0, 2);
  return (
    <>
      <section className="border-b border-line">
        <div className="container-x pt-12 md:pt-20 pb-16">
          <div className="text-[12px] font-mono uppercase tracking-[.14em] muted flex items-center gap-2"><Link href="/work" className="hover:text-[color:var(--ink)]">Work</Link> <span>/</span> <span>{c.client}</span></div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-[76px] font-light tracking-tighter leading-[1.02] mt-8 max-w-5xl">{c.title}</h1>
          <div className="mt-8 grid md:grid-cols-4 gap-6 max-w-5xl">
            {[
              { label: "Client", value: c.client },
              { label: "Category", value: categoryLabel(c.category) },
              { label: "Industry", value: industryLabel(c.industry) },
              { label: "Year · Duration", value: `${c.year} · ${c.duration}` },
            ].map((m) => (<div key={m.label}><div className="label">{m.label}</div><div className="text-[15px] font-medium mt-1.5">{m.value}</div></div>))}
          </div>
        </div>
      </section>

      <div className="border-b border-line">
        <div className="relative aspect-[16/9] bg-canvas"><Image src={c.hero ?? c.cover} alt={c.title} fill sizes="100vw" className="object-cover" priority /></div>
      </div>

      <Section pad="lg">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 max-w-6xl">
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:h-fit">
            <div className="eyebrow mb-3">Overview</div>
            <p className="prose-lede">{c.summary}</p>
            <div className="mt-8 space-y-4">
              <div><div className="label">Services</div><div className="mt-2 flex flex-wrap gap-2">{c.services.map((s) => <span key={s} className="chip">{s}</span>)}</div></div>
              {c.metrics && (<div><div className="label mt-4">Results</div><div className="mt-2 grid grid-cols-2 gap-3">{c.metrics.map((m) => (<div key={m.label} className="border-t border-line pt-2"><div className="font-display text-2xl font-medium tabular-nums">{m.value}</div><div className="text-[11px] muted font-mono uppercase tracking-[.12em] mt-1">{m.label}</div></div>))}</div></div>)}
            </div>
          </div>
          <div className="lg:col-span-8 space-y-14">
            {c.problem && (<div><div className="eyebrow mb-3">The problem</div><h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">What we walked into.</h2><p className="prose-lede mt-5">{c.problem}</p></div>)}
            {c.approach && (<div><div className="eyebrow mb-3">Our approach</div><h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">How we ran it.</h2><ul className="mt-5 space-y-3">{c.approach.map((a) => (<li key={a} className="flex items-start gap-3 text-[15.5px] text-[color:var(--charcoal)] leading-relaxed"><span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)] mt-2.5 shrink-0" />{a}</li>))}</ul></div>)}
            {c.outcome && (<div><div className="eyebrow mb-3">Outcome</div><h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">What shipped.</h2><ul className="mt-5 space-y-3">{c.outcome.map((o) => (<li key={o} className="flex items-start gap-3 text-[15.5px] text-[color:var(--charcoal)] leading-relaxed"><Check className="w-4 h-4 text-[color:var(--accent)] mt-1 shrink-0" />{o}</li>))}</ul></div>)}
          </div>
        </div>
      </Section>

      {c.gallery && (
        <section className="border-y border-line bg-canvas">
          <div className="container-x py-12 grid md:grid-cols-3 gap-5">
            {c.gallery.map((g, i) => (<div key={i} className="relative aspect-[4/5] bg-canvas overflow-hidden border border-line"><Image src={g} alt="" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" /></div>))}
          </div>
        </section>
      )}

      <Section pad="md">
        <SectionHeader eyebrow="Client note" title="What they said after." />
        <div className="grid md:grid-cols-2 gap-5">{testimonials.slice(0, 2).map((t) => <TestimonialCard key={t.id} t={t} />)}</div>
      </Section>

      {related.length > 0 && (
        <Section tone="canvas" pad="md">
          <div className="flex items-end justify-between mb-8 gap-4"><div className="eyebrow">Next case</div><Link href="/work" className="btn btn-outline btn-sm">All work <ArrowUpRight className="w-3.5 h-3.5" /></Link></div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">{related.map((r) => <CaseCard key={r.id} c={r} />)}</div>
        </Section>
      )}

      <Section pad="sm"><CtaSection eyebrow="Slots open" title="Have a similar project?" description="Send a brief. We reply within one business day." primary={{ label: "Start a project", href: "/brief" }} secondary={{ label: "Send a note", href: "/contact" }} tone="dark" /></Section>
    </>
  );
}
