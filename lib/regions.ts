export type Dong = {
  name: string;
  slug: string;
};

export type City = {
  name: string;
  slug: string;
  dongs: Dong[];
};

export type Province = {
  name: string;
  shortName: string;
  slug: string;
  tagline: string;
  cities: City[];
};

const d = (name: string, slug: string): Dong => ({ name, slug });

export const PROVINCES: Province[] = [
  {
    name: "서울특별시",
    shortName: "서울",
    slug: "seoul",
    tagline: "25개 자치구 전 지역 즉시 출장",
    cities: [
      {
        name: "강남구", slug: "gangnam",
        dongs: [
          d("역삼동", "yeoksam"), d("삼성동", "samseong"), d("청담동", "cheongdam"),
          d("압구정동", "apgujeong"), d("신사동", "sinsa"), d("논현동", "nonhyeon"),
          d("대치동", "daechi"), d("도곡동", "dogok"), d("개포동", "gaepo"),
          d("일원본동", "ilwonbon"), d("수서동", "suseo"), d("세곡동", "segok"),
        ],
      },
      {
        name: "서초구", slug: "seocho",
        dongs: [
          d("서초동", "seocho"), d("반포동", "banpo"), d("잠원동", "jamwon"),
          d("방배동", "bangbae"), d("양재동", "yangjae"), d("내곡동", "naegok"),
          d("우면동", "umyeon"),
        ],
      },
      {
        name: "송파구", slug: "songpa",
        dongs: [
          d("잠실동", "jamsil"), d("신천동", "sincheon"), d("풍납동", "pungnap"),
          d("가락동", "garak"), d("문정동", "munjeong"), d("장지동", "jangji"),
          d("거여동", "geoyeo"), d("마천동", "macheon"), d("방이동", "bangi"),
          d("오금동", "ogeum"), d("송파동", "songpa"), d("석촌동", "seokchon"),
          d("삼전동", "samjeon"),
        ],
      },
      {
        name: "강동구", slug: "gangdong",
        dongs: [
          d("천호동", "cheonho"), d("성내동", "seongnae"), d("길동", "gil"),
          d("둔촌동", "dunchon"), d("암사동", "amsa"), d("명일동", "myeongil"),
          d("고덕동", "godeok"), d("상일동", "sangil"), d("강일동", "gangil"),
        ],
      },
      {
        name: "마포구", slug: "mapo",
        dongs: [
          d("합정동", "hapjeong"), d("망원동", "mangwon"), d("연남동", "yeonnam"),
          d("서교동", "seogyo"), d("상수동", "sangsu"), d("공덕동", "gongdeok"),
          d("도화동", "dohwa"), d("용강동", "yonggang"), d("대흥동", "daeheung"),
          d("염리동", "yeomni"), d("신수동", "sinsu"), d("아현동", "ahyeon"),
          d("성산동", "seongsan"),
        ],
      },
      {
        name: "용산구", slug: "yongsan",
        dongs: [
          d("한남동", "hannam"), d("이태원동", "itaewon"), d("보광동", "bogwang"),
          d("청파동", "cheongpa"), d("효창동", "hyochang"), d("용문동", "yongmun"),
          d("한강로동", "hangangno"), d("후암동", "huam"), d("원효로동", "wonhyoro"),
          d("남영동", "namyeong"),
        ],
      },
      {
        name: "성동구", slug: "seongdong",
        dongs: [
          d("성수동1가", "seongsu1"), d("성수동2가", "seongsu2"), d("왕십리동", "wangsimni"),
          d("마장동", "majang"), d("사근동", "sageun"), d("행당동", "haengdang"),
          d("응봉동", "eungbong"), d("금호동", "geumho"), d("옥수동", "oksu"),
        ],
      },
      {
        name: "광진구", slug: "gwangjin",
        dongs: [
          d("광장동", "gwangjang"), d("자양동", "jayang"), d("구의동", "guui"),
          d("화양동", "hwayang"), d("군자동", "gunja"), d("능동", "neung"),
          d("중곡동", "junggok"),
        ],
      },
      {
        name: "종로구", slug: "jongno",
        dongs: [
          d("종로1·2·3·4가동", "jongno1234"), d("명륜3가동", "myeongnyun3"),
          d("혜화동", "hyehwa"), d("가회동", "gahoe"), d("삼청동", "samcheong"),
          d("부암동", "buam"), d("평창동", "pyeongchang"), d("무악동", "muak"),
          d("교남동", "gyonam"), d("사직동", "sajik"), d("청운효자동", "cheongunhyoja"),
          d("이화동", "ihwa"), d("창신동", "changsin"), d("숭인동", "sungin"),
        ],
      },
      {
        name: "중구", slug: "junggu",
        dongs: [
          d("명동", "myeongdong"), d("회현동", "hoehyeon"), d("광희동", "gwanghui"),
          d("을지로동", "euljiro"), d("신당동", "sindang"), d("다산동", "dasan"),
          d("약수동", "yaksu"), d("청구동", "cheonggu"), d("황학동", "hwanghak"),
          d("중림동", "jungnim"), d("소공동", "sogong"), d("필동", "pildong"),
          d("장충동", "jangchung"),
        ],
      },
      {
        name: "서대문구", slug: "seodaemun",
        dongs: [
          d("천연동", "cheonyeon"), d("충현동", "chunghyeon"), d("신촌동", "sinchon"),
          d("연희동", "yeonhui"), d("홍은동", "hongeun"), d("홍제동", "hongje"),
          d("남가좌동", "namgajwa"), d("북가좌동", "bukgajwa"), d("북아현동", "bukahyeon"),
          d("충정로동", "chungjeongno"),
        ],
      },
      {
        name: "은평구", slug: "eunpyeong",
        dongs: [
          d("녹번동", "nokbeon"), d("응암동", "eungam"), d("역촌동", "yeokchon"),
          d("증산동", "jeungsan"), d("수색동", "susaek"), d("갈현동", "galhyeon"),
          d("구산동", "gusan"), d("대조동", "daejo"), d("진관동", "jingwan"),
          d("불광동", "bulgwang"),
        ],
      },
      {
        name: "노원구", slug: "nowon",
        dongs: [
          d("월계1동", "wolgye1"), d("월계2동", "wolgye2"), d("공릉1동", "gongneung1"),
          d("공릉2동", "gongneung2"), d("하계1동", "hagye1"), d("중계동", "junggye"),
          d("상계동", "sanggye"),
        ],
      },
      {
        name: "도봉구", slug: "dobong",
        dongs: [
          d("쌍문동", "ssangmun"), d("방학동", "banghak"), d("창동", "chang"),
          d("도봉동", "dobong"),
        ],
      },
      {
        name: "강북구", slug: "gangbuk",
        dongs: [
          d("미아동", "mia"), d("번동", "beon"), d("수유동", "suyu"),
          d("우이동", "ui"), d("인수동", "insu"),
        ],
      },
      {
        name: "성북구", slug: "seongbuk",
        dongs: [
          d("성북동", "seongbuk"), d("삼선동", "samseon"), d("동선동", "dongseon"),
          d("돈암동", "donam"), d("안암동", "anam"), d("보문동", "bomun"),
          d("정릉동", "jeongneung"), d("길음동", "gireum"), d("종암동", "jongam"),
          d("월곡동", "wolgok"), d("장위동", "jangwi"), d("석관동", "seokgwan"),
        ],
      },
      {
        name: "동대문구", slug: "dongdaemun",
        dongs: [
          d("청량리동", "cheongnyangni"), d("회기동", "hoegi"), d("휘경동", "hwigyeong"),
          d("이문동", "imun"), d("전농동", "jeonnong"), d("답십리동", "dapsimni"),
          d("장안동", "jangan"), d("용두동", "yongdu"), d("제기동", "jegi"),
          d("신설동", "sinseol"),
        ],
      },
      {
        name: "중랑구", slug: "jungnang",
        dongs: [
          d("면목동", "myeonmok"), d("상봉동", "sangbong"), d("중화동", "junghwa"),
          d("묵동", "mukdong"), d("망우동", "mangu"), d("신내동", "sinnae"),
        ],
      },
      {
        name: "구로구", slug: "guro",
        dongs: [
          d("신도림동", "sindorim"), d("구로동", "guro"), d("가리봉동", "garibong"),
          d("고척동", "gocheok"), d("개봉동", "gaebong"), d("오류동", "oryu"),
          d("항동", "hangdong"),
        ],
      },
      {
        name: "금천구", slug: "geumcheon",
        dongs: [
          d("가산동", "gasan"), d("독산동", "doksan"), d("시흥동", "siheung"),
        ],
      },
      {
        name: "영등포구", slug: "yeongdeungpo",
        dongs: [
          d("영등포동", "yeongdeungpo"), d("여의동", "yeoui"), d("당산동", "dangsan"),
          d("도림동", "dorim"), d("문래동", "mullae"), d("양평동", "yangpyeong"),
          d("신길동", "singil"), d("대림동", "daerim"),
        ],
      },
      {
        name: "동작구", slug: "dongjak",
        dongs: [
          d("노량진동", "noryangjin"), d("상도동", "sangdo"), d("흑석동", "heukseok"),
          d("사당동", "sadang"), d("대방동", "daebang"), d("신대방동", "sindaebang"),
        ],
      },
      {
        name: "관악구", slug: "gwanak",
        dongs: [
          d("봉천동", "bongcheon"), d("신림동", "sillim"), d("남현동", "namhyeon"),
          d("보라매동", "boramae"), d("청림동", "cheongnim"), d("행운동", "haengun"),
          d("청룡동", "cheongnyong"), d("낙성대동", "nakseongdae"), d("인헌동", "inheon"),
          d("서원동", "seowon"), d("난곡동", "nangok"), d("난향동", "nanhyang"),
          d("미성동", "miseong"), d("대학동", "daehak"),
        ],
      },
      {
        name: "양천구", slug: "yangcheon",
        dongs: [
          d("신정동", "sinjeong"), d("목동", "mokdong"), d("신월동", "sinwol"),
        ],
      },
      {
        name: "강서구", slug: "gangseo",
        dongs: [
          d("화곡동", "hwagok"), d("등촌동", "deungchon"), d("가양동", "gayang"),
          d("발산동", "balsan"), d("공항동", "gonghang"), d("방화동", "banghwa"),
          d("우장산동", "ujangsan"), d("염창동", "yeomchang"), d("마곡동", "magok"),
          d("외발산동", "oebalsan"),
        ],
      },
    ],
  },
  {
    name: "경기·인천",
    shortName: "경기·인천",
    slug: "gyeonggi",
    tagline: "수도권 주요 도시 광역 출장 네트워크",
    cities: [
      {
        name: "수원시", slug: "suwon",
        dongs: [
          d("권선동", "gwonseon"), d("영통동", "yeongtong"), d("매탄동", "maetan"),
          d("인계동", "ingye"), d("팔달동", "paldal"), d("우만동", "uman"),
          d("정자동", "jeongja"), d("천천동", "cheoncheon"),
        ],
      },
      {
        name: "성남시", slug: "seongnam",
        dongs: [
          d("분당동", "bundang"), d("정자동", "jeongja"), d("서현동", "seohyeon"),
          d("수내동", "sunae"), d("판교동", "pangyo"), d("이매동", "imae"),
          d("야탑동", "yatap"), d("태평동", "taepyeong"),
        ],
      },
      {
        name: "용인시", slug: "yongin",
        dongs: [
          d("수지동", "suji"), d("죽전동", "jukjeon"), d("기흥동", "giheung"),
          d("신갈동", "singal"), d("동백동", "dongbaek"), d("처인동", "cheoin"),
          d("상현동", "sanghyeon"),
        ],
      },
      {
        name: "고양시", slug: "goyang",
        dongs: [
          d("일산동", "ilsan"), d("주엽동", "juyeop"), d("정발산동", "jeongbalsan"),
          d("마두동", "madu"), d("백석동", "baekseok"), d("화정동", "hwajeong"),
          d("행신동", "haengsin"),
        ],
      },
      {
        name: "화성시", slug: "hwaseong",
        dongs: [
          d("동탄동", "dongtan"), d("병점동", "byeongjeom"), d("향남읍", "hyangnam"),
          d("봉담읍", "bongdam"), d("남양읍", "namyang"),
        ],
      },
      {
        name: "부천시", slug: "bucheon",
        dongs: [
          d("중동", "jung"), d("상동", "sang"), d("심곡동", "simgok"),
          d("원미동", "wonmi"), d("소사본동", "sosabon"), d("역곡동", "yeokgok"),
        ],
      },
      {
        name: "남양주시", slug: "namyangju",
        dongs: [
          d("다산동", "dasan"), d("별내동", "byeollae"), d("호평동", "hopyeong"),
          d("평내동", "pyeongnae"), d("진접읍", "jinjeop"),
        ],
      },
      {
        name: "안양시", slug: "anyang",
        dongs: [
          d("평촌동", "pyeongchon"), d("범계동", "beomgye"), d("호계동", "hogye"),
          d("관양동", "gwanyang"), d("비산동", "bisan"), d("석수동", "seoksu"),
        ],
      },
      {
        name: "안산시", slug: "ansan",
        dongs: [
          d("고잔동", "gojan"), d("중앙동", "jungang"), d("사동", "sa"),
          d("선부동", "seonbu"), d("초지동", "choji"),
        ],
      },
      {
        name: "평택시", slug: "pyeongtaek"
        , dongs: [
          d("평택동", "pyeongtaek"), d("비전동", "bijeon"), d("송탄동", "songtan"),
          d("서정동", "seojeong"), d("팽성읍", "paengseong"),
        ],
      },
      {
        name: "의정부시", slug: "uijeongbu",
        dongs: [
          d("의정부동", "uijeongbu"), d("호원동", "howon"), d("장암동", "jangam"),
          d("민락동", "millak"), d("녹양동", "nogyang"),
        ],
      },
      {
        name: "시흥시", slug: "siheung",
        dongs: [
          d("정왕동", "jeongwang"), d("배곧동", "baegot"), d("능곡동", "neunggok"),
          d("연성동", "yeonseong"), d("대야동", "daeya"),
        ],
      },
      {
        name: "파주시", slug: "paju",
        dongs: [
          d("운정동", "unjeong"), d("교하동", "gyoha"), d("금촌동", "geumchon"),
          d("문산읍", "munsan"), d("조리읍", "jori"),
        ],
      },
      {
        name: "김포시", slug: "gimpo",
        dongs: [
          d("장기동", "janggi"), d("구래동", "gurae"), d("운양동", "unyang"),
          d("사우동", "sau"), d("풍무동", "pungmu"),
        ],
      },
      {
        name: "광명시", slug: "gwangmyeong",
        dongs: [
          d("철산동", "cheolsan"), d("하안동", "haan"), d("소하동", "soha"),
          d("일직동", "iljik"), d("광명동", "gwangmyeong"),
        ],
      },
      {
        name: "광주시", slug: "gwangju-gg",
        dongs: [
          d("경안동", "gyeongan"), d("송정동", "songjeong"), d("오포읍", "opo"),
          d("초월읍", "chowol"), d("곤지암읍", "gonjiam"),
        ],
      },
      {
        name: "군포시", slug: "gunpo",
        dongs: [
          d("산본동", "sanbon"), d("금정동", "geumjeong"), d("당동", "dang"),
          d("부곡동", "bugok"),
        ],
      },
      {
        name: "하남시", slug: "hanam",
        dongs: [
          d("미사동", "misa"), d("덕풍동", "deokpung"), d("신장동", "sinjang"),
          d("위례동", "wirye"), d("풍산동", "pungsan"),
        ],
      },
      {
        name: "오산시", slug: "osan",
        dongs: [
          d("오산동", "osan"), d("세교동", "segyo"), d("운암동", "unam"),
          d("초평동", "chopyeong"),
        ],
      },
      {
        name: "이천시", slug: "icheon",
        dongs: [
          d("창전동", "changjeon"), d("증포동", "jeungpo"), d("관고동", "gwango"),
          d("부발읍", "bubal"),
        ],
      },
      {
        name: "양주시", slug: "yangju",
        dongs: [
          d("덕정동", "deokjeong"), d("회천동", "hoecheon"), d("옥정동", "okjeong"),
          d("양주동", "yangju"),
        ],
      },
      {
        name: "구리시", slug: "guri",
        dongs: [
          d("교문동", "gyomun"), d("인창동", "inchang"), d("수택동", "sutaek"),
          d("토평동", "topyeong"),
        ],
      },
      {
        name: "인천 중구", slug: "incheon-junggu",
        dongs: [
          d("신포동", "sinpo"), d("신흥동", "sinheung"), d("도원동", "dowon"),
          d("영종동", "yeongjong"), d("운서동", "unseo"),
        ],
      },
      {
        name: "인천 남동구", slug: "incheon-namdong",
        dongs: [
          d("구월동", "guwol"), d("간석동", "ganseok"), d("논현동", "nonhyeon"),
          d("만수동", "mansu"), d("서창동", "seochang"),
        ],
      },
      {
        name: "인천 부평구", slug: "incheon-bupyeong",
        dongs: [
          d("부평동", "bupyeong"), d("산곡동", "sangok"), d("청천동", "cheongcheon"),
          d("삼산동", "samsan"), d("부개동", "bugae"),
        ],
      },
      {
        name: "인천 서구", slug: "incheon-seo",
        dongs: [
          d("청라동", "cheongna"), d("검단동", "geomdan"), d("가정동", "gajeong"),
          d("석남동", "seongnam-incheon"), d("당하동", "dangha"),
        ],
      },
    ],
  },
  {
    name: "충청·강원",
    shortName: "충청·강원",
    slug: "chungcheong",
    tagline: "충청권·강원 주요 도시 출장 안내",
    cities: [
      {
        name: "대전", slug: "daejeon",
        dongs: [
          d("둔산동", "dunsan"), d("월평동", "wolpyeong"), d("관저동", "gwanjeo"),
          d("도안동", "doan"), d("유성동", "yuseong"),
        ],
      },
      {
        name: "세종", slug: "sejong",
        dongs: [
          d("도담동", "dodam"), d("아름동", "areum"), d("종촌동", "jongchon"),
          d("새롬동", "saerom"), d("보람동", "boram"),
        ],
      },
      {
        name: "청주", slug: "cheongju",
        dongs: [
          d("성안동", "seongan"), d("용암동", "yongam"), d("산남동", "sannam"),
          d("복대동", "bokdae"), d("오송읍", "osong"),
        ],
      },
      {
        name: "천안", slug: "cheonan",
        dongs: [
          d("불당동", "buldang"), d("두정동", "dujeong"), d("쌍용동", "ssangyong"),
          d("성정동", "seongjeong"), d("백석동", "baekseok-cheonan"),
        ],
      },
      {
        name: "아산", slug: "asan",
        dongs: [
          d("배방읍", "baebang"), d("탕정면", "tangjeong"), d("온양동", "onyang"),
          d("권곡동", "gwongok"), d("음봉면", "eumbong"),
        ],
      },
      {
        name: "춘천", slug: "chuncheon",
        dongs: [
          d("석사동", "seoksa"), d("후평동", "hupyeong"), d("효자동", "hyoja"),
          d("퇴계동", "toegye"), d("강남동", "gangnam-chuncheon"),
        ],
      },
      {
        name: "원주", slug: "wonju",
        dongs: [
          d("단계동", "dangye"), d("무실동", "musil"), d("명륜동", "myeongnyun"),
          d("원동", "won"), d("반곡동", "bangok"),
        ],
      },
      {
        name: "강릉", slug: "gangneung",
        dongs: [
          d("교동", "gyo"), d("포남동", "ponam"), d("옥천동", "okcheon"),
          d("강남동", "gangnam-gangneung"), d("주문진읍", "jumunjin"),
        ],
      },
    ],
  },
  {
    name: "영남",
    shortName: "영남",
    slug: "yeongnam",
    tagline: "부산·울산·대구·경상권 광역 출장",
    cities: [
      {
        name: "부산 해운대", slug: "busan-haeundae",
        dongs: [
          d("우동", "u"), d("중동", "jung-haeundae"), d("좌동", "jwa"),
          d("재송동", "jaesong"), d("반여동", "banyeo"),
        ],
      },
      {
        name: "부산 서면", slug: "busan-seomyeon",
        dongs: [
          d("부전동", "bujeon"), d("전포동", "jeonpo"), d("범전동", "beomjeon"),
          d("초읍동", "choeup"), d("연지동", "yeonji"),
        ],
      },
      {
        name: "부산 동래", slug: "busan-dongnae",
        dongs: [
          d("명륜동", "myeongnyun-busan"), d("온천동", "oncheon"), d("사직동", "sajik-busan"),
          d("안락동", "annak"), d("수안동", "suan"),
        ],
      },
      {
        name: "울산", slug: "ulsan",
        dongs: [
          d("삼산동", "samsan-ulsan"), d("달동", "dal"), d("옥동", "ok"),
          d("우정동", "ujeong"), d("무거동", "mugeo"),
        ],
      },
      {
        name: "대구", slug: "daegu",
        dongs: [
          d("동성로", "dongseongno"), d("범어동", "beomeo"), d("황금동", "hwanggeum"),
          d("수성동", "suseong"), d("상인동", "sangin"),
        ],
      },
      {
        name: "포항", slug: "pohang",
        dongs: [
          d("이동", "i-pohang"), d("대이동", "daei"), d("두호동", "duho"),
          d("장량동", "jangnyang"), d("효곡동", "hyogok"),
        ],
      },
      {
        name: "창원", slug: "changwon",
        dongs: [
          d("상남동", "sangnam"), d("중앙동", "jungang-changwon"), d("용호동", "yongho"),
          d("반송동", "bansong"), d("팔용동", "paryong"),
        ],
      },
      {
        name: "김해", slug: "gimhae",
        dongs: [
          d("내외동", "naeoe"), d("삼계동", "samgye"), d("장유동", "jangyu"),
          d("진영읍", "jinyeong"), d("외동", "oe"),
        ],
      },
      {
        name: "경주", slug: "gyeongju",
        dongs: [
          d("황성동", "hwangseong"), d("용강동", "yonggang-gyeongju"), d("동천동", "dongcheon"),
          d("성건동", "seonggeon"), d("보문동", "bomun-gyeongju"),
        ],
      },
    ],
  },
  {
    name: "호남·제주",
    shortName: "호남·제주",
    slug: "honam",
    tagline: "광주·전주·제주 등 남부권 광역 출장",
    cities: [
      {
        name: "광주", slug: "gwangju-jl",
        dongs: [
          d("상무동", "sangmu"), d("치평동", "chipyeong"), d("수완동", "suwan"),
          d("운암동", "unam-gwangju"), d("일곡동", "ilgok"),
        ],
      },
      {
        name: "전주", slug: "jeonju",
        dongs: [
          d("효자동", "hyoja-jeonju"), d("서신동", "seosin"), d("평화동", "pyeonghwa"),
          d("덕진동", "deokjin"), d("인후동", "inhu"),
        ],
      },
      {
        name: "여수", slug: "yeosu",
        dongs: [
          d("여서동", "yeoseo"), d("학동", "hak"), d("국동", "guk"),
          d("쌍봉동", "ssangbong"), d("신기동", "singi"),
        ],
      },
      {
        name: "순천", slug: "suncheon",
        dongs: [
          d("연향동", "yeonhyang"), d("조례동", "jorye"), d("덕연동", "deokyeon"),
          d("왕조동", "wangjo"), d("풍덕동", "pungdeok"),
        ],
      },
      {
        name: "목포", slug: "mokpo",
        dongs: [
          d("하당동", "hadang"), d("옥암동", "okam"), d("상동", "sang-mokpo"),
          d("용해동", "yonghae"), d("산정동", "sanjeong"),
        ],
      },
      {
        name: "제주", slug: "jeju",
        dongs: [
          d("연동", "yeon"), d("노형동", "nohyeong"), d("이도동", "ido"),
          d("화북동", "hwabuk"), d("아라동", "ara"),
        ],
      },
      {
        name: "서귀포", slug: "seogwipo",
        dongs: [
          d("중문동", "jungmun"), d("서호동", "seoho"), d("동홍동", "donghong"),
          d("표선면", "pyoseon"), d("성산읍", "seongsan"),
        ],
      },
    ],
  },
];

export function findProvince(slug: string): Province | undefined {
  return PROVINCES.find((p) => p.slug === slug);
}

export function findCity(
  provinceSlug: string,
  citySlug: string,
): { province: Province; city: City } | undefined {
  const province = findProvince(provinceSlug);
  const city = province?.cities.find((c) => c.slug === citySlug);
  if (!province || !city) return undefined;
  return { province, city };
}

export function findDong(
  provinceSlug: string,
  citySlug: string,
  dongSlug: string,
): { province: Province; city: City; dong: Dong } | undefined {
  const found = findCity(provinceSlug, citySlug);
  const dong = found?.city.dongs.find((d) => d.slug === dongSlug);
  if (!found || !dong) return undefined;
  return { ...found, dong };
}

export function totalDongCount(): number {
  return PROVINCES.reduce(
    (sum, p) => sum + p.cities.reduce((cs, c) => cs + c.dongs.length, 0),
    0,
  );
}
