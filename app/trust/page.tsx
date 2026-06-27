import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { TRUST_SECTIONS } from "@/lib/trustSections";
import { SectionHeader } from "@/components/RegionContent";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "안전·신뢰 센터 - 운영 원칙·테라피스트 기준·고객 보호",
  description:
    "라곰 출장마사지 안전·신뢰 센터. 업체 운영 원칙, 테라피스트 확인 기준, 고객 보호 정책, 불법 서비스 금지 안내, 개인정보 처리방침, 이용약관까지 한곳에서 확인하세요.",
};

export default function TrustOverviewPage() {
  return (
    <article className="space-y-14">
      <header className="overflow-hidden rounded-3xl border border-brand-200 bg-brand-100 shadow-[0_0_60px_-15px_rgba(34,197,94,0.45)]">
        <div className="grid items-stretch md:grid-cols-3">
          <div className="flex flex-col justify-between gap-6 p-7 sm:p-10 md:col-span-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-brand-400 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                안전·신뢰 센터
              </span>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
                안전·신뢰 센터
                <span className="mt-1 block text-brand-500 sm:text-3xl lg:text-4xl">
                  운영 원칙과 정보 보호 기준
                </span>
              </h1>
              <Prose
                text={`라곰 출장마사지가 어떤 원칙으로 운영되는지, 테라피스트는 어떻게
                관리되는지, 이용자 정보는 어떻게 보호되는지 한곳에 정리했습니다.
                개인정보 처리방침과 이용약관도 본 센터에서 확인하실 수 있습니다.`}
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
              src="/region-hero.png"
              alt="안전·신뢰 센터"
              className="absolute inset-0 h-full w-full object-contain object-center"
              loading="eager"
            />
          </div>
        </div>
      </header>

      <section className="space-y-5">
        <SectionHeader title="센터 항목" />
        <p className="text-sm leading-relaxed text-white/85">
          각 항목은 별도 페이지로 자세히 정리되어 있습니다. 개인정보 처리방침과
          이용약관은 법적 문서이며 정기적으로 검토·갱신됩니다.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {TRUST_SECTIONS.map((s, i) => (
            <Link
              key={s.slug}
              href={`/trust/${s.slug}/`}
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
        <SectionHeader title="신뢰 기준 핵심 요약" />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
            <h3 className="text-sm font-bold text-brand-700">합법 운영</h3>
            <p className="mt-2 text-base font-extrabold text-white">사업자 등록 기반</p>
            <p className="mt-2 text-xs leading-relaxed text-white/75">
              사업자 등록을 마친 후 이완 목적의 합법 바디케어로 운영합니다.
              사업자 정보는 푸터에서 확인하실 수 있습니다.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
            <h3 className="text-sm font-bold text-brand-700">검증된 테라피스트</h3>
            <p className="mt-2 text-base font-extrabold text-white">4단계 관리</p>
            <p className="mt-2 text-xs leading-relaxed text-white/75">
              자격·교육·운영 기준·사후 모니터링의 4단계를 통과한 인력만 일정에
              배정됩니다.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
            <h3 className="text-sm font-bold text-brand-700">정보 보호</h3>
            <p className="mt-2 text-base font-extrabold text-white">최소 수집·암호화</p>
            <p className="mt-2 text-xs leading-relaxed text-white/75">
              예약과 결제에 필요한 최소한의 정보만 수집하며, 외부에 공유하지
              않습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-brand-200 bg-brand-100 p-6 text-center sm:p-8">
        <h2 className="text-xl font-bold text-brand-800 sm:text-2xl">
          궁금한 점이 있으신가요?
        </h2>
        <p className="mt-2 text-sm text-white/80">
          운영 정책·정보 보호 관련 문의는 고객센터로 연락 주세요.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/booking" className="btn-primary">예약·문의 페이지로 이동</Link>
          <a href={`tel:${SITE.phone.replace(/-/g, "")}`} className="btn-ghost">
            전화 {SITE.phone}
          </a>
        </div>
      </section>
    </article>
  );
}
