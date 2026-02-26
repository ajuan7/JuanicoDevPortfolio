import { MetadataRoute } from "next";

const SITE_URL = "https://juanicodevsolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/projects`, lastModified: new Date() },
    { url: `${SITE_URL}/contact`, lastModified: new Date() },
  ];
}