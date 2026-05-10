import Link from "next/link";
import { SERVICES, FAQS } from "@/lib/data";
import { SITE } from "@/lib/site";

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="flex items-center gap-3 text-xl font-bold text-brand-800 sm:text-2xl">
      <span aria-hidden className="h-1.5 w-9 shrink-0 rounded-full bg-brand-500 shadow-[0_0_18px_-2px_rgba(34,197,94,0.7)]" />
      <span>{title}</span>
    </h2>
  );
}

function CardList({ items }: { items: { t: string; d: string }[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((it) => (
        <li
          key={it.t}
          className="rounded-xl border border-brand-200 bg-brand-100 p-4"
        >
          <div className="flex items-start gap-2.5">
            <span
              aria-hidden
              className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
            />
            <div>
              <h3 className="text-sm font-bold text-brand-800">{it.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/85">
                {it.d}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function WhoUsesSection({ geoName }: { geoName: string }) {
  return (
    <section className="space-y-5">
      <SectionHeader title={`${geoName} 출장마사지, 어떤 분들이 많이 찾을까?`} />
      <CardList
        items={[
          {
            t: "야근·회식 잦은 직장인",
            d: `${geoName}에서 늦은 시간 퇴근 후 어깨·목 뭉침을 풀고 싶을 때 자주 이용합니다.`,
          },
          {
            t: "출장·숙박 중인 비즈니스 고객",
            d: "호텔·레지던스 등 임시 거주지에서 이동 부담 없이 받고 싶을 때 적합합니다.",
          },
          {
            t: "외출이 어려운 부모님",
            d: "아이를 재운 뒤 짧은 시간이라도 컨디션을 회복하고 싶은 경우 활용도가 높습니다.",
          },
          {
            t: "운동 후 회복이 필요한 분",
            d: "헬스·골프·러닝 등 강도 높은 운동 후 근피로 회복용으로 자주 찾으십니다.",
          },
          {
            t: "잦은 야간 운전·장시간 좌식 직군",
            d: "운전·사무 등 같은 자세를 오래 유지하시는 분의 허리·골반 이완에 도움됩니다.",
          },
          {
            t: "수면의 질을 높이고 싶은 분",
            d: "아로마 위주 부드러운 케어로 잠들기 전 컨디션 정돈을 원하실 때 추천합니다.",
          },
        ]}
      />
    </section>
  );
}

export function PreReservationSection({ geoName }: { geoName: string }) {
  return (
    <section className="space-y-5">
      <SectionHeader title={`${geoName} 출장마사지 예약 전 확인할 점`} />
      <CardList
        items={[
          {
            t: "휴대폰 본인 인증",
            d: "예약은 본인 명의 휴대폰 인증 후 확정됩니다. 익명 예약은 받지 않습니다.",
          },
          {
            t: "정확한 주소·동·호수",
            d: `${geoName} 내 도착 주소를 동·호수까지 정확히 알려주셔야 안전하게 방문드릴 수 있습니다.`,
          },
          {
            t: "주차 가능 여부",
            d: "건물 내 방문객 주차가 가능한지 미리 알려주시면 도착 시간이 정확해집니다.",
          },
          {
            t: "선호 시간대 여유 있게",
            d: "교통 상황에 따라 ±15분 정도 여유를 두고 예약 시간을 잡아주시면 좋습니다.",
          },
          {
            t: "만 19세 이상 여부",
            d: "법적 보호 대상자(미성년) 단독 예약은 받지 않습니다. 보호자 동의 후 가능합니다.",
          },
          {
            t: "건강 상태 사전 안내",
            d: "임신·수술 직후·급성 염증 등 시술이 제한될 수 있는 상황을 미리 알려주세요.",
          },
        ]}
      />
    </section>
  );
}

export function CoursesSection() {
  return (
    <section className="space-y-5">
      <SectionHeader title="이용 가능한 마사지 코스" />
      <div className="grid gap-4 md:grid-cols-3">
        {SERVICES.map((s) => (
          <article
            key={s.slug}
            className="rounded-2xl border border-brand-200 bg-brand-100 p-5"
          >
            <h3 className="text-lg font-bold text-brand-800">{s.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              {s.summary}
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-white/85">
              {s.durations.map((dur) => (
                <li
                  key={dur.minutes}
                  className="flex justify-between border-b border-brand-200/60 py-1"
                >
                  <span>{dur.minutes}분 코스</span>
                  <span className="font-bold text-brand-700">
                    {dur.price.toLocaleString()}원
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="text-xs text-white/60">
        · 모든 코스는 정찰제이며, 안내된 금액 외 추가 결제를 요구하지 않습니다.
      </p>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    { n: 1, t: "상담 신청", d: "전화·카카오톡·예약 페이지 양식 중 편한 방법으로 신청합니다." },
    { n: 2, t: "본인 인증", d: "휴대폰 본인 인증 후 예약이 정식으로 확정됩니다." },
    { n: 3, t: "예약 확정 안내", d: "방문 시간·코스·결제 정보가 안내됩니다." },
    { n: 4, t: "테라피스트 방문", d: "약속 시간에 자격을 갖춘 테라피스트가 직접 방문합니다." },
    { n: 5, t: "케어 진행 및 결제", d: "선택하신 코스 진행 후 현장에서 결제하시면 종료됩니다." },
  ];
  return (
    <section className="space-y-5">
      <SectionHeader title="예약부터 방문까지 진행 절차" />
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s) => (
          <li
            key={s.n}
            className="rounded-xl border border-brand-200 bg-brand-100 p-4"
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-sm font-extrabold text-brand-50 shadow-[0_0_16px_-2px_rgba(34,197,94,0.6)]">
              {s.n}
            </div>
            <p className="mt-3 text-sm font-bold text-brand-800">{s.t}</p>
            <p className="mt-1 text-xs leading-relaxed text-white/80">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function PriceInfoSection({ geoName }: { geoName: string }) {
  return (
    <section className="space-y-5">
      <SectionHeader title="가격·운영시간·추가비용 안내" />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
          <h3 className="text-sm font-bold text-brand-700">정찰제 가격</h3>
          <p className="mt-2 text-base font-extrabold text-white">
            60분 80,000원~
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/75">
            모든 코스는 사전에 안내된 금액으로만 진행됩니다. 현장에서 추가
            결제를 요구하지 않습니다.
          </p>
        </div>
        <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
          <h3 className="text-sm font-bold text-brand-700">운영 시간</h3>
          <p className="mt-2 text-base font-extrabold text-white">
            {SITE.hours}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/75">
            야간·심야 시간대 예약도 정상 응대합니다. 시간대에 따라 배정이
            지연될 수 있습니다.
          </p>
        </div>
        <div className="rounded-2xl border border-brand-200 bg-brand-100 p-5">
          <h3 className="text-sm font-bold text-brand-700">추가 비용 안내</h3>
          <p className="mt-2 text-base font-extrabold text-white">
            지역·시간 별도 안내
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/75">
            {geoName} 외곽이나 도서·산간, 심야 시간대는 출장비가 추가될 수
            있으며, 예약 시 사전에 안내드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SafetyNoticeSection() {
  return (
    <section className="space-y-5">
      <SectionHeader title="안전하고 건전한 이용을 위한 안내" />
      <div className="rounded-2xl border border-brand-200 bg-brand-100 p-6">
        <ul className="space-y-2.5 text-sm leading-relaxed text-white/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span>본 서비스는 <b className="text-brand-700">이완 목적의 합법 바디케어</b>로 운영되며, 의료법상 안마·의료 행위가 아닙니다.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span><b className="text-brand-700">성적 서비스 요청은 전면 거절</b>되며, 이용이 즉시 중단됩니다.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span>음주 상태에서는 안전을 위해 시술이 거절될 수 있습니다.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span>임산부, 수술 직후, 급성 염증·감염성 질환 보유자 등은 사전 상담 후 진행 여부를 결정합니다.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span>모든 시술은 단정한 복장으로 진행되며, 부적절한 요청 시 신고 조치될 수 있습니다.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function RegionFaqSection({ geoName }: { geoName: string }) {
  const items = [
    {
      q: `${geoName}에서 즉시 출장이 가능한가요?`,
      a: `${geoName} 권역은 운영 시간 내 즉시 배정이 원칙이지만, 시간대와 교통 상황에 따라 지연될 수 있습니다. 예약 시 안내드립니다.`,
    },
    {
      q: "심야 시간대도 예약할 수 있나요?",
      a: `네, ${SITE.hours} 운영 중에는 심야 시간대도 예약 가능합니다. 심야는 일부 지역에서 출장비가 추가될 수 있습니다.`,
    },
    {
      q: "결제 방법은 어떻게 되나요?",
      a: "현장 결제 기준이며 현금·계좌이체·카드 단말 결제가 가능합니다. 사전 안내된 금액 외 추가 결제는 없습니다.",
    },
    {
      q: "예약 변경·취소는 어떻게 하나요?",
      a: "시술 시작 2시간 전까지는 무료로 변경·취소가 가능합니다. 이후에는 운영 정책에 따라 위약금이 발생할 수 있습니다.",
    },
    {
      q: `${geoName} 외 지역도 출장 가능한가요?`,
      a: "전국 17개 광역에 출장 운영 중이며, 인접 지역은 별도 상담 후 가능 여부를 안내드립니다.",
    },
  ];
  return (
    <section className="space-y-5">
      <SectionHeader title={`${geoName} 출장마사지 자주 묻는 질문`} />
      <div className="divide-y divide-brand-200 overflow-hidden rounded-2xl border border-brand-200 bg-brand-100">
        {items.map((f, i) => (
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
            <p className="mt-3 text-sm leading-relaxed text-white/85">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function HeroBlock({
  badge,
  h1Top,
  h1Sub,
  description,
}: {
  badge: string;
  h1Top: string;
  h1Sub: string;
  description: string;
}) {
  return (
    <header className="rounded-3xl border border-brand-200 bg-brand-100 p-7 sm:p-10">
      <span className="inline-flex items-center rounded-full border border-brand-400 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
        {badge}
      </span>
      <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
        {h1Top}
        <span className="mt-1 block text-brand-500 sm:text-3xl lg:text-4xl">
          {h1Sub}
        </span>
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
        {description}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/booking" className="btn-primary">
          예약 문의하기
        </Link>
        <a
          href={`tel:${SITE.phone.replace(/-/g, "")}`}
          className="btn-ghost"
        >
          전화 상담 {SITE.phone}
        </a>
      </div>
    </header>
  );
}
