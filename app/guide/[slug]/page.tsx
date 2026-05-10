import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import {
  GUIDE_SECTIONS,
  findGuideSection,
} from "@/lib/guideSections";
import { SectionHeader } from "@/components/RegionContent";
import { Prose } from "@/components/Prose";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GUIDE_SECTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = findGuideSection(slug);
  if (!s) return {};
  return {
    title: `${s.name} - ${s.tagline}`,
    description: `${s.intro.slice(0, 100)}...`,
    openGraph: {
      title: `${s.name} · ${SITE.name}`,
      description: s.tagline,
    },
    alternates: { canonical: `/guide/${slug}/` },
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const s = findGuideSection(slug);
  if (!s) notFound();

  const others = GUIDE_SECTIONS.filter((x) => x.slug !== s.slug);

  return (
    <article className="space-y-14">
      <nav className="flex items-center gap-2 text-xs text-white/60">
        <Link href="/guide/" className="hover:text-brand-600">이용 가이드</Link>
        <span aria-hidden>›</span>
        <span className="text-brand-700">{s.name}</span>
      </nav>

      <header className="overflow-hidden rounded-3xl border border-brand-200 bg-brand-100 shadow-[0_0_60px_-15px_rgba(34,197,94,0.45)]">
        <div className="grid items-stretch md:grid-cols-3">
          <div className="flex flex-col justify-between gap-6 p-7 sm:p-10 md:col-span-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-brand-400 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                이용 가이드
              </span>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
                {s.name}
                <span className="mt-1 block text-brand-500 sm:text-3xl lg:text-4xl">
                  {s.tagline}
                </span>
              </h1>
              <Prose
                text={s.intro}
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
              src="/hero-vip.jpg"
              alt={`${s.name} 안내`}
              className="absolute inset-0 h-full w-full object-contain object-center"
              loading="eager"
            />
          </div>
        </div>
      </header>

      {s.sections.map((section) => (
        <section key={section.title} className="space-y-5">
          <SectionHeader title={section.title} />
          {section.body && (
            <Prose
              text={section.body}
              className="rounded-2xl border border-brand-200 bg-brand-100 p-5 text-sm leading-relaxed text-white/85 sm:p-6"
            />
          )}
          {section.items && (
            <ul className="rounded-2xl border border-brand-200 bg-brand-100 p-5 sm:p-6">
              {section.items.map((it, i) => (
                <li
                  key={i}
                  className={`flex gap-2 text-sm leading-relaxed text-white/85 ${i > 0 ? "mt-2" : ""}`}
                >
                  <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section className="space-y-5">
        <SectionHeader title={`${s.name} 자주 묻는 질문`} />
        <div className="divide-y divide-brand-200 overflow-hidden rounded-2xl border border-brand-200 bg-brand-100">
          {s.faq.map((f, i) => (
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
              <Prose text={f.a} className="mt-3 text-sm leading-relaxed text-white/85" />
            </details>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader title="다른 가이드도 살펴보세요" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/guide/${o.slug}/`}
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
          가이드 확인이 끝났다면 바로 예약해 보세요
        </h2>
        <p className="mt-2 text-sm text-white/80">
          본인 인증을 거쳐 약 5분 안에 예약이 확정됩니다.
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
