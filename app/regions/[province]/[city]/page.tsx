import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROVINCES, findCity } from "@/lib/regions";

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
    title: `${city.name} 출장마사지 - ${city.dongs.length}개 행정동 안내`,
    description: `${province.shortName} ${city.name} 전 ${city.dongs.length}개 행정동에서 즉시 출장 가능한 합법 바디케어. 본인 인증 후 정찰제 가격으로 빠른 배정.`,
  };
}

export default async function CityPage({ params }: Props) {
  const { province: provinceSlug, city: citySlug } = await params;
  const found = findCity(provinceSlug, citySlug);
  if (!found) notFound();
  const { province, city } = found;

  return (
    <div className="space-y-10">
      <nav className="flex flex-wrap items-center gap-2 text-xs text-white/60">
        <Link href="/regions" className="hover:text-brand-600">전국 지역</Link>
        <span aria-hidden>›</span>
        <Link href={`/regions/${province.slug}`} className="hover:text-brand-600">
          {province.shortName}
        </Link>
        <span aria-hidden>›</span>
        <span className="text-brand-700">{city.name}</span>
      </nav>

      <header>
        <span className="inline-flex items-center rounded-full border border-brand-400 bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
          {province.shortName} · {city.name}
        </span>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-900 sm:text-4xl">
          {city.name} 출장마사지
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
          {city.name} 전 <b className="text-brand-700">{city.dongs.length}</b>개
          행정동에서 출장 바디케어를 운영합니다. 행정동을 선택하면 해당 동
          상세 안내 페이지로 이동합니다.
        </p>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {city.dongs.map((dong) => (
          <Link
            key={dong.slug}
            href={`/regions/${province.slug}/${city.slug}/${dong.slug}`}
            className="group flex items-center justify-between rounded-xl border border-brand-200 bg-brand-100 px-4 py-3.5 transition hover:border-brand-500 hover:bg-brand-200/40"
          >
            <span className="text-sm font-semibold text-brand-800 group-hover:text-brand-700">
              {dong.name}
            </span>
            <span aria-hidden className="text-xs text-brand-600 transition group-hover:translate-x-1">
              →
            </span>
          </Link>
        ))}
      </section>

      <section className="rounded-2xl border border-brand-200 bg-brand-100/60 p-5 text-sm text-white/80 sm:p-6">
        <h2 className="text-base font-bold text-brand-800">
          {city.name} 출장 안내
        </h2>
        <ul className="mt-3 space-y-1.5">
          <li>· {city.name} 전 행정동 동일 정찰제 가격으로 운영합니다.</li>
          <li>· 야간·심야 시간대는 인접 행정동 우선 배정될 수 있습니다.</li>
          <li>· 모든 예약은 휴대폰 본인 인증 후 확정됩니다.</li>
        </ul>
      </section>
    </div>
  );
}
