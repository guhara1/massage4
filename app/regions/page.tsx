import Link from "next/link";
import type { Metadata } from "next";
import { PROVINCES, totalDongCount } from "@/lib/regions";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "전국 출장 가능 지역",
  description: `${SITE.name}은 서울 25개 자치구를 포함해 전국 ${PROVINCES.length}개 권역, 총 ${totalDongCount()}개 행정동까지 출장 바디케어를 운영합니다. 권역을 선택해 시·군·구와 행정동을 확인하세요.`,
};

export default function RegionsPage() {
  const stats = PROVINCES.map((p) => ({
    cities: p.cities.length,
    dongs: p.cities.reduce((s, c) => s + c.dongs.length, 0),
  }));

  return (
    <div className="space-y-12">
      <header className="text-center">
        <span className="inline-flex items-center rounded-full border border-brand-400 bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
          전국 {PROVINCES.length}개 권역 · 총 {totalDongCount()}개 행정동
        </span>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-brand-900 sm:text-5xl">
          전국 출장 가능 지역
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
          권역 → 시·군·구 → 행정동 순으로 빠르게 이동할 수 있습니다.
          모든 지역은 정찰제 가격이며, 본인 인증 후 즉시 배정됩니다.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROVINCES.map((p, i) => {
          const stat = stats[i];
          return (
            <Link
              key={p.slug}
              href={`/regions/${p.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-brand-200 bg-brand-100 p-7 transition hover:-translate-y-1 hover:border-brand-500 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.45)]"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/10 blur-2xl transition group-hover:bg-brand-500/25" />
              <div className="relative">
                <div className="flex items-baseline justify-between">
                  <h2 className="text-2xl font-extrabold text-brand-800">
                    {p.shortName}
                  </h2>
                  <span className="text-xs font-semibold text-brand-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/80">{p.tagline}</p>

                <dl className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-brand-200 bg-brand-50/40 px-3 py-2.5">
                    <dt className="text-[11px] text-white/60">시·군·구</dt>
                    <dd className="mt-0.5 text-base font-bold text-brand-700">
                      {stat.cities}
                      <span className="ml-0.5 text-xs font-medium text-white/60">개</span>
                    </dd>
                  </div>
                  <div className="rounded-xl border border-brand-200 bg-brand-50/40 px-3 py-2.5">
                    <dt className="text-[11px] text-white/60">행정동</dt>
                    <dd className="mt-0.5 text-base font-bold text-brand-700">
                      {stat.dongs}
                      <span className="ml-0.5 text-xs font-medium text-white/60">개</span>
                    </dd>
                  </div>
                </dl>

                <div className="mt-5 flex items-center justify-between text-sm font-semibold text-brand-600">
                  <span>지역 보기</span>
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      <section className="rounded-2xl border border-brand-200 bg-brand-100/60 p-6 text-sm leading-relaxed text-white/80">
        <h2 className="text-base font-bold text-brand-800">출장 지역 안내</h2>
        <ul className="mt-3 space-y-1.5">
          <li>· 표시되지 않은 지역은 도서·산간 또는 신규 검토 중인 지역입니다. 별도 상담을 통해 출장 가능 여부를 안내드립니다.</li>
          <li>· 시간대·교통 상황에 따라 일부 지역은 출장비가 추가 안내될 수 있습니다.</li>
          <li>· 모든 지역은 사전 본인 인증 절차가 동일하게 적용되며, 익명 예약은 받지 않습니다.</li>
        </ul>
      </section>
    </div>
  );
}
