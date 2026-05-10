import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { STATIONS, LINES } from "@/lib/stations";
import { SectionHeader } from "@/components/RegionContent";

export const metadata: Metadata = {
  title: "지하철역별 출장마사지 안내",
  description:
    "지하철역 인근 출장마사지·홈타이 정보. 강남역·역삼역·잠실역 등 서울 100여 개 주요 역 인근 행정동·코스·예약 절차를 한곳에서 확인하세요.",
};

export default function StationOverviewPage() {
  // Group stations by district for nicer browsing
  const byDistrict = STATIONS.reduce<Record<string, typeof STATIONS>>(
    (acc, s) => {
      (acc[s.district] ||= []).push(s);
      return acc;
    },
    {},
  );
  const districts = Object.keys(byDistrict).sort((a, b) =>
    a.localeCompare(b, "ko-KR"),
  );

  return (
    <article className="space-y-14">
      <header className="overflow-hidden rounded-3xl border border-brand-200 bg-brand-100 shadow-[0_0_60px_-15px_rgba(34,197,94,0.45)]">
        <div className="grid items-stretch md:grid-cols-3">
          <div className="flex flex-col justify-between gap-6 p-7 sm:p-10 md:col-span-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-brand-400 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                지하철역별 안내
              </span>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
                지하철역별 출장마사지
                <span className="mt-1 block text-brand-500 sm:text-3xl lg:text-4xl">
                  서울 주요 100여 개 역 인근 안내
                </span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
                강남역·역삼역·잠실역 등 자주 검색되는 역 인근 출장마사지
                정보를 한곳에 정리했습니다. 역을 선택하면 인근 행정동, 코스
                안내, 예약 절차까지 바로 확인하실 수 있습니다.
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
          <div className="relative min-h-[320px] bg-brand-50 md:col-span-1 md:min-h-0">
            <img
              src="/hero-vip.jpg"
              alt="지하철역별 출장마사지 안내"
              className="absolute inset-0 h-full w-full object-contain object-center"
              loading="eager"
            />
          </div>
        </div>
      </header>

      <section className="space-y-5">
        <SectionHeader title="자치구별 역 목록" />
        <p className="text-sm leading-relaxed text-white/85">
          {STATIONS.length}개 역을 자치구별로 정리했습니다.
          <br />
          역 이름을 클릭하면 인근 행정동·코스·예약 안내 페이지로 이동합니다.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {districts.map((district) => (
            <div
              key={district}
              className="rounded-2xl border border-brand-200 bg-brand-100 p-5"
            >
              <h2 className="text-base font-bold text-brand-800">
                {district}
                <span className="ml-2 text-xs font-medium text-white/55">
                  {byDistrict[district].length}개 역
                </span>
              </h2>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {byDistrict[district].map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/station/${s.slug}/`}
                      className="inline-flex items-center gap-1 rounded-full border border-brand-300 bg-brand-200/30 px-2.5 py-1 text-[12px] font-semibold text-white transition hover:border-brand-500 hover:bg-brand-200/60 hover:text-brand-800"
                    >
                      {s.name}역
                      <span className="text-[10px] text-brand-600/80">
                        {s.lines.length === 1
                          ? LINES[s.lines[0]]?.shortName
                          : `${s.lines.length}`}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-brand-200 bg-brand-100 p-6 text-center sm:p-8">
        <h2 className="text-xl font-bold text-brand-800 sm:text-2xl">
          역 인근 출장마사지 즉시 예약
        </h2>
        <p className="mt-2 text-sm text-white/80">
          역을 선택해 가까운 행정동에서 즉시 배정 가능한 시간을 확인하세요.
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
