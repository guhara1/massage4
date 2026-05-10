// Builds a deterministic "popular regions" recommendation list for
// each 2nd / 3rd / 4th level region page. Pages cross-link to other
// dong pages across the country, building a dense internal-link
// graph for SEO.

import { PROVINCES, type Province, type City, type Dong } from "./regions";

type SingleTemplate = { kind: "single"; make: (n: string) => string };
type CompareTemplate = { kind: "compare"; make: (a: string, b: string) => string };
type Template = SingleTemplate | CompareTemplate;

const TEMPLATES: Template[] = [
  { kind: "single", make: (n) => `${n} 출장마사지 60분 후기, 1인샵보다 나은 이유` },
  { kind: "single", make: (n) => `${n} 출장마사지 가격, 체형별 시간 추천` },
  { kind: "single", make: (n) => `${n} 출장마사지 관리사 후기, 야간 예약 꿀팁` },
  { kind: "single", make: (n) => `${n} 출장마사지 90분, 허리디스크 진짜 효과` },
  { kind: "single", make: (n) => `${n} 출장마사지, 60분으로도 종아리 해결될까?` },
  { kind: "single", make: (n) => `${n} 출장마사지 첫 이용, 솔직 후기 정리` },
  { kind: "single", make: (n) => `${n} 출장마사지 야간 vs 주간 예약 비교` },
  { kind: "single", make: (n) => `${n} 출장마사지 코스별 가격, 한 페이지 정리` },
  { kind: "single", make: (n) => `${n} 출장마사지 vs 매장 마사지 차이점` },
  { kind: "single", make: (n) => `${n} 출장마사지 추천 코스, 직장인 회복 루틴` },
  { kind: "single", make: (n) => `${n} 출장마사지 처음, 무엇부터 알아볼까?` },
  { kind: "single", make: (n) => `${n} 출장마사지 90분 vs 120분 어떤 게 나을까?` },
  { kind: "single", make: (n) => `${n} 출장마사지 결제 방법, 영수증 발급까지` },
  { kind: "single", make: (n) => `${n} 출장마사지 사전 준비, 챙길 것 5가지` },
  { kind: "single", make: (n) => `${n} 출장마사지 추천 시간대, 배정 빠른 시간` },
  { kind: "single", make: (n) => `${n} 출장마사지 후 회복 루틴, 효과 오래 가는 법` },
  { kind: "single", make: (n) => `${n} 출장마사지 아로마 vs 스웨디시, 내게 맞는 코스` },
  { kind: "single", make: (n) => `${n} 출장마사지 호텔에서도 가능? 출입 절차 정리` },
  { kind: "compare", make: (a, b) => `${a} vs ${b} 출장마사지, 내 돈 아낀 비교` },
  { kind: "compare", make: (a, b) => `${a}·${b} 출장마사지 후기, 어디가 더 좋을까?` },
];

export type Recommendation = {
  title: string;
  href: string;
  geo: string;
};

type FlatDong = { province: Province; city: City; dong: Dong };

function flattenDongs(): FlatDong[] {
  const list: FlatDong[] = [];
  for (const p of PROVINCES) {
    for (const c of p.cities) {
      for (const d of c.dongs) {
        list.push({ province: p, city: c, dong: d });
      }
    }
  }
  return list;
}

const ALL_DONGS = flattenDongs();

function hash(str: string): number {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h) ^ str.charCodeAt(i);
  }
  return h >>> 0;
}

function shuffled<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRecsFromPool(seedKey: string, pool: FlatDong[], n: number): FlatDong[] {
  return shuffled(pool, hash(seedKey)).slice(0, n);
}

function makeRecommendations(
  seedKey: string,
  picks: FlatDong[],
  altPool: FlatDong[],
): Recommendation[] {
  return picks.map((x, i) => {
    const tplIdx = hash(`${seedKey}::tpl::${i}::${x.dong.slug}`) % TEMPLATES.length;
    const tpl = TEMPLATES[tplIdx];
    const href = `/regions/${x.province.slug}/${x.city.slug}/${x.dong.slug}/`;
    const geo = `${x.province.shortName} · ${x.city.name}`;
    if (tpl.kind === "compare") {
      // Pick a different dong for the comparison pair
      const altIdx = hash(`${seedKey}::alt::${i}`) % Math.max(1, altPool.length);
      const altCandidate = altPool[altIdx];
      const altName =
        altCandidate && altCandidate.dong.slug !== x.dong.slug
          ? altCandidate.dong.name
          : (altPool[(altIdx + 1) % altPool.length]?.dong.name ?? x.dong.name);
      return { title: tpl.make(x.dong.name, altName), href, geo };
    }
    return { title: tpl.make(x.dong.name), href, geo };
  });
}

export function recommendForDong(
  provinceSlug: string,
  citySlug: string,
  dongSlug: string,
): Recommendation[] {
  const seedKey = `dong::${provinceSlug}::${citySlug}::${dongSlug}`;
  const currentKey = `${provinceSlug}/${citySlug}/${dongSlug}`;
  const others = ALL_DONGS.filter(
    (x) => `${x.province.slug}/${x.city.slug}/${x.dong.slug}` !== currentKey,
  );
  const sameCity = others.filter(
    (x) => x.province.slug === provinceSlug && x.city.slug === citySlug,
  );
  const sameProvinceOtherCity = others.filter(
    (x) => x.province.slug === provinceSlug && x.city.slug !== citySlug,
  );
  const otherProvince = others.filter((x) => x.province.slug !== provinceSlug);

  const picks: FlatDong[] = [
    ...pickRecsFromPool(`${seedKey}::same`, sameCity, 2),
    ...pickRecsFromPool(`${seedKey}::near`, sameProvinceOtherCity, 2),
    ...pickRecsFromPool(`${seedKey}::far`, otherProvince, 3),
  ];

  return makeRecommendations(seedKey, picks, others);
}

export function recommendForCity(
  provinceSlug: string,
  citySlug: string,
): Recommendation[] {
  const seedKey = `city::${provinceSlug}::${citySlug}`;
  const sameProvinceOtherCity = ALL_DONGS.filter(
    (x) => x.province.slug === provinceSlug && x.city.slug !== citySlug,
  );
  const otherProvince = ALL_DONGS.filter((x) => x.province.slug !== provinceSlug);
  const picks: FlatDong[] = [
    ...pickRecsFromPool(`${seedKey}::near`, sameProvinceOtherCity, 3),
    ...pickRecsFromPool(`${seedKey}::far`, otherProvince, 4),
  ];
  return makeRecommendations(seedKey, picks, [
    ...sameProvinceOtherCity,
    ...otherProvince,
  ]);
}

export function recommendForProvince(provinceSlug: string): Recommendation[] {
  const seedKey = `prov::${provinceSlug}`;
  const sameProvince = ALL_DONGS.filter((x) => x.province.slug === provinceSlug);
  const otherProvince = ALL_DONGS.filter((x) => x.province.slug !== provinceSlug);
  const picks: FlatDong[] = [
    ...pickRecsFromPool(`${seedKey}::near`, sameProvince, 3),
    ...pickRecsFromPool(`${seedKey}::far`, otherProvince, 4),
  ];
  return makeRecommendations(seedKey, picks, [...sameProvince, ...otherProvince]);
}
