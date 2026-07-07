"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "@/mock/navigation";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 6);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`sticky top-0 z-40 bg-white/94 backdrop-blur transition-colors ${scrolled ? "border-b border-line" : ""}`}>
      <div className="container-x flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--accent)]" />
          <span className="font-display font-semibold text-[18px] tracking-tight">{siteConfig.brand.name}</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href ?? "#"} className="text-[13.5px] font-medium link-underline">{item.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex items-center gap-2 text-[11.5px] font-mono uppercase tracking-[.14em] muted"><span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)] animate-pulse" /> 2 slots open</span>
          <Link href="/brief" className="btn btn-primary btn-sm">Start a project</Link>
          <button onClick={() => setMobileOpen(true)} aria-label="Menu" className="lg:hidden p-2 -mr-2"><Menu className="w-5 h-5" /></button>
        </div>
      </div>
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[86%] max-w-[360px] bg-white flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-line"><span className="font-display font-semibold">{siteConfig.brand.name}</span><button onClick={() => setMobileOpen(false)}><X className="w-5 h-5" /></button></div>
            <nav className="flex-1 overflow-y-auto px-2 py-3">{navItems.map((item) => (<Link key={item.label} href={item.href ?? "#"} onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-[15px] font-medium rounded-md hover:bg-paper">{item.label}</Link>))}</nav>
            <div className="p-5 border-t border-line"><Link href="/brief" onClick={() => setMobileOpen(false)} className="btn btn-accent w-full">Start a project</Link></div>
          </div>
        </div>
      )}
    </header>
  );
}
