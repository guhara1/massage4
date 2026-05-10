import BookingForm from "@/components/BookingForm";
import { SITE } from "@/lib/site";

export const metadata = { title: "예약 / 문의" };

export default function BookingPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
      <section>
        <h1 className="section-title">예약 / 문의</h1>
        <p className="section-sub">
          아래 양식을 작성해 주시면 영업시간 내 빠르게 회신드립니다. 즉시 상담을
          원하시면 고객센터 또는 카카오톡으로 문의 주세요.
        </p>
        <div className="mt-6">
          <BookingForm />
        </div>
      </section>

      <aside className="space-y-6">
        <div className="card">
          <h2 className="text-lg font-bold text-brand-800">바로 연결</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li>
              <span className="text-white/70">고객센터</span>
              <p className="text-base font-semibold text-white">{SITE.phone}</p>
            </li>
            <li>
              <span className="text-white/70">카카오톡</span>
              <p className="text-base font-semibold text-white">{SITE.kakao}</p>
            </li>
            <li>
              <span className="text-white/70">이메일</span>
              <p className="text-base font-semibold text-white">{SITE.email}</p>
            </li>
            <li>
              <span className="text-white/70">운영시간</span>
              <p className="text-sm text-white">{SITE.hours}</p>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="text-lg font-bold text-brand-800">예약 안내</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>· 예약은 휴대폰 본인 인증 완료 후 확정됩니다.</li>
            <li>· 만 19세 미만은 이용이 제한됩니다.</li>
            <li>· 시술 2시간 전까지 무료 변경·취소가 가능합니다.</li>
            <li>· 부적절한 요청은 정중히 거절되며, 재이용이 제한될 수 있습니다.</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
