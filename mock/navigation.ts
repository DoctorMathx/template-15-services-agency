import type { NavItem } from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  studio: [
    { label: "Selected work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About the studio", href: "/about" },
    { label: "Start a project", href: "/brief" },
  ],
  more: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/contact" },
    { label: "Press", href: "/contact" },
  ],
};
