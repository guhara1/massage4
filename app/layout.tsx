import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallBar from "@/components/FloatingCallBar";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

const SITE_TITLE = "라곰 출장마사지 | 전국 출장마사지·홈타이 예약 안내";
const SITE_DESCRIPTION =
  "전국 출장마사지·홈타이 이용 정보. 지역별 방문 범위·코스·가격·예약 절차를 한곳에서 확인하세요.";

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
    "출장 바디케어", "라곰 출장마사지", "지역별 출장",
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
      <head>
        {/* Search engine verification — duplicated as raw <meta> tags
            so the tokens always appear in <head> regardless of how
            Next.js orders metadata fields. */}
        <meta
          name="google-site-verification"
          content="tLvzDmZ30YWnEXQJb7t1JHxf1OROGMjRlc_Yk5PiBkw"
        />
        <meta
          name="naver-site-verification"
          content="482cbecb0e5b8c192b1b34f470e91955ffd58fee"
        />
        {/* Explicit favicon links with cache-busting query string —
            Next.js auto-emits its own icon tags but adding these
            guarantees the new icon shows up even if browsers cached
            the previous /favicon.ico. */}
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg?v=3" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=3" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <OrganizationJsonLd />
      </head>
      <body className="min-h-screen bg-[var(--bg)] pb-24 antialiased sm:pb-0">
        <Header />
        <main className="container-narrow py-10 sm:py-14">{children}</main>
        <Footer />
        <FloatingCallBar />
      </body>
    </html>
  );
}
