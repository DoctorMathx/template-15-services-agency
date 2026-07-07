import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { footerLinks } from "@/mock/navigation";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5"><span className="w-2.5 h-2.5 rounded-full bg-[color:var(--accent)]" /><span className="font-display font-semibold text-[18px]">{siteConfig.brand.name}</span></div>
            <p className="mt-4 text-[14.5px] text-white/70 max-w-sm leading-relaxed">{siteConfig.brand.tagline}</p>
            <div className="mt-8 flex gap-3">
              <a href={siteConfig.brand.social.instagram} className="btn btn-outline-light btn-sm">Instagram</a>
              <a href={siteConfig.brand.social.twitter} className="btn btn-outline-light btn-sm">Twitter</a>
              <a href={siteConfig.brand.social.linkedin} className="btn btn-outline-light btn-sm">LinkedIn</a>
            </div>
          </div>
          <div><h4 className="eyebrow-dark mb-4">Studio</h4><ul className="space-y-2.5">{footerLinks.studio.map((i) => (<li key={i.label}><Link href={i.href} className="text-[14px] text-white/70 hover:text-white">{i.label}</Link></li>))}</ul></div>
          <div><h4 className="eyebrow-dark mb-4">More</h4><ul className="space-y-2.5">{footerLinks.more.map((i) => (<li key={i.label}><Link href={i.href} className="text-[14px] text-white/70 hover:text-white">{i.label}</Link></li>))}</ul></div>
        </div>
        <div className="mt-12 pt-6 divider-dark flex flex-col md:flex-row justify-between gap-2">
          <p className="text-[12px] text-white/40 font-mono">© {new Date().getFullYear()} {siteConfig.brand.name}. Built on FinStore.</p>
          <p className="text-[12px] text-white/40 font-mono">{siteConfig.brand.city}</p>
        </div>
      </div>
    </footer>
  );
}
