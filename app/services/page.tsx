import Link from "next/link";
import { SERVICES } from "@/lib/data";

export const metadata = { title: "서비스 / 가격" };

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <header>
        <h1 className="section-title">서비스 · 가격 안내</h1>
        <p className="section-sub">
          모든 코스는 정찰제로 운영되며, 안내된 금액 외 추가 결제를 요구하지 않습니다.
          출장비는 지역에 따라 별도 안내될 수 있습니다.
        </p>
      </header>

      <div className="space-y-8">
        {SERVICES.map((s) => (
          <article key={s.slug} className="card">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-xl font-bold text-brand-800">{s.name}</h2>
              <div className="flex flex-wrap gap-2">
                {s.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full bg-brand-50 px-2.5 py-1 text-xs text-brand-700"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              {s.description}
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border border-brand-100">
              <table className="w-full text-sm">
                <thead className="bg-brand-50/60 text-brand-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">코스</th>
                    <th className="px-4 py-3 text-right font-semibold">소요 시간</th>
                    <th className="px-4 py-3 text-right font-semibold">가격</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-100">
                  {s.durations.map((d) => (
                    <tr key={d.minutes}>
                      <td className="px-4 py-3 text-white">
                        {s.name} {d.minutes}분
                      </td>
                      <td className="px-4 py-3 text-right text-white/80">
                        {d.minutes}분
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-brand-700">
                        {d.price.toLocaleString()}원
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        ))}
      </div>

      <section className="card">
        <h2 className="text-lg font-bold text-brand-800">유의사항</h2>
        <ul className="mt-3 space-y-2 text-sm text-white/85">
          <li>· 본 서비스는 이완 목적의 바디케어이며, 의료 행위(질병 진단·치료)가 아닙니다.</li>
          <li>· 임산부, 수술 직후, 급성 염증·감염성 질환 보유자 등은 시술이 제한될 수 있습니다.</li>
          <li>· 음주 상태에서는 안전을 위해 시술이 거절될 수 있습니다.</li>
          <li>· 모든 시술은 단정한 복장으로 진행되며, 성적 서비스 요청은 전면 거절됩니다.</li>
          <li>· 예약 변경·취소는 시술 2시간 전까지 가능하며, 이후에는 위약금이 발생할 수 있습니다.</li>
        </ul>
        <div className="mt-6">
          <Link href="/booking" className="btn-primary">예약 문의하기</Link>
        </div>
      </section>
    </div>
  );
}
