interface FooterLink {
  name: string;
  href: string;
  isExternal?: boolean;
}

interface FooterCategory {
  title: string;
  links: FooterLink[];
}

export const footerLinks: FooterCategory[] = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Workflow", href: "#workflow" },
      { name: "Pricing", href: "#" },
      { name: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "#" },
    ],
  },
];

