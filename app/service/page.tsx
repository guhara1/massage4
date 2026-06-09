import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { SERVICE_CATEGORIES } from "@/lib/serviceCategories";
import { SectionHeader } from "@/components/RegionContent";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "출장마사지란? - 코스 종류와 선택 가이드",
  description:
    "출장마사지의 정의·종류·선택 기준을 한 페이지에 정리했습니다. 아로마·스웨디시·스포츠·타이·커플·프리미엄 코스의 차이점과 추천 대상을 비교해 보세요.",
};

export default function ServiceOverviewPage() {
  return (
    <article className="space-y-14">
      <header className="overflow-hidden rounded-3xl border border-brand-200 bg-brand-100 shadow-[0_0_60px_-15px_rgba(34,197,94,0.45)]">
        <div className="grid items-stretch md:grid-cols-3">
          <div className="flex flex-col justify-between gap-6 p-7 sm:p-10 md:col-span-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-brand-400 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                서비스 안내
              </span>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
                출장마사지란?
                <span className="mt-1 block text-brand-500 sm:text-3xl lg:text-4xl">
                  코스 종류와 선택 가이드
                </span>
              </h1>
              <Prose
                text={`출장마사지는 매장이 아닌 자택·오피스·숙소로 테라피스트가 직접
                방문해 진행하는 바디 케어 서비스입니다. 이동·대기 시간 없이
                편안한 공간에서 받을 수 있다는 장점이 있으며, 코스에 따라
                효과와 추천 대상이 달라집니다.`}
                className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base"
              />
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
          <div className="relative min-h-[320px] bg-brand-50 md:col-span-1 md:min-h-0">
            <img
              src="/region-hero.png"
              alt="출장마사지 코스 안내"
              className="absolute inset-0 h-full w-full object-contain object-center"
              loading="eager"
            />
          </div>
        </div>
      </header>

      <section className="space-y-5">
        <SectionHeader title="출장마사지가 매장 마사지와 다른 점" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "이동·대기 시간 없음", d: "매장까지 이동·대기 시간이 사라져 본인의 시간을 그대로 케어에 활용할 수 있습니다." },
            { t: "본인이 익숙한 공간", d: "자택·숙소처럼 익숙한 공간에서 받기 때문에 긴장이 덜 되고 이완 효과가 큽니다." },
            { t: "야간·심야 시간대 활용", d: "출장 운영 시간이 길어 야근·출장 후 늦은 시간에도 받을 수 있습니다." },
            { t: "자녀·반려동물 케어 가능", d: "외출이 어려운 분도 집을 비우지 않고 받을 수 있습니다." },
            { t: "정찰제 가격", d: "사전 안내된 금액 외 추가 결제를 요구하지 않습니다." },
            { t: "본인 인증 기반 신뢰", d: "예약 시 본인 인증을 거치며, 익명 예약은 받지 않습니다." },
          ].map((it) => (
            <div key={it.t} className="rounded-xl border border-brand-200 bg-brand-100 p-4">
              <h3 className="text-sm font-bold text-brand-800">{it.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/85">{it.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader title="코스별 특징과 추천 대상" />
        <p className="text-sm leading-relaxed text-white/85">
          VIP 출장은 6가지 코스를 운영합니다. 본인의 컨디션과 목적에 맞는 코스를 선택해 보세요.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {SERVICE_CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/service/${c.slug}/`}
              className="group flex flex-col rounded-2xl border border-brand-200 bg-brand-100 p-5 transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-[0_0_30px_-12px_rgba(34,197,94,0.45)]"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-bold text-brand-800">{c.name}</h3>
                <span className="text-xs font-semibold text-brand-600">
                  {c.durations[0].minutes}분 {c.durations[0].price.toLocaleString()}원~
                </span>
              </div>
              <p className="mt-1 text-xs text-white/65">{c.tagline}</p>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/85">
                {c.intro}
              </p>
              <div className="mt-4 flex items-center justify-end text-sm font-semibold text-brand-600">
                <span aria-hidden className="transition group-hover:translate-x-1">자세히 보기 →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader title="처음 받으실 때 코스 선택 팁" />
        <ul className="rounded-2xl border border-brand-200 bg-brand-100 p-5 sm:p-6">
          <li className="flex gap-2 text-sm leading-relaxed text-white/85">
            <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span><b className="text-brand-700">전체적인 이완·수면 회복</b>이 목적이라면 → <Link href="/service/aroma-massage/" className="text-brand-600 hover:underline">아로마 마사지</Link></span>
          </li>
          <li className="mt-2 flex gap-2 text-sm leading-relaxed text-white/85">
            <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span><b className="text-brand-700">근피로 회복·혈행 개선</b>이 목적이라면 → <Link href="/service/swedish-massage/" className="text-brand-600 hover:underline">스웨디시 마사지</Link></span>
          </li>
          <li className="mt-2 flex gap-2 text-sm leading-relaxed text-white/85">
            <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span><b className="text-brand-700">운동 후 회복</b>이 목적이라면 → <Link href="/service/sports-massage/" className="text-brand-600 hover:underline">스포츠 마사지</Link></span>
          </li>
          <li className="mt-2 flex gap-2 text-sm leading-relaxed text-white/85">
            <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span><b className="text-brand-700">강한 압·스트레칭</b>을 좋아하신다면 → <Link href="/service/thai-massage/" className="text-brand-600 hover:underline">타이 마사지</Link></span>
          </li>
          <li className="mt-2 flex gap-2 text-sm leading-relaxed text-white/85">
            <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span><b className="text-brand-700">둘이 함께</b> 받고 싶다면 → <Link href="/service/couple-massage/" className="text-brand-600 hover:underline">커플 마사지</Link></span>
          </li>
          <li className="mt-2 flex gap-2 text-sm leading-relaxed text-white/85">
            <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span><b className="text-brand-700">기념일·종합 케어</b>를 원하신다면 → <Link href="/service/premium-massage/" className="text-brand-600 hover:underline">프리미엄 마사지</Link></span>
          </li>
        </ul>
      </section>

      <section className="rounded-2xl border border-brand-200 bg-brand-100 p-6 text-center sm:p-8">
        <h2 className="text-xl font-bold text-brand-800 sm:text-2xl">
          어떤 코스가 맞을지 모르겠다면 상담해 보세요
        </h2>
        <p className="mt-2 text-sm text-white/80">
          컨디션과 목적을 알려주시면 가장 적합한 코스를 안내해 드립니다.
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
