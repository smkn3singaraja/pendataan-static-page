export interface Major {
  id: string;
  cover_url: string;
  poster_url: string;
  short_name: string;
  long_name: string;
  description: string;
  youtube_video_url: string;
  major_page?: string;
}

const covers = [
  '/images/banner_rpl_1779695421143.png',
  '/images/banner_tkj_1779695462875.png',
  '/images/banner_dkv_1779695495376.png'
];

const posters = [
  '/images/poster.png',
];

const imageMap: Record<string, string> = {
  TKP: '/images/tkp.jpg',
  DPIB: '/images/dpib.jpg',
  TPM: '/images/tm.jpg',
  TPLas: '/images/tplas.jpg',
  TKR: '/images/tkr.jpg',
  TAV: '/images/te.jpg',
  TITL: '/images/te.jpg',
  TKJ: '/images/tkj.jpg',
  TSM: '/images/tsm.jpg',
  DKV: '/images/dkv.jpg'
};

function getYoutubeEmbedUrl(url: string) {
  let videoId = '';
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0];
  } else if (url.includes('watch?v=')) {
    videoId = url.split('watch?v=')[1]?.split('&')[0];
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
}

const rawData = [
  {
    "id": 1,
    "name": "TKP",
    "long_name": "Teknik Konstruksi Dan Perumahan",
    "video_url": "https://youtu.be/KxMa6Jlw2U8?si=mCcEW2y5fyZZtaL-",
    "major_page": "https://jurusan-tkp.smkn3singaraja.sch.id"
  },
  {
    "id": 2,
    "name": "DPIB",
    "long_name": "Desain Pemodelan dan Informasi Bangunan",
    "video_url": "https://www.youtube.com/watch?v=H2_PDLRDoTM",
    "major_page": "https://jurusan-dpib.smkn3singaraja.sch.id"
  },
  {
    "id": 3,
    "name": "TPM",
    "long_name": "Teknik Pemesinan",
    "video_url": "https://www.youtube.com/watch?v=Hf2Xm1qZrXQ",
    "major_page": "https://jurusan-tpm.smkn3singaraja.sch.id"
  },
  {
    "id": 4,
    "name": "TPLas",
    "long_name": "Teknik Pengelasan",
    "video_url": "https://www.youtube.com/watch?v=qM4VXsT0xZs",
    "major_page": "https://jurusan-tplas.smkn3singaraja.sch.id"
  },
  {
    "id": 5,
    "name": "TKR",
    "long_name": "Teknik Kendaraan Ringan",
    "video_url": "https://www.youtube.com/watch?v=sdMYLRlhVkY",
    "major_page": "https://jurusan-tkr.smkn3singaraja.sch.id"
  },
  {
    "id": 6,
    "name": "TAV",
    "long_name": "Teknik Audio Video",
    "video_url": "https://www.youtube.com/watch?v=DFEJdEXtfzA",
    "major_page": "https://jurusan-tav.smkn3singaraja.sch.id"
  },
  {
    "id": 7,
    "name": "TITL",
    "long_name": "Teknik Instalasi Tenaga Listrik",
    "video_url": "https://www.youtube.com/watch?v=RM_u7HmJm_o",
    "major_page": "https://jurusan-titl.smkn3singaraja.sch.id"
  },
  {
    "id": 8,
    "name": "TKJ",
    "long_name": "Teknik Komputer dan Jaringan",
    "video_url": "https://www.youtube.com/watch?v=f_idAf6ceQ4",
    "major_page": "https://jurusan-tkj.smkn3singaraja.sch.id"
  },
  {
    "id": 9,
    "name": "TSM",
    "long_name": "Teknik Sepeda Motor",
    "video_url": "https://www.youtube.com/watch?v=1OQUSNI706c",
    "major_page": "https://jurusan-tsm.smkn3singaraja.sch.id"
  },
  {
    "id": 10,
    "name": "DKV",
    "long_name": "Desain Komunikasi Visual",
    "video_url": "https://www.youtube.com/watch?v=8bEqLjj62CI",
    "major_page": "https://jurusan-dkv.smkn3singaraja.sch.id"
  }
];

export const majors: Major[] = rawData.map((m, i) => ({
  id: m.name.toLowerCase(),
  cover_url: imageMap[m.name] || covers[i % covers.length],
  poster_url: posters[i % posters.length],
  short_name: m.name,
  long_name: m.long_name,
  description: `Program keahlian ${m.long_name} (${m.name}) adalah program unggulan yang membekali siswa dengan kompetensi dan keterampilan profesional di bidangnya. Lulusan dipersiapkan untuk menghadapi tantangan industri kreatif dan teknologi masa depan.`,
  youtube_video_url: getYoutubeEmbedUrl(m.video_url),
  major_page: m.major_page
}));
