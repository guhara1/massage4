"use client";

import { usePathname } from "next/navigation";
import { SITE, contactForProvince } from "@/lib/site";

// 푸터 "고객센터" 값. 지역(시·도)에 따라 전화번호를 숨기고
// 안내 문구만 노출하는 정책을 그대로 따릅니다.
export default function FooterContact() {
  const pathname = usePathname() ?? "";
  const match = pathname.match(/^\/regions\/([^/]+)/);
  const contact = contactForProvince(match ? match[1] : null);

  if (contact.kind === "label") {
    return <>{contact.label}</>;
  }
  return (
    <>
      {contact.phone} · {SITE.hours}
    </>
  );
}
