import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROVINCES, findDong } from "@/lib/regions";
import { SERVICES } from "@/lib/data";
import { SITE } from "@/lib/site";

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
  return {
    title: `${fullName} 출장마사지`,
    description: `${fullName} 즉시 출장 가능한 합법 바디케어. 타이·아로마·스웨디시 정찰제. 본인 인증 후 빠른 배정 (${SITE.hours}).`,
    openGraph: {
      title: `${fullName} 출장마사지 · ${SITE.name}`,
      description: `${fullName} 합법 출장 바디케어 · 정찰제 · 본인 인증 후 즉시 배정.`,
    },
  };
}

export default async function DongPage({ params }: Props) {
  const { province: provinceSlug, city: citySlug, dong: dongSlug } = await params;
  const found = findDong(provinceSlug, citySlug, dongSlug);
  if (!found) notFound();
  const { province, city, dong } = found;

  const siblings = city.dongs.filter((d) => d.slug !== dong.slug).slice(0, 8);
  const fullName = `${province.shortName} ${city.name} ${dong.name}`;

  return (
    <div className="space-y-12">
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

      <header className="rounded-3xl border border-brand-200 bg-brand-100 p-7 sm:p-10">
        <span className="inline-flex items-center rounded-full border border-brand-400 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          {province.shortName} {city.name}
        </span>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-900 sm:text-5xl">
          {dong.name}
          <span className="block text-brand-500 sm:text-3xl">
            {fullName} 출장마사지
          </span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
          {fullName}에 즉시 방문 가능한 합법 출장 바디케어 서비스입니다.
          타이·아로마·스웨디시 정찰제 가격으로 운영하며, 휴대폰 본인 인증 후
          예약이 확정됩니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/booking" className="btn-primary">
            {dong.name} 예약 문의
          </Link>
          <a href={`tel:${SITE.phone.replace(/-/g, "")}`} className="btn-ghost">
            전화 상담 {SITE.phone}
          </a>
        </div>
      </header>

      <section>
        <h2 className="section-title">{dong.name}에서 가능한 코스</h2>
        <p className="section-sub">
          모든 코스는 {fullName}에서 동일한 정찰제 가격으로 제공됩니다.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.slug} className="card">
              <h3 className="text-lg font-bold text-brand-800">{s.name}</h3>
              <p className="mt-2 text-sm text-white/80">{s.summary}</p>
              <ul className="mt-4 space-y-1 text-sm text-white/85">
                {s.durations.map((dur) => (
                  <li key={dur.minutes} className="flex justify-between">
                    <span>{dur.minutes}분</span>
                    <span className="font-semibold text-brand-700">
                      {dur.price.toLocaleString()}원
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-lg font-bold text-brand-800">
            {dong.name} 이용 안내
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>· 운영 시간: {SITE.hours}</li>
            <li>· 정찰제 가격으로 추가 결제 요구가 없습니다.</li>
            <li>· {city.name} 인접 행정동 우선 배정 가능합니다.</li>
            <li>· 만 19세 미만은 이용이 제한됩니다.</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-lg font-bold text-brand-800">바로 연결</h2>
          <dl className="mt-4 space-y-3 text-sm text-white/85">
            <div className="flex justify-between">
              <dt className="text-white/70">고객센터</dt>
              <dd className="font-semibold text-white">{SITE.phone}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-white/70">카카오톡</dt>
              <dd className="font-semibold text-white">{SITE.kakao}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-white/70">이메일</dt>
              <dd className="font-semibold text-white">{SITE.email}</dd>
            </div>
          </dl>
        </div>
      </section>

      {siblings.length > 0 && (
        <section>
          <h2 className="section-title">{city.name} 인접 행정동</h2>
          <p className="section-sub">
            {city.name} 다른 행정동도 동일 조건으로 출장 가능합니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {siblings.map((sib) => (
              <Link
                key={sib.slug}
                href={`/regions/${province.slug}/${city.slug}/${sib.slug}`}
                className="rounded-full border border-brand-200 bg-brand-100 px-3 py-1.5 text-sm text-brand-700 transition hover:border-brand-500 hover:bg-brand-200/40"
              >
                {sib.name}
              </Link>
            ))}
            <Link
              href={`/regions/${province.slug}/${city.slug}`}
              className="rounded-full border border-brand-400 px-3 py-1.5 text-sm font-semibold text-brand-600 transition hover:bg-brand-100"
            >
              {city.name} 전체 →
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
