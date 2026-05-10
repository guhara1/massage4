import Link from "next/link";
import { SectionHeader } from "@/components/RegionContent";
import type { Recommendation } from "@/lib/regionRecommendations";

export default function PopularRegionLinks({
  items,
  title = "인기 지역별 추천",
}: {
  items: Recommendation[];
  title?: string;
}) {
  if (items.length === 0) return null;
  return (
    <section className="space-y-5">
      <SectionHeader title={title} />
      <p className="text-sm leading-relaxed text-white/85">
        다른 지역 출장마사지 사용자분들이 자주 찾으시는 후기·가이드
        모음입니다. 다른 지역 분위기와 사용 팁을 함께 참고해 보세요.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((r) => (
          <li key={r.href}>
            <Link
              href={r.href}
              className="group flex h-full flex-col rounded-xl border border-brand-300 bg-brand-100 p-4 transition hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-200/40 hover:shadow-[0_0_24px_-12px_rgba(34,197,94,0.5)]"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">
                {r.geo}
              </span>
              <h3 className="mt-1.5 text-sm font-bold leading-snug text-brand-800 group-hover:text-brand-700">
                {r.title}
              </h3>
              <span
                aria-hidden
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 transition group-hover:translate-x-1"
              >
                자세히 보기 →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
