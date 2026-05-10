import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { GUIDE_SECTIONS } from "@/lib/guideSections";
import { SectionHeader } from "@/components/RegionContent";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "이용 가이드 - 처음 이용·준비·매너·오해까지",
  description:
    "VIP출장 이용 가이드 허브. 처음 이용하는 분, 사전 준비, 좋은 업체 고르는 법, 예약 시 확인할 점, 방문 매너, 자주 생기는 오해까지 항목별로 정리했습니다.",
};

export default function GuideOverviewPage() {
  return (
    <article className="space-y-14">
      <header className="overflow-hidden rounded-3xl border border-brand-200 bg-brand-100 shadow-[0_0_60px_-15px_rgba(34,197,94,0.45)]">
        <div className="grid items-stretch md:grid-cols-3">
          <div className="flex flex-col justify-between gap-6 p-7 sm:p-10 md:col-span-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-brand-400 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                이용 가이드
              </span>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
                이용 가이드 홈
                <span className="mt-1 block text-brand-500 sm:text-3xl lg:text-4xl">
                  처음부터 능숙하게 이용하기
                </span>
              </h1>
              <Prose
                text={`출장마사지를 처음 이용하시거나, 이미 이용 중이시지만 더 잘
                활용하고 싶으신 분께 도움이 되는 정보를 모았습니다. 단순
                홍보가 아닌 실제 이용 시 필요한 내용 위주로 정리했습니다.`}
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
              alt="이용 가이드"
              className="absolute inset-0 h-full w-full object-contain object-center"
              loading="eager"
            />
          </div>
        </div>
      </header>

      <section className="space-y-5">
        <SectionHeader title="가이드 항목" />
        <p className="text-sm leading-relaxed text-white/85">
          첫 이용자라면 위에서 아래 순서대로 읽어보시면 좋고, 이미 이용 중이라면
          관심 있는 항목만 골라 보셔도 됩니다.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {GUIDE_SECTIONS.map((s, i) => (
            <Link
              key={s.slug}
              href={`/guide/${s.slug}/`}
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
        <SectionHeader title="이 가이드를 만든 이유" />
        <div className="rounded-2xl border border-brand-200 bg-brand-100 p-6 text-sm leading-relaxed text-white/85 sm:p-7">
          <p>
            출장마사지 시장은 정보 비대칭이 큰 영역입니다. 단순한 가격이나
            광고만 보고 선택했다가 부적절한 운영을 만나는 사례가 적지 않습니다.
            VIP출장은 정직한 운영을 기본으로 하지만, 그 전에 이용자분이 안전한
            기준을 알고 선택하실 수 있도록 객관적인 정보를 정리하는 것이 더
            중요하다고 판단해 이 가이드를 만들었습니다.
          </p>
          <p className="mt-3">
            이 페이지의 내용은 VIP출장 이용 여부와 관계없이 출장마사지를
            이용하시는 모든 분께 도움이 되도록 작성되었습니다.
          </p>
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
          <Link href="/booking" className="btn-primary">예약 문의 보내기</Link>
          <a href={`tel:${SITE.phone.replace(/-/g, "")}`} className="btn-ghost">
            전화 {SITE.phone}
          </a>
        </div>
      </section>
    </article>
  );
}
