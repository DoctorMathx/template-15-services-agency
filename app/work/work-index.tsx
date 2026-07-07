"use client";
import { useMemo, useState } from "react";
import { CaseCard } from "@/components/ui/case-card";
import { caseStudies } from "@/mock/products";
import type { CaseCategory, CaseIndustry } from "@/lib/types";

const CATS: { id: CaseCategory | "all"; label: string }[] = [
  { id: "all", label: "All work" }, { id: "brand-identity", label: "Brand" }, { id: "product-design", label: "Product" }, { id: "website", label: "Website" }, { id: "packaging", label: "Packaging" }, { id: "campaign", label: "Campaign" },
];
const INDS: { id: CaseIndustry | "all"; label: string }[] = [
  { id: "all", label: "Any industry" }, { id: "fintech", label: "Fintech" }, { id: "healthtech", label: "Healthtech" }, { id: "d2c", label: "D2C" }, { id: "media", label: "Media" }, { id: "b2b", label: "B2B" }, { id: "public", label: "Public" },
];

export function WorkIndex() {
  const [cat, setCat] = useState<CaseCategory | "all">("all");
  const [ind, setInd] = useState<CaseIndustry | "all">("all");
  const list = useMemo(() => {
    let l = [...caseStudies];
    if (cat !== "all") l = l.filter((c) => c.category === cat);
    if (ind !== "all") l = l.filter((c) => c.industry === ind);
    return l;
  }, [cat, ind]);
  return (
    <>
      <section className="border-b border-line">
        <div className="container-x py-16 md:py-24 max-w-5xl">
          <div className="eyebrow">Selected work</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-[92px] font-light tracking-tighter leading-[1] mt-4">47 projects. <span className="italic text-[color:var(--accent)]">A few</span> we can show.</h1>
          <p className="prose-lede mt-6 max-w-2xl">A selection of work from the last three years. Some clients we can name; some we can&apos;t. Ping us for the full case-study deck.</p>
        </div>
      </section>
      <section className="sticky top-[68px] z-30 bg-white/95 backdrop-blur border-b border-line">
        <div className="container-x py-4 flex flex-col md:flex-row md:items-center gap-3 justify-between">
          <div className="flex items-center gap-2 -mx-2 px-2 overflow-x-auto no-scrollbar">{CATS.map((c) => (<button key={c.id} onClick={() => setCat(c.id)} className={`chip whitespace-nowrap ${cat === c.id ? "chip-dark" : "hover:border-[color:var(--ink)]"}`}>{c.label}</button>))}</div>
          <div className="flex items-center gap-2 -mx-2 px-2 overflow-x-auto no-scrollbar">{INDS.map((i) => (<button key={i.id} onClick={() => setInd(i.id)} className={`chip whitespace-nowrap ${ind === i.id ? "chip-accent" : "hover:border-[color:var(--ink)]"}`}>{i.label}</button>))}</div>
        </div>
      </section>
      <div className="container-x pt-8 pb-16">
        <div className="text-[13px] muted mb-8 font-mono">{list.length.toString().padStart(2, "0")} project{list.length === 1 ? "" : "s"}</div>
        {list.length === 0 ? <div className="text-center py-24 border border-dashed border-line"><p className="font-display text-2xl font-medium">Nothing matches those filters.</p></div> : (
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">{list.map((c) => <CaseCard key={c.id} c={c} />)}</div>
        )}
      </div>
    </>
  );
}
