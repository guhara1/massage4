import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallBar from "@/components/FloatingCallBar";
import { SITE } from "@/lib/site";

const SITE_TITLE = "VIP출장 | 전국 출장마사지·홈타이 예약 안내";
const SITE_DESCRIPTION =
  "VIP출장은 전국 주요 지역 출장마사지와 홈타이 이용 정보를 안내합니다. 지역별 방문 가능 여부, 코스, 예약 전 확인사항을 한눈에 확인해보세요.";

export const metadata: Metadata = {
  metadataBase: new URL("https://massage4.pages.dev"),
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
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "tLvzDmZ30YWnEXQJb7t1JHxf1OROGMjRlc_Yk5PiBkw",
    other: {
      "naver-site-verification":
        "482cbecb0e5b8c192b1b34f470e91955ffd58fee",
    },
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        { url: "/rss.xml", title: `${SITE.name} 공지사항 RSS` },
      ],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-[var(--bg)] pb-24 antialiased sm:pb-0">
        <Header />
        <main className="container-narrow py-10 sm:py-14">{children}</main>
        <Footer />
        <FloatingCallBar />
      </body>
    </html>
  );
}
