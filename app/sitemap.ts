import type { MetadataRoute } from "next";
import { PROVINCES } from "@/lib/regions";
import { STATIONS } from "@/lib/stations";

export const dynamic = "force-static";
import { SERVICE_CATEGORIES } from "@/lib/serviceCategories";
import { RESERVATION_SECTIONS } from "@/lib/reservationSections";
import { PRICE_SECTIONS } from "@/lib/priceSections";
import { GUIDE_SECTIONS } from "@/lib/guideSections";
import { TRUST_SECTIONS } from "@/lib/trustSections";

const BASE = "https://massage4.pages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const items: MetadataRoute.Sitemap = [];

  const push = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
  ) => {
    items.push({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    });
  };

  // Top-level pages
  push("/", 1.0, "weekly");
  push("/services", 0.8);
  push("/booking", 0.9, "weekly");
  push("/reviews", 0.7, "weekly");
  push("/notices", 0.6, "weekly");
  push("/regions", 0.9, "weekly");

  // Hub overview pages
  push("/service/", 0.9);
  push("/price/", 0.9);
  push("/reservation/", 0.9);
  push("/guide/", 0.8);
  push("/trust/", 0.7, "yearly");
  push("/station/", 0.9);

  // Subway station detail pages
  for (const s of STATIONS) push(`/station/${s.slug}/`, 0.7);

  // Service detail
  for (const c of SERVICE_CATEGORIES) push(`/service/${c.slug}/`, 0.8);

  // Price detail
  for (const s of PRICE_SECTIONS) push(`/price/${s.slug}/`, 0.7);

  // Reservation detail
  for (const s of RESERVATION_SECTIONS) push(`/reservation/${s.slug}/`, 0.7);

  // Guide detail
  for (const s of GUIDE_SECTIONS) push(`/guide/${s.slug}/`, 0.7);

  // Trust detail (yearly — legal pages change rarely)
  for (const s of TRUST_SECTIONS) push(`/trust/${s.slug}/`, 0.5, "yearly");

  // Region pages — three levels
  for (const p of PROVINCES) {
    push(`/regions/${p.slug}`, 0.8);
    for (const c of p.cities) {
      push(`/regions/${p.slug}/${c.slug}`, 0.6);
      for (const d of c.dongs) {
        push(`/regions/${p.slug}/${c.slug}/${d.slug}`, 0.5);
      }
    }
  }

  return items;
}
