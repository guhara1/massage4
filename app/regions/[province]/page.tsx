import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROVINCES, findProvince } from "@/lib/regions";

type Props = { params: Promise<{ province: string }> };

export function generateStaticParams() {
  return PROVINCES.map((p) => ({ province: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { province: provinceSlug } = await params;
  const province = findProvince(provinceSlug);
  if (!province) return {};
  const dongCount = province.cities.reduce((s, c) => s + c.dongs.length, 0);
  return {
    title: `${province.shortName} 출장마사지 - ${province.cities.length}개 시·군·구 안내`,
    description: `${province.name} ${province.cities.length}개 시·군·구, 총 ${dongCount}개 행정동에 즉시 출장 가능한 합법 바디케어 서비스. ${province.tagline}.`,
  };
}

export default async function ProvincePage({ params }: Props) {
  const { province: provinceSlug } = await params;
  const province = findProvince(provinceSlug);
  if (!province) notFound();

  const dongCount = province.cities.reduce((s, c) => s + c.dongs.length, 0);

  return (
    <div className="space-y-10">
      <nav className="flex items-center gap-2 text-xs text-white/60">
        <Link href="/regions" className="hover:text-brand-600">전국 지역</Link>
        <span aria-hidden>›</span>
        <span className="text-brand-700">{province.shortName}</span>
      </nav>

      <header>
        <span className="inline-flex items-center rounded-full border border-brand-400 bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
          {province.tagline}
        </span>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-900 sm:text-4xl">
          {province.name} 출장마사지
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
          {province.shortName} 권역 <b className="text-brand-700">{province.cities.length}</b>개
          시·군·구 · 총 <b className="text-brand-700">{dongCount}</b>개 행정동에서
          출장 바디케어를 운영합니다. 원하시는 시·군·구를 선택해 주세요.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {province.cities.map((city) => (
          <Link
            key={city.slug}
            href={`/regions/${province.slug}/${city.slug}`}
            className="group flex flex-col rounded-2xl border border-brand-200 bg-brand-100 p-5 transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-[0_0_30px_-12px_rgba(34,197,94,0.45)]"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="text-lg font-bold text-brand-800">{city.name}</h2>
              <span className="text-xs text-white/60">
                행정동 {city.dongs.length}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {city.dongs.slice(0, 5).map((dg) => (
                <span
                  key={dg.slug}
                  className="rounded-full bg-brand-50 px-2 py-0.5 text-[11px] text-brand-700"
                >
                  {dg.name}
                </span>
              ))}
              {city.dongs.length > 5 && (
                <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[11px] text-white/60">
                  +{city.dongs.length - 5}
                </span>
              )}
            </div>
            <div className="mt-4 flex items-center justify-end text-sm font-semibold text-brand-600">
              <span aria-hidden className="transition group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="rounded-2xl border border-brand-200 bg-brand-100/60 p-5 text-sm text-white/80 sm:p-6">
        <p>
          <b className="text-brand-700">{province.shortName}</b> 지역에서는
          {" "}{province.cities.length}개 시·군·구 모두 동일한 정찰제 가격이
          적용됩니다. 시간대 또는 교통 상황에 따라 출장비가 별도 안내될 수
          있습니다.
        </p>
      </section>
    </div>
  );
}
