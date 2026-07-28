import { contactDetails } from "@/data/contact";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const configuredSiteUrl = rawSiteUrl ? rawSiteUrl.replace(/\/$/, "") : undefined;
const contactDomain = contactDetails.email.split("@")[1];
const inferredSiteUrl = contactDomain ? `https://${contactDomain}` : undefined;
const defaultSiteUrl = "https://leanodigitalgroup.com";

export const site = {
  name: "Leano Digital Group",
  legalName: "Leano Digital Group (Pty) Ltd.",
  url: configuredSiteUrl ?? inferredSiteUrl ?? defaultSiteUrl,
  description:
    "Azure, AI and data delivery for mid-market and enterprise organisations that need to automate work and make faster decisions.",
};
