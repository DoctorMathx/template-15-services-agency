import { siteConfig } from "./site-config";
export function formatPrice(v: number, currency = siteConfig.commerce.currency) { return v === 0 ? "Free" : `${currency}${v.toLocaleString("en-NG")}`; }
export function cn(...c: (string | false | null | undefined)[]) { return c.filter(Boolean).join(" "); }
export function categoryLabel(c: string) { return ({ "brand-identity": "Brand identity", "product-design": "Product design", website: "Website", packaging: "Packaging", campaign: "Campaign" } as Record<string, string>)[c] ?? c; }
export function industryLabel(i: string) { return ({ fintech: "Fintech", healthtech: "Healthtech", d2c: "D2C", media: "Media", b2b: "B2B", public: "Public sector" } as Record<string, string>)[i] ?? i; }
