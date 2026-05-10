import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { SITE } from "@/lib/site";
import {
  pickN,
  pickOne,
  WHO_USES_POOL,
  PRE_RESERVATION_POOL,
  FAQ_POOL,
  HERO_DESCRIPTION_VARIANTS,
  WHO_INTRO_VARIANTS,
  PRE_INTRO_VARIANTS,
  FAQ_INTRO_VARIANTS,
  SAFETY_INTRO_VARIANTS,
  PROCESS_INTRO_VARIANTS,
  PRICE_INTRO_VARIANTS,
} from "@/lib/regionVariants";

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="flex items-center gap-3 text-xl font-bold text-brand-800 sm:text-2xl">
      <span aria-hidden className="h-1.5 w-9 shrink-0 rounded-full bg-brand-500 shadow-[0_0_18px_-2px_rgba(34,197,94,0.7)]" />
      <span>{title}</span>
    </h2>
  );
}

function CardList({
  items,
  geoName,
}: {
  items: { t: string; d: (g: string) => string }[];
  geoName: string;
}) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((it) => (
        <li
          key={it.t}
          className="rounded-xl border border-brand-200 bg-brand-100 p-4"
        >
          <div className="flex items-start gap-2.5">
            <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <div>
              <h3 className="text-sm font-bold text-brand-800">{it.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/85">
                {it.d(geoName)}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function WhoUsesSection({
  geoName,
  slug,
}: {
  geoName: string;
  slug: string;
}) {
  const items = pickN(slug, WHO_USES_POOL, 6, "who");
  const intro = pickOne(slug, WHO_INTRO_VARIANTS, "who-intro")(geoName);
  return (
    <section className="space-y-5">
      <SectionHeader title={`${geoName} 출장마사지, 어떤 분들이 많이 찾을까?`} />
      <p className="text-sm leading-relaxed text-white/85">{intro}</p>
      <CardList items={items} geoName={geoName} />
    </section>
  );
}

export function PreReservationSection({
  geoName,
  slug,
}: {
  geoName: string;
  slug: string;
}) {
  const items = pickN(slug, PRE_RESERVATION_POOL, 6, "pre");
  const intro = pickOne(slug, PRE_INTRO_VARIANTS, "pre-intro")(geoName);
  return (
    <section className="space-y-5">
      <SectionHeader title={`${geoName} 출장마사지 예약 전 확인할 점`} />
      <p className="text-sm leading-relaxed text-white/85">{intro}</p>
      <CardList items={items} geoName={geoName} />
    </section>
  );
}

export function CoursesSection({ slug }: { slug: string }) {
  // Vary the order of courses so it's not identical
  const order = pickN(slug, [0, 1, 2], 3, "courses");
  const ordered = order.map((i) => SERVICES[i]);
  return (
    <section className="space-y-5">
      <SectionHeader title="이용 가능한 마사지 코스" />
      <div className="grid gap-4 md:grid-cols-3">
        {ordered.map((s) => (
          <article
            key={s.slug}
            className="rounded-2xl border border-brand-200 bg-brand-100 p-5"
          >
            <h3 className="text-lg font-bold text-brand-800">{s.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              {s.summary}
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-white/85">
              {s.durations.map((dur) => (
                <li
                  key={dur.minutes}
                  className="flex justify-between border-b border-brand-200/60 py-1"
                >
                  <span>{dur.minutes}분 코스</span>
                  <span className="font-bold text-brand-700">
                    {dur.price.toLocaleString()}원
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="text-xs text-white/60">
        · 모든 코스는 정찰제이며, 안내된 금액 외 추가 결제를 요구하지 않습니다.
      </p>
    </section>
  );
}

export function ProcessSection({
  geoName,
  slug,
}: {
  geoName: string;
  slug: string;
}) {
  const intro = pickOne(slug, PROCESS_INTRO_VARIANTS, "proc-intro")(geoName);
  const steps = [
    { n: 1, t: "상담 신청", d: "전화·카카오톡·예약 페이지 양식 중 편한 방법으로 신청합니다." },
    { n: 2, t: "본인 인증", d: "휴대폰 본인 인증 후 예약이 정식으로 확정됩니다." },
    { n: 3, t: "예약 확정 안내", d: "방문 시간·코스·결제 정보가 안내됩니다." },
    { n: 4, t: "테라피스트 방문", d: "약속 시간에 자격을 갖춘 테라피스트가 직접 방문합니다." },
    { n: 5, t: "케어 진행 및 결제", d: "선택하신 코스 진행 후 현장에서 결제하시면 종료됩니다." },
  ];
  return (
    <section className="space-y-5">
      <SectionHeader title="예약부터 방문까지 진행 절차" />
      <p className="text-sm leading-relaxed text-white/85">{intro}</p>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s) => (
          <li
            key={s.n}
            className="rounded-xl border border-brand-200 bg-brand-100 p-4"
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-sm font-extrabold text-brand-50 shadow-[0_0_16px_-2px_rgba(34,197,94,0.6)]">
              {s.n}
            </div>
            <p className="mt-3 text-sm font-bold text-brand-800">{s.t}</p>
            <p className="mt-1 text-xs leading-relaxed text-white/80">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function PriceInfoSection({
  geoName,
  slug,
}: {
  geoName: string;
  slug: string;
}) {
  const intro = pickOne(slug, PRICE_INTRO_VARIANTS, "price-intro")(geoName);
  return (
    <section className="space-y-5">
      <SectionHeader title="가격·운영시간·추가비용 안내" />
      <p className="text-sm leading-relaxed text-white/85">{intro}</p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
          <h3 className="text-sm font-bold text-brand-700">정찰제 가격</h3>
          <p className="mt-2 text-base font-extrabold text-white">
            60분 80,000원~
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/75">
            모든 코스는 사전에 안내된 금액으로만 진행됩니다. 현장에서 추가
            결제를 요구하지 않습니다.
          </p>
        </div>
        <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
          <h3 className="text-sm font-bold text-brand-700">운영 시간</h3>
          <p className="mt-2 text-base font-extrabold text-white">
            {SITE.hours}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/75">
            야간·심야 시간대 예약도 정상 응대합니다. 시간대에 따라 배정이
            지연될 수 있습니다.
          </p>
        </div>
        <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
          <h3 className="text-sm font-bold text-brand-700">추가 비용 안내</h3>
          <p className="mt-2 text-base font-extrabold text-white">
            지역·시간 별도 안내
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/75">
            {geoName} 외곽이나 도서·산간, 심야 시간대는 출장비가 추가될 수
            있으며, 예약 시 사전에 안내드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SafetyNoticeSection({ slug }: { slug: string }) {
  const intro = pickOne(slug, SAFETY_INTRO_VARIANTS, "safety-intro")();
  return (
    <section className="space-y-5">
      <SectionHeader title="안전하고 건전한 이용을 위한 안내" />
      <p className="text-sm leading-relaxed text-white/85">{intro}</p>
      <div className="rounded-2xl border border-brand-200 bg-brand-100 p-6">
        <ul className="space-y-2.5 text-sm leading-relaxed text-white/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span>본 서비스는 <b className="text-brand-700">이완 목적의 합법 바디케어</b>로 운영되며, 의료법상 안마·의료 행위가 아닙니다.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span><b className="text-brand-700">성적 서비스 요청은 전면 거절</b>되며, 이용이 즉시 중단됩니다.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span>음주 상태에서는 안전을 위해 시술이 거절될 수 있습니다.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span>임산부, 수술 직후, 급성 염증·감염성 질환 보유자 등은 사전 상담 후 진행 여부를 결정합니다.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span>모든 시술은 단정한 복장으로 진행되며, 부적절한 요청 시 신고 조치될 수 있습니다.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function RegionFaqSection({
  geoName,
  slug,
}: {
  geoName: string;
  slug: string;
}) {
  const items = pickN(slug, FAQ_POOL, 6, "faq");
  const intro = pickOne(slug, FAQ_INTRO_VARIANTS, "faq-intro")(geoName);
  return (
    <section className="space-y-5">
      <SectionHeader title={`${geoName} 출장마사지 자주 묻는 질문`} />
      <p className="text-sm leading-relaxed text-white/85">{intro}</p>
      <div className="divide-y divide-brand-200 overflow-hidden rounded-2xl border border-brand-200 bg-brand-100">
        {items.map((f, i) => (
          <details key={i} className="group p-5 sm:p-6">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <span className="text-base font-semibold text-brand-800">
                Q. {f.q(geoName)}
              </span>
              <span
                aria-hidden
                className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-brand-400 text-xs text-brand-700 transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              {f.a(geoName)}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function HeroBlock({
  badge,
  h1Top,
  h1Sub,
  description,
}: {
  badge: string;
  h1Top: string;
  h1Sub: string;
  description: string;
}) {
  return (
    <header className="overflow-hidden rounded-3xl border border-brand-200 bg-brand-100 shadow-[0_0_60px_-15px_rgba(34,197,94,0.45)]">
      <div className="grid items-stretch md:grid-cols-3">
        <div className="flex flex-col justify-between gap-6 p-7 sm:p-10 md:col-span-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-brand-400 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {badge}
            </span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
              {h1Top}
              <span className="mt-1 block text-brand-500 sm:text-3xl lg:text-4xl">
                {h1Sub}
              </span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/booking" className="btn-primary">
              예약 문의하기
            </Link>
            <a href={`tel:${SITE.phone.replace(/-/g, "")}`} className="btn-ghost">
              전화 상담 {SITE.phone}
            </a>
          </div>
        </div>
        <div className="relative min-h-[280px] border-t border-brand-300 md:col-span-1 md:min-h-0 md:border-l md:border-t-0">
          <img
            src="/hero-vip.jpg"
            alt={`${h1Top} 안내 - 출장마사지 관리사`}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-100/40 md:bg-gradient-to-r md:from-brand-100/40 md:via-transparent md:to-transparent" />
        </div>
      </div>
    </header>
  );
}

export function makeHeroDescription(slug: string, fullName: string): string {
  return pickOne(slug, HERO_DESCRIPTION_VARIANTS, "hero")(fullName);
}
