import { SITE } from "@/lib/site";

const BASE = "https://massage4.pages.dev";

/**
 * Site-wide LocalBusiness + Organization JSON-LD.
 * Rendered once in the root layout so every page exposes the same
 * brand identity to search engines.
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    "@id": `${BASE}#org`,
    name: SITE.name,
    alternateName: "VIP 출장",
    description: SITE.description,
    url: BASE,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${BASE}/og-image.jpg`,
    logo: `${BASE}/icon.svg`,
    priceRange: "₩₩",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: "서울특별시",
      addressRegion: "서울특별시",
      addressCountry: "KR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "13:00",
        closes: "08:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "대한민국",
    },
    sameAs: [],
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export type Crumb = { name: string; url: string };

/** BreadcrumbList — used on dynamic detail pages */
export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${BASE}${it.url}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** FAQPage — applied where a Q/A list is shown */
export function FaqJsonLd({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  if (!items || items.length === 0) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
