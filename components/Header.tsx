import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { SERVICE_CATEGORIES } from "@/lib/serviceCategories";
import { RESERVATION_SECTIONS } from "@/lib/reservationSections";
import { PRICE_SECTIONS } from "@/lib/priceSections";
import { GUIDE_SECTIONS } from "@/lib/guideSections";
import { TRUST_SECTIONS } from "@/lib/trustSections";

const SERVICE_PARENT_LABEL = "서비스 / 가격";
const RESERVATION_PARENT_LABEL = "예약 / 문의";
const PRICE_PARENT_LABEL = "가격 안내";
const GUIDE_PARENT_LABEL = "이용 가이드";
const TRUST_PARENT_LABEL = "안전·신뢰 센터";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-200 bg-black/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:gap-5 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-500 text-sm font-bold text-brand-50">
            VIP
          </span>
          <span className="whitespace-nowrap text-lg font-bold tracking-tight text-brand-800">
            {SITE.name}
          </span>
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
          {NAV.map((item) => {
            if (item.label === SERVICE_PARENT_LABEL) {
              return <ServiceDropdown key={item.href} />;
            }
            if (item.label === RESERVATION_PARENT_LABEL) {
              return <ReservationDropdown key={item.href} />;
            }
            if (item.label === PRICE_PARENT_LABEL) {
              return <PriceDropdown key={item.href} />;
            }
            if (item.label === GUIDE_PARENT_LABEL) {
              return <GuideDropdown key={item.href} />;
            }
            if (item.label === TRUST_PARENT_LABEL) {
              return <TrustDropdown key={item.href} />;
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold text-brand-700 transition hover:bg-brand-50 hover:text-brand-800"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/booking" className="btn-primary hidden whitespace-nowrap lg:inline-flex">
          예약 문의
        </Link>
        <Link href="/booking" className="btn-primary lg:hidden">
          예약
        </Link>
      </div>
    </header>
  );
}

function DropdownTrigger({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold text-brand-700 transition hover:bg-brand-50 hover:text-brand-800 group-hover:bg-brand-50 group-hover:text-brand-800 group-focus-within:bg-brand-50"
    >
      {label}
      <svg
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        className="h-2.5 w-2.5 fill-current transition group-hover:rotate-180"
      >
        <path d="M6 8.5 1.5 4h9z" />
      </svg>
    </Link>
  );
}

function DropdownPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      <div className="overflow-hidden rounded-2xl border border-brand-300 bg-black/95 p-2 shadow-[0_20px_60px_-20px_rgba(34,197,94,0.6)] backdrop-blur">
        {children}
      </div>
    </div>
  );
}

function DropdownItem({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-xl px-3 py-2.5 transition hover:bg-brand-100"
    >
      <div className="text-sm font-bold text-brand-800">{title}</div>
      <div className="mt-0.5 text-xs text-white/70">{desc}</div>
    </Link>
  );
}

function ServiceDropdown() {
  return (
    <div className="group relative">
      <DropdownTrigger href="/service/" label="서비스 안내" />
      <DropdownPanel>
        <DropdownItem href="/service/" title="출장마사지란?" desc="서비스 전반 안내" />
        <div className="my-2 h-px bg-brand-200/50" />
        {SERVICE_CATEGORIES.map((c) => (
          <DropdownItem
            key={c.slug}
            href={`/service/${c.slug}/`}
            title={c.name}
            desc={c.tagline}
          />
        ))}
      </DropdownPanel>
    </div>
  );
}

function ReservationDropdown() {
  return (
    <div className="group relative">
      <DropdownTrigger href="/reservation/" label="예약 안내" />
      <DropdownPanel>
        <DropdownItem
          href="/reservation/"
          title="예약 안내 홈"
          desc="예약 절차·정책 한눈에 보기"
        />
        <div className="my-2 h-px bg-brand-200/50" />
        {RESERVATION_SECTIONS.map((s) => (
          <DropdownItem
            key={s.slug}
            href={`/reservation/${s.slug}/`}
            title={s.name}
            desc={s.tagline}
          />
        ))}
      </DropdownPanel>
    </div>
  );
}

function PriceDropdown() {
  return (
    <div className="group relative">
      <DropdownTrigger href="/price/" label="가격 안내" />
      <DropdownPanel>
        <DropdownItem
          href="/price/"
          title="가격 안내 홈"
          desc="정찰제 정책 한눈에 보기"
        />
        <div className="my-2 h-px bg-brand-200/50" />
        {PRICE_SECTIONS.map((s) => (
          <DropdownItem
            key={s.slug}
            href={`/price/${s.slug}/`}
            title={s.name}
            desc={s.tagline}
          />
        ))}
      </DropdownPanel>
    </div>
  );
}

function GuideDropdown() {
  return (
    <div className="group relative">
      <DropdownTrigger href="/guide/" label="이용 가이드" />
      <DropdownPanel>
        <DropdownItem
          href="/guide/"
          title="이용 가이드 홈"
          desc="처음부터 능숙하게 이용하기"
        />
        <div className="my-2 h-px bg-brand-200/50" />
        {GUIDE_SECTIONS.map((s) => (
          <DropdownItem
            key={s.slug}
            href={`/guide/${s.slug}/`}
            title={s.name}
            desc={s.tagline}
          />
        ))}
      </DropdownPanel>
    </div>
  );
}

function TrustDropdown() {
  return (
    <div className="group relative">
      <DropdownTrigger href="/trust/" label="안전·신뢰 센터" />
      <DropdownPanel>
        <DropdownItem
          href="/trust/"
          title="안전·신뢰 센터 홈"
          desc="운영 정책·정보 보호 한눈에 보기"
        />
        <div className="my-2 h-px bg-brand-200/50" />
        {TRUST_SECTIONS.map((s) => (
          <DropdownItem
            key={s.slug}
            href={`/trust/${s.slug}/`}
            title={s.name}
            desc={s.tagline}
          />
        ))}
      </DropdownPanel>
    </div>
  );
}
