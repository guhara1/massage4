"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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

type DropdownEntry = { href: string; title: string; desc: string };

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-200 bg-black/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:gap-5 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-500 text-sm font-bold text-brand-50">
            라곰
          </span>
          <span className="whitespace-nowrap text-lg font-bold tracking-tight text-brand-800">
            {SITE.name}
          </span>
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
          {NAV.map((item) => {
            if (item.label === SERVICE_PARENT_LABEL) {
              return (
                <Dropdown
                  key={item.href}
                  triggerHref="/service/"
                  triggerLabel="서비스 안내"
                  items={[
                    { href: "/service/", title: "출장마사지란?", desc: "서비스 전반 안내" },
                    ...SERVICE_CATEGORIES.map((c) => ({
                      href: `/service/${c.slug}/`,
                      title: c.name,
                      desc: c.tagline,
                    })),
                  ]}
                />
              );
            }
            if (item.label === RESERVATION_PARENT_LABEL) {
              return (
                <Dropdown
                  key={item.href}
                  triggerHref="/reservation/"
                  triggerLabel="예약 안내"
                  items={[
                    { href: "/reservation/", title: "예약 안내 홈", desc: "예약 절차·정책 한눈에 보기" },
                    ...RESERVATION_SECTIONS.map((s) => ({
                      href: `/reservation/${s.slug}/`,
                      title: s.name,
                      desc: s.tagline,
                    })),
                  ]}
                />
              );
            }
            if (item.label === PRICE_PARENT_LABEL) {
              return (
                <Dropdown
                  key={item.href}
                  triggerHref="/price/"
                  triggerLabel="가격 안내"
                  items={[
                    { href: "/price/", title: "가격 안내 홈", desc: "정찰제 정책 한눈에 보기" },
                    ...PRICE_SECTIONS.map((s) => ({
                      href: `/price/${s.slug}/`,
                      title: s.name,
                      desc: s.tagline,
                    })),
                  ]}
                />
              );
            }
            if (item.label === GUIDE_PARENT_LABEL) {
              return (
                <Dropdown
                  key={item.href}
                  triggerHref="/guide/"
                  triggerLabel="이용 가이드"
                  items={[
                    { href: "/guide/", title: "이용 가이드 홈", desc: "처음부터 능숙하게 이용하기" },
                    ...GUIDE_SECTIONS.map((s) => ({
                      href: `/guide/${s.slug}/`,
                      title: s.name,
                      desc: s.tagline,
                    })),
                  ]}
                />
              );
            }
            if (item.label === TRUST_PARENT_LABEL) {
              return (
                <Dropdown
                  key={item.href}
                  triggerHref="/trust/"
                  triggerLabel="안전·신뢰 센터"
                  items={[
                    { href: "/trust/", title: "안전·신뢰 센터 홈", desc: "운영 정책·정보 보호 한눈에 보기" },
                    ...TRUST_SECTIONS.map((s) => ({
                      href: `/trust/${s.slug}/`,
                      title: s.name,
                      desc: s.tagline,
                    })),
                  ]}
                />
              );
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

function Dropdown({
  triggerHref,
  triggerLabel,
  items,
}: {
  triggerHref: string;
  triggerLabel: string;
  items: DropdownEntry[];
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close whenever the route changes (after a link click)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold transition ${
          open
            ? "bg-brand-50 text-brand-800"
            : "text-brand-700 hover:bg-brand-50 hover:text-brand-800"
        }`}
      >
        {triggerLabel}
        <svg
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 12"
          className={`h-2.5 w-2.5 fill-current transition ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="M6 8.5 1.5 4h9z" />
        </svg>
      </button>

      {/* Quick-access link to the hub overview while still allowing the dropdown */}
      <Link
        href={triggerHref}
        aria-hidden
        tabIndex={-1}
        className="sr-only"
      >
        {triggerLabel}
      </Link>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 w-64 pt-2"
        >
          <div className="overflow-hidden rounded-2xl border border-brand-300 bg-black/95 p-2 shadow-[0_20px_60px_-20px_rgba(34,197,94,0.6)] backdrop-blur">
            {items.map((it, i) => (
              <div key={it.href}>
                {i === 1 && <div className="my-2 h-px bg-brand-200/50" />}
                <Link
                  role="menuitem"
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 transition hover:bg-brand-100"
                >
                  <div className="text-sm font-bold text-brand-800">{it.title}</div>
                  <div className="mt-0.5 text-xs text-white/70">{it.desc}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
