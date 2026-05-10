import Link from "next/link";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
            전국 합법 출장 바디케어
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-brand-900 sm:text-5xl">
            {SITE.name}
            <span className="block text-brand-500">집·사무실·숙소로 찾아가는 이완 케어</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-brand-800/80 sm:text-lg">
            VIP 출장은 <b>사업자 등록을 마친 합법 바디케어 출장 서비스</b>입니다.
            타이·아로마·스웨디시 등 이완 목적의 바디케어를 자격을 갖춘
            테라피스트가 직접 방문해 제공해 드립니다.
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

        <div className="card relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-100 blur-2xl" />
          <h2 className="text-lg font-bold text-brand-800">합법·안전 운영 약속</h2>
          <ul className="mt-4 space-y-3 text-sm text-brand-800/85">
            <Bullet>사업자 등록 후 <b>이완 목적 바디케어</b>로 정식 운영</Bullet>
            <Bullet>스포츠마사지·아로마테라피 등 <b>관련 자격 보유자</b> 우선 채용</Bullet>
            <Bullet><b>정찰제 가격</b>·시간 단위 안내로 추가 결제 요구 없음</Bullet>
            <Bullet>예약 시 <b>본인 인증</b> 후 확정 — 익명 예약 불가</Bullet>
            <Bullet>성적 서비스·의료 행위 요청은 <b>전면 거절</b></Bullet>
          </ul>
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
              <p className="mt-2 text-sm text-brand-800/80">{s.summary}</p>
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

      <section className="rounded-3xl border border-brand-200 bg-brand-100 px-6 py-12 text-brand-700 sm:px-12">
        <h2 className="text-2xl font-bold text-brand-800 sm:text-3xl">예약은 간단합니다.</h2>
        <p className="mt-2 text-brand-700/80">
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
              <p className="mt-1 text-sm text-brand-700/80">{step.d}</p>
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
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-brand-200 bg-brand-100 px-3 py-3">
      <div className="text-xs text-brand-700/70">{label}</div>
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
