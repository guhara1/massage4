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
        name: "강남구", slug: "gangnam", dongs: [
          d("역삼동", "yeoksam"), d("개포동", "gaepo"), d("청담동", "cheongdam"),
          d("삼성동", "samseong"), d("대치동", "daechi"), d("신사동", "sinsa"),
          d("논현동", "nonhyeon"), d("압구정동", "apgujeong"), d("세곡동", "segok"),
          d("일원본동", "ilwonbon"), d("일원동", "ilwon"), d("수서동", "suseo"),
          d("도곡동", "dogok"),
        ],
      },
      {
        name: "서초구", slug: "seocho", dongs: [
          d("서초동", "seocho"), d("잠원동", "jamwon"), d("반포동", "banpo"),
          d("방배동", "bangbae"), d("양재동", "yangjae"), d("내곡동", "naegok"),
          d("우면동", "umyeon"), d("원지동", "wonji"),
        ],
      },
      {
        name: "송파구", slug: "songpa", dongs: [
          d("풍납동", "pungnap"), d("거여동", "geoyeo"), d("마천동", "macheon"),
          d("방이동", "bangi"), d("오금동", "ogeum"), d("송파동", "songpa"),
          d("석촌동", "seokchon"), d("삼전동", "samjeon"), d("가락동", "garak"),
          d("문정동", "munjeong"), d("장지동", "jangji"), d("위례동", "wirye"),
          d("잠실동", "jamsil"), d("신천동", "sincheon"),
        ],
      },
      {
        name: "강동구", slug: "gangdong", dongs: [
          d("강일동", "gangil"), d("상일동", "sangil"), d("명일동", "myeongil"),
          d("고덕동", "godeok"), d("암사동", "amsa"), d("천호동", "cheonho"),
          d("성내동", "seongnae"), d("길동", "gil"), d("둔촌동", "dunchon"),
        ],
      },
      {
        name: "강서구", slug: "gangseo", dongs: [
          d("염창동", "yeomchang"), d("등촌동", "deungchon"), d("화곡동", "hwagok"),
          d("가양동", "gayang"), d("발산동", "balsan"), d("공항동", "gonghang"),
          d("방화동", "banghwa"), d("우장산동", "ujangsan"), d("마곡동", "magok"),
          d("외발산동", "oebalsan"),
        ],
      },
      {
        name: "양천구", slug: "yangcheon", dongs: [
          d("목동", "mokdong"), d("신정동", "sinjeong"), d("신월동", "sinwol"),
        ],
      },
      {
        name: "영등포구", slug: "yeongdeungpo", dongs: [
          d("영등포동", "yeongdeungpo"), d("여의동", "yeoui"), d("당산동", "dangsan"),
          d("도림동", "dorim"), d("문래동", "mullae"), d("양평동", "yangpyeong"),
          d("신길동", "singil"), d("대림동", "daerim"),
        ],
      },
      {
        name: "구로구", slug: "guro", dongs: [
          d("신도림동", "sindorim"), d("구로동", "guro"), d("가리봉동", "garibong"),
          d("고척동", "gocheok"), d("개봉동", "gaebong"), d("오류동", "oryu"),
          d("수궁동", "sugung"), d("항동", "hangdong"),
        ],
      },
      {
        name: "금천구", slug: "geumcheon", dongs: [
          d("가산동", "gasan"), d("독산동", "doksan"), d("시흥동", "siheung"),
        ],
      },
      {
        name: "관악구", slug: "gwanak", dongs: [
          d("봉천동", "bongcheon"), d("신림동", "sillim"), d("남현동", "namhyeon"),
          d("보라매동", "boramae"), d("청림동", "cheongnim"), d("행운동", "haengun"),
          d("청룡동", "cheongnyong"), d("낙성대동", "nakseongdae"), d("인헌동", "inheon"),
          d("서원동", "seowon"), d("난곡동", "nangok"), d("난향동", "nanhyang"),
          d("미성동", "miseong"), d("대학동", "daehak"), d("서림동", "seorim"),
          d("조원동", "jowon"), d("신원동", "sinwon"),
        ],
      },
      {
        name: "동작구", slug: "dongjak", dongs: [
          d("노량진동", "noryangjin"), d("상도동", "sangdo"), d("흑석동", "heukseok"),
          d("사당동", "sadang"), d("대방동", "daebang"), d("신대방동", "sindaebang"),
        ],
      },
      {
        name: "서대문구", slug: "seodaemun", dongs: [
          d("천연동", "cheonyeon"), d("충현동", "chunghyeon"), d("신촌동", "sinchon"),
          d("연희동", "yeonhui"), d("홍은동", "hongeun"), d("홍제동", "hongje"),
          d("남가좌동", "namgajwa"), d("북가좌동", "bukgajwa"), d("북아현동", "bukahyeon"),
          d("충정로동", "chungjeongno"),
        ],
      },
      {
        name: "마포구", slug: "mapo", dongs: [
          d("합정동", "hapjeong"), d("망원동", "mangwon"), d("연남동", "yeonnam"),
          d("서교동", "seogyo"), d("상수동", "sangsu"), d("공덕동", "gongdeok"),
          d("도화동", "dohwa"), d("용강동", "yonggang"), d("대흥동", "daeheung"),
          d("염리동", "yeomni"), d("신수동", "sinsu"), d("아현동", "ahyeon"),
          d("성산동", "seongsan"),
        ],
      },
      {
        name: "용산구", slug: "yongsan", dongs: [
          d("후암동", "huam"), d("용산동", "yongsan"), d("남영동", "namyeong"),
          d("청파동", "cheongpa"), d("원효로동", "wonhyoro"), d("효창동", "hyochang"),
          d("용문동", "yongmun"), d("한강로동", "hangangno"), d("이촌동", "ichon"),
          d("이태원동", "itaewon"), d("한남동", "hannam"), d("서빙고동", "seobinggo"),
          d("보광동", "bogwang"),
        ],
      },
      {
        name: "중구", slug: "junggu", dongs: [
          d("소공동", "sogong"), d("회현동", "hoehyeon"), d("명동", "myeongdong"),
          d("필동", "pildong"), d("장충동", "jangchung"), d("광희동", "gwanghui"),
          d("을지로동", "euljiro"), d("신당동", "sindang"), d("다산동", "dasan"),
          d("약수동", "yaksu"), d("청구동", "cheonggu"), d("황학동", "hwanghak"),
          d("중림동", "jungnim"),
        ],
      },
      {
        name: "종로구", slug: "jongno", dongs: [
          d("청운효자동", "cheongunhyoja"), d("사직동", "sajik"), d("삼청동", "samcheong"),
          d("부암동", "buam"), d("평창동", "pyeongchang"), d("무악동", "muak"),
          d("교남동", "gyonam"), d("가회동", "gahoe"), d("종로1·2·3·4가동", "jongno1234"),
          d("종로5·6가동", "jongno56"), d("이화동", "ihwa"), d("혜화동", "hyehwa"),
          d("창신동", "changsin"), d("숭인동", "sungin"),
        ],
      },
      {
        name: "성동구", slug: "seongdong", dongs: [
          d("왕십리도선동", "wangsimnidoseon"), d("왕십리동", "wangsimni"),
          d("마장동", "majang"), d("사근동", "sageun"), d("행당동", "haengdang"),
          d("응봉동", "eungbong"), d("금호동", "geumho"), d("옥수동", "oksu"),
          d("성수동1가", "seongsu1"), d("성수동2가", "seongsu2"), d("송정동", "songjeong"),
          d("용답동", "yongdap"),
        ],
      },
      {
        name: "광진구", slug: "gwangjin", dongs: [
          d("화양동", "hwayang"), d("군자동", "gunja"), d("중곡동", "junggok"),
          d("능동", "neung"), d("구의동", "guui"), d("광장동", "gwangjang"),
          d("자양동", "jayang"),
        ],
      },
      {
        name: "동대문구", slug: "dongdaemun", dongs: [
          d("용신동", "yongsin"), d("제기동", "jegi"), d("전농동", "jeonnong"),
          d("답십리동", "dapsimni"), d("장안동", "jangan"), d("청량리동", "cheongnyangni"),
          d("회기동", "hoegi"), d("휘경동", "hwigyeong"), d("이문동", "imun"),
        ],
      },
      {
        name: "중랑구", slug: "jungnang", dongs: [
          d("면목동", "myeonmok"), d("상봉동", "sangbong"), d("중화동", "junghwa"),
          d("묵동", "mukdong"), d("망우동", "mangu"), d("신내동", "sinnae"),
        ],
      },
      {
        name: "성북구", slug: "seongbuk", dongs: [
          d("성북동", "seongbuk"), d("삼선동", "samseon"), d("동선동", "dongseon"),
          d("돈암동", "donam"), d("안암동", "anam"), d("보문동", "bomun"),
          d("정릉동", "jeongneung"), d("길음동", "gireum"), d("종암동", "jongam"),
          d("월곡동", "wolgok"), d("장위동", "jangwi"), d("석관동", "seokgwan"),
        ],
      },
      {
        name: "강북구", slug: "gangbuk", dongs: [
          d("미아동", "mia"), d("번동", "beon"), d("수유동", "suyu"),
          d("우이동", "ui"), d("인수동", "insu"), d("삼양동", "samyang"),
          d("송중동", "songjung"), d("송천동", "songcheon"),
        ],
      },
      {
        name: "도봉구", slug: "dobong", dongs: [
          d("쌍문동", "ssangmun"), d("방학동", "banghak"), d("창동", "chang"),
          d("도봉동", "dobong"),
        ],
      },
      {
        name: "노원구", slug: "nowon", dongs: [
          d("월계동", "wolgye"), d("공릉동", "gongneung"), d("하계동", "hagye"),
          d("중계동", "junggye"), d("상계동", "sanggye"),
        ],
      },
      {
        name: "은평구", slug: "eunpyeong", dongs: [
          d("녹번동", "nokbeon"), d("응암동", "eungam"), d("역촌동", "yeokchon"),
          d("신사동", "sinsa-eunpyeong"), d("증산동", "jeungsan"), d("수색동", "susaek"),
          d("갈현동", "galhyeon"), d("구산동", "gusan"), d("대조동", "daejo"),
          d("진관동", "jingwan"), d("불광동", "bulgwang"),
        ],
      },
    ],
  },

  {
    name: "부산광역시",
    shortName: "부산",
    slug: "busan",
    tagline: "16개 구·군 전 지역 24시 출장",
    cities: [
      {
        name: "중구", slug: "jung", dongs: [
          d("중앙동", "jungang"), d("동광동", "donggwang"), d("대청동", "daecheong"),
          d("보수동", "bosu"), d("부평동", "bupyeong"), d("광복동", "gwangbok"),
          d("남포동", "nampo"), d("영주동", "yeongju"),
        ],
      },
      {
        name: "서구", slug: "seo", dongs: [
          d("동대신동", "dongdaesin"), d("서대신동", "seodaesin"), d("부민동", "bumin"),
          d("아미동", "ami"), d("초장동", "chojang"), d("충무동", "chungmu"),
          d("남부민동", "nambumin"), d("암남동", "amnam"),
        ],
      },
      {
        name: "동구", slug: "dong", dongs: [
          d("초량동", "choryang"), d("수정동", "sujeong"), d("좌천동", "jwacheon"),
          d("범일동", "beomil"),
        ],
      },
      {
        name: "영도구", slug: "yeongdo", dongs: [
          d("남항동", "namhang"), d("영선동", "yeongseon"), d("신선동", "sinseon"),
          d("봉래동", "bongnae"), d("청학동", "cheonghak"), d("동삼동", "dongsam"),
        ],
      },
      {
        name: "부산진구", slug: "busanjin", dongs: [
          d("부전동", "bujeon"), d("연지동", "yeonji"), d("초읍동", "choeup"),
          d("양정동", "yangjeong"), d("전포동", "jeonpo"), d("부암동", "buam"),
          d("당감동", "danggam"), d("가야동", "gaya"), d("개금동", "gaegeum"),
          d("범천동", "beomcheon"),
        ],
      },
      {
        name: "동래구", slug: "dongnae", dongs: [
          d("수민동", "sumin"), d("복산동", "boksan"), d("명륜동", "myeongnyun"),
          d("온천동", "oncheon"), d("사직동", "sajik"), d("안락동", "annak"),
          d("명장동", "myeongjang"),
        ],
      },
      {
        name: "남구", slug: "nam", dongs: [
          d("대연동", "daeyeon"), d("용호동", "yongho"), d("용당동", "yongdang"),
          d("문현동", "munhyeon"), d("우암동", "uam"), d("감만동", "gamman"),
        ],
      },
      {
        name: "북구", slug: "buk", dongs: [
          d("구포동", "gupo"), d("덕천동", "deokcheon"), d("만덕동", "mandeok"),
          d("화명동", "hwamyeong"), d("금곡동", "geumgok"),
        ],
      },
      {
        name: "해운대구", slug: "haeundae", dongs: [
          d("우동", "u"), d("중동", "jung-haeundae"), d("좌동", "jwa"),
          d("송정동", "songjeong"), d("반여동", "banyeo"), d("반송동", "bansong"),
          d("재송동", "jaesong"),
        ],
      },
      {
        name: "사하구", slug: "saha", dongs: [
          d("괴정동", "goejeong"), d("당리동", "dangni"), d("하단동", "hadan"),
          d("신평동", "sinpyeong"), d("장림동", "jangnim"), d("다대동", "dadae"),
          d("구평동", "gupyeong"), d("감천동", "gamcheon"),
        ],
      },
      {
        name: "금정구", slug: "geumjeong", dongs: [
          d("서동", "seo-geumjeong"), d("금사동", "geumsa"), d("부곡동", "bugok"),
          d("장전동", "jangjeon"), d("선두구동", "seondugu"), d("청룡동", "cheongnyong-busan"),
          d("남산동", "namsan"), d("구서동", "guseo"), d("금성동", "geumseong"),
          d("회동동", "hoedong"),
        ],
      },
      {
        name: "강서구", slug: "gangseo", dongs: [
          d("대저1동", "daejeo1"), d("대저2동", "daejeo2"), d("강동동", "gangdong"),
          d("명지동", "myeongji"), d("가락동", "garak"), d("녹산동", "noksan"),
          d("가덕도동", "gadeokdo"),
        ],
      },
      {
        name: "연제구", slug: "yeonje", dongs: [
          d("거제동", "geoje"), d("연산동", "yeonsan"),
        ],
      },
      {
        name: "수영구", slug: "suyeong", dongs: [
          d("남천동", "namcheon"), d("수영동", "suyeong"), d("망미동", "mangmi"),
          d("광안동", "gwangan"), d("민락동", "millak"),
        ],
      },
      {
        name: "사상구", slug: "sasang", dongs: [
          d("삼락동", "samnak"), d("모라동", "mora"), d("덕포동", "deokpo"),
          d("괘법동", "gwaebeop"), d("감전동", "gamjeon"), d("주례동", "jurye"),
          d("학장동", "hakjang"), d("엄궁동", "eomgung"),
        ],
      },
      {
        name: "기장군", slug: "gijang", dongs: [
          d("기장읍", "gijang"), d("장안읍", "jangan"), d("정관읍", "jeonggwan"),
          d("일광읍", "ilgwang"), d("철마면", "cheolma"),
        ],
      },
    ],
  },

  {
    name: "대구광역시",
    shortName: "대구",
    slug: "daegu",
    tagline: "8개 구·군 전 지역 광역 출장 운영",
    cities: [
      {
        name: "중구", slug: "jung", dongs: [
          d("동인동", "dongin"), d("삼덕동", "samdeok"), d("성내동", "seongnae"),
          d("대신동", "daesin"), d("남산동", "namsan"), d("대봉동", "daebong"),
        ],
      },
      {
        name: "동구", slug: "dong", dongs: [
          d("신암동", "sinam"), d("신천동", "sincheon"), d("효목동", "hyomok"),
          d("도평동", "dopyeong"), d("불로봉무동", "bullobongmu"), d("지저동", "jijeo"),
          d("동촌동", "dongchon"), d("방촌동", "bangchon"), d("해안동", "haean"),
          d("안심동", "ansim"), d("혁신동", "hyeoksin"),
        ],
      },
      {
        name: "서구", slug: "seo", dongs: [
          d("내당동", "naedang"), d("비산동", "bisan"), d("평리동", "pyeongni"),
          d("상중이동", "sangjungi"), d("원대동", "wondae"),
        ],
      },
      {
        name: "남구", slug: "nam", dongs: [
          d("이천동", "icheon"), d("봉덕동", "bongdeok"), d("대명동", "daemyeong"),
        ],
      },
      {
        name: "북구", slug: "buk", dongs: [
          d("고성동", "goseong"), d("칠성동", "chilseong"), d("침산동", "chimsan"),
          d("산격동", "sangyeok"), d("대현동", "daehyeon"), d("복현동", "bokhyeon"),
          d("검단동", "geomdan"), d("무태조야동", "mutaejoya"), d("관문동", "gwanmun"),
          d("태전동", "taejeon"), d("구암동", "guam"), d("관음동", "gwaneum"),
          d("읍내동", "eumnae"), d("국우동", "guk-u"), d("동천동", "dongcheon"),
          d("노곡동", "nogok"),
        ],
      },
      {
        name: "수성구", slug: "suseong", dongs: [
          d("범어동", "beomeo"), d("만촌동", "manchon"), d("황금동", "hwanggeum"),
          d("중동", "jung-suseong"), d("상동", "sang-suseong"), d("파동", "pa"),
          d("두산동", "dusan"), d("지산동", "jisan"), d("범물동", "beommul"),
          d("고산동", "gosan"),
        ],
      },
      {
        name: "달서구", slug: "dalseo", dongs: [
          d("성당동", "seongdang"), d("두류동", "duryu"), d("본리동", "bonni"),
          d("감삼동", "gamsam"), d("죽전동", "jukjeon"), d("장기동", "janggi"),
          d("용산동", "yongsan-daegu"), d("이곡동", "igok"), d("신당동", "sindang-daegu"),
          d("월성동", "wolseong"), d("진천동", "jincheon"), d("유천동", "yucheon"),
          d("상인동", "sangin"), d("도원동", "dowon"),
        ],
      },
      {
        name: "달성군", slug: "dalseong", dongs: [
          d("화원읍", "hwawon"), d("논공읍", "nongong"), d("다사읍", "dasa"),
          d("유가읍", "yuga"), d("옥포읍", "okpo-dalseong"), d("현풍읍", "hyeonpung"),
          d("가창면", "gachang"), d("하빈면", "habin"), d("구지면", "guji"),
        ],
      },
      {
        name: "군위군", slug: "gunwi", dongs: [
          d("군위읍", "gunwi"), d("소보면", "sobo"), d("효령면", "hyoryeong"),
          d("부계면", "bugye"), d("우보면", "ubo"),
        ],
      },
    ],
  },

  {
    name: "인천광역시",
    shortName: "인천",
    slug: "incheon",
    tagline: "10개 구·군 전 지역 출장 가능",
    cities: [
      {
        name: "중구", slug: "jung", dongs: [
          d("신포동", "sinpo"), d("연안동", "yeonan"), d("신흥동", "sinheung"),
          d("도원동", "dowon"), d("율목동", "yulmok"), d("동인천동", "donginchcon"),
          d("개항동", "gaehang"), d("영종동", "yeongjong"), d("영종1동", "yeongjong1"),
          d("운서동", "unseo"), d("용유동", "yongyu"),
        ],
      },
      {
        name: "동구", slug: "dong", dongs: [
          d("만석동", "manseok"), d("화수동", "hwasu"), d("송현동", "songhyeon"),
          d("화평동", "hwapyeong"), d("창영동", "changyeong"), d("금창동", "geumchang"),
        ],
      },
      {
        name: "미추홀구", slug: "michuhol", dongs: [
          d("숭의동", "sungui"), d("용현동", "yonghyeon"), d("학익동", "hagik"),
          d("도화동", "dohwa"), d("주안동", "juan"), d("관교동", "gwangyo"),
          d("문학동", "munhak"),
        ],
      },
      {
        name: "연수구", slug: "yeonsu", dongs: [
          d("옥련동", "ongnyeon"), d("선학동", "seonhak"), d("연수동", "yeonsu"),
          d("청학동", "cheonghak-incheon"), d("동춘동", "dongchun"), d("송도동", "songdo"),
        ],
      },
      {
        name: "남동구", slug: "namdong", dongs: [
          d("구월동", "guwol"), d("간석동", "ganseok"), d("만수동", "mansu"),
          d("장수서창동", "jangsuseochang"), d("서창동", "seochang"), d("논현동", "nonhyeon-incheon"),
          d("논현고잔동", "nonhyeongojan"), d("남촌도림동", "namchondorim"),
        ],
      },
      {
        name: "부평구", slug: "bupyeong", dongs: [
          d("부평동", "bupyeong"), d("산곡동", "sangok"), d("청천동", "cheongcheon"),
          d("갈산동", "galsan"), d("삼산동", "samsan"), d("부개동", "bugae"),
          d("일신동", "ilsin"), d("십정동", "sipjeong"),
        ],
      },
      {
        name: "계양구", slug: "gyeyang", dongs: [
          d("효성동", "hyoseong"), d("계산동", "gyesan"), d("작전동", "jakjeon"),
          d("서운동", "seoun"), d("계양1동", "gyeyang1"), d("계양2동", "gyeyang2"),
          d("계양3동", "gyeyang3"),
        ],
      },
      {
        name: "서구", slug: "seo", dongs: [
          d("검암경서동", "geomamgyeongseo"), d("연희동", "yeonhui-incheon"),
          d("청라동", "cheongna"), d("가정동", "gajeong"), d("석남동", "seongnam-incheon"),
          d("신현원창동", "sinhyeonwonchang"), d("가좌동", "gajwa"),
          d("왕길동", "wanggil"), d("당하동", "dangha"), d("원당동", "wondang"),
          d("불로대곡동", "bullodaegok"), d("검단동", "geomdan"),
        ],
      },
      {
        name: "강화군", slug: "ganghwa", dongs: [
          d("강화읍", "ganghwa"), d("선원면", "seonwon"), d("불은면", "bureun"),
          d("길상면", "gilsang"), d("화도면", "hwado"), d("내가면", "naega"),
          d("교동면", "gyodong"), d("삼산면", "samsan-ganghwa"),
        ],
      },
      {
        name: "옹진군", slug: "ongjin", dongs: [
          d("북도면", "bukdo"), d("연평면", "yeonpyeong"), d("백령면", "baengnyeong"),
          d("덕적면", "deokjeok"), d("자월면", "jawol"),
        ],
      },
    ],
  },

  {
    name: "광주광역시",
    shortName: "광주",
    slug: "gwangju",
    tagline: "5개 자치구 광역 출장 운영",
    cities: [
      {
        name: "동구", slug: "dong", dongs: [
          d("충장동", "chungjang"), d("동명동", "dongmyeong"), d("계림동", "gyerim"),
          d("산수동", "sansu"), d("지산동", "jisan-gj"), d("서남동", "seonam"),
          d("학동", "hak-gj"), d("학운동", "hagun"),
        ],
      },
      {
        name: "서구", slug: "seo", dongs: [
          d("양동", "yang"), d("양3동", "yang3"), d("농성동", "nongseong"),
          d("광천동", "gwangcheon"), d("유덕동", "yudeok"), d("치평동", "chipyeong"),
          d("상무동", "sangmu"), d("화정동", "hwajeong"), d("서창동", "seochang-gj"),
          d("금호동", "geumho-gj"), d("풍암동", "pungam"), d("동천동", "dongcheon-gj"),
        ],
      },
      {
        name: "남구", slug: "nam", dongs: [
          d("양림동", "yangnim"), d("방림동", "bangnim"), d("봉선동", "bongseon"),
          d("사직동", "sajik-gj"), d("백운동", "baegun"), d("주월동", "juwol"),
          d("효덕동", "hyodeok"), d("송암동", "songam"), d("대촌동", "daechon"),
        ],
      },
      {
        name: "북구", slug: "buk", dongs: [
          d("중흥동", "jungheung"), d("우산동", "usan"), d("풍향동", "punghyang"),
          d("문화동", "munhwa"), d("두암동", "duam"), d("운암동", "unam-gj"),
          d("동림동", "dongnim"), d("매곡동", "maegok"), d("일곡동", "ilgok"),
          d("문흥동", "munheung"), d("오치동", "ochi"), d("석곡동", "seokgok"),
          d("용봉동", "yongbong"), d("건국동", "geonguk"),
        ],
      },
      {
        name: "광산구", slug: "gwangsan", dongs: [
          d("송정동", "songjeong-gj"), d("도산동", "dosan"), d("신흥동", "sinheung-gj"),
          d("어룡동", "eoryong"), d("우산동", "usan-gwangsan"), d("월곡동", "wolgok-gj"),
          d("운남동", "unnam"), d("수완동", "suwan"), d("하남동", "hanam"),
          d("임곡동", "imgok"), d("동곡동", "donggok"), d("평동", "pyeong"),
          d("삼도동", "samdo"), d("본량동", "bonnyang"), d("비아동", "bia"),
        ],
      },
    ],
  },

  {
    name: "대전광역시",
    shortName: "대전",
    slug: "daejeon",
    tagline: "5개 자치구 광역 출장 운영",
    cities: [
      {
        name: "동구", slug: "dong", dongs: [
          d("중앙동", "jungang-dj"), d("효동", "hyo"), d("판암동", "panam"),
          d("대동", "dae"), d("자양동", "jayang-dj"), d("가양동", "gayang-dj"),
          d("용운동", "yongun"), d("용전동", "yongjeon"), d("성남동", "seongnam-dj"),
          d("홍도동", "hongdo"),
        ],
      },
      {
        name: "중구", slug: "jung", dongs: [
          d("은행선화동", "eunhaengseonhwa"), d("목동", "mokdong-dj"), d("중촌동", "jungchon"),
          d("대흥동", "daeheung-dj"), d("문창동", "munchang"), d("석교동", "seokgyo"),
          d("대사동", "daesa"), d("부사동", "busa"), d("용두동", "yongdu-dj"),
          d("오류동", "oryu-dj"), d("태평동", "taepyeong"), d("유천동", "yucheon-dj"),
          d("산성동", "sanseong"),
        ],
      },
      {
        name: "서구", slug: "seo", dongs: [
          d("복수동", "boksu"), d("도마동", "doma"), d("정림동", "jeongnim-dj"),
          d("변동", "byeon"), d("용문동", "yongmun-dj"), d("탄방동", "tanbang"),
          d("둔산동", "dunsan"), d("월평동", "wolpyeong"), d("만년동", "mannyeon"),
          d("가장동", "gajang"), d("내동", "nae"), d("갈마동", "galma"),
          d("괴정동", "goejeong-dj"), d("관저동", "gwanjeo"), d("기성동", "giseong"),
        ],
      },
      {
        name: "유성구", slug: "yuseong", dongs: [
          d("진잠동", "jinjam"), d("학하동", "haka"), d("온천동", "oncheon-dj"),
          d("노은동", "noeun"), d("신성동", "sinseong"), d("전민동", "jeonmin"),
          d("관평동", "gwanpyeong"), d("구즉동", "gujeuk"),
        ],
      },
      {
        name: "대덕구", slug: "daedeok", dongs: [
          d("오정동", "ojeong"), d("대화동", "daehwa"), d("회덕동", "hoedeok"),
          d("비래동", "birae"), d("송촌동", "songchon"), d("중리동", "jungni"),
          d("법동", "beop"), d("신탄진동", "sintanjin"), d("석봉동", "seokbong"),
          d("덕암동", "deogam"), d("목상동", "moksang"),
        ],
      },
    ],
  },

  {
    name: "울산광역시",
    shortName: "울산",
    slug: "ulsan",
    tagline: "5개 구·군 광역 출장 운영",
    cities: [
      {
        name: "중구", slug: "jung", dongs: [
          d("학성동", "hakseong"), d("반구동", "bangu"), d("복산동", "boksan-ulsan"),
          d("성안동", "seongan"), d("우정동", "ujeong"), d("태화동", "taehwa"),
          d("다운동", "daun"), d("병영동", "byeongyeong"),
        ],
      },
      {
        name: "남구", slug: "nam", dongs: [
          d("신정동", "sinjeong-ulsan"), d("달동", "dal"), d("삼산동", "samsan-ulsan"),
          d("야음장생포동", "yaeumjangsaengpo"), d("선암동", "seonam-ulsan"),
          d("무거동", "mugeo"), d("옥동", "ok"), d("대현동", "daehyeon-ulsan"),
        ],
      },
      {
        name: "동구", slug: "dong", dongs: [
          d("방어동", "bangeo"), d("화정동", "hwajeong-ulsan"), d("대송동", "daesong"),
          d("일산동", "ilsan-ulsan"), d("전하동", "jeonha"), d("남목동", "nammok"),
        ],
      },
      {
        name: "북구", slug: "buk", dongs: [
          d("농소동", "nongso"), d("강동동", "gangdong-ulsan"), d("효문동", "hyomun"),
          d("송정동", "songjeong-ulsan"), d("양정동", "yangjeong-ulsan"),
          d("염포동", "yeompo"),
        ],
      },
      {
        name: "울주군", slug: "ulju", dongs: [
          d("온산읍", "onsan"), d("언양읍", "eonyang"), d("온양읍", "onyang-ulju"),
          d("범서읍", "beomseo"), d("청량읍", "cheongnyang"), d("삼남읍", "samnam"),
          d("두서면", "duseo"), d("두동면", "dudong"), d("서생면", "seosaeng"),
        ],
      },
    ],
  },

  {
    name: "세종특별자치시",
    shortName: "세종",
    slug: "sejong",
    tagline: "행정중심복합도시 신도심 출장 운영",
    cities: [
      {
        name: "세종시", slug: "sejong", dongs: [
          d("도담동", "dodam"), d("아름동", "areum"), d("종촌동", "jongchon"),
          d("새롬동", "saerom"), d("한솔동", "hansol"), d("보람동", "boram"),
          d("대평동", "daepyeong"), d("소담동", "sodam"), d("반곡동", "bangok-sj"),
          d("나성동", "naseong"), d("다정동", "dajeong"), d("어진동", "eojin"),
          d("조치원읍", "jochiwon"), d("연기면", "yeongi"), d("연동면", "yeondong"),
          d("부강면", "bugang"), d("금남면", "geumnam"), d("장군면", "janggun"),
          d("연서면", "yeonseo"), d("전의면", "jeonui"), d("전동면", "jeondong"),
          d("소정면", "sojeong"),
        ],
      },
    ],
  },

  {
    name: "경기도",
    shortName: "경기",
    slug: "gyeonggi",
    tagline: "31개 시·군 수도권 광역 출장 네트워크",
    cities: [
      {
        name: "수원시", slug: "suwon", dongs: [
          d("권선동", "gwonseon"), d("영통동", "yeongtong"), d("매탄동", "maetan"),
          d("인계동", "ingye"), d("팔달동", "paldal"), d("우만동", "uman"),
          d("정자동", "jeongja-suwon"), d("천천동", "cheoncheon"), d("매교동", "maegyo"),
          d("화서동", "hwaseo"), d("호매실동", "homaesil"), d("광교동", "gwanggyo"),
        ],
      },
      {
        name: "성남시", slug: "seongnam", dongs: [
          d("분당동", "bundang"), d("정자동", "jeongja"), d("서현동", "seohyeon"),
          d("수내동", "sunae"), d("판교동", "pangyo"), d("이매동", "imae"),
          d("야탑동", "yatap"), d("태평동", "taepyeong-sn"), d("신흥동", "sinheung-sn"),
          d("단대동", "dandae"), d("산성동", "sanseong-sn"), d("위례동", "wirye-sn"),
        ],
      },
      {
        name: "용인시", slug: "yongin", dongs: [
          d("수지동", "suji"), d("죽전동", "jukjeon"), d("기흥동", "giheung"),
          d("신갈동", "singal"), d("동백동", "dongbaek"), d("처인동", "cheoin"),
          d("상현동", "sanghyeon"), d("풍덕천동", "pungdeokcheon"),
        ],
      },
      {
        name: "고양시", slug: "goyang", dongs: [
          d("일산동", "ilsan"), d("주엽동", "juyeop"), d("정발산동", "jeongbalsan"),
          d("마두동", "madu"), d("백석동", "baekseok"), d("화정동", "hwajeong-goyang"),
          d("행신동", "haengsin"), d("탄현동", "tanhyeon"), d("능곡동", "neunggok-goyang"),
          d("대화동", "daehwa-goyang"), d("식사동", "siksa"),
        ],
      },
      {
        name: "화성시", slug: "hwaseong", dongs: [
          d("동탄동", "dongtan"), d("병점동", "byeongjeom"), d("향남읍", "hyangnam"),
          d("봉담읍", "bongdam"), d("남양읍", "namyang"), d("우정읍", "ujeong-hs"),
          d("팔탄면", "paltan"), d("정남면", "jeongnam-hs"),
        ],
      },
      {
        name: "부천시", slug: "bucheon", dongs: [
          d("중동", "jung"), d("상동", "sang"), d("심곡동", "simgok"),
          d("원미동", "wonmi"), d("소사본동", "sosabon"), d("역곡동", "yeokgok"),
          d("범박동", "beombak"), d("괴안동", "goean"), d("송내동", "songnae"),
        ],
      },
      {
        name: "남양주시", slug: "namyangju", dongs: [
          d("다산동", "dasan-ny"), d("별내동", "byeollae"), d("호평동", "hopyeong"),
          d("평내동", "pyeongnae"), d("진접읍", "jinjeop"), d("화도읍", "hwado-ny"),
          d("와부읍", "wabu"), d("진건읍", "jingeon"),
        ],
      },
      {
        name: "안양시", slug: "anyang", dongs: [
          d("평촌동", "pyeongchon"), d("범계동", "beomgye"), d("호계동", "hogye"),
          d("관양동", "gwanyang"), d("비산동", "bisan-anyang"), d("석수동", "seoksu"),
          d("박달동", "bakdal"), d("귀인동", "gwiin"), d("부림동", "burim"),
        ],
      },
      {
        name: "안산시", slug: "ansan", dongs: [
          d("고잔동", "gojan"), d("중앙동", "jungang-ansan"), d("사동", "sa"),
          d("선부동", "seonbu"), d("초지동", "choji"), d("본오동", "bono"),
          d("일동", "il"), d("이동", "i-ansan"), d("부곡동", "bugok-ansan"),
        ],
      },
      {
        name: "평택시", slug: "pyeongtaek", dongs: [
          d("평택동", "pyeongtaek"), d("비전동", "bijeon"), d("송탄동", "songtan"),
          d("서정동", "seojeong"), d("팽성읍", "paengseong"), d("안중읍", "anjung"),
          d("포승읍", "poseung"), d("청북읍", "cheongbuk-pt"),
        ],
      },
      {
        name: "의정부시", slug: "uijeongbu", dongs: [
          d("의정부동", "uijeongbu"), d("호원동", "howon"), d("장암동", "jangam"),
          d("민락동", "millak"), d("녹양동", "nogyang"), d("자금동", "jageum"),
          d("가능동", "ganeung"), d("신곡동", "singok"),
        ],
      },
      {
        name: "시흥시", slug: "siheung", dongs: [
          d("정왕동", "jeongwang"), d("배곧동", "baegot"), d("능곡동", "neunggok"),
          d("연성동", "yeonseong"), d("대야동", "daeya"), d("신천동", "sincheon-sh"),
          d("월곶동", "wolgot"), d("군자동", "gunja-sh"),
        ],
      },
      {
        name: "파주시", slug: "paju", dongs: [
          d("운정동", "unjeong"), d("교하동", "gyoha"), d("금촌동", "geumchon"),
          d("문산읍", "munsan"), d("조리읍", "jori"), d("법원읍", "beobwon"),
          d("탄현면", "tanhyeon-pj"), d("월롱면", "wollong"),
        ],
      },
      {
        name: "김포시", slug: "gimpo", dongs: [
          d("장기동", "janggi"), d("구래동", "gurae"), d("운양동", "unyang"),
          d("사우동", "sau"), d("풍무동", "pungmu"), d("양촌읍", "yangchon"),
          d("통진읍", "tongjin"), d("월곶면", "wolgot-gp"),
        ],
      },
      {
        name: "광명시", slug: "gwangmyeong", dongs: [
          d("철산동", "cheolsan"), d("하안동", "haan"), d("소하동", "soha"),
          d("일직동", "iljik"), d("광명동", "gwangmyeong"), d("학온동", "hagon"),
        ],
      },
      {
        name: "광주시", slug: "gwangju-gg", dongs: [
          d("경안동", "gyeongan"), d("송정동", "songjeong-gg"), d("오포읍", "opo"),
          d("초월읍", "chowol"), d("곤지암읍", "gonjiam"), d("도척면", "docheok"),
          d("퇴촌면", "toechon"),
        ],
      },
      {
        name: "군포시", slug: "gunpo", dongs: [
          d("산본동", "sanbon"), d("금정동", "geumjeong-gunpo"), d("당동", "dang"),
          d("부곡동", "bugok-gunpo"), d("재궁동", "jaegung"), d("궁내동", "gungnae"),
        ],
      },
      {
        name: "하남시", slug: "hanam", dongs: [
          d("미사동", "misa"), d("덕풍동", "deokpung"), d("신장동", "sinjang"),
          d("위례동", "wirye-hanam"), d("풍산동", "pungsan"), d("천현동", "cheonhyeon"),
        ],
      },
      {
        name: "오산시", slug: "osan", dongs: [
          d("오산동", "osan"), d("세교동", "segyo"), d("운암동", "unam-os"),
          d("초평동", "chopyeong"), d("중앙동", "jungang-os"), d("대원동", "daewon"),
        ],
      },
      {
        name: "이천시", slug: "icheon", dongs: [
          d("창전동", "changjeon"), d("증포동", "jeungpo"), d("관고동", "gwango"),
          d("부발읍", "bubal"), d("장호원읍", "janghowon"), d("마장면", "majang-ic"),
        ],
      },
      {
        name: "양주시", slug: "yangju", dongs: [
          d("덕정동", "deokjeong"), d("회천동", "hoecheon"), d("옥정동", "okjeong"),
          d("양주동", "yangju"), d("백석읍", "baekseok-yj"), d("광적면", "gwangjeok"),
        ],
      },
      {
        name: "구리시", slug: "guri", dongs: [
          d("교문동", "gyomun"), d("인창동", "inchang"), d("수택동", "sutaek"),
          d("토평동", "topyeong"), d("동구동", "donggu"),
        ],
      },
      {
        name: "포천시", slug: "pocheon", dongs: [
          d("소흘읍", "soheul"), d("군내면", "gunnae-pc"), d("내촌면", "naechon"),
          d("가산면", "gasan-pc"), d("일동면", "ildong"), d("이동면", "idong"),
        ],
      },
      {
        name: "안성시", slug: "anseong", dongs: [
          d("안성동", "anseong"), d("공도읍", "gongdo"), d("보개면", "bogae"),
          d("미양면", "miyang"), d("대덕면", "daedeok-as"),
        ],
      },
      {
        name: "의왕시", slug: "uiwang", dongs: [
          d("내손1동", "naeson1"), d("내손2동", "naeson2"), d("고천동", "gocheon"),
          d("부곡동", "bugok-uw"), d("청계동", "cheonggye-uw"),
        ],
      },
      {
        name: "양평군", slug: "yangpyeong", dongs: [
          d("양평읍", "yangpyeong"), d("강상면", "gangsang"), d("양서면", "yangseo"),
          d("옥천면", "okcheon-yp"), d("용문면", "yongmun-yp"),
        ],
      },
      {
        name: "여주시", slug: "yeoju", dongs: [
          d("여흥동", "yeoheung"), d("중앙동", "jungang-yj"), d("오학동", "ohak"),
          d("가남읍", "ganam"), d("흥천면", "heungcheon"),
        ],
      },
      {
        name: "동두천시", slug: "dongducheon", dongs: [
          d("생연동", "saengyeon"), d("불현동", "bulhyeon"), d("송내동", "songnae-dd"),
          d("지행동", "jihaeng"), d("보산동", "bosan-dd"),
        ],
      },
      {
        name: "과천시", slug: "gwacheon", dongs: [
          d("중앙동", "jungang-gc"), d("별양동", "byeoryang"), d("부림동", "burim-gc"),
          d("과천동", "gwacheon"), d("문원동", "munwon"),
        ],
      },
      {
        name: "가평군", slug: "gapyeong", dongs: [
          d("가평읍", "gapyeong"), d("설악면", "seorak"), d("청평면", "cheongpyeong"),
          d("상면", "sang-gp"), d("조종면", "jojong"),
        ],
      },
      {
        name: "연천군", slug: "yeoncheon", dongs: [
          d("연천읍", "yeoncheon"), d("전곡읍", "jeongok"), d("백학면", "baekhak"),
          d("미산면", "misan"), d("청산면", "cheongsan"),
        ],
      },
    ],
  },

  {
    name: "강원특별자치도",
    shortName: "강원",
    slug: "gangwon",
    tagline: "도내 18개 시·군 광역 출장 안내",
    cities: [
      {
        name: "춘천시", slug: "chuncheon", dongs: [
          d("석사동", "seoksa"), d("후평동", "hupyeong"), d("효자동", "hyoja"),
          d("퇴계동", "toegye"), d("강남동", "gangnam-cc"), d("교동", "gyo-cc"),
          d("약사명동", "yaksamyeong"), d("조운동", "joun"), d("신사우동", "sinsau"),
          d("동내면", "dongnae"),
        ],
      },
      {
        name: "원주시", slug: "wonju", dongs: [
          d("단계동", "dangye"), d("무실동", "musil"), d("명륜동", "myeongnyun-wj"),
          d("원동", "won"), d("반곡동", "bangok"), d("일산동", "ilsan-wj"),
          d("학성동", "hakseong-wj"), d("우산동", "usan-wj"), d("태장동", "taejang"),
          d("문막읍", "munmak"), d("호저면", "hojeo"),
        ],
      },
      {
        name: "강릉시", slug: "gangneung", dongs: [
          d("교동", "gyo"), d("포남동", "ponam"), d("옥천동", "okcheon"),
          d("강남동", "gangnam-gn"), d("주문진읍", "jumunjin"), d("초당동", "chodang"),
          d("송정동", "songjeong-gn"), d("입암동", "ibam"), d("내곡동", "naegok-gn"),
          d("성덕동", "seongdeok"),
        ],
      },
      {
        name: "동해시", slug: "donghae", dongs: [
          d("천곡동", "cheongok"), d("송정동", "songjeong-dh"), d("발한동", "balhan"),
          d("북삼동", "buksam-dh"), d("부곡동", "bugok-dh"), d("묵호동", "mukho"),
          d("삼화동", "samhwa"),
        ],
      },
      {
        name: "태백시", slug: "taebaek", dongs: [
          d("황지동", "hwangji"), d("장성동", "jangseong"), d("문곡소도동", "munkokso"),
          d("상장동", "sangjang"), d("삼수동", "samsu-tb"),
        ],
      },
      {
        name: "속초시", slug: "sokcho", dongs: [
          d("교동", "gyo-sc"), d("동명동", "dongmyeong-sc"), d("영랑동", "yeongnang"),
          d("금호동", "geumho-sc"), d("청호동", "cheongho"), d("대포동", "daepo"),
          d("도문동", "domun"), d("노학동", "nohak"),
        ],
      },
      {
        name: "삼척시", slug: "samcheok", dongs: [
          d("성내동", "seongnae-sc"), d("교동", "gyo-samcheok"), d("정라동", "jeongna"),
          d("도경동", "dogyeong"), d("미로면", "miro"), d("원덕읍", "wondeok"),
          d("근덕면", "geundeok"), d("하장면", "hajang"),
        ],
      },
      {
        name: "홍천군", slug: "hongcheon", dongs: [
          d("홍천읍", "hongcheon"), d("화촌면", "hwachon"), d("두촌면", "duchon"),
          d("내촌면", "naechon-hc"), d("서석면", "seoseok"), d("남면", "nam-hc"),
          d("북방면", "bukbang"),
        ],
      },
      {
        name: "횡성군", slug: "hoengseong", dongs: [
          d("횡성읍", "hoengseong"), d("우천면", "ucheon"), d("안흥면", "anheung"),
          d("강림면", "gangnim"), d("둔내면", "dunnae"),
        ],
      },
      {
        name: "영월군", slug: "yeongwol", dongs: [
          d("영월읍", "yeongwol"), d("주천면", "jucheon"), d("한반도면", "hanbando"),
          d("남면", "nam-yw"), d("상동읍", "sangdong-yw"),
        ],
      },
      {
        name: "평창군", slug: "pyeongchang", dongs: [
          d("평창읍", "pyeongchang"), d("미탄면", "mitan"), d("방림면", "bangnim-pc"),
          d("대화면", "daehwa-pc"), d("봉평면", "bongpyeong-pc"), d("진부면", "jinbu"),
          d("용평면", "yongpyeong-pc"),
        ],
      },
      {
        name: "정선군", slug: "jeongseon", dongs: [
          d("정선읍", "jeongseon"), d("고한읍", "gohan"), d("사북읍", "sabuk"),
          d("신동읍", "sindong"), d("남면", "nam-jeongseon"), d("북평면", "bukpyeong"),
        ],
      },
      {
        name: "철원군", slug: "cheorwon", dongs: [
          d("갈말읍", "galmal"), d("동송읍", "dongsong"), d("서면", "seo-cw"),
          d("근북면", "geunbuk"), d("근동면", "geundong"), d("근남면", "geunnam"),
          d("김화읍", "gimhwa"),
        ],
      },
      {
        name: "화천군", slug: "hwacheon", dongs: [
          d("화천읍", "hwacheon"), d("간동면", "gandong"), d("하남면", "hanam-hc"),
          d("상서면", "sangseo"), d("사내면", "sanae"),
        ],
      },
      {
        name: "양구군", slug: "yanggu", dongs: [
          d("양구읍", "yanggu"), d("국토정중앙면", "guktojungang"), d("동면", "dong-yg"),
          d("방산면", "bangsan-yg"), d("해안면", "haean-yg"),
        ],
      },
      {
        name: "인제군", slug: "inje", dongs: [
          d("인제읍", "inje"), d("남면", "nam-inje"), d("북면", "buk-inje"),
          d("기린면", "girin"), d("상남면", "sangnam-inje"), d("서화면", "seohwa"),
        ],
      },
      {
        name: "고성군", slug: "goseong-gw", dongs: [
          d("간성읍", "ganseong"), d("거진읍", "geojin"), d("현내면", "hyeonnae"),
          d("죽왕면", "jugwang"), d("토성면", "toseong"), d("수동면", "sudong"),
        ],
      },
      {
        name: "양양군", slug: "yangyang", dongs: [
          d("양양읍", "yangyang"), d("서면", "seo-yy"), d("손양면", "sonyang"),
          d("현북면", "hyeonbuk"), d("현남면", "hyeonnam"), d("강현면", "ganghyeon"),
        ],
      },
    ],
  },

  {
    name: "충청북도",
    shortName: "충북",
    slug: "chungbuk",
    tagline: "도내 11개 시·군 광역 출장 운영",
    cities: [
      {
        name: "청주시", slug: "cheongju", dongs: [
          d("성안동", "seongan"), d("용암동", "yongam"), d("산남동", "sannam"),
          d("복대동", "bokdae"), d("오송읍", "osong"), d("오창읍", "ochang"),
          d("강내면", "gangnae"), d("가덕면", "gadeok"), d("미원면", "miwon"),
          d("율량동", "yulryang"), d("내수읍", "naesu"),
        ],
      },
      {
        name: "충주시", slug: "chungju", dongs: [
          d("성내동", "seongnae-cj"), d("성서동", "seoseo"), d("연수동", "yeonsu-cj"),
          d("교현동", "gyohyeon"), d("용산동", "yongsan-cj"), d("호암동", "hoam"),
          d("주덕읍", "judeok"), d("앙성면", "angseong"), d("산척면", "sancheok"),
        ],
      },
      {
        name: "제천시", slug: "jecheon", dongs: [
          d("교동", "gyo-jc"), d("의림동", "uirim"), d("청전동", "cheongjeon"),
          d("화산동", "hwasan-jc"), d("신백동", "sinbaek"), d("봉양읍", "bongyang"),
          d("백운면", "baegun"), d("수산면", "susan"),
        ],
      },
      {
        name: "보은군", slug: "boeun", dongs: [
          d("보은읍", "boeun"), d("속리산면", "songnisan"), d("장안면", "jangan-be"),
          d("탄부면", "tanbu"), d("회인면", "hoein"),
        ],
      },
      {
        name: "옥천군", slug: "okcheon", dongs: [
          d("옥천읍", "okcheon"), d("동이면", "dongi"), d("이원면", "iwon-oc"),
          d("청산면", "cheongsan-oc"), d("청성면", "cheongseong"),
        ],
      },
      {
        name: "영동군", slug: "yeongdong", dongs: [
          d("영동읍", "yeongdong"), d("황간면", "hwanggan"), d("상촌면", "sangchon"),
          d("매곡면", "maegok-yd"), d("심천면", "simcheon"),
        ],
      },
      {
        name: "증평군", slug: "jeungpyeong", dongs: [
          d("증평읍", "jeungpyeong"), d("도안면", "doan"),
        ],
      },
      {
        name: "진천군", slug: "jincheon", dongs: [
          d("진천읍", "jincheon"), d("덕산읍", "deoksan"), d("초평면", "chopyeong-jc"),
          d("문백면", "munbaek"), d("백곡면", "baekgok"),
        ],
      },
      {
        name: "괴산군", slug: "goesan", dongs: [
          d("괴산읍", "goesan"), d("연풍면", "yeonpung"), d("장연면", "jangyeon"),
          d("청천면", "cheongcheon-gs"), d("청안면", "cheongan"),
        ],
      },
      {
        name: "음성군", slug: "eumseong", dongs: [
          d("음성읍", "eumseong"), d("금왕읍", "geumwang"), d("대소면", "daeso"),
          d("삼성면", "samseong-es"), d("생극면", "saenggeuk"), d("맹동면", "maengdong"),
        ],
      },
      {
        name: "단양군", slug: "danyang", dongs: [
          d("단양읍", "danyang"), d("매포읍", "maepo"), d("대강면", "daegang"),
          d("어상천면", "eosangcheon"), d("적성면", "jeokseong"),
        ],
      },
    ],
  },

  {
    name: "충청남도",
    shortName: "충남",
    slug: "chungnam",
    tagline: "도내 15개 시·군 광역 출장 운영",
    cities: [
      {
        name: "천안시", slug: "cheonan", dongs: [
          d("불당동", "buldang"), d("두정동", "dujeong"), d("쌍용동", "ssangyong"),
          d("성정동", "seongjeong"), d("백석동", "baekseok-cn"), d("청룡동", "cheongnyong-cn"),
          d("신방동", "sinbang"), d("성환읍", "seonghwan"), d("직산읍", "jiksan"),
          d("입장면", "ipjang"),
        ],
      },
      {
        name: "공주시", slug: "gongju", dongs: [
          d("중학동", "junghak"), d("웅진동", "ungjin"), d("금학동", "geumhak"),
          d("옥룡동", "ongnyong"), d("월송동", "wolsong"), d("신관동", "singwan"),
          d("유구읍", "yugu"), d("계룡면", "gyeryong-gj"), d("의당면", "uidang"),
        ],
      },
      {
        name: "보령시", slug: "boryeong", dongs: [
          d("동대동", "dongdae"), d("죽정동", "jukjeong"), d("대천동", "daecheon-br"),
          d("주포면", "jupo"), d("주교면", "jugyo"), d("웅천읍", "ungcheon"),
          d("청라면", "cheongna-br"),
        ],
      },
      {
        name: "아산시", slug: "asan", dongs: [
          d("배방읍", "baebang"), d("탕정면", "tangjeong"), d("온양동", "onyang"),
          d("권곡동", "gwongok"), d("음봉면", "eumbong"), d("둔포면", "dunpo"),
          d("선장면", "seonjang"), d("도고면", "dogo"), d("신창면", "sinchang"),
        ],
      },
      {
        name: "서산시", slug: "seosan", dongs: [
          d("동문동", "dongmun"), d("부춘동", "buchun"), d("수석동", "suseok"),
          d("석남동", "seongnam-ss"), d("성연면", "seongyeon"), d("음암면", "eumam"),
          d("팔봉면", "palbong"), d("지곡면", "jigok"),
        ],
      },
      {
        name: "논산시", slug: "nonsan", dongs: [
          d("취암동", "chwiam"), d("부창동", "buchang"), d("강경읍", "ganggyeong"),
          d("연무읍", "yeonmu"), d("부적면", "bujeok"), d("연산면", "yeonsan-ns"),
          d("벌곡면", "beolgok"),
        ],
      },
      {
        name: "계룡시", slug: "gyeryong", dongs: [
          d("두마면", "duma"), d("엄사면", "eomsa"), d("금암동", "geumam"),
          d("신도안면", "sindoan"),
        ],
      },
      {
        name: "당진시", slug: "dangjin", dongs: [
          d("읍내동", "eumnae-dj"), d("채운동", "chaeun"), d("당진동", "dangjin"),
          d("석문면", "seongmun"), d("고대면", "godae"), d("송산면", "songsan"),
          d("정미면", "jeongmi"), d("우강면", "ugang"), d("합덕읍", "hapdeok"),
        ],
      },
      {
        name: "금산군", slug: "geumsan", dongs: [
          d("금산읍", "geumsan"), d("금성면", "geumseong-gs"), d("제원면", "jewon"),
          d("부리면", "buri"), d("군북면", "gunbuk"),
        ],
      },
      {
        name: "부여군", slug: "buyeo", dongs: [
          d("부여읍", "buyeo"), d("규암면", "gyuam"), d("은산면", "eunsan"),
          d("외산면", "oesan"), d("내산면", "naesan"), d("구룡면", "guryong"),
        ],
      },
      {
        name: "서천군", slug: "seocheon", dongs: [
          d("서천읍", "seocheon"), d("장항읍", "janghang"), d("기산면", "gisan"),
          d("한산면", "hansan"), d("화양면", "hwayang"),
        ],
      },
      {
        name: "청양군", slug: "cheongyang", dongs: [
          d("청양읍", "cheongyang"), d("운곡면", "ungok"), d("대치면", "daechi-cy"),
          d("정산면", "jeongsan"), d("목면", "mok"),
        ],
      },
      {
        name: "홍성군", slug: "hongseong", dongs: [
          d("홍성읍", "hongseong"), d("광천읍", "gwangcheon-hs"), d("홍북읍", "hongbuk"),
          d("금마면", "geumma"), d("결성면", "gyeolseong"), d("은하면", "eunha"),
        ],
      },
      {
        name: "예산군", slug: "yesan", dongs: [
          d("예산읍", "yesan"), d("삽교읍", "sapgyo"), d("덕산면", "deoksan-yes"),
          d("봉산면", "bongsan-yes"), d("고덕면", "godeok-yes"), d("응봉면", "eungbong"),
        ],
      },
      {
        name: "태안군", slug: "taean", dongs: [
          d("태안읍", "taean"), d("안면읍", "anmyeon"), d("고남면", "gonam"),
          d("남면", "nam-tae"), d("근흥면", "geunheung"), d("소원면", "sowon"),
        ],
      },
    ],
  },

  {
    name: "전북특별자치도",
    shortName: "전북",
    slug: "jeonbuk",
    tagline: "도내 14개 시·군 광역 출장 안내",
    cities: [
      {
        name: "전주시", slug: "jeonju", dongs: [
          d("효자동", "hyoja-jj"), d("서신동", "seosin"), d("평화동", "pyeonghwa"),
          d("덕진동", "deokjin"), d("인후동", "inhu"), d("우아동", "ua"),
          d("송천동", "songcheon"), d("호성동", "hoseong"), d("동산동", "dongsan-jj"),
          d("진북동", "jinbuk"), d("팔복동", "palbok"), d("아중동", "ajung"),
        ],
      },
      {
        name: "군산시", slug: "gunsan", dongs: [
          d("나운동", "naun"), d("수송동", "susong"), d("미장동", "mijang"),
          d("조촌동", "jochon"), d("개정동", "gaejeong"), d("경암동", "gyeongam"),
          d("월명동", "wolmyeong"), d("회현면", "hoehyeon-gs"), d("옥구읍", "okgu"),
        ],
      },
      {
        name: "익산시", slug: "iksan", dongs: [
          d("영등동", "yeongdeung-is"), d("어양동", "eoyang"), d("팔봉동", "palbong-is"),
          d("부송동", "busong"), d("동산동", "dongsan-is"), d("마동", "ma"),
          d("송학동", "songhak"), d("황등면", "hwangdeung"), d("함열읍", "hamyeol"),
          d("금마면", "geumma-is"),
        ],
      },
      {
        name: "정읍시", slug: "jeongeup", dongs: [
          d("수성동", "suseong-je"), d("연지동", "yeonji-je"), d("상교동", "sanggyo"),
          d("장명동", "jangmyeong"), d("초산동", "chosan"), d("내장상동", "naejangsang"),
          d("신태인읍", "sintaein"), d("태인면", "taein"), d("칠보면", "chilbo"),
        ],
      },
      {
        name: "남원시", slug: "namwon", dongs: [
          d("동충동", "dongchung"), d("죽항동", "jukhang"), d("노암동", "noam"),
          d("금동", "geum"), d("왕정동", "wangjeong"), d("운봉읍", "unbong"),
          d("주천면", "jucheon-nw"), d("산내면", "sannae-nw"), d("아영면", "ayeong"),
        ],
      },
      {
        name: "김제시", slug: "gimje", dongs: [
          d("요촌동", "yochon"), d("신풍동", "sinpung"), d("검산동", "geomsan"),
          d("교월동", "gyowol"), d("백구면", "baekgu"), d("부량면", "buryang"),
          d("만경읍", "mangyeong"), d("진봉면", "jinbong"),
        ],
      },
      {
        name: "완주군", slug: "wanju", dongs: [
          d("삼례읍", "samrye"), d("봉동읍", "bongdong"), d("용진읍", "yongjin"),
          d("상관면", "sanggwan"), d("이서면", "iseo"), d("소양면", "soyang"),
          d("운주면", "unju"), d("화산면", "hwasan-wj"),
        ],
      },
      {
        name: "진안군", slug: "jinan", dongs: [
          d("진안읍", "jinan"), d("용담면", "yongdam"), d("주천면", "jucheon-jn"),
          d("안천면", "ancheon"), d("정천면", "jeongcheon-jn"),
        ],
      },
      {
        name: "무주군", slug: "muju", dongs: [
          d("무주읍", "muju"), d("무풍면", "mupung"), d("설천면", "seolcheon"),
          d("부남면", "bunam"), d("적상면", "jeoksang"),
        ],
      },
      {
        name: "장수군", slug: "jangsu", dongs: [
          d("장수읍", "jangsu"), d("산서면", "sanseo"), d("계남면", "gyenam"),
          d("계북면", "gyebuk"), d("천천면", "cheoncheon-js"),
        ],
      },
      {
        name: "임실군", slug: "imsil", dongs: [
          d("임실읍", "imsil"), d("강진면", "gangjin-is"), d("덕치면", "deokchi"),
          d("삼계면", "samgye-is"), d("청웅면", "cheongung"),
        ],
      },
      {
        name: "순창군", slug: "sunchang", dongs: [
          d("순창읍", "sunchang"), d("인계면", "ingye-sc"), d("동계면", "donggye"),
          d("적성면", "jeokseong-sc"), d("팔덕면", "paldeok"),
        ],
      },
      {
        name: "고창군", slug: "gochang", dongs: [
          d("고창읍", "gochang"), d("아산면", "asan-gc"), d("무장면", "mujang"),
          d("심원면", "simwon"), d("해리면", "haeri"),
        ],
      },
      {
        name: "부안군", slug: "buan", dongs: [
          d("부안읍", "buan"), d("주산면", "jusan-buan"), d("동진면", "dongjin-buan"),
          d("줄포면", "julpo"), d("위도면", "wido"), d("백산면", "baeksan"),
        ],
      },
    ],
  },

  {
    name: "전라남도",
    shortName: "전남",
    slug: "jeonnam",
    tagline: "도내 22개 시·군 광역 출장 안내",
    cities: [
      {
        name: "목포시", slug: "mokpo", dongs: [
          d("하당동", "hadang"), d("옥암동", "okam"), d("상동", "sang-mp"),
          d("용해동", "yonghae"), d("산정동", "sanjeong"), d("연동", "yeon-mp"),
          d("부흥동", "buheung"), d("원산동", "wonsan-mp"), d("죽교동", "jukgyo"),
        ],
      },
      {
        name: "여수시", slug: "yeosu", dongs: [
          d("여서동", "yeoseo"), d("학동", "hak-ys"), d("국동", "guk"),
          d("쌍봉동", "ssangbong"), d("신기동", "singi"), d("문수동", "munsu"),
          d("미평동", "mipyeong"), d("율촌면", "yulchon"), d("화양면", "hwayang-ys"),
          d("돌산읍", "dolsan"),
        ],
      },
      {
        name: "순천시", slug: "suncheon", dongs: [
          d("연향동", "yeonhyang"), d("조례동", "jorye"), d("덕연동", "deokyeon"),
          d("왕조동", "wangjo"), d("풍덕동", "pungdeok"), d("저전동", "jeojeon"),
          d("매곡동", "maegok-sc"), d("해룡면", "haeryong"), d("승주읍", "seungju"),
        ],
      },
      {
        name: "나주시", slug: "naju", dongs: [
          d("성북동", "seongbuk-nj"), d("영강동", "yeonggang"), d("금남동", "geumnam-nj"),
          d("이창동", "ichang"), d("빛가람동", "bitgaram"), d("남평읍", "nampyeong"),
          d("산포면", "sanpo"), d("다도면", "dado"),
        ],
      },
      {
        name: "광양시", slug: "gwangyang", dongs: [
          d("광양읍", "gwangyang"), d("중마동", "jungma"), d("광영동", "gwangyeong"),
          d("태인동", "tae-in"), d("골약동", "goryak"), d("진월면", "jinwol"),
          d("진상면", "jinsang"), d("옥룡면", "ongnyong-gy"),
        ],
      },
      {
        name: "담양군", slug: "damyang", dongs: [
          d("담양읍", "damyang"), d("봉산면", "bongsan-dy"), d("고서면", "goseo"),
          d("창평면", "changpyeong"), d("대전면", "daejeon-dy"),
        ],
      },
      {
        name: "곡성군", slug: "gokseong", dongs: [
          d("곡성읍", "gokseong"), d("오곡면", "ogok"), d("삼기면", "samgi"),
          d("석곡면", "seokgok-gs"), d("입면", "ip"),
        ],
      },
      {
        name: "구례군", slug: "gurye", dongs: [
          d("구례읍", "gurye"), d("문척면", "muncheok"), d("간전면", "ganjeon"),
          d("토지면", "toji"), d("산동면", "sandong-gr"),
        ],
      },
      {
        name: "고흥군", slug: "goheung", dongs: [
          d("고흥읍", "goheung"), d("점암면", "jeomam"), d("도양읍", "doyang"),
          d("풍양면", "pungyang-gh"), d("녹동", "nokdong"),
        ],
      },
      {
        name: "보성군", slug: "boseong", dongs: [
          d("보성읍", "boseong"), d("벌교읍", "beolgyo"), d("노동면", "nodong-bs"),
          d("미력면", "miryeok"), d("회천면", "hoecheon-bs"),
        ],
      },
      {
        name: "화순군", slug: "hwasun", dongs: [
          d("화순읍", "hwasun"), d("능주면", "neungju"), d("이양면", "iyang"),
          d("도곡면", "dogok-hs"), d("동복면", "dongbok"),
        ],
      },
      {
        name: "장흥군", slug: "jangheung", dongs: [
          d("장흥읍", "jangheung"), d("관산읍", "gwansan"), d("용산면", "yongsan-jh"),
          d("안양면", "anyang-jh"), d("장동면", "jangdong-jh"),
        ],
      },
      {
        name: "강진군", slug: "gangjin", dongs: [
          d("강진읍", "gangjin"), d("군동면", "gundong-gj"), d("칠량면", "chillyang"),
          d("대구면", "daegu-gj"), d("도암면", "doam"),
        ],
      },
      {
        name: "해남군", slug: "haenam", dongs: [
          d("해남읍", "haenam"), d("삼산면", "samsan-haenam"), d("화산면", "hwasan-hn"),
          d("현산면", "hyeonsan"), d("송지면", "songji"),
        ],
      },
      {
        name: "영암군", slug: "yeongam", dongs: [
          d("영암읍", "yeongam"), d("삼호읍", "samho"), d("덕진면", "deokjin-ya"),
          d("학산면", "haksan"), d("미암면", "miam"),
        ],
      },
      {
        name: "무안군", slug: "muan", dongs: [
          d("무안읍", "muan"), d("일로읍", "illo"), d("삼향읍", "samhyang"),
          d("몽탄면", "mongtan"), d("청계면", "cheonggye"),
        ],
      },
      {
        name: "함평군", slug: "hampyeong", dongs: [
          d("함평읍", "hampyeong"), d("학교면", "hakgyo"), d("월야면", "wolya"),
          d("나산면", "nasan"), d("해보면", "haebo"),
        ],
      },
      {
        name: "영광군", slug: "yeonggwang", dongs: [
          d("영광읍", "yeonggwang"), d("백수읍", "baeksu"), d("홍농읍", "hongnong"),
          d("법성면", "beopseong"), d("묘량면", "myoryang"),
        ],
      },
      {
        name: "장성군", slug: "jangseong-jn", dongs: [
          d("장성읍", "jangseong"), d("진원면", "jinwon"), d("남면", "nam-js"),
          d("동화면", "donghwa"), d("삼서면", "samseo-js"),
        ],
      },
      {
        name: "완도군", slug: "wando", dongs: [
          d("완도읍", "wando"), d("금일읍", "geumil"), d("노화읍", "nohwa"),
          d("청산면", "cheongsan-wd"), d("신지면", "sinji"),
        ],
      },
      {
        name: "진도군", slug: "jindo", dongs: [
          d("진도읍", "jindo"), d("군내면", "gunnae-jd"), d("고군면", "gogun"),
          d("의신면", "uisin"), d("임회면", "imhoe"),
        ],
      },
      {
        name: "신안군", slug: "sinan", dongs: [
          d("지도읍", "jido"), d("증도면", "jeungdo"), d("임자면", "imja"),
          d("자은면", "jaeun"), d("비금면", "bigeum"), d("도초면", "docho"),
          d("흑산면", "heuksan"),
        ],
      },
    ],
  },

  {
    name: "경상북도",
    shortName: "경북",
    slug: "gyeongbuk",
    tagline: "도내 22개 시·군 광역 출장 안내",
    cities: [
      {
        name: "포항시", slug: "pohang", dongs: [
          d("이동", "i-pohang"), d("대이동", "daei"), d("두호동", "duho"),
          d("장량동", "jangnyang"), d("효곡동", "hyogok"), d("환여동", "hwanyeo"),
          d("청림동", "cheongnim-pohang"), d("죽도동", "jukdo"), d("오천읍", "ocheon"),
          d("연일읍", "yeonil"), d("흥해읍", "heunghae"),
        ],
      },
      {
        name: "경주시", slug: "gyeongju", dongs: [
          d("황성동", "hwangseong"), d("용강동", "yonggang-gj"), d("동천동", "dongcheon-gyeongju"),
          d("성건동", "seonggeon"), d("보문동", "bomun"), d("황남동", "hwangnam"),
          d("선도동", "seondo"), d("월성동", "wolseong-gj"), d("외동읍", "oedong"),
          d("안강읍", "angang"), d("감포읍", "gampo"),
        ],
      },
      {
        name: "김천시", slug: "gimcheon", dongs: [
          d("자산동", "jasan"), d("평화남산동", "pyeonghwanamsan"), d("양금동", "yanggeum"),
          d("대신동", "daesin-gc"), d("부항면", "buhang"), d("대항면", "daehang"),
          d("아포읍", "apo"), d("개령면", "gaeryeong"),
        ],
      },
      {
        name: "안동시", slug: "andong", dongs: [
          d("명륜동", "myeongnyun-ad"), d("옥동", "ok-ad"), d("송하동", "songha"),
          d("강남동", "gangnam-ad"), d("풍산읍", "pungsan"), d("일직면", "iljik-ad"),
          d("남후면", "namhu"), d("서후면", "seohu"),
        ],
      },
      {
        name: "구미시", slug: "gumi", dongs: [
          d("송정동", "songjeong-gm"), d("형곡동", "hyeonggok"), d("인동동", "indong"),
          d("옥계동", "okgye"), d("진미동", "jinmi"), d("양포동", "yangpo"),
          d("산동읍", "sandong-gm"), d("선산읍", "seonsan-gm"), d("고아읍", "goa"),
          d("해평면", "haepyeong"),
        ],
      },
      {
        name: "영주시", slug: "yeongju", dongs: [
          d("영주동", "yeongju"), d("휴천동", "hyucheon"), d("가흥동", "gaheung"),
          d("풍기읍", "punggi"), d("부석면", "buseok"), d("이산면", "isan"),
          d("문수면", "munsu-yj"),
        ],
      },
      {
        name: "영천시", slug: "yeongcheon", dongs: [
          d("동부동", "dongbu-yc"), d("서부동", "seobu-yc"), d("완산동", "wansan"),
          d("금호읍", "geumho-yc"), d("화북면", "hwabuk-yc"), d("청통면", "cheongtong"),
          d("자양면", "jayang-yc"),
        ],
      },
      {
        name: "상주시", slug: "sangju", dongs: [
          d("동성동", "dongseong"), d("서성동", "seoseong"), d("신흥동", "sinheung-sj"),
          d("함창읍", "hamchang"), d("청리면", "cheongni"), d("공검면", "gonggeom"),
          d("외남면", "oenam"),
        ],
      },
      {
        name: "문경시", slug: "mungyeong", dongs: [
          d("점촌동", "jeomchon"), d("문경읍", "mungyeong"), d("가은읍", "gaeun"),
          d("호계면", "hogye-mg"), d("산북면", "sanbuk"), d("산양면", "sanyang"),
          d("동로면", "dongno"),
        ],
      },
      {
        name: "경산시", slug: "gyeongsan", dongs: [
          d("중방동", "jungbang"), d("서부동", "seobu-gs"), d("남천면", "namcheon-gs"),
          d("진량읍", "jinryang"), d("자인면", "jain"), d("하양읍", "hayang"),
          d("와촌면", "wachon"), d("압량읍", "amnyang"),
        ],
      },
      {
        name: "군위군", slug: "gunwi", dongs: [
          d("군위읍", "gunwi"), d("소보면", "sobo"), d("효령면", "hyoryeong"),
          d("부계면", "bugye"), d("우보면", "ubo"),
        ],
      },
      {
        name: "의성군", slug: "uiseong", dongs: [
          d("의성읍", "uiseong"), d("단촌면", "danchon"), d("점곡면", "jeomgok"),
          d("옥산면", "oksan"), d("사곡면", "sagok"),
        ],
      },
      {
        name: "청송군", slug: "cheongsong", dongs: [
          d("청송읍", "cheongsong"), d("주왕산면", "juwangsan"), d("부남면", "bunam-cs"),
          d("현동면", "hyeondong"), d("현서면", "hyeonseo"),
        ],
      },
      {
        name: "영양군", slug: "yeongyang", dongs: [
          d("영양읍", "yeongyang"), d("일월면", "irwol"), d("입암면", "ibam-yy"),
          d("청기면", "cheonggi"), d("석보면", "seokbo"),
        ],
      },
      {
        name: "영덕군", slug: "yeongdeok", dongs: [
          d("영덕읍", "yeongdeok"), d("강구면", "gangu"), d("남정면", "namjeong-yd"),
          d("달산면", "dalsan"), d("축산면", "chuksan"),
        ],
      },
      {
        name: "청도군", slug: "cheongdo", dongs: [
          d("화양읍", "hwayang-cd"), d("청도읍", "cheongdo"), d("각남면", "gangnam-cd"),
          d("풍각면", "pungak"), d("이서면", "iseo-cd"),
        ],
      },
      {
        name: "고령군", slug: "goryeong", dongs: [
          d("대가야읍", "daegaya"), d("덕곡면", "deokgok"), d("운수면", "unsu"),
          d("성산면", "seongsan-gr"), d("다산면", "dasan-gr"),
        ],
      },
      {
        name: "성주군", slug: "seongju", dongs: [
          d("성주읍", "seongju"), d("선남면", "seonnam"), d("용암면", "yongam-sj"),
          d("수륜면", "suryun"), d("가천면", "gacheon-sj"),
        ],
      },
      {
        name: "칠곡군", slug: "chilgok", dongs: [
          d("왜관읍", "waegwan"), d("약목면", "yangmok"), d("북삼읍", "buksam"),
          d("석적읍", "seokjeok"), d("가산면", "gasan-cg"),
        ],
      },
      {
        name: "예천군", slug: "yecheon", dongs: [
          d("예천읍", "yecheon"), d("용문면", "yongmun-yc"), d("감천면", "gamcheon-yc"),
          d("호명읍", "homyeong"), d("보문면", "bomun-yc"),
        ],
      },
      {
        name: "봉화군", slug: "bonghwa", dongs: [
          d("봉화읍", "bonghwa"), d("물야면", "mulya"), d("봉성면", "bongseong-bh"),
          d("법전면", "beopjeon"), d("춘양면", "chunyang"),
        ],
      },
      {
        name: "울진군", slug: "uljin", dongs: [
          d("울진읍", "uljin"), d("평해읍", "pyeonghae"), d("후포면", "hupo"),
          d("기성면", "giseong-uj"), d("매화면", "maehwa"),
        ],
      },
    ],
  },

  {
    name: "경상남도",
    shortName: "경남",
    slug: "gyeongnam",
    tagline: "도내 18개 시·군 광역 출장 안내",
    cities: [
      {
        name: "창원시", slug: "changwon", dongs: [
          d("상남동", "sangnam"), d("중앙동", "jungang-cw"), d("용호동", "yongho"),
          d("반송동", "bansong-cw"), d("팔용동", "paryong"), d("의창동", "uichang"),
          d("성산동", "seongsan-cw"), d("가음정동", "gaeumjeong"), d("내서읍", "naeseo"),
          d("동읍", "dong-cw"), d("진해구", "jinhae"),
        ],
      },
      {
        name: "진주시", slug: "jinju", dongs: [
          d("상대동", "sangdae"), d("칠암동", "chilam"), d("평거동", "pyeonggeo"),
          d("하대동", "hadae"), d("신안동", "sinan"), d("충무공동", "chungmugong"),
          d("초전동", "chojeon"), d("이반성면", "ibanseong"), d("진성면", "jinseong"),
        ],
      },
      {
        name: "통영시", slug: "tongyeong", dongs: [
          d("무전동", "mujeon"), d("정량동", "jeongnyang"), d("미수동", "misu"),
          d("봉평동", "bongpyeong"), d("광도면", "gwangdo"), d("도산면", "dosan-ty"),
          d("욕지면", "yokji"), d("한산면", "hansan-ty"),
        ],
      },
      {
        name: "사천시", slug: "sacheon", dongs: [
          d("동서동", "dongseo"), d("동서금동", "dongseogeum"), d("벌용동", "beoryong"),
          d("향촌동", "hyangchon"), d("사천읍", "sacheon"), d("정동면", "jeongdong"),
          d("축동면", "chukdong"), d("곤양면", "gonyang"),
        ],
      },
      {
        name: "김해시", slug: "gimhae", dongs: [
          d("내외동", "naeoe"), d("삼계동", "samgye"), d("장유동", "jangyu"),
          d("진영읍", "jinyeong"), d("외동", "oe"), d("부원동", "buwon"),
          d("회현동", "hoehyeon-gh"), d("동상동", "dongsang"), d("진례면", "jinrye"),
          d("주촌면", "juchon"),
        ],
      },
      {
        name: "밀양시", slug: "miryang", dongs: [
          d("내일동", "naeil"), d("내이동", "naei"), d("삼문동", "sammun"),
          d("가곡동", "gagok"), d("삼랑진읍", "samnangjin"), d("하남읍", "hanam-my"),
          d("부북면", "bubuk"), d("초동면", "chodong"),
        ],
      },
      {
        name: "거제시", slug: "geoje", dongs: [
          d("고현동", "gohyeon"), d("옥포동", "okpo"), d("장승포동", "jangseungpo"),
          d("사등면", "sadeung"), d("일운면", "irun"), d("연초면", "yeoncho"),
          d("거제면", "geoje"), d("동부면", "dongbu-gj"),
        ],
      },
      {
        name: "양산시", slug: "yangsan", dongs: [
          d("물금읍", "mulgeum"), d("동면", "dongmyeon"), d("양주동", "yangju-ys"),
          d("서창동", "seochang-ys"), d("평산동", "pyeongsan"), d("덕계동", "deokgye"),
          d("중앙동", "jungang-ys"), d("강서동", "gangseo-ys"),
        ],
      },
      {
        name: "의령군", slug: "uiryeong", dongs: [
          d("의령읍", "uiryeong"), d("가례면", "garye"), d("칠곡면", "chilgok-ur"),
          d("대의면", "daeui"), d("화정면", "hwajeong-ur"),
        ],
      },
      {
        name: "함안군", slug: "haman", dongs: [
          d("가야읍", "gaya-ha"), d("칠원읍", "chirwon"), d("함안면", "haman"),
          d("산인면", "sanin"), d("칠북면", "chilbuk"),
        ],
      },
      {
        name: "창녕군", slug: "changnyeong", dongs: [
          d("창녕읍", "changnyeong"), d("남지읍", "namji"), d("계성면", "gyeseong"),
          d("성산면", "seongsan-cny"), d("이방면", "ibang"),
        ],
      },
      {
        name: "고성군", slug: "goseong", dongs: [
          d("고성읍", "goseong"), d("개천면", "gaecheon"), d("거류면", "georyu"),
          d("하일면", "hail"), d("회화면", "hoehwa"),
        ],
      },
      {
        name: "남해군", slug: "namhae", dongs: [
          d("남해읍", "namhae"), d("이동면", "idong-nh"), d("상주면", "sangju-nh"),
          d("미조면", "mijo"), d("창선면", "changseon"),
        ],
      },
      {
        name: "하동군", slug: "hadong", dongs: [
          d("하동읍", "hadong"), d("화개면", "hwagae"), d("악양면", "agyang"),
          d("적량면", "jeokryang"), d("횡천면", "hoengcheon"),
        ],
      },
      {
        name: "산청군", slug: "sancheong", dongs: [
          d("산청읍", "sancheong"), d("차황면", "chahwang"), d("오부면", "obu"),
          d("생초면", "saengcho"), d("금서면", "geumseo"),
        ],
      },
      {
        name: "함양군", slug: "hamyang", dongs: [
          d("함양읍", "hamyang"), d("마천면", "macheon"), d("휴천면", "hyucheon-hy"),
          d("유림면", "yurim"), d("수동면", "sudong-hy"),
        ],
      },
      {
        name: "거창군", slug: "geochang", dongs: [
          d("거창읍", "geochang"), d("주상면", "jusang"), d("위천면", "wicheon"),
          d("마리면", "mari"), d("남상면", "namsang"),
        ],
      },
      {
        name: "합천군", slug: "hapcheon", dongs: [
          d("합천읍", "hapcheon"), d("삼가면", "samga"), d("쌍책면", "ssangchaek"),
          d("가야면", "gaya-hc"), d("야로면", "yaro"),
        ],
      },
    ],
  },

  {
    name: "제주특별자치도",
    shortName: "제주",
    slug: "jeju",
    tagline: "제주시·서귀포시 전 권역 출장",
    cities: [
      {
        name: "제주시", slug: "jeju", dongs: [
          d("일도1동", "ildo1"), d("일도2동", "ildo2"), d("이도1동", "ido1"),
          d("이도2동", "ido2"), d("삼도1동", "samdo1"), d("삼도2동", "samdo2"),
          d("용담1동", "yongdam1"), d("용담2동", "yongdam2"), d("건입동", "geonip"),
          d("화북동", "hwabuk-jj"), d("삼양동", "samyang-jj"), d("봉개동", "bongae"),
          d("아라동", "ara"), d("오라동", "ora"), d("연동", "yeon-jeju"),
          d("노형동", "nohyeong"), d("외도동", "oedo"), d("이호동", "iho"),
          d("도두동", "dodu"), d("애월읍", "aewol"), d("한림읍", "hallim"),
          d("한경면", "hangyeong"), d("조천읍", "jocheon"), d("구좌읍", "gujwa"),
          d("우도면", "udo"), d("추자면", "chuja"),
        ],
      },
      {
        name: "서귀포시", slug: "seogwipo", dongs: [
          d("송산동", "songsan-sg"), d("정방동", "jeongbang"), d("중앙동", "jungang-sg"),
          d("천지동", "cheonji"), d("효돈동", "hyodon"), d("영천동", "yeongcheon-sg"),
          d("동홍동", "donghong"), d("서홍동", "seohong"), d("대륜동", "daeryun"),
          d("대천동", "daecheon-sg"), d("중문동", "jungmun"), d("예래동", "yerae"),
          d("성산읍", "seongsan-sg"), d("표선면", "pyoseon"), d("남원읍", "namwon-sg"),
          d("안덕면", "andeok"), d("대정읍", "daejeong"),
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
