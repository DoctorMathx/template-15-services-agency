import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaSection } from "@/components/ui/cta-section";
import { siteConfig } from "@/lib/site-config";
import { proofStats } from "@/mock/testimonials";
import { clientLogos } from "@/mock/products";

export const metadata: Metadata = { title: "The studio" };

const PRINCIPLES = [
  { title: "Small on purpose", body: "Six people. We take on twelve projects a year. It's the reason the work stays good." },
  { title: "Senior on every project", body: "The two partners are on every project. No juniors doing client-facing work, ever." },
  { title: "Strategy before design", body: "Every engagement starts with a two-week discovery. We do not skip it, ever." },
  { title: "Ship, measure, revisit", body: "Every project ends with a 60-day post-launch review. We measure the actual result." },
];

const TEAM = [
  { name: "Adaobi Nnamdi", role: "Founder & partner · strategy", img: "/img/creator.png" },
  { name: "Yemi Adeleke", role: "Partner · design", img: "/img/women-founders.png" },
  { name: "Femi Ojo", role: "Lead designer", img: "/img/women-collaborating.png" },
  { name: "Grace Idowu", role: "Design & motion", img: "/img/women-lounge.png" },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="container-x py-16 md:py-24 max-w-5xl">
          <div className="eyebrow">The studio</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-[92px] font-light tracking-tighter leading-[1] mt-4">Small, senior, in <span className="italic text-[color:var(--accent)]">Lagos.</span></h1>
          <p className="prose-lede mt-6 max-w-2xl">{siteConfig.studio.shortBio}</p>
        </div>
      </section>

      <Section pad="lg">
        <div className="grid lg:grid-cols-12 gap-10 items-center max-w-6xl">
          <div className="lg:col-span-5"><div className="relative aspect-[4/5] bg-canvas overflow-hidden border border-line"><Image src="/img/hero-scene.jpg" alt="Studio Ova" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" /></div></div>
          <div className="lg:col-span-7">
            <div className="eyebrow">Our story</div>
            <div className="mt-6 space-y-5 max-w-xl text-[16px] leading-relaxed text-[color:var(--charcoal)]">{siteConfig.studio.longBio.map((p) => <p key={p}>{p}</p>)}</div>
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section tone="paper" pad="lg">
        <SectionHeader eyebrow="How we work" title="Four things we never break." />
        <div className="grid md:grid-cols-2 gap-0 border-y border-line">
          {PRINCIPLES.map((v, i) => (
            <div key={v.title} className={`py-8 md:px-6 ${i % 2 !== 0 ? "md:border-l border-line" : ""} ${i >= 2 ? "md:border-t border-line" : ""}`}>
              <div className="font-mono text-[11px] muted tracking-[.16em]">0{i + 1}</div>
              <h3 className="font-display text-2xl font-medium mt-4">{v.title}</h3>
              <p className="text-[15px] text-[color:var(--charcoal)] leading-relaxed mt-2 max-w-md">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section pad="lg">
        <SectionHeader eyebrow="Team" title="Six of us." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TEAM.map((t) => (
            <div key={t.name}><div className="relative aspect-square bg-canvas overflow-hidden border border-line"><Image src={t.img} alt={t.name} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" /></div><div className="mt-3 font-display font-medium">{t.name}</div><div className="text-[12px] muted font-mono uppercase tracking-[.1em] mt-0.5">{t.role}</div></div>
          ))}
        </div>
      </Section>

      {/* Clients */}
      <Section tone="canvas" pad="lg">
        <SectionHeader eyebrow="Selected clients" title="Some of the operators we've worked with." />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {clientLogos.map((c) => (<div key={c} className="border border-line py-8 text-center font-display text-lg font-medium">{c}</div>))}
        </div>
      </Section>

      {/* Stats */}
      <section className="border-y border-line bg-paper">
        <div className="container-x py-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">{proofStats.map((s) => (<div key={s.label} className="border-r last:border-r-0 md:border-r border-line px-3"><div className="font-display text-4xl md:text-5xl font-light tabular-nums">{s.value}</div><div className="text-[11px] font-mono uppercase tracking-[.14em] muted mt-2">{s.label}</div></div>))}</div>
      </section>

      <Section pad="sm"><CtaSection eyebrow="Start" title="Have a project in mind?" primary={{ label: "Send a brief", href: "/brief" }} secondary={{ label: "See our work", href: "/work" }} tone="dark" /></Section>
    </>
  );
}
