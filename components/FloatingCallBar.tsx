"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactForProvince } from "@/lib/site";

export default function FloatingCallBar() {
  const pathname = usePathname() ?? "";
  // /regions/<province>/... 경로일 때 해당 지역 연락처 정책을 사용합니다.
  const match = pathname.match(/^\/regions\/([^/]+)/);
  const contact = contactForProvince(match ? match[1] : null);
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 sm:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      role="region"
      aria-label="빠른 연결"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-black/85 to-transparent" />
      <div className="relative flex gap-2 border-t border-brand-400 bg-black/95 px-3 py-2.5 backdrop-blur">
        {contact.kind === "phone" ? (
          <a
            href={`tel:${contact.phone.replace(/-/g, "")}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-base font-extrabold text-brand-50 shadow-[0_0_24px_-2px_rgba(34,197,94,0.85)] transition active:scale-[0.98]"
            aria-label={`전화로 상담 ${contact.phone}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2.879a1.5 1.5 0 0 1 1.49 1.295l.34 2.55a1.5 1.5 0 0 1-.83 1.557L5.94 8.354a11.04 11.04 0 0 0 5.706 5.707l.95-1.44a1.5 1.5 0 0 1 1.558-.83l2.55.34A1.5 1.5 0 0 1 18 13.621V16.5a1.5 1.5 0 0 1-1.5 1.5h-1C7.387 18 2 12.613 2 5v-1.5z"
                clipRule="evenodd"
              />
            </svg>
            <span>전화 상담 {contact.phone}</span>
          </a>
        ) : (
          <span
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-base font-extrabold text-brand-50 shadow-[0_0_24px_-2px_rgba(34,197,94,0.85)]"
          >
            {contact.label}
          </span>
        )}
        <Link
          href="/booking"
          className="flex items-center justify-center rounded-xl border border-brand-400 bg-brand-100 px-4 py-3 text-sm font-bold text-white transition active:scale-[0.98]"
          aria-label="예약 문의 페이지로 이동"
        >
          예약문의
        </Link>
      </div>
    </div>
  );
}
