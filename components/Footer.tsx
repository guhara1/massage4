import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-100 bg-brand-50/40">
      <div className="container-narrow grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-sm font-bold text-white">
              VIP
            </span>
            <span className="text-lg font-bold text-brand-800">{SITE.name}</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-brand-800/80">
            {SITE.tagline}
          </p>
          <p className="mt-4 text-xs leading-relaxed text-brand-800/60">
            본 서비스는 이완 목적의 바디케어를 제공하며, 의료 행위(의료법상
            안마)나 어떠한 형태의 성적 서비스도 제공하지 않습니다. 부적절한
            요청은 정중히 거절되며, 신고 조치될 수 있습니다.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-brand-800">바로가기</h3>
          <ul className="mt-3 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-brand-800/80 hover:text-brand-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-brand-800">사업자 정보</h3>
          <dl className="mt-3 space-y-1 text-xs text-brand-800/80">
            <div className="flex gap-2">
              <dt className="w-20 shrink-0 text-brand-800/60">상호</dt>
              <dd>{SITE.business.name}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-20 shrink-0 text-brand-800/60">대표자</dt>
              <dd>{SITE.business.owner}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-20 shrink-0 text-brand-800/60">사업자번호</dt>
              <dd>{SITE.business.registrationNumber}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-20 shrink-0 text-brand-800/60">통신판매업</dt>
              <dd>{SITE.business.mailOrder}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-20 shrink-0 text-brand-800/60">업종</dt>
              <dd>{SITE.business.category}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-20 shrink-0 text-brand-800/60">주소</dt>
              <dd>{SITE.address}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-20 shrink-0 text-brand-800/60">고객센터</dt>
              <dd>
                {SITE.phone} · {SITE.hours}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="border-t border-brand-100">
        <div className="container-narrow py-4 text-center text-xs text-brand-800/60">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
