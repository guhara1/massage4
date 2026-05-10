import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { PRICE_SECTIONS } from "@/lib/priceSections";
import { SectionHeader } from "@/components/RegionContent";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "가격 안내 - 정찰제 정책·코스·지역·추가비용 한눈에",
  description:
    "VIP출장 가격 안내 허브. 기본 코스 가격, 지역별 출장비, 시간별 코스, 추가 비용 정책, 가격 확인 전 주의사항을 항목별로 자세히 정리했습니다.",
};

export default function PriceOverviewPage() {
  return (
    <article className="space-y-14">
      <header className="overflow-hidden rounded-3xl border border-brand-200 bg-brand-100 shadow-[0_0_60px_-15px_rgba(34,197,94,0.45)]">
        <div className="grid items-stretch md:grid-cols-3">
          <div className="flex flex-col justify-between gap-6 p-7 sm:p-10 md:col-span-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-brand-400 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                가격 안내
              </span>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
                가격 안내 홈
                <span className="mt-1 block text-brand-500 sm:text-3xl lg:text-4xl">
                  정찰제·추가비용·주의사항 한 페이지
                </span>
              </h1>
              <Prose
                text={`VIP출장의 모든 가격 정보를 한곳에 정리했습니다. 코스별 기본
                가격, 지역별 출장비 정책, 시간 길이에 따른 차이, 그리고
                가격 확인 시 주의해야 할 점까지 항목별로 자세히 안내드립니다.`}
                className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/booking" className="btn-primary">
                지금 예약 문의하기
              </Link>
              <a href={`tel:${SITE.phone.replace(/-/g, "")}`} className="btn-ghost">
                전화 상담 {SITE.phone}
              </a>
            </div>
          </div>
          <div className="relative min-h-[320px] bg-brand-50 md:col-span-1 md:min-h-0">
            <img
              src="/hero-vip.jpg"
              alt="가격 안내"
              className="absolute inset-0 h-full w-full object-contain object-center"
              loading="eager"
            />
          </div>
        </div>
      </header>

      <section className="space-y-5">
        <SectionHeader title="항목별 안내" />
        <p className="text-sm leading-relaxed text-white/85">
          각 항목은 별도 페이지로 자세히 정리되어 있습니다. 궁금한 항목만
          골라 확인하실 수 있습니다.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {PRICE_SECTIONS.map((s, i) => (
            <Link
              key={s.slug}
              href={`/price/${s.slug}/`}
              className="group flex flex-col rounded-2xl border border-brand-200 bg-brand-100 p-5 transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-[0_0_30px_-12px_rgba(34,197,94,0.45)]"
            >
              <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-bold text-brand-800">
                  {String(i + 1).padStart(2, "0")}. {s.name}
                </h2>
                <span aria-hidden className="text-sm font-semibold text-brand-600 transition group-hover:translate-x-1">
                  →
                </span>
              </div>
              <p className="mt-1 text-xs text-white/65">{s.tagline}</p>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/85">
                {s.intro}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader title="가격 정책 핵심 요약" />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
            <h3 className="text-sm font-bold text-brand-700">정찰제 운영</h3>
            <p className="mt-2 text-base font-extrabold text-white">전국 동일 가격</p>
            <p className="mt-2 text-xs leading-relaxed text-white/75">
              사이트, 상담, 시술 후 청구액이 모두 동일한 가격으로 안내됩니다.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
            <h3 className="text-sm font-bold text-brand-700">시술 중 추가 결제</h3>
            <p className="mt-2 text-base font-extrabold text-white">절대 없음</p>
            <p className="mt-2 text-xs leading-relaxed text-white/75">
              현장에서 “추가 옵션·VIP” 명목의 결제 요구는 일절 하지 않습니다.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
            <h3 className="text-sm font-bold text-brand-700">출장비</h3>
            <p className="mt-2 text-base font-extrabold text-white">사전 고지</p>
            <p className="mt-2 text-xs leading-relaxed text-white/75">
              지역·시간대에 따라 가산 시 예약 확정 전 반드시 사전 안내됩니다.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-brand-200 bg-brand-100 p-6 text-center sm:p-8">
        <h2 className="text-xl font-bold text-brand-800 sm:text-2xl">
          정확한 가격은 상담 시 즉시 안내드립니다
        </h2>
        <p className="mt-2 text-sm text-white/80">
          코스·시간·지역만 알려주시면 출장비 포함 정확한 금액을 바로 안내해 드립니다.
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
