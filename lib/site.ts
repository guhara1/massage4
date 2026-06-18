export const SITE = {
  name: "VIP 출장",
  tagline: "전국 합법 바디케어 출장 예약 플랫폼",
  description:
    "VIP 출장은 사업자 등록을 마친 합법 바디케어 출장 서비스입니다. 타이·아로마·스웨디시 등 이완 목적의 바디케어를 자격을 갖춘 테라피스트가 자택, 사무실, 숙소로 직접 방문해 제공해 드립니다.",
  phone: "0508-202-4683",
  kakao: "@vip-chuljang",
  email: "help@vip-chuljang.example",
  hours: "매일 13:00 ~ 익일 08:00 (연중무휴)",
  address: "서울특별시 강남구 (본사)",
  business: {
    name: "VIP 출장",
    owner: "홍길동",
    registrationNumber: "000-00-00000",
    mailOrder: "제2026-서울강남-00000호",
    category: "기타 자유업 (이완 목적 바디케어)",
  },
} as const;

// 특정 지역(시·도)에서만 노출할 전용 전화번호.
// 키는 lib/regions.ts 의 province slug 와 일치해야 합니다.
export const REGION_PHONE_OVERRIDES: Record<string, string> = {
  jeju: "0508-202-4723",
};

// province slug 에 해당하는 전화번호를 반환합니다.
// 별도 지정된 지역이 없으면 기본 대표번호(SITE.phone)를 사용합니다.
export function phoneForProvince(provinceSlug?: string | null): string {
  if (provinceSlug && REGION_PHONE_OVERRIDES[provinceSlug]) {
    return REGION_PHONE_OVERRIDES[provinceSlug];
  }
  return SITE.phone;
}

export const NAV = [
  { href: "/services", label: "서비스 / 가격" },
  { href: "/price/", label: "가격 안내" },
  { href: "/regions", label: "지역 안내" },
  { href: "/station/", label: "지하철역" },
  { href: "/guide/", label: "이용 가이드" },
  { href: "/trust/", label: "안전·신뢰 센터" },
  { href: "/booking", label: "예약 / 문의" },
  { href: "/reviews", label: "이용 후기" },
  { href: "/notices", label: "공지사항" },
] as const;
