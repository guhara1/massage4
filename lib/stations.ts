// Seoul subway station data for /station/ landing pages.
// Each station maps to its nearest existing dong page so the station
// page can cross-link into the region tree without orphaning users.

export type SubwayLine = {
  slug: string;
  name: string;
  shortName: string;
  color: string;
};

export const LINES: Record<string, SubwayLine> = {
  line1: { slug: "line1", name: "1호선", shortName: "1", color: "#0052A4" },
  line2: { slug: "line2", name: "2호선", shortName: "2", color: "#00A84D" },
  line3: { slug: "line3", name: "3호선", shortName: "3", color: "#EF7C1C" },
  line4: { slug: "line4", name: "4호선", shortName: "4", color: "#00A5DE" },
  line5: { slug: "line5", name: "5호선", shortName: "5", color: "#996CAC" },
  line6: { slug: "line6", name: "6호선", shortName: "6", color: "#CD7C2F" },
  line7: { slug: "line7", name: "7호선", shortName: "7", color: "#747F00" },
  line8: { slug: "line8", name: "8호선", shortName: "8", color: "#E6186C" },
  line9: { slug: "line9", name: "9호선", shortName: "9", color: "#BDB092" },
  sinbundang: { slug: "sinbundang", name: "신분당선", shortName: "신", color: "#D4003B" },
  bundang: { slug: "bundang", name: "수인분당선", shortName: "수", color: "#FABE00" },
  gyeongui: { slug: "gyeongui", name: "경의중앙선", shortName: "경", color: "#77C4A3" },
  airport: { slug: "airport", name: "공항철도", shortName: "공", color: "#0090D2" },
  uisinseol: { slug: "uisinseol", name: "우이신설선", shortName: "우", color: "#B7C452" },
};

export type Station = {
  slug: string;
  name: string;
  lines: string[];
  province: string;
  city: string;
  dong: string;
  district: string;
};

