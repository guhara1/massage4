import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROVINCES, findDong } from "@/lib/regions";
import { SITE, contactForProvince } from "@/lib/site";
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
import { recommendForDong } from "@/lib/regionRecommendations";
import { makeTitle, makeDescription } from "@/lib/regionVariants";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { getRegionFaqItems } from "@/lib/regionVariants";

type Props = {
  params: Promise<{ province: string; city: string; dong: string }>;
};

export function generateStaticParams() {
  return PROVINCES.flatMap((p) =>
    p.cities.flatMap((c) =>
      c.dongs.map((dg) => ({
        province: p.slug,
        city: c.slug,
        dong: dg.slug,
      })),
    ),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { province, city, dong } = await params;
  const found = findDong(province, city, dong);
  if (!found) return {};
  const fullName = `${found.province.shortName} ${found.city.name} ${found.dong.name}`;
  const slug = `${province}-${city}-${dong}`;
  const title = makeTitle(slug, fullName);
  const description = makeDescription({
    slug,
    full: fullName,
    short: found.dong.name,
    hours: SITE.hours,
  });
  return {
    title,
    description,
    openGraph: {
      title: `${title} · ${SITE.name}`,
      description,
    },
    alternates: { canonical: `/regions/${province}/${city}/${dong}` },
  };
}

export default async function DongPage({ params }: Props) {
  const { province: provinceSlug, city: citySlug, dong: dongSlug } = await params;
  const found = findDong(provinceSlug, citySlug, dongSlug);
  if (!found) notFound();
  const { province, city, dong } = found;

  const siblings = city.dongs
    .filter((d) => d.slug !== dong.slug)
    .sort((a, b) => a.name.localeCompare(b.name, "ko-KR"))
    .slice(0, 12);

  const fullName = `${province.shortName} ${city.name} ${dong.name}`;
  const geoName = dong.name;
  const contact = contactForProvince(provinceSlug);
  const slug = `${provinceSlug}-${citySlug}-${dongSlug}`;
  const heroDesc = makeHeroDescription(slug, fullName);
  const faqItems = getRegionFaqItems(slug, geoName);
  const crumbs = [
    { name: "전국 지역", url: "/regions" },
    { name: province.shortName, url: `/regions/${province.slug}` },
    { name: city.name, url: `/regions/${province.slug}/${city.slug}` },
    { name: dong.name, url: `/regions/${province.slug}/${city.slug}/${dong.slug}` },
  ];


  return (
    <article className="space-y-14">
      <BreadcrumbJsonLd items={crumbs} />
      <FaqJsonLd items={faqItems} />
      <nav className="flex flex-wrap items-center gap-2 text-xs text-white/60">
        <Link href="/regions" className="hover:text-brand-600">전국 지역</Link>
        <span aria-hidden>›</span>
        <Link href={`/regions/${province.slug}`} className="hover:text-brand-600">
          {province.shortName}
        </Link>
        <span aria-hidden>›</span>
        <Link
          href={`/regions/${province.slug}/${city.slug}`}
          className="hover:text-brand-600"
        >
          {city.name}
        </Link>
        <span aria-hidden>›</span>
        <span className="text-brand-700">{dong.name}</span>
      </nav>

      <HeroBlock
        badge={`${province.shortName} · ${city.name}`}
        h1Top={`${dong.name} 출장마사지 이용 안내`}
        h1Sub={`${fullName} 합법 출장 바디케어`}
        description={heroDesc}
        contact={contact}
      />

      <WhoUsesSection geoName={geoName} slug={slug} />

      <section className="space-y-5">
        <SectionHeader title={`${geoName} 방문 가능 지역 안내`} />
        <div className="rounded-2xl border border-brand-200 bg-brand-100/60 p-5 text-sm text-white/85 sm:p-6">
          <p>
            현재 페이지는 <b className="text-brand-700">{fullName}</b> 출장
            안내 페이지입니다. {city.name} 내 다른 행정동도 동일 조건으로
            출장이 가능합니다. 인접 행정동을 함께 확인해 보세요.
          </p>
          {siblings.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {siblings.map((sib) => (
                <Link
                  key={sib.slug}
                  href={`/regions/${province.slug}/${city.slug}/${sib.slug}`}
                  className="rounded-full border border-brand-300 bg-brand-100 px-3 py-1.5 text-sm font-medium text-white transition hover:border-brand-500 hover:bg-brand-200/40 hover:text-brand-800"
                >
                  {sib.name}
                </Link>
              ))}
              <Link
                href={`/regions/${province.slug}/${city.slug}`}
                className="rounded-full border border-brand-400 px-3 py-1.5 text-sm font-semibold text-brand-600 transition hover:bg-brand-100"
              >
                {city.name} 전체 보기 →
              </Link>
            </div>
          )}
        </div>
      </section>

      <PreReservationSection geoName={geoName} slug={slug} />
      <CoursesSection slug={slug} />
      <ProcessSection geoName={geoName} slug={slug} />
      <PriceInfoSection geoName={geoName} slug={slug} />
      <SafetyNoticeSection slug={slug} />
      <RegionFaqSection geoName={geoName} slug={slug} />
      <PopularRegionLinks
        items={recommendForDong(provinceSlug, citySlug, dongSlug)}
      />

      <section className="rounded-2xl border border-brand-200 bg-brand-100 p-6 text-center sm:p-8">
        <h2 className="text-xl font-bold text-brand-800 sm:text-2xl">
          {fullName} 즉시 예약 문의
        </h2>
        <p className="mt-2 text-sm text-white/80">
          상담 후 본인 인증을 거쳐 바로 예약을 확정해 드립니다.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/booking" className="btn-primary">
            예약 문의 보내기
          </Link>
          {contact.kind === "phone" ? (
            <a
              href={`tel:${contact.phone.replace(/-/g, "")}`}
              className="btn-ghost"
            >
              전화 {contact.phone}
            </a>
          ) : (
            <span className="btn-ghost cursor-default">{contact.label}</span>
          )}
        </div>
      </section>
    </article>
  );
}
