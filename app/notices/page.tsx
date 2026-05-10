import { NOTICES } from "@/lib/data";

export const metadata = { title: "공지사항" };

export default function NoticesPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="section-title">공지사항</h1>
        <p className="section-sub">서비스 운영 관련 안내사항입니다.</p>
      </header>

      <ul className="divide-y divide-brand-100 overflow-hidden rounded-2xl border border-brand-100 bg-white">
        {NOTICES.map((n, i) => (
          <li key={i} className="p-6">
            <div className="flex items-baseline justify-between">
              <h2 className="text-base font-semibold text-brand-800">{n.title}</h2>
              <time className="text-xs text-brand-700/70">{n.date}</time>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-brand-800/85">{n.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
