import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import {
  SERVICE_CATEGORIES,
  findServiceCategory,
} from "@/lib/serviceCategories";
import { SectionHeader } from "@/components/RegionContent";
import { Prose } from "@/components/Prose";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = findServiceCategory(slug);
  if (!c) return {};
  return {
    title: `${c.name} 출장 - 효과·추천 대상·가격 안내`,
    description: `${c.name}는 ${c.tagline}. ${c.intro.slice(0, 80)}...`,
    openGraph: {
      title: `${c.name} 출장 · ${SITE.name}`,
      description: `${c.name} 출장 코스 안내 · ${c.tagline}`,
    },
    alternates: { canonical: `/service/${slug}/` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const c = findServiceCategory(slug);
  if (!c) notFound();

  const others = SERVICE_CATEGORIES.filter((s) => s.slug !== c.slug);

  return (
    <article className="space-y-14">
      <nav className="flex items-center gap-2 text-xs text-white/60">
        <Link href="/service/" className="hover:text-brand-600">서비스 안내</Link>
        <span aria-hidden>›</span>
        <span className="text-brand-700">{c.name}</span>
      </nav>

      <header className="overflow-hidden rounded-3xl border border-brand-200 bg-brand-100 shadow-[0_0_60px_-15px_rgba(34,197,94,0.45)]">
        <div className="grid items-stretch md:grid-cols-3">
          <div className="flex flex-col justify-between gap-6 p-7 sm:p-10 md:col-span-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-brand-400 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                서비스 안내 · {c.shortName}
              </span>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
                {c.name} 출장
                <span className="mt-1 block text-brand-500 sm:text-3xl lg:text-4xl">
                  {c.tagline}
                </span>
              </h1>
              <Prose
                text={c.intro}
                className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/booking" className="btn-primary">
                {c.shortName} 예약 문의
              </Link>
              <a href={`tel:${SITE.phone.replace(/-/g, "")}`} className="btn-ghost">
                전화 상담 {SITE.phone}
              </a>
            </div>
          </div>
          <div className="relative min-h-[320px] bg-brand-50 md:col-span-1 md:min-h-0">
            <img
              src="/hero-vip.jpg"
              alt={`${c.name} 출장 안내`}
              className="absolute inset-0 h-full w-full object-contain object-center"
              loading="eager"
            />
          </div>
        </div>
      </header>

      <section className="space-y-5">
        <SectionHeader title={`${c.name} 효과와 기대 변화`} />
        <ul className="grid gap-3 sm:grid-cols-2">
          {c.benefits.map((b) => (
            <li
              key={b}
              className="flex gap-2 rounded-xl border border-brand-200 bg-brand-100 p-4 text-sm text-white/85"
            >
              <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <SectionHeader title={`이런 분께 추천드립니다`} />
        <ul className="grid gap-3 sm:grid-cols-2">
          {c.recommendedFor.map((r) => (
            <li
              key={r}
              className="flex gap-2 rounded-xl border border-brand-200 bg-brand-100 p-4 text-sm text-white/85"
            >
              <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <SectionHeader title={`${c.name} 진행 방식`} />
        <ol className="grid gap-3 md:grid-cols-5">
          {c.process.map((step, i) => (
            <li
              key={step}
              className="rounded-xl border border-brand-200 bg-brand-100 p-4"
            >
              <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-500 text-xs font-extrabold text-brand-50 shadow-[0_0_16px_-2px_rgba(34,197,94,0.6)]">
                {i + 1}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-5">
        <SectionHeader title={`${c.name} 코스 시간·가격`} />
        <div className="overflow-hidden rounded-2xl border border-brand-200 bg-brand-100">
          <table className="w-full text-sm">
            <thead className="border-b border-brand-200 bg-brand-200/30 text-brand-800">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">코스</th>
                <th className="px-4 py-3 text-right font-semibold">소요 시간</th>
                <th className="px-4 py-3 text-right font-semibold">가격 (정찰제)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-200/60">
              {c.durations.map((d) => (
                <tr key={d.minutes}>
                  <td className="px-4 py-3 text-white">{c.name} {d.minutes}분</td>
                  <td className="px-4 py-3 text-right text-white/85">{d.minutes}분</td>
                  <td className="px-4 py-3 text-right font-bold text-brand-700">
                    {d.price.toLocaleString()}원
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/60">
          · 운영 시간 {SITE.hours}. 야간·심야·도서산간 지역은 출장비가 별도 안내될 수 있습니다.
        </p>
      </section>

      <section className="space-y-5">
        <SectionHeader title="이용 전 확인할 점" />
        <div className="rounded-2xl border border-brand-200 bg-brand-100 p-6">
          <ul className="space-y-2.5 text-sm leading-relaxed text-white/90">
            {c.cautions.map((line) => (
              <li key={line} className="flex gap-2">
                <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader title={`${c.name} 자주 묻는 질문`} />
        <div className="divide-y divide-brand-200 overflow-hidden rounded-2xl border border-brand-200 bg-brand-100">
          {c.faq.map((f, i) => (
            <details key={i} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="text-base font-semibold text-brand-800">
                  Q. {f.q}
                </span>
                <span
                  aria-hidden
                  className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-brand-400 text-xs text-brand-700 transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/85">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader title="다른 코스도 살펴보세요" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/service/${o.slug}/`}
              className="group rounded-xl border border-brand-300 bg-brand-100 p-4 transition hover:border-brand-500 hover:bg-brand-200/40"
            >
              <h3 className="text-sm font-bold text-brand-800 group-hover:text-brand-700">
                {o.name}
              </h3>
              <p className="mt-1 text-xs text-white/70">{o.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-brand-200 bg-brand-100 p-6 text-center sm:p-8">
        <h2 className="text-xl font-bold text-brand-800 sm:text-2xl">
          {c.name} 즉시 예약 문의
        </h2>
        <p className="mt-2 text-sm text-white/80">
          상담 후 본인 인증을 거쳐 바로 예약을 확정해 드립니다.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/booking" className="btn-primary">
            예약 문의 보내기
          </Link>
          <a href={`tel:${SITE.phone.replace(/-/g, "")}`} className="btn-ghost">
            전화 {SITE.phone}
          </a>
        </div>
      </section>
    </article>
  );
}
