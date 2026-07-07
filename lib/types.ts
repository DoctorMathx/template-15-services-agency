export type CaseCategory = "brand-identity" | "product-design" | "website" | "packaging" | "campaign";
export type CaseIndustry = "fintech" | "healthtech" | "d2c" | "media" | "b2b" | "public";

export type CaseStudy = {
  id: string;
  title: string;
  slug: string;
  client: string;
  category: CaseCategory;
  industry: CaseIndustry;
  year: string;
  summary: string;
  problem?: string;
  approach?: string[];
  outcome?: string[];
  cover: string;
  hero?: string;
  gallery?: string[];
  services: string[];
  duration: string;
  metrics?: { label: string; value: string }[];
  featured?: boolean;
  flagship?: boolean;
};

export type Service = {
  id: string;
  slug: string;
  title: string;
  short: string;
  scope: string[];
  duration: string;
  from: number;
  interval?: "project" | "month";
  featured?: boolean;
};

export type Testimonial = { id: string; quote: string; name: string; role?: string; company?: string; rating?: number };
export type Faq = { id: string; question: string; answer: string; topic?: string };
export type NavItem = { label: string; href?: string; children?: { label: string; href: string; description?: string }[] };
