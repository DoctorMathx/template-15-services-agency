import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { CaseCard } from "@/components/ui/case-card";
import { featuredCases } from "@/mock/products";
import { siteConfig } from "@/lib/site-config";
import { CheckCircle2, Mail, Calendar, FileText } from "lucide-react";

export const metadata: Metadata = { title: "Brief received" };

export default function ThankYouPage() {
  const cases = featuredCases().slice(0, 2);
  return (
    <>
      <section className="border-b border-line">
        <div className="container-x py-16 md:py-24 max-w-3xl">
          <div className="chip chip-accent"><CheckCircle2 className="w-4 h-4" /> Brief received</div>
          <h1 className="font-display text-5xl md:text-6xl font-light tracking-tighter leading-[1] mt-6">Got it. Thank you.</h1>
          <p className="prose-lede mt-5 max-w-xl">A partner will read your brief today and come back within one business day.</p>
        </div>
      </section>
      <Section pad="md">
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl">
          {[
            { icon: Mail, title: "01 · Confirmation email", body: "In your inbox in the next few minutes. Not there? Check spam." },
            { icon: Calendar, title: "02 · A scoping call", body: "If we&apos;re a fit, we&apos;ll propose a 30-min call within one business day." },
            { icon: FileText, title: "03 · A written scope", body: "After the call, a fixed-fee scope you can share with your team." },
          ].map((s) => { const Icon = s.icon; return (<div key={s.title} className="border border-line p-6"><div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center text-[color:var(--accent-ink)]"><Icon className="w-4 h-4" /></div><div className="font-display font-medium mt-4">{s.title}</div><p className="text-[13.5px] muted mt-1 leading-relaxed" dangerouslySetInnerHTML={{ __html: s.body }} /></div>); })}
        </div>
      </Section>
      <Section tone="canvas" pad="md">
        <div className="mb-8"><div className="eyebrow">While you wait</div><h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mt-3">A little more of our work.</h2></div>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">{cases.map((c) => <CaseCard key={c.id} c={c} />)}</div>
        <div className="mt-10"><Link href="/work" className="btn btn-outline">See all work</Link></div>
        <p className="mt-10 text-[13px] muted font-mono">Need us urgently? Email {siteConfig.brand.email}.</p>
      </Section>
    </>
  );
}
