import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { RESERVATION_SECTIONS } from "@/lib/reservationSections";
import { SectionHeader } from "@/components/RegionContent";

export const metadata: Metadata = {
  title: "예약 안내 - 절차·시간·결제·확인사항 한눈에 보기",
  description:
    "VIP출장 예약 안내 허브. 예약 방법, 이용 절차, 운영 시간, 방문 가능 장소, 결제 안내, 예약 전 확인사항을 항목별로 자세히 정리했습니다.",
};

export default function ReservationOverviewPage() {
  return (
    <article className="space-y-14">
      <header className="overflow-hidden rounded-3xl border border-brand-200 bg-brand-100 shadow-[0_0_60px_-15px_rgba(34,197,94,0.45)]">
        <div className="grid items-stretch md:grid-cols-3">
          <div className="flex flex-col justify-between gap-6 p-7 sm:p-10 md:col-span-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-brand-400 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                예약 안내
              </span>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
                예약 안내 홈
                <span className="mt-1 block text-brand-500 sm:text-3xl lg:text-4xl">
                  절차·시간·결제까지 한 페이지
                </span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
                VIP출장 예약과 관련된 모든 정보를 한곳에 정리했습니다. 처음
                이용하시는 분이라면 아래 항목을 차례대로 살펴보시면 매끄럽게
                예약을 진행하실 수 있습니다.
              </p>
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
          <div className="relative min-h-[280px] border-t border-brand-300 md:col-span-1 md:min-h-0 md:border-l md:border-t-0">
            <img
              src="/hero-vip.jpg"
              alt="예약 안내"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-100/40 md:bg-gradient-to-r md:from-brand-100/40 md:via-transparent md:to-transparent" />
          </div>
        </div>
      </header>

      <section className="space-y-5">
        <SectionHeader title="항목별 안내" />
        <p className="text-sm leading-relaxed text-white/85">
          각 항목은 별도 페이지로 자세히 정리되어 있습니다. 필요한 항목만
          골라 살펴보셔도 됩니다.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {RESERVATION_SECTIONS.map((s, i) => (
            <Link
              key={s.slug}
              href={`/reservation/${s.slug}/`}
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
        <SectionHeader title="예약 정책 핵심 요약" />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
            <h3 className="text-sm font-bold text-brand-700">본인 인증 기반</h3>
            <p className="mt-2 text-base font-extrabold text-white">익명 예약 불가</p>
            <p className="mt-2 text-xs leading-relaxed text-white/75">
              모든 예약은 휴대폰 본인 인증 후 정식 확정되며, 안전한 운영을
              위한 최소 절차입니다.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
            <h3 className="text-sm font-bold text-brand-700">정찰제 가격</h3>
            <p className="mt-2 text-base font-extrabold text-white">추가 결제 없음</p>
            <p className="mt-2 text-xs leading-relaxed text-white/75">
              사전에 안내된 금액 외 어떠한 추가 결제 요구도 하지 않습니다.
              현장 결제만 진행됩니다.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
            <h3 className="text-sm font-bold text-brand-700">변경·취소</h3>
            <p className="mt-2 text-base font-extrabold text-white">
              2시간 전 무료
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/75">
              시술 시작 2시간 전까지 무료 변경·취소가 가능합니다. 이후에는
              위약금이 발생할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-brand-200 bg-brand-100 p-6 text-center sm:p-8">
        <h2 className="text-xl font-bold text-brand-800 sm:text-2xl">
          준비가 되셨다면 바로 예약해 보세요
        </h2>
        <p className="mt-2 text-sm text-white/80">
          본인 인증 후 약 5분 안에 예약이 확정됩니다.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/booking" className="btn-primary">예약 폼 작성하기</Link>
          <a href={`tel:${SITE.phone.replace(/-/g, "")}`} className="btn-ghost">
            전화 {SITE.phone}
          </a>
        </div>
      </section>
    </article>
  );
}
