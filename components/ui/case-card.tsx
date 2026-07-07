import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/types";
import { categoryLabel, industryLabel } from "@/lib/utils";

export function CaseCard({ c, size = "md" }: { c: CaseStudy; size?: "sm" | "md" | "lg" }) {
  return (
    <Link href={`/work/${c.slug}`} className="group block">
      <div className={`relative overflow-hidden bg-canvas border border-line ${size === "lg" ? "aspect-[16/9]" : "aspect-[5/4]"}`}>
        <Image src={c.cover} alt={c.title} fill sizes={size === "lg" ? "100vw" : "(max-width:768px) 100vw, 50vw"} className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        <div className="absolute top-4 left-4"><span className="chip chip-light">{categoryLabel(c.category)}</span></div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"><span className="w-10 h-10 rounded-full bg-[color:var(--accent)] text-white flex items-center justify-center"><ArrowUpRight className="w-5 h-5" /></span></div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <div className="text-[12px] muted font-mono uppercase tracking-[.14em]">{c.client} · {industryLabel(c.industry)} · {c.year}</div>
          <h3 className={`font-display font-medium tracking-tight mt-2 leading-snug group-hover:text-[color:var(--accent)] transition-colors ${size === "lg" ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"} line-clamp-2`}>{c.title}</h3>
          {size === "lg" && <p className="text-[15px] muted mt-3 max-w-2xl leading-relaxed">{c.summary}</p>}
        </div>
        <ArrowUpRight className="w-5 h-5 shrink-0 mt-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </Link>
  );
}
