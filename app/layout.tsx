import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const SITE_TITLE = "VIP출장 | 전국 출장마사지·홈타이 예약 안내";
const SITE_DESCRIPTION =
  "VIP출장은 전국 주요 지역 출장마사지와 홈타이 이용 정보를 안내합니다. 지역별 방문 가능 여부, 코스, 예약 전 확인사항을 한눈에 확인해보세요.";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE.name,
  keywords: [
    "출장마사지", "홈타이", "전국 출장", "타이마사지", "아로마", "스웨디시",
    "출장 바디케어", "VIP출장", "지역별 출장",
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE.name,
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-[var(--bg)] antialiased">
        <Header />
        <main className="container-narrow py-10 sm:py-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
