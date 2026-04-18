export type ObjectStatus = "verfuegbar" | "reserviert" | "verkauft";

export type ObjectEntry = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  teaser: string;
  story: string;
  description: string;
  condition: string;
  price: string;
  location: string;
  pickup: string;
  status: ObjectStatus;
  images: string[];
  videoUrl?: string;
  extras?: string[];
};

export type SiteContent = {
  siteTitle: string;
  siteTagline: string;
  intro: string;
  contactEmail: string;
  contactPhone?: string;
  footerText: string;
};
