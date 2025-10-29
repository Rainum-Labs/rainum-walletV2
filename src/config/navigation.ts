export type NavItem = {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
};

export const marketingNav: NavItem[] = [
  { title: "Produkt", href: "/#platform" },
  { title: "Sikkerhed", href: "/#security" },
  { title: "Governance", href: "/#governance" },
  {
    title: "Docs",
    href: "https://docs.rainum.io",
    external: true,
  },
];

export const appNav: NavItem[] = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Bridge", href: "/dashboard/bridge" },
  { title: "Staking", href: "/dashboard/staking" },
  { title: "Governance", href: "/dashboard/governance" },
  { title: "Security Center", href: "/dashboard/security" },
  { title: "Developer", href: "/dashboard/developer" },
];
