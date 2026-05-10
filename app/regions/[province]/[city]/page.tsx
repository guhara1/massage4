import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROVINCES, findCity } from "@/lib/regions";
import { SITE } from "@/lib/site";
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
} from "@/components/RegionContent";

type Props = { params: Promise<{ province: string; city: string }> };

export function generateStaticParams() {
  return PROVINCES.flatMap((p) =>
    p.cities.map((c) => ({ province: p.slug, city: c.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { province: provinceSlug, city: citySlug } = await params;
  const found = findCity(provinceSlug, citySlug);
  if (!found) return {};
  const { province, city } = found;
  return {
    title: `${city.name} 출장마사지 이용 안내`,
    description: `${province.shortName} ${city.name} 전 ${city.dongs.length}개 행정동 출장마사지·홈타이 이용 안내. 정찰제 가격, 본인 인증 후 빠른 배정. 운영 시간 ${SITE.hours}.`,
    openGraph: {
      title: `${city.name} 출장마사지 · ${SITE.name}`,
      description: `${province.shortName} ${city.name} 전 ${city.dongs.length}개 행정동 출장마사지·홈타이 안내.`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { province: provinceSlug, city: citySlug } = await params;
  const found = findCity(provinceSlug, citySlug);
  if (!found) notFound();
  const { province, city } = found;
  const sortedDongs = [...city.dongs].sort((a, b) =>
    a.name.localeCompare(b.name, "ko-KR"),
  );
  const geoName = city.name;

  return (
    <article className="space-y-14">
      <nav className="flex flex-wrap items-center gap-2 text-xs text-white/60">
        <Link href="/regions" className="hover:text-brand-600">전국 지역</Link>
        <span aria-hidden>›</span>
        <Link href={`/regions/${province.slug}`} className="hover:text-brand-600">
          {province.shortName}
        </Link>
        <span aria-hidden>›</span>
        <span className="text-brand-700">{city.name}</span>
      </nav>

      <HeroBlock
        badge={`${province.shortName} · ${city.name}`}
        h1Top={`${city.name} 출장마사지 이용 안내`}
        h1Sub={`${city.name} 전 ${city.dongs.length}개 행정동 출장 가능`}
        description={`${province.shortName} ${city.name} 권역에서 이용 가능한 출장마사지·홈타이 정보를 안내합니다. 타이·아로마·스웨디시 정찰제 가격으로 ${city.dongs.length}개 행정동에서 운영 중입니다.`}
      />

      <WhoUsesSection geoName={geoName} />

      <section className="space-y-5">
        <SectionHeader title={`${city.name} 방문 가능 지역 안내`} />
        <p className="text-sm text-white/85">
          {city.name}에서는 아래 <b className="text-brand-700">{city.dongs.length}</b>개
          행정동에 출장이 가능합니다. 행정동을 선택하면 해당 동 상세 안내
          페이지로 이동합니다.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedDongs.map((dong) => (
            <Link
              key={dong.slug}
              href={`/regions/${province.slug}/${city.slug}/${dong.slug}`}
              className="group flex items-center justify-between rounded-xl border border-brand-300 bg-brand-100 px-4 py-3.5 transition hover:border-brand-500 hover:bg-brand-200/40"
            >
              <span className="text-sm font-semibold text-white group-hover:text-brand-800">
                {dong.name}
              </span>
              <span aria-hidden className="text-xs text-brand-600 transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <PreReservationSection geoName={geoName} />
      <CoursesSection />
      <ProcessSection />
      <PriceInfoSection geoName={geoName} />
      <SafetyNoticeSection />
      <RegionFaqSection geoName={geoName} />

      <section className="rounded-2xl border border-brand-200 bg-brand-100 p-6 text-center sm:p-8">
        <h2 className="text-xl font-bold text-brand-800 sm:text-2xl">
          {city.name} 즉시 예약 문의
        </h2>
        <p className="mt-2 text-sm text-white/80">
          상담 후 본인 인증을 거쳐 바로 예약을 확정해 드립니다.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/booking" className="btn-primary">
            예약 문의 보내기
          </Link>
          <a
            href={`tel:${SITE.phone.replace(/-/g, "")}`}
            className="btn-ghost"
          >
            전화 {SITE.phone}
          </a>
        </div>
      </section>
    </article>
  );
}
