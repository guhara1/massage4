import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-white/85 backdrop-blur">
      <div className="container-narrow flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-sm font-bold text-white">
            VIP
          </span>
          <span className="text-lg font-bold tracking-tight text-brand-800">
            {SITE.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-brand-700 transition hover:bg-brand-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/booking" className="btn-primary hidden md:inline-flex">
          예약 문의
        </Link>
        <Link href="/booking" className="btn-primary md:hidden">
          예약
        </Link>
      </div>
    </header>
  );
}