export const STATIONS: Station[] = [
  // 강남구 — 19개
  { slug: "gangnam", name: "강남", lines: ["line2", "sinbundang"], province: "seoul", city: "gangnam", dong: "yeoksam", district: "강남구" },
  { slug: "yeoksam", name: "역삼", lines: ["line2"], province: "seoul", city: "gangnam", dong: "yeoksam", district: "강남구" },
  { slug: "seolleung", name: "선릉", lines: ["line2", "bundang"], province: "seoul", city: "gangnam", dong: "yeoksam", district: "강남구" },
  { slug: "samseong", name: "삼성", lines: ["line2"], province: "seoul", city: "gangnam", dong: "samseong", district: "강남구" },
  { slug: "apgujeong", name: "압구정", lines: ["line3"], province: "seoul", city: "gangnam", dong: "apgujeong", district: "강남구" },
  { slug: "sinsa", name: "신사", lines: ["line3", "sinbundang"], province: "seoul", city: "gangnam", dong: "sinsa", district: "강남구" },
  { slug: "cheongdam", name: "청담", lines: ["line7"], province: "seoul", city: "gangnam", dong: "cheongdam", district: "강남구" },
  { slug: "hakdong", name: "학동", lines: ["line7"], province: "seoul", city: "gangnam", dong: "nonhyeon", district: "강남구" },
  { slug: "gangnam-gu-office", name: "강남구청", lines: ["line7", "bundang"], province: "seoul", city: "gangnam", dong: "nonhyeon", district: "강남구" },
  { slug: "nonhyeon", name: "논현", lines: ["line7"], province: "seoul", city: "gangnam", dong: "nonhyeon", district: "강남구" },
  { slug: "sinnonhyeon", name: "신논현", lines: ["line9", "sinbundang"], province: "seoul", city: "gangnam", dong: "nonhyeon", district: "강남구" },
  { slug: "eonju", name: "언주", lines: ["line9"], province: "seoul", city: "gangnam", dong: "nonhyeon", district: "강남구" },
  { slug: "seonjeongneung", name: "선정릉", lines: ["line9", "bundang"], province: "seoul", city: "gangnam", dong: "samseong", district: "강남구" },
  { slug: "samseong-jungang", name: "삼성중앙", lines: ["line9"], province: "seoul", city: "gangnam", dong: "samseong", district: "강남구" },
  { slug: "bongeunsa", name: "봉은사", lines: ["line9"], province: "seoul", city: "gangnam", dong: "samseong", district: "강남구" },
  { slug: "dogok", name: "도곡", lines: ["line3", "bundang"], province: "seoul", city: "gangnam", dong: "dogok", district: "강남구" },
  { slug: "daechi", name: "대치", lines: ["line3"], province: "seoul", city: "gangnam", dong: "daechi", district: "강남구" },
  { slug: "maebong", name: "매봉", lines: ["line3"], province: "seoul", city: "gangnam", dong: "dogok", district: "강남구" },
  { slug: "ilwon", name: "일원", lines: ["line3"], province: "seoul", city: "gangnam", dong: "ilwon", district: "강남구" },

  // 서초구 — 8개
  { slug: "gyodae", name: "교대", lines: ["line2", "line3"], province: "seoul", city: "seocho", dong: "seocho", district: "서초구" },
  { slug: "seocho", name: "서초", lines: ["line2"], province: "seoul", city: "seocho", dong: "seocho", district: "서초구" },
  { slug: "bangbae", name: "방배", lines: ["line2"], province: "seoul", city: "seocho", dong: "bangbae", district: "서초구" },
  { slug: "express-bus-terminal", name: "고속터미널", lines: ["line3", "line7", "line9"], province: "seoul", city: "seocho", dong: "banpo", district: "서초구" },
  { slug: "jamwon", name: "잠원", lines: ["line3"], province: "seoul", city: "seocho", dong: "jamwon", district: "서초구" },
  { slug: "yangjae", name: "양재", lines: ["line3", "sinbundang"], province: "seoul", city: "seocho", dong: "yangjae", district: "서초구" },
  { slug: "yangjae-citizen-forest", name: "양재시민의숲", lines: ["sinbundang"], province: "seoul", city: "seocho", dong: "yangjae", district: "서초구" },
  { slug: "banpo", name: "반포", lines: ["line7"], province: "seoul", city: "seocho", dong: "banpo", district: "서초구" },

  // 송파구 — 8개
  { slug: "jamsil", name: "잠실", lines: ["line2", "line8"], province: "seoul", city: "songpa", dong: "jamsil", district: "송파구" },
  { slug: "jamsil-saenae", name: "잠실새내", lines: ["line2"], province: "seoul", city: "songpa", dong: "jamsil", district: "송파구" },
  { slug: "sports-complex", name: "종합운동장", lines: ["line2", "line9"], province: "seoul", city: "songpa", dong: "jamsil", district: "송파구" },
  { slug: "seokchon", name: "석촌", lines: ["line8", "line9"], province: "seoul", city: "songpa", dong: "seokchon", district: "송파구" },
  { slug: "songpa", name: "송파", lines: ["line8"], province: "seoul", city: "songpa", dong: "songpa", district: "송파구" },
  { slug: "garak-market", name: "가락시장", lines: ["line3", "line8"], province: "seoul", city: "songpa", dong: "garak", district: "송파구" },
  { slug: "munjeong", name: "문정", lines: ["line8"], province: "seoul", city: "songpa", dong: "munjeong", district: "송파구" },
  { slug: "ogeum", name: "오금", lines: ["line3", "line5"], province: "seoul", city: "songpa", dong: "ogeum", district: "송파구" },

  // 강동구 — 5개
  { slug: "cheonho", name: "천호", lines: ["line5", "line8"], province: "seoul", city: "gangdong", dong: "cheonho", district: "강동구" },
  { slug: "gangdong", name: "강동", lines: ["line5"], province: "seoul", city: "gangdong", dong: "seongnae", district: "강동구" },
  { slug: "myeongil", name: "명일", lines: ["line5"], province: "seoul", city: "gangdong", dong: "myeongil", district: "강동구" },
  { slug: "godeok", name: "고덕", lines: ["line5"], province: "seoul", city: "gangdong", dong: "godeok", district: "강동구" },
  { slug: "sangil-dong", name: "상일동", lines: ["line5"], province: "seoul", city: "gangdong", dong: "sangil", district: "강동구" },

  // 마포구 — 10개
  { slug: "hapjeong", name: "합정", lines: ["line2", "line6"], province: "seoul", city: "mapo", dong: "hapjeong", district: "마포구" },
  { slug: "hongdae", name: "홍대입구", lines: ["line2", "gyeongui", "airport"], province: "seoul", city: "mapo", dong: "seogyo", district: "마포구" },
  { slug: "sinchon", name: "신촌", lines: ["line2"], province: "seoul", city: "seodaemun", dong: "sinchon", district: "서대문구" },
  { slug: "edae", name: "이대", lines: ["line2"], province: "seoul", city: "seodaemun", dong: "sinchon", district: "서대문구" },
  { slug: "dmc", name: "디지털미디어시티", lines: ["line6", "gyeongui", "airport"], province: "seoul", city: "mapo", dong: "seongsan", district: "마포구" },
  { slug: "mangwon", name: "망원", lines: ["line6"], province: "seoul", city: "mapo", dong: "mangwon", district: "마포구" },
  { slug: "mapo", name: "마포", lines: ["line5"], province: "seoul", city: "mapo", dong: "gongdeok", district: "마포구" },
  { slug: "gongdeok", name: "공덕", lines: ["line5", "line6", "gyeongui", "airport"], province: "seoul", city: "mapo", dong: "gongdeok", district: "마포구" },
  { slug: "daeheung", name: "대흥", lines: ["line6"], province: "seoul", city: "mapo", dong: "daeheung", district: "마포구" },
  { slug: "gwangheungchang", name: "광흥창", lines: ["line6"], province: "seoul", city: "mapo", dong: "sinsu", district: "마포구" },

  // 용산구 — 6개
  { slug: "itaewon", name: "이태원", lines: ["line6"], province: "seoul", city: "yongsan", dong: "itaewon", district: "용산구" },
  { slug: "hangangjin", name: "한강진", lines: ["line6"], province: "seoul", city: "yongsan", dong: "hannam", district: "용산구" },
  { slug: "samgakji", name: "삼각지", lines: ["line4", "line6"], province: "seoul", city: "yongsan", dong: "yongsan", district: "용산구" },
  { slug: "sinyongsan", name: "신용산", lines: ["line4"], province: "seoul", city: "yongsan", dong: "hangangno", district: "용산구" },
  { slug: "sookmyung", name: "숙대입구", lines: ["line4"], province: "seoul", city: "yongsan", dong: "namyeong", district: "용산구" },
  { slug: "ichon", name: "이촌", lines: ["line4", "gyeongui"], province: "seoul", city: "yongsan", dong: "ichon", district: "용산구" },

  // 중구·종로구 — 10개
  { slug: "city-hall", name: "시청", lines: ["line1", "line2"], province: "seoul", city: "junggu", dong: "sogong", district: "중구" },
  { slug: "euljiro-1", name: "을지로입구", lines: ["line2"], province: "seoul", city: "junggu", dong: "euljiro", district: "중구" },
  { slug: "ddp", name: "동대문역사문화공원", lines: ["line2", "line4", "line5"], province: "seoul", city: "junggu", dong: "gwanghui", district: "중구" },
  { slug: "myeongdong", name: "명동", lines: ["line4"], province: "seoul", city: "junggu", dong: "myeongdong", district: "중구" },
  { slug: "chungmuro", name: "충무로", lines: ["line3", "line4"], province: "seoul", city: "junggu", dong: "pildong", district: "중구" },
  { slug: "sindang", name: "신당", lines: ["line2", "line6"], province: "seoul", city: "junggu", dong: "sindang", district: "중구" },
  { slug: "yaksu", name: "약수", lines: ["line3", "line6"], province: "seoul", city: "junggu", dong: "yaksu", district: "중구" },
  { slug: "jongno-3", name: "종로3가", lines: ["line1", "line3", "line5"], province: "seoul", city: "jongno", dong: "jongno1234", district: "종로구" },
  { slug: "anguk", name: "안국", lines: ["line3"], province: "seoul", city: "jongno", dong: "gahoe", district: "종로구" },
  { slug: "gyeongbokgung", name: "경복궁", lines: ["line3"], province: "seoul", city: "jongno", dong: "sajik", district: "종로구" },
  { slug: "hyehwa", name: "혜화", lines: ["line4"], province: "seoul", city: "jongno", dong: "hyehwa", district: "종로구" },

  // 영등포·구로·금천 — 6개
  { slug: "yeongdeungpo-gu-office", name: "영등포구청", lines: ["line2", "line5"], province: "seoul", city: "yeongdeungpo", dong: "yeongdeungpo", district: "영등포구" },
  { slug: "dangsan", name: "당산", lines: ["line2", "line9"], province: "seoul", city: "yeongdeungpo", dong: "dangsan", district: "영등포구" },
  { slug: "yeouido", name: "여의도", lines: ["line5", "line9"], province: "seoul", city: "yeongdeungpo", dong: "yeoui", district: "영등포구" },
  { slug: "sindorim", name: "신도림", lines: ["line1", "line2"], province: "seoul", city: "guro", dong: "sindorim", district: "구로구" },
  { slug: "guro-digital", name: "구로디지털단지", lines: ["line2"], province: "seoul", city: "guro", dong: "guro", district: "구로구" },
  { slug: "gasan-digital", name: "가산디지털단지", lines: ["line1", "line7"], province: "seoul", city: "geumcheon", dong: "gasan", district: "금천구" },

  // 강서·양천 — 5개
  { slug: "gimpo-airport", name: "김포공항", lines: ["line5", "line9", "airport"], province: "seoul", city: "gangseo", dong: "gonghang", district: "강서구" },
  { slug: "magok", name: "마곡", lines: ["line5"], province: "seoul", city: "gangseo", dong: "magok", district: "강서구" },
  { slug: "balsan", name: "발산", lines: ["line5"], province: "seoul", city: "gangseo", dong: "balsan", district: "강서구" },
  { slug: "hwagok", name: "화곡", lines: ["line5"], province: "seoul", city: "gangseo", dong: "hwagok", district: "강서구" },
  { slug: "mokdong", name: "목동", lines: ["line5"], province: "seoul", city: "yangcheon", dong: "mokdong", district: "양천구" },

  // 관악·동작 — 6개
  { slug: "sadang", name: "사당", lines: ["line2", "line4"], province: "seoul", city: "dongjak", dong: "sadang", district: "동작구" },
  { slug: "snu", name: "서울대입구", lines: ["line2"], province: "seoul", city: "gwanak", dong: "bongcheon", district: "관악구" },
  { slug: "sillim", name: "신림", lines: ["line2"], province: "seoul", city: "gwanak", dong: "sillim", district: "관악구" },
  { slug: "noryangjin", name: "노량진", lines: ["line1", "line9"], province: "seoul", city: "dongjak", dong: "noryangjin", district: "동작구" },
  { slug: "heukseok", name: "흑석", lines: ["line9"], province: "seoul", city: "dongjak", dong: "heukseok", district: "동작구" },
  { slug: "boramae", name: "보라매", lines: ["line7"], province: "seoul", city: "dongjak", dong: "sindaebang", district: "동작구" },

  // 성동·광진 — 6개
  { slug: "wangsimni", name: "왕십리", lines: ["line2", "line5", "bundang", "gyeongui"], province: "seoul", city: "seongdong", dong: "wangsimni", district: "성동구" },
  { slug: "seongsu", name: "성수", lines: ["line2"], province: "seoul", city: "seongdong", dong: "seongsu1", district: "성동구" },
  { slug: "konkuk", name: "건대입구", lines: ["line2", "line7"], province: "seoul", city: "gwangjin", dong: "hwayang", district: "광진구" },
  { slug: "gangbyeon", name: "강변", lines: ["line2"], province: "seoul", city: "gwangjin", dong: "guui", district: "광진구" },
  { slug: "gunja", name: "군자", lines: ["line5", "line7"], province: "seoul", city: "gwangjin", dong: "gunja", district: "광진구" },
  { slug: "konkuk-univ-park", name: "어린이대공원", lines: ["line7"], province: "seoul", city: "gwangjin", dong: "neung", district: "광진구" },

  // 동대문·성북·강북·노원·은평 — 11개
  { slug: "cheongnyangni", name: "청량리", lines: ["line1", "gyeongui"], province: "seoul", city: "dongdaemun", dong: "cheongnyangni", district: "동대문구" },
  { slug: "hoegi", name: "회기", lines: ["line1", "gyeongui"], province: "seoul", city: "dongdaemun", dong: "hoegi", district: "동대문구" },
  { slug: "anam", name: "안암", lines: ["line6"], province: "seoul", city: "seongbuk", dong: "anam", district: "성북구" },
  { slug: "gireum", name: "길음", lines: ["line4"], province: "seoul", city: "seongbuk", dong: "gireum", district: "성북구" },
  { slug: "suyu", name: "수유", lines: ["line4"], province: "seoul", city: "gangbuk", dong: "suyu", district: "강북구" },
  { slug: "ssangmun", name: "쌍문", lines: ["line4"], province: "seoul", city: "dobong", dong: "ssangmun", district: "도봉구" },
  { slug: "nowon", name: "노원", lines: ["line4", "line7"], province: "seoul", city: "nowon", dong: "sanggye", district: "노원구" },
  { slug: "junggye", name: "중계", lines: ["line7"], province: "seoul", city: "nowon", dong: "junggye", district: "노원구" },
  { slug: "yeonsinnae", name: "연신내", lines: ["line3", "line6"], province: "seoul", city: "eunpyeong", dong: "bulgwang", district: "은평구" },
  { slug: "bulgwang", name: "불광", lines: ["line3", "line6"], province: "seoul", city: "eunpyeong", dong: "bulgwang", district: "은평구" },
  { slug: "eungam", name: "응암", lines: ["line6"], province: "seoul", city: "eunpyeong", dong: "eungam", district: "은평구" },

  // 서대문·기타 — 4개
  { slug: "chungjeongno", name: "충정로", lines: ["line2", "line5"], province: "seoul", city: "seodaemun", dong: "chungjeongno", district: "서대문구" },
  { slug: "hongje", name: "홍제", lines: ["line3"], province: "seoul", city: "seodaemun", dong: "hongje", district: "서대문구" },
  { slug: "dokrip-mun", name: "독립문", lines: ["line3"], province: "seoul", city: "seodaemun", dong: "muak", district: "서대문구" },
  { slug: "seoul-station", name: "서울역", lines: ["line1", "line4", "airport", "gyeongui"], province: "seoul", city: "yongsan", dong: "namyeong", district: "용산구" },
];

export function findStation(slug: string): Station | undefined {
  return STATIONS.find((s) => s.slug === slug);
}

export function getLinesForStation(s: Station): SubwayLine[] {
  return s.lines.map((l) => LINES[l]).filter(Boolean);
}

// Lookup nearby stations (same district or shared line)
export function nearbyStations(s: Station, n = 6): Station[] {
  const sameDistrict = STATIONS.filter(
    (x) => x.slug !== s.slug && x.district === s.district,
  );
  const sameLine = STATIONS.filter(
    (x) =>
      x.slug !== s.slug &&
      x.district !== s.district &&
      x.lines.some((l) => s.lines.includes(l)),
  );
  // Mix district + line peers, deterministic by station slug
  const seed = s.slug;
  return [...sameDistrict.slice(0, 3), ...sameLine.slice(0, n - 3)].slice(0, n);
}
