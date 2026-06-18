import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROVINCES, findProvince } from "@/lib/regions";
import { SITE, phoneForProvince } from "@/lib/site";
import {
  HeroBlock,
  WhoUsesSection,
  PreReservationSection,
  CoursesSection,
  ProcessSection,
  PriceInfoSection,
  SafetyNoticeSection,
  RegionFaqSection,
  SectionHeader,
  makeHeroDescription,
} from "@/components/RegionContent";
import PopularRegionLinks from "@/components/PopularRegionLinks";
import { recommendForProvince } from "@/lib/regionRecommendations";
import { makeTitle, makeDescription } from "@/lib/regionVariants";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { getRegionFaqItems } from "@/lib/regionVariants";

type Props = { params: Promise<{ province: string }> };

export function generateStaticParams() {
  return PROVINCES.map((p) => ({ province: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { province: provinceSlug } = await params;
  const province = findProvince(provinceSlug);
  if (!province) return {};
  const dongCount = province.cities.reduce((s, c) => s + c.dongs.length, 0);
  const slug = `province-${provinceSlug}`;
  const title = makeTitle(slug, province.shortName);
  const description = makeDescription({
    slug,
    full: province.name,
    short: province.shortName,
    count: province.cities.length,
    countLabel: "시·군·구",
    hours: SITE.hours,
  });
  return {
    title,
    description,
    openGraph: {
      title: `${title} · ${SITE.name}`,
      description,
    },
    alternates: { canonical: `/regions/${provinceSlug}` },
    other: {
      "dong-count": String(dongCount),
    },
  };
}

export default async function ProvincePage({ params }: Props) {
  const { province: provinceSlug } = await params;
  const province = findProvince(provinceSlug);
  if (!province) notFound();

  const dongCount = province.cities.reduce((s, c) => s + c.dongs.length, 0);
  const sortedCities = [...province.cities].sort((a, b) =>
    a.name.localeCompare(b.name, "ko-KR"),
  );
  const geoName = province.shortName;
  const phone = phoneForProvince(provinceSlug);
  const slug = `province-${provinceSlug}`;
  const heroDesc = makeHeroDescription(slug, province.name);
  const faqItems = getRegionFaqItems(slug, geoName);
  const crumbs = [
    { name: "전국 지역", url: "/regions" },
    { name: province.shortName, url: `/regions/${province.slug}` },
  ];


  return (
    <article className="space-y-14">
      <BreadcrumbJsonLd items={crumbs} />
      <FaqJsonLd items={faqItems} />
      <nav className="flex items-center gap-2 text-xs text-white/60">
        <Link href="/regions" className="hover:text-brand-600">전국 지역</Link>
        <span aria-hidden>›</span>
        <span className="text-brand-700">{province.shortName}</span>
      </nav>

      <HeroBlock
        badge={province.tagline}
        h1Top={`${province.shortName} 출장마사지 이용 안내`}
        h1Sub={`${province.cities.length}개 시·군·구 · ${dongCount}개 행정동 출장`}
        description={heroDesc}
        phone={phone}
      />

      <WhoUsesSection geoName={geoName} slug={slug} />

      <section className="space-y-5">
        <SectionHeader title={`${province.shortName} 방문 가능 지역 안내`} />
        <p className="text-sm text-white/85">
          {province.shortName} 권역은 아래 <b className="text-brand-700">{province.cities.length}</b>개
          시·군·구에서 출장이 가능합니다. 시·군·구를 선택하면 해당 행정동
          목록으로 이동합니다.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedCities.map((city) => {
            const sortedDongs = [...city.dongs].sort((a, b) =>
              a.name.localeCompare(b.name, "ko-KR"),
            );
            return (
              <Link
                key={city.slug}
                href={`/regions/${province.slug}/${city.slug}`}
                className="group flex flex-col rounded-2xl border border-brand-200 bg-brand-100 p-5 transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-[0_0_30px_-12px_rgba(34,197,94,0.45)]"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-bold text-brand-800">{city.name}</h3>
                  <span className="text-xs text-white/50">
                    행정동{" "}
                    <b className="ml-0.5 text-sm text-white">
                      {city.dongs.length}
                    </b>
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {sortedDongs.slice(0, 5).map((dg) => (
                    <span
                      key={dg.slug}
                      className="rounded-full border border-brand-300 bg-brand-200/40 px-2.5 py-0.5 text-[11px] font-medium text-white"
                    >
                      {dg.name}
                    </span>
                  ))}
                  {city.dongs.length > 5 && (
                    <span className="rounded-full border border-brand-400/60 bg-transparent px-2.5 py-0.5 text-[11px] font-semibold text-brand-600">
                      +{city.dongs.length - 5}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-end text-sm font-semibold text-brand-600">
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <PreReservationSection geoName={geoName} slug={slug} />
      <CoursesSection slug={slug} />
      <ProcessSection geoName={geoName} slug={slug} />
      <PriceInfoSection geoName={geoName} slug={slug} />
      <SafetyNoticeSection slug={slug} />
      <RegionFaqSection geoName={geoName} slug={slug} />
      <PopularRegionLinks items={recommendForProvince(provinceSlug)} />

      <section className="rounded-2xl border border-brand-200 bg-brand-100 p-6 text-center sm:p-8">
        <h2 className="text-xl font-bold text-brand-800 sm:text-2xl">
          {province.shortName} 즉시 예약 문의
        </h2>
        <p className="mt-2 text-sm text-white/80">
          상담 후 본인 인증을 거쳐 바로 예약을 확정해 드립니다.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/booking" className="btn-primary">
            예약 문의 보내기
          </Link>
          <a href={`tel:${phone.replace(/-/g, "")}`} className="btn-ghost">
            전화 {phone}
          </a>
        </div>
      </section>
    </article>
  );
}
