import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { CaseCard } from "@/components/ui/case-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { siteConfig } from "@/lib/site-config";
import { caseStudies, clientLogos, featuredCases, flagshipCase, services } from "@/mock/products";
import { testimonials, proofStats } from "@/mock/testimonials";
import { faqs } from "@/mock/faqs";
import { formatPrice } from "@/lib/utils";

export default function HomePage() {
  const flagship = flagshipCase();
  const featured = featuredCases();

  return (
    <>
      {/* Editorial statement hero */}
      <section className="border-b border-line">
        <div className="container-x pt-16 md:pt-24 pb-16 md:pb-20">
          <div className="max-w-5xl">
            <div className="eyebrow flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />{siteConfig.hero.tag}</div>
            <h1 className="font-display text-[46px] sm:text-6xl md:text-[88px] lg:text-[112px] font-light tracking-tighter leading-[.94] mt-8">
              A small studio<br />designing brands<br />for the <span className="text-[color:var(--accent)] italic font-normal">next Africa.</span>
            </h1>
            <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
              <p className="prose-lede max-w-lg">{siteConfig.studio.shortBio}</p>
              <div className="flex flex-wrap gap-3">
                <Link href={siteConfig.hero.primaryCta.href} className="btn btn-accent btn-lg">{siteConfig.hero.primaryCta.label} <ArrowRight className="w-4 h-4" /></Link>
                <Link href={siteConfig.hero.secondaryCta.href} className="btn btn-outline btn-lg">{siteConfig.hero.secondaryCta.label}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client marquee */}
      <section className="border-b border-line overflow-hidden">
        <div className="container-x py-8 flex items-center gap-8">
          <span className="text-[11px] font-mono uppercase tracking-[.16em] muted whitespace-nowrap">Trusted by</span>
          <div className="flex-1 overflow-hidden">
            <div className="marquee font-display text-2xl md:text-3xl font-light">
              {[...clientLogos, ...clientLogos].map((c, i) => (<span key={i} className="whitespace-nowrap muted">{c} <span className="text-[color:var(--accent)] mx-6">·</span></span>))}
            </div>
          </div>
        </div>
      </section>

      {/* Flagship case */}
      <section className="border-b border-line bg-canvas">
        <div className="container-x py-16 md:py-24">
          <div className="flex items-end justify-between mb-10 gap-4"><div><div className="eyebrow">Flagship 2026</div><h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mt-3">The latest thing we shipped.</h2></div><Link href="/work" className="btn btn-outline btn-sm hidden md:inline-flex">All work <ArrowUpRight className="w-3.5 h-3.5" /></Link></div>
          <CaseCard c={flagship} size="lg" />
        </div>
      </section>

      {/* Recent work grid */}
      <Section pad="lg">
        <SectionHeader eyebrow="Recent work" title="Selected projects, 2024 → 2026." action={<Link href="/work" className="btn btn-outline btn-sm">All work <ArrowUpRight className="w-3.5 h-3.5" /></Link>} />
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">{featured.slice(1, 5).map((c) => <CaseCard key={c.id} c={c} />)}</div>
      </Section>

      {/* Services */}
      <Section tone="paper" pad="lg">
        <SectionHeader eyebrow="What we do" title="Six ways to work with us." lede="Fixed-fee projects, or a monthly retainer if you need us on tap." />
        <div className="divide-y divide-[color:var(--line-strong)] border-y border-line">
          {services.map((s, i) => (
            <div key={s.id} className="py-8 grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-1 font-mono text-[11px] muted tracking-[.14em]">0{i + 1}</div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl md:text-[28px] font-medium tracking-tight leading-tight">{s.title}</h3>
                <div className="mt-2 flex items-center gap-3 text-[11.5px] font-mono uppercase tracking-[.14em] muted"><span>{s.duration}</span><span className="w-1 h-1 rounded-full bg-[color:var(--slate)]" /><span>From {formatPrice(s.from)}{s.interval === "month" ? " / mo" : ""}</span></div>
              </div>
              <div className="md:col-span-5 text-[15px] text-[color:var(--charcoal)] leading-relaxed">{s.short}</div>
              <div className="md:col-span-2 md:text-right"><Link href={`/services#${s.slug}`} className="btn btn-outline btn-sm">Details <ArrowUpRight className="w-3.5 h-3.5" /></Link></div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section pad="lg">
        <SectionHeader eyebrow="How we run a project" title="Four phases. No mystery." />
        <div className="grid md:grid-cols-4 gap-0 border-y border-line">
          {[
            { n: "01", title: "Scoping call", body: "A 30-min call to see if we're a fit. No commitment either side." },
            { n: "02", title: "Discovery", body: "Two weeks of interviews, audits, and strategy work. Deliverable: a written brief we both sign." },
            { n: "03", title: "Production", body: "3–6 weeks of design work with weekly readouts. You see everything as it happens." },
            { n: "04", title: "Launch & review", body: "Launch, plus a 60-day review where we measure the actual result." },
          ].map((s, i) => (
            <div key={s.n} className={`py-8 md:px-6 ${i > 0 ? "md:border-l border-line" : ""}`}>
              <div className="font-mono text-[11.5px] muted tracking-[.16em]">{s.n}</div>
              <h3 className="font-display text-xl font-medium mt-4">{s.title}</h3>
              <p className="text-[14px] text-[color:var(--charcoal)] leading-relaxed mt-2">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Big quote */}
      <section className="border-y border-line bg-ink text-white">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="eyebrow-dark">A recent client note</div>
            <p className="font-display text-3xl md:text-5xl lg:text-[56px] font-light leading-[1.15] tracking-tight mt-6">&ldquo;The best design partner we&apos;ve ever worked with. Ova moves faster than teams three times their size.&rdquo;</p>
            <div className="mt-8 font-mono text-[13px] tracking-[.14em] uppercase text-white/60">Chinelo E. · CEO · Kola Bank</div>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <Section pad="lg">
        <SectionHeader eyebrow="Client notes" title="What operators say about us." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{testimonials.slice(0, 6).map((t) => <TestimonialCard key={t.id} t={t} />)}</div>
      </Section>

      {/* Stats */}
      <section className="border-y border-line bg-paper">
        <div className="container-x py-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {proofStats.map((s) => (<div key={s.label} className="border-r last:border-r-0 md:border-r border-line px-3"><div className="font-display text-4xl md:text-5xl font-light tabular-nums">{s.value}</div><div className="text-[11px] font-mono uppercase tracking-[.14em] muted mt-2">{s.label}</div></div>))}
        </div>
      </section>

      {/* FAQ */}
      <Section pad="lg">
        <div className="grid lg:grid-cols-12 gap-12"><div className="lg:col-span-5"><SectionHeader eyebrow="FAQ" title="Common questions." /><Link href="/faq" className="btn btn-outline">Full FAQ</Link></div><div className="lg:col-span-7"><FaqAccordion items={faqs.slice(0, 6)} /></div></div>
      </Section>

      {/* CTA */}
      <section className="border-y border-line bg-ink text-white">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="eyebrow-dark">2 slots · Q4 2026</div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-[76px] font-light tracking-tight leading-[.98] mt-6">Ready to <span className="text-[color:var(--accent)] italic">start</span>?</h2>
            <p className="text-white/70 text-lg mt-6 max-w-xl leading-relaxed">Send a brief. We reply within one business day with either a scoping call — or a friendly no.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/brief" className="btn btn-accent btn-lg">Start a project <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/contact" className="btn btn-outline-light btn-lg">Send a note instead</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
