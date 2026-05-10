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
        다른 지역 출장마사지 사용자분들이 자주 찾으시는 후기·가이드 모음입니다.
        다른 지역 분위기와 사용 팁을 함께 참고해 보세요.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((r, idx) => (
          <li key={r.href}>
            <Link
              href={r.href}
              className="group relative block h-full overflow-hidden rounded-xl border border-brand-300 bg-brand-100 py-4 pl-6 pr-5 transition hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-200/30 hover:shadow-[0_0_28px_-10px_rgba(34,197,94,0.55)]"
            >
              {/* Left accent stripe */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1 bg-brand-500/55 transition group-hover:w-1.5 group-hover:bg-brand-500"
              />
              {/* Number badge top-right */}
              <span
                aria-hidden
                className="absolute right-3 top-3 text-[10px] font-extrabold tracking-wider text-brand-600/70"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Geo label with pin icon */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-700">
                <svg
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                  className="h-3 w-3 fill-current"
                >
                  <path d="M6 1a3 3 0 0 0-3 3c0 2.25 3 6 3 6s3-3.75 3-6a3 3 0 0 0-3-3zm0 4.25A1.25 1.25 0 1 1 6 2.75a1.25 1.25 0 0 1 0 2.5z" />
                </svg>
                <span>{r.geo}</span>
              </div>

              {/* Title in white for max readability */}
              <h3 className="mt-2 text-[15px] font-bold leading-snug text-white transition group-hover:text-brand-800">
                {r.title}
              </h3>

              {/* Hover-only arrow at bottom-right */}
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-3 right-3 text-sm font-bold text-brand-500 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
