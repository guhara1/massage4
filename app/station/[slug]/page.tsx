import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import {
  STATIONS,
  LINES,
  findStation,
  getLinesForStation,
  nearbyStations,
} from "@/lib/stations";
import { findCity, findDong } from "@/lib/regions";
import {
  WhoUsesSection,
  PreReservationSection,
  CoursesSection,
  ProcessSection,
  PriceInfoSection,
  SafetyNoticeSection,
  RegionFaqSection,
  SectionHeader,
} from "@/components/RegionContent";
import { Prose } from "@/components/Prose";
import { makeTitle, makeDescription, pickOne, HERO_DESCRIPTION_VARIANTS } from "@/lib/regionVariants";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { getRegionFaqItems } from "@/lib/regionVariants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return STATIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = findStation(slug);
  if (!s) return {};
  const fullName = `${s.district} ${s.name}역`;
  const seedKey = `station-${s.slug}`;
  const title = makeTitle(seedKey, `${s.name}역`);
  const description = makeDescription({
    slug: seedKey,
    full: fullName,
    short: `${s.name}역`,
    hours: SITE.hours,
  });
  return {
    title,
    description,
    openGraph: {
      title: `${title} · ${SITE.name}`,
      description,
    },
    alternates: { canonical: `/station/${slug}/` },
  };
}

export default async function StationPage({ params }: Props) {
  const { slug } = await params;
  const s = findStation(slug);
  if (!s) notFound();

  const lines = getLinesForStation(s);
  const peers = nearbyStations(s, 6);
  const dongRef = findDong(s.province, s.city, s.dong);
  const cityRef = findCity(s.province, s.city);
  const fullName = `${s.district} ${s.name}역`;
  const geoName = `${s.name}역`;
  const seedKey = `station-${s.slug}`;
  const heroDesc = pickOne(seedKey, HERO_DESCRIPTION_VARIANTS, "hero")(fullName);
  const faqItems = getRegionFaqItems(seedKey, geoName);
  const crumbs = [
    { name: "지하철역별 안내", url: "/station/" },
    { name: `${s.name}역`, url: `/station/${s.slug}/` },
  ];


  return (
    <article className="space-y-14">
      <BreadcrumbJsonLd items={crumbs} />
      <FaqJsonLd items={faqItems} />
      <nav className="flex flex-wrap items-center gap-2 text-xs text-white/60">
        <Link href="/station/" className="hover:text-brand-600">지하철역별 안내</Link>
        <span aria-hidden>›</span>
        <span className="text-brand-700">{s.name}역</span>
      </nav>

      <header className="overflow-hidden rounded-3xl border border-brand-200 bg-brand-100 shadow-[0_0_60px_-15px_rgba(34,197,94,0.45)]">
        <div className="grid items-stretch md:grid-cols-3">
          <div className="flex flex-col justify-between gap-6 p-7 sm:p-10 md:col-span-2">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-brand-400 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {s.district}
                </span>
                {lines.map((l) => (
                  <span
                    key={l.slug}
                    className="inline-flex h-6 items-center justify-center rounded-full px-2.5 text-[11px] font-extrabold text-white"
                    style={{ backgroundColor: l.color }}
                  >
                    {l.name}
                  </span>
                ))}
              </div>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
                {s.name}역 출장마사지
                <span className="mt-1 block text-brand-500 sm:text-3xl lg:text-4xl">
                  {s.district} 인근 출장 안내
                </span>
              </h1>
              <Prose
                text={heroDesc}
                className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/booking" className="btn-primary">
                {s.name}역 예약 문의
              </Link>
              <a href={`tel:${SITE.phone.replace(/-/g, "")}`} className="btn-ghost">
                전화 상담 {SITE.phone}
              </a>
            </div>
          </div>
          <div className="relative min-h-[320px] bg-brand-50 md:col-span-1 md:min-h-0">
            <img
              src="/hero-vip.jpg"
              alt={`${fullName} 안내`}
              className="absolute inset-0 h-full w-full object-contain object-center"
              loading="eager"
            />
          </div>
        </div>
      </header>

      {/* Subway lines + nearest dong section */}
      <section className="space-y-5">
        <SectionHeader title={`${s.name}역 주변 출장 가능 지역`} />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
            <h3 className="text-sm font-bold text-brand-700">노선 정보</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/85">
              {lines.map((l) => (
                <li key={l.slug} className="flex items-center gap-2">
                  <span
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                    style={{ backgroundColor: l.color }}
                  >
                    {l.shortName}
                  </span>
                  <span>{l.name}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs leading-relaxed text-white/65">
              {lines.length}개 노선이 환승되는{lines.length > 1 ? "" : ""} 위치로,
              {s.district} 인근 자택·호텔·오피스로 즉시 출장 가능합니다.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
            <h3 className="text-sm font-bold text-brand-700">
              가장 가까운 행정동
            </h3>
            {dongRef && (
              <Link
                href={`/regions/${s.province}/${s.city}/${s.dong}/`}
                className="group mt-3 flex items-baseline justify-between rounded-xl border border-brand-300 bg-brand-200/30 px-4 py-3 transition hover:border-brand-500 hover:bg-brand-200/60"
              >
                <span className="text-sm font-bold text-white group-hover:text-brand-800">
                  {dongRef.dong.name}
                </span>
                <span className="text-xs text-brand-600">자세히 보기 →</span>
              </Link>
            )}
            {cityRef && (
              <Link
                href={`/regions/${s.province}/${s.city}/`}
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:underline"
              >
                {cityRef.city.name} 전체 행정동 보기 →
              </Link>
            )}
          </div>
        </div>
      </section>

      <WhoUsesSection geoName={geoName} slug={seedKey} />
      <PreReservationSection geoName={geoName} slug={seedKey} />
      <CoursesSection slug={seedKey} />
      <ProcessSection geoName={geoName} slug={seedKey} />
      <PriceInfoSection geoName={geoName} slug={seedKey} />
      <SafetyNoticeSection slug={seedKey} />
      <RegionFaqSection geoName={geoName} slug={seedKey} />

      {/* Nearby stations */}
      {peers.length > 0 && (
        <section className="space-y-5">
          <SectionHeader title="인근 지하철역도 함께 둘러보세요" />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {peers.map((p) => {
              const pl = getLinesForStation(p);
              return (
                <li key={p.slug}>
                  <Link
                    href={`/station/${p.slug}/`}
                    className="group flex h-full flex-col rounded-xl border border-brand-300 bg-brand-100 p-4 transition hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-200/30"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-brand-700">
                        {p.district}
                      </span>
                      <div className="flex gap-1">
                        {pl.slice(0, 3).map((l) => (
                          <span
                            key={l.slug}
                            className="inline-flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold text-white"
                            style={{ backgroundColor: l.color }}
                          >
                            {l.shortName}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="mt-1.5 text-base font-bold text-white group-hover:text-brand-800">
                      {p.name}역 출장마사지
                    </h3>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <section className="rounded-2xl border border-brand-200 bg-brand-100 p-6 text-center sm:p-8">
        <h2 className="text-xl font-bold text-brand-800 sm:text-2xl">
          {s.name}역 즉시 예약 문의
        </h2>
        <p className="mt-2 text-sm text-white/80">
          상담 후 본인 인증을 거쳐 바로 예약을 확정해 드립니다.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/booking" className="btn-primary">예약 문의 보내기</Link>
          <a href={`tel:${SITE.phone.replace(/-/g, "")}`} className="btn-ghost">
            전화 {SITE.phone}
          </a>
        </div>
      </section>
    </article>
  );
}
