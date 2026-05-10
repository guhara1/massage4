import Link from "next/link";
import { REGIONS } from "@/lib/data";

export const metadata = { title: "지역 안내" };

export default function RegionsPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="section-title">출장 가능 지역 안내</h1>
        <p className="section-sub">
          현재 아래 지역에 한해 출장 서비스를 제공합니다. 도서·산간 일부 지역은
          별도 협의 후 안내드립니다.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {REGIONS.map((region) => (
          <section key={region.name} className="card">
            <div className="flex items-baseline justify-between">
              <h2 className="text-lg font-bold text-brand-800">{region.name}</h2>
              <span className="text-xs text-brand-700/70">
                총 {region.cities.length}개 지역
              </span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {region.cities.map((city) => (
                <li
                  key={city}
                  className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-800"
                >
                  {city}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="card flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-brand-800">
            우리 지역이 보이지 않나요?
          </h2>
          <p className="mt-1 text-sm text-brand-800/80">
            인접 지역에서 출장이 가능한 경우가 많습니다. 문의 주시면 가능 여부를 안내해 드립니다.
          </p>
        </div>
        <Link href="/booking" className="btn-primary">예약 문의하기</Link>
      </section>
    </div>
  );
}
