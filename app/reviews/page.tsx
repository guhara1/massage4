import { REVIEWS } from "@/lib/data";

export const metadata = { title: "이용 후기" };

export default function ReviewsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="section-title">이용 후기</h1>
        <p className="section-sub">
          실제 이용 고객님들이 남겨주신 후기입니다. 개인정보 보호를 위해 닉네임은
          일부 마스킹 처리되어 있습니다.
        </p>
      </header>

      <ul className="grid gap-5 md:grid-cols-2">
        {REVIEWS.map((r, i) => (
          <li key={i} className="card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                  {r.nickname[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-800">{r.nickname}</p>
                  <p className="text-xs text-brand-700/70">{r.region}</p>
                </div>
              </div>
              <div aria-label={`별점 ${r.rating}점`} className="text-sm text-brand-500">
                {"★".repeat(r.rating)}
                <span className="text-brand-200">{"★".repeat(5 - r.rating)}</span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-brand-800/90">{r.body}</p>
            <div className="mt-4 flex justify-between text-xs text-brand-700/70">
              <span>{r.service}</span>
              <time>{r.date}</time>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
