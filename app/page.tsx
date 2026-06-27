import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { SERVICES, FAQS } from "@/lib/data";
import { PROVINCES, totalDongCount } from "@/lib/regions";
import { WebSiteJsonLd, FaqJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const homeFaq = FAQS.map((f) => ({ q: f.q, a: f.a }));
  return (
    <div className="space-y-20">
      <WebSiteJsonLd />
      <FaqJsonLd items={homeFaq} />
      <section className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
            전국 출장마사지·홈타이 예약 안내
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-brand-900 sm:text-5xl">
            라곰 출장마사지
            <span className="block text-brand-500">집·사무실·숙소로 찾아가는 출장마사지</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            라곰 출장마사지는 전국 주요 지역에서 이용 가능한{" "}
            <b>출장마사지·홈타이 정보</b>를 안내합니다. 타이, 아로마, 스웨디시
            등 이완 중심의 테라피를 지역별 방문 가능 범위에 따라 확인해보세요.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/booking" className="btn-primary">
              지금 예약 문의하기
            </Link>
            <Link href="/services" className="btn-ghost">
              서비스 · 가격 보기
            </Link>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-4 text-center">
            <Stat label="운영 시간" value={SITE.hours.split("(")[0].trim()} />
            <Stat label="고객센터" value={SITE.phone} />
            <Stat label="카카오톡" value={SITE.kakao} />
          </dl>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-brand-300 bg-brand-100 shadow-[0_0_60px_-15px_rgba(34,197,94,0.55)]">
          <div className="aspect-square w-full overflow-hidden">
            <img
              src="/region-hero.png"
              alt="라곰 출장마사지 - 전국 출장마사지·홈타이 안내"
              className="h-full w-full object-cover"
              width={1024}
              height={1024}
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="section-title">대표 서비스</h2>
            <p className="section-sub">상황과 컨디션에 맞춰 선택해 보세요.</p>
          </div>
          <Link href="/services" className="text-sm font-semibold text-brand-600 hover:underline">
            전체 보기 →
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Link key={s.slug} href="/services" className="card transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-lg font-bold text-brand-800">{s.name}</h3>
              <p className="mt-2 text-sm text-white/80">{s.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.highlights.map((h) => (
                  <span key={h} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs text-brand-700">
                    {h}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm font-semibold text-brand-600">
                {s.durations[0].minutes}분 {s.durations[0].price.toLocaleString()}원~
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="section-title">전국 출장 가능 지역</h2>
            <p className="section-sub">
              권역을 선택하면 시·군·구와 행정동까지 단계별로 확인하실 수 있습니다.
              총 {totalDongCount()}개 행정동 운영 중.
            </p>
          </div>
          <Link
            href="/regions"
            className="text-sm font-semibold text-brand-600 hover:underline"
          >
            전체 보기 →
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROVINCES.map((p, i) => {
            const dongCount = p.cities.reduce((s, c) => s + c.dongs.length, 0);
            return (
              <Link
                key={p.slug}
                href={`/regions/${p.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-brand-200 bg-brand-100 p-6 transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-[0_0_30px_-12px_rgba(34,197,94,0.45)]"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-500/10 blur-2xl transition group-hover:bg-brand-500/25" />
                <div className="relative flex items-baseline justify-between">
                  <h3 className="text-xl font-extrabold text-brand-800">
                    {p.shortName}
                  </h3>
                  <span className="text-xs font-semibold text-brand-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="relative mt-1 text-xs text-white/70">{p.tagline}</p>
                <div className="relative mt-5 flex items-center justify-between">
                  <span className="text-xs text-white/60">
                    시·군·구 <b className="text-brand-700">{p.cities.length}</b>
                    <span className="mx-1.5 text-white/30">·</span>
                    행정동 <b className="text-brand-700">{dongCount}</b>
                  </span>
                  <span aria-hidden className="text-sm text-brand-600 transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-brand-200 bg-brand-100 px-6 py-12 text-white sm:px-12">
        <h2 className="text-2xl font-bold text-brand-800 sm:text-3xl">예약은 간단합니다.</h2>
        <p className="mt-2 text-white/80">
          상담 → 예약 확정 → 테라피스트 방문 → 케어 진행 순으로 안내드립니다.
        </p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-4">
          {[
            { n: 1, t: "상담", d: "전화·카톡으로 지역과 시간 안내" },
            { n: 2, t: "확정", d: "본인 인증 후 예약 확정" },
            { n: 3, t: "방문", d: "약속 시간에 테라피스트 도착" },
            { n: 4, t: "케어", d: "선택 코스 진행 및 결제" },
          ].map((step) => (
            <li key={step.n} className="rounded-2xl border border-brand-200 bg-brand-200/40 p-5">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-sm font-bold text-brand-50">
                {step.n}
              </div>
              <p className="mt-3 font-semibold text-brand-800">{step.t}</p>
              <p className="mt-1 text-sm text-white/80">{step.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-brand-50 shadow-[0_0_24px_-4px_rgba(34,197,94,0.55)] transition hover:bg-brand-600"
          >
            예약 / 문의 페이지로 이동
          </Link>
        </div>
      </section>

      <section>
        <div>
          <h2 className="section-title">자주 묻는 질문</h2>
          <p className="section-sub">
            예약 전 확인하면 좋은 내용들을 모았습니다.
          </p>
        </div>
        <div className="mt-6 divide-y divide-brand-200 overflow-hidden rounded-2xl border border-brand-200 bg-brand-100">
          {FAQS.map((f, i) => (
            <details key={i} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="text-base font-semibold text-brand-800">
                  Q. {f.q}
                </span>
                <span
                  aria-hidden
                  className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-brand-400 text-xs text-brand-700 transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-brand-200 bg-brand-100/60 p-5 text-xs leading-relaxed text-white/70 sm:p-6 sm:text-sm">
        <p>
          <b className="text-brand-700">고객 안내</b> · 본 사이트는 사업자
          등록을 마친 합법 출장 바디케어 서비스 안내 페이지입니다. 이용 전
          반드시 안전 이용 안내와 자주 묻는 질문을 확인해 주세요. 부적절한
          요청은 정중히 거절되며, 사안에 따라 예약이 제한되거나 관계 기관에
          통보될 수 있습니다.
        </p>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-brand-200 bg-brand-100 px-3 py-3">
      <div className="text-xs text-white/70">{label}</div>
      <div className="mt-1 text-sm font-semibold text-brand-800">{value}</div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
      <span>{children}</span>
    </li>
  );
}
