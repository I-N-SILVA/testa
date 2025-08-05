import { PRODUCT_LINKS, SOCIAL_LINKS } from "@plyaz/config";

export type FooterLink = {
  labelKey: string;
  href: string;
  external?: boolean;
};

export type FooterSection = {
  titleKey: string;
  links: FooterLink[];
};

export const footerSections = {
  product: {
    titleKey: "Footer.sections.product.title",
    links: [
      { labelKey: "Footer.sections.product.links.features", href: "/#features" },
      {
        labelKey: "Footer.sections.product.links.ecosystem",
        href: "/#ecosystem", 
      },
      {
        labelKey: "Footer.sections.product.links.docs",
        href: PRODUCT_LINKS.docs,
      },
      {
        labelKey: "Footer.sections.product.links.signUp",
        href: PRODUCT_LINKS.community,
      },
    ],
  },
  company: {
    titleKey: "Footer.sections.company.title",
    links: [
      { labelKey: "Footer.sections.company.links.aboutUs", href: "/#about" },
      { labelKey: "Footer.sections.company.links.blog", href: "/#blogs" },
      {
        labelKey: "Footer.sections.company.links.contactUs",
        href: PRODUCT_LINKS.support,
      },
    ],
  },
  social: {
    titleKey: "Footer.sections.social.title",
    links: [
      {
        labelKey: "Footer.sections.social.links.x",
        href: SOCIAL_LINKS.x,
        external: true,
      },
      {
        labelKey: "Footer.sections.social.links.instagram",
        href: SOCIAL_LINKS.instagram,
        external: true,
      },
      {
        labelKey: "Footer.sections.social.links.linkedin",
        href: SOCIAL_LINKS.linkedin,
        external: true,
      },
    ],
  },
};

export const bottomLinks: FooterLink[] = [
  { labelKey: "Footer.legal.cookiePolicy", href: "/cookies" },
  { labelKey: "Footer.legal.termsOfService", href: "/terms" },
];
