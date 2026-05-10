"use client";

import { useMemo, useState } from "react";
import { REGIONS, SERVICES } from "@/lib/data";
import { SITE } from "@/lib/site";

export default function BookingForm() {
  const [region, setRegion] = useState(REGIONS[0].name);
  const [city, setCity] = useState(REGIONS[0].cities[0]);
  const [service, setService] = useState(SERVICES[0].slug);
  const [duration, setDuration] = useState(SERVICES[0].durations[0].minutes);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const cities = useMemo(
    () => REGIONS.find((r) => r.name === region)?.cities ?? [],
    [region],
  );
  const selectedService = useMemo(
    () => SERVICES.find((s) => s.slug === service) ?? SERVICES[0],
    [service],
  );
  const selectedPrice = useMemo(
    () =>
      selectedService.durations.find((d) => d.minutes === duration)?.price ??
      selectedService.durations[0].price,
    [selectedService, duration],
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agree) return;
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    if (!trimmedName) {
      setError("이름을 입력해 주세요.");
      return;
    }
    if (!trimmedPhone) {
      setError("연락처를 입력해 주세요.");
      return;
    }
    setName(trimmedName);
    setPhone(trimmedPhone);
    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card">
        <h2 className="text-lg font-bold text-brand-800">문의가 접수되었습니다</h2>
        <p className="mt-2 text-sm text-brand-800/85">
          입력해 주신 연락처로 잠시 후 상담 연락을 드립니다. 빠른 확정을 원하시면
          고객센터 <b>{SITE.phone}</b> 로 직접 연락 주셔도 좋습니다.
        </p>
        <dl className="mt-5 grid gap-2 text-sm">
          <Row k="지역" v={`${region} ${city}`} />
          <Row k="코스" v={`${selectedService.name} ${duration}분`} />
          <Row k="예약 희망일시" v={date || "협의"} />
          <Row k="신청자" v={`${name} (${phone})`} />
        </dl>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-ghost mt-6"
        >
          다시 작성하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="지역">
          <select
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
              const next = REGIONS.find((r) => r.name === e.target.value);
              if (next) setCity(next.cities[0]);
            }}
            className={selectStyle}
          >
            {REGIONS.map((r) => (
              <option key={r.name} value={r.name}>{r.name}</option>
            ))}
          </select>
        </Field>
        <Field label="세부 지역">
          <select value={city} onChange={(e) => setCity(e.target.value)} className={selectStyle}>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="서비스">
          <select
            value={service}
            onChange={(e) => {
              setService(e.target.value);
              const next = SERVICES.find((s) => s.slug === e.target.value);
              if (next) setDuration(next.durations[0].minutes);
            }}
            className={selectStyle}
          >
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </Field>
        <Field label="코스 시간">
          <select
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className={selectStyle}
          >
            {selectedService.durations.map((d) => (
              <option key={d.minutes} value={d.minutes}>
                {d.minutes}분 · {d.price.toLocaleString()}원
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="예약 희망 일시">
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={selectStyle}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="이름">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="홍길동"
            className={selectStyle}
          />
        </Field>
        <Field label="연락처 (휴대폰)">
          <input
            required
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="010-0000-0000"
            className={selectStyle}
          />
        </Field>
      </div>

      <div className="rounded-xl border border-brand-100 bg-brand-50/50 p-4 text-sm text-brand-800/85">
        선택하신 코스 예상 금액:{" "}
        <b className="text-brand-700">{selectedPrice.toLocaleString()}원</b>
        <span className="ml-1 text-xs text-brand-700/70">
          (지역에 따라 출장비가 별도 안내될 수 있습니다)
        </span>
      </div>

      <label className="flex items-start gap-2 text-sm text-brand-800/85">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-1"
        />
        <span>
          본인은 만 19세 이상이며, 본 서비스가 이완 목적의 합법 바디케어임을
          확인했습니다. 입력한 연락처로 예약 상담을 받는 데 동의합니다.
          <span className="ml-1 text-xs text-brand-700/70">(필수)</span>
        </span>
      </label>

      {error && (
        <p className="text-sm font-medium text-red-600" role="alert">
          {error}
        </p>
      )}

      <button type="submit" disabled={!agree} className="btn-primary disabled:opacity-50">
        예약 문의 보내기
      </button>
    </form>
  );
}

const selectStyle =
  "w-full rounded-lg border border-brand-200 bg-white px-3 py-2.5 text-sm text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-brand-800">{label}</span>
      {children}
    </label>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between border-b border-brand-100 py-1.5">
      <dt className="text-brand-700/70">{k}</dt>
      <dd className="font-medium text-brand-900">{v}</dd>
    </div>
  );
}
