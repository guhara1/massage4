# VIP 출장

전국 합법 바디케어 출장 예약 사이트입니다. Next.js (App Router) + Tailwind CSS로 구성되어 있습니다.

## 사업 개요

- **상호**: VIP 출장
- **업종**: 기타 자유업 (이완 목적의 바디케어)
- **운영 원칙**: 사업자 등록을 마친 합법 출장 바디케어 서비스로, 의료 행위(의료법상 안마)나 어떠한 형태의 성적 서비스도 제공하지 않습니다.

> ⚠️ `lib/site.ts` 안의 사업자번호·통신판매업번호·대표자명·연락처는 모두 **샘플 값**입니다. 실제 배포 전에 실제 정보로 교체해 주세요.

## 페이지 구조

- `/` 홈 — 핵심 메시지, 대표 서비스, 예약 흐름
- `/services` 서비스/가격 — 코스별 시간·가격 정찰제 안내
- `/regions` 지역 — 출장 가능 지역 안내
- `/booking` 예약/문의 — 지역·코스 선택 + 본인 동의 후 문의 양식
- `/reviews` 이용 후기
- `/notices` 공지사항

## 개발

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## 디렉터리

```
app/         # Next.js App Router 페이지
components/  # 공통 UI (Header, Footer, BookingForm)
lib/         # 사이트 설정 및 더미 데이터
```

## 데이터 교체 가이드

- 서비스 / 가격: `lib/data.ts` → `SERVICES`
- 출장 가능 지역: `lib/data.ts` → `REGIONS`
- 후기 / 공지: `lib/data.ts` → `REVIEWS`, `NOTICES`
- 사업자/연락처/브랜드 카피: `lib/site.ts` → `SITE`

## 추후 확장 아이디어

- 예약 양식 → 실제 백엔드(Email/Slack/카카오 알림톡) 연동
- 후기 / 공지 → CMS(예: Sanity, Contentful) 또는 DB 기반 관리
- 본인인증(휴대폰) PASS 인증 연동
- 다국어(영/중/일) 지원
