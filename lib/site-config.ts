export const siteConfig = {
  brand: {
    name: "Studio Ova",
    tagline: "Brand + product design for African challengers.",
    domain: "studioova.co",
    email: "hello@studioova.co",
    whatsapp: "+234 700 000 0000",
    city: "Lagos · Remote across Africa",
    social: { instagram: "https://instagram.com/studioova", twitter: "https://twitter.com/studioova", linkedin: "https://linkedin.com/company/studioova" },
  },
  studio: {
    name: "Studio Ova",
    role: "Small, sharp, six people",
    portrait: "/img/hero-portrait.jpg",
    shortBio: "We are a six-person studio in Lagos designing brands and products for the operators building the next Africa.",
    longBio: [
      "We started Studio Ova in 2022 with one thesis: African challenger brands deserve the same quality of design as the best studios in London or NYC — without the six-month waiting list and the ₦120m invoice.",
      "Four years later, we're six people, we've shipped 47 projects, and we've been trusted by some of the most interesting companies on the continent.",
      "We take on 12 projects a year. That's it. We keep the studio small on purpose.",
    ],
    metric: "47 projects · 6 people · 12 slots a year",
  },
  hero: {
    tag: "Q4 · 2 project slots open",
    primaryCta: { label: "Start a project", href: "/brief" },
    secondaryCta: { label: "See recent work", href: "/work" },
  },
  commerce: { currency: "₦" },
} as const;
