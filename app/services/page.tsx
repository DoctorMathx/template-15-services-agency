import Link from "next/link";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaSection } from "@/components/ui/cta-section";
import { services } from "@/mock/products";
import { formatPrice } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="container-x py-16 md:py-24 max-w-4xl">
          <div className="eyebrow">Services</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-[80px] font-light tracking-tighter leading-[1] mt-4">Six ways to <span className="italic text-[color:var(--accent)]">work</span> with us.</h1>
          <p className="prose-lede mt-6 max-w-2xl">Fixed-fee projects or a monthly retainer. Every engagement is quoted after a 30-minute scoping call.</p>
        </div>
      </section>
      <Section pad="lg">
        <div className="divide-y divide-[color:var(--line-strong)] border-y border-line">
          {services.map((s, i) => (
            <article id={s.slug} key={s.id} className="py-12 md:py-14 grid md:grid-cols-12 gap-8">
              <div className="md:col-span-1 font-mono text-[11px] muted tracking-[.14em]">0{i + 1}</div>
              <div className="md:col-span-5">
                <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight leading-tight">{s.title}</h2>
                <p className="prose-lede mt-4">{s.short}</p>
                <div className="mt-6 flex items-center gap-3 text-[11.5px] font-mono uppercase tracking-[.14em] muted"><span>{s.duration}</span><span className="w-1 h-1 rounded-full bg-[color:var(--slate)]" /><span>From {formatPrice(s.from)}{s.interval === "month" ? " / mo" : ""}</span></div>
              </div>
              <div className="md:col-span-6">
                <div className="label mb-4">What&apos;s in scope</div>
                <ul className="space-y-2.5">{s.scope.map((sc) => (<li key={sc} className="flex items-start gap-3 text-[14.5px] text-[color:var(--charcoal)] leading-relaxed"><Check className="w-4 h-4 text-[color:var(--accent)] mt-0.5 shrink-0" />{sc}</li>))}</ul>
                <div className="mt-6"><Link href="/brief" className="btn btn-primary btn-sm">Start with this service <ArrowRight className="w-3.5 h-3.5" /></Link></div>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section pad="sm"><CtaSection eyebrow="Slots open" title="Ready to start?" primary={{ label: "Send a brief", href: "/brief" }} secondary={{ label: "See recent work", href: "/work" }} tone="dark" /></Section>
    </>
  );
}
