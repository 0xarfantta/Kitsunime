export interface Character {
  name: string;
  role: string;
  va: string;
  img: string;
}

export interface Anime {
  id: number;
  title: string;
  japaneseTitle?: string;
  romaji?: string;
  score: number;
  year: number;
  season: string;
  status: string;
  episodes: number;
  duration: string;
  studio: string;
  source: string;
  genres: string[];
  poster: string;
  banner: string;
  trailerId: string;
  synopsis: string;
  airingDay: string;
  characters: Character[];
}

export interface CharacterSpotlightItem {
  name: string;
  anime: string;
  quote: string;
  japaneseQuote?: string;
  role: string;
  power: string;
  element: string;
  tag: string;
  img: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  ep: string;
  studio: string;
  type: string;
}

export const ANIME_DATABASE: Anime[] = [
  {
    id: 1,
    title: "Jujutsu Kaisen: Insiden Shibuya",
    score: 9.15,
    year: 2023,
    season: "Fall 2023",
    status: "Completed",
    episodes: 23,
    duration: "24 min/ep",
    studio: "MAPPA",
    source: "Manga",
    genres: ["Action", "Fantasy", "Shounen", "Supernatural"],
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-hSNRJM03pvv1.jpg",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/145064-esDtAY2He7sk.jpg",
    trailerId: "pkZXBNda_vU",
    synopsis: "Tanggal 31 Oktober di Shibuya, tabir diturunkan dan ribuan warga sipil terjebak. Segel terhadap penyihir terkuat modern, Satoru Gojo, menjadi tujuan utama para roh terkutuk. Pertarungan habis-habisan yang menentukan masa depan dunia jujutsu dimulai.",
    airingDay: "Kamis",
    characters: [
      { name: "Satoru Gojo", role: "Penyihir Terkuat", va: "Yuichi Nakamura", img: "https://s4.anilist.co/file/anilistcdn/character/large/b127691-9zqh1xpIubn7.png" },
      { name: "Yuji Itadori", role: "Wadah Sukuna", va: "Junya Enoki", img: "https://s4.anilist.co/file/anilistcdn/character/large/b127212-FVm2tD0erQ5B.png" },
      { name: "Ryomen Sukuna", role: "Raja Kutukan", va: "Junichi Suwabe", img: "https://s4.anilist.co/file/anilistcdn/character/large/b133701-rCQuDpHr3UZL.png" }
    ]
  },
  {
    id: 2,
    title: "Frieren: Setelah Akhir Perjalanan",
    score: 9.38,
    year: 2023,
    season: "Fall 2023",
    status: "Completed",
    episodes: 28,
    duration: "24 min/ep",
    studio: "Madhouse",
    source: "Manga",
    genres: ["Adventure", "Fantasy", "Drama", "Shounen"],
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154587-ivXNJ23SM1xB.jpg",
    trailerId: "qgQunxD0qLk",
    synopsis: "Setelah kelompok pahlawan berhasil mengalahkan Raja Iblis, sang penyihir elf Frieren yang hidup ribuan tahun memulai perjalanan baru untuk memahami arti hidup fana manusia dan mengenang kenangan berharga bersama rekan-rekannya.",
    airingDay: "Jumat",
    characters: [
      { name: "Frieren", role: "Elf Mage", va: "Atsumi Tanezaki", img: "https://s4.anilist.co/file/anilistcdn/character/large/b176754-PCnpqIOkjhFk.png" },
      { name: "Fern", role: "Apprentice Mage", va: "Kana Ichinose", img: "https://s4.anilist.co/file/anilistcdn/character/large/b183965-uGFohBjlFoTp.png" },
      { name: "Stark", role: "Warrior", va: "Chiaki Kobayashi", img: "https://s4.anilist.co/file/anilistcdn/character/large/b184313-CQl6GSt4RSny.jpg" }
    ]
  },
  {
    id: 3,
    title: "Solo Leveling: Kebangkitan",
    score: 8.82,
    year: 2024,
    season: "Winter 2024",
    status: "Ongoing",
    episodes: 12,
    duration: "24 min/ep",
    studio: "A-1 Pictures",
    source: "Web Novel / Manhwa",
    genres: ["Action", "Fantasy", "Adventure", "Supernatural"],
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-it355ZgzquUd.png",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151807-37yfQA3ym8PA.jpg",
    trailerId: "a09N_x810oM",
    synopsis: "Sung Jin-woo, pemburu terlemah peringkat E tanpa bakat, terjebak dalam dungeon ganda misterius. Setelah di ambang maut, ia terbangun di rumah sakit dengan antarmuka 'System' aneh yang hanya bisa dilihatnya, memberinya kemampuan unik untuk naik level tanpa batas.",
    airingDay: "Sabtu",
    characters: [
      { name: "Sung Jin-woo", role: "Shadow Monarch", va: "Taito Ban", img: "https://s4.anilist.co/file/anilistcdn/character/large/b129928-BCEjVaP0AQSw.png" },
      { name: "Cha Hae-in", role: "S-Rank Hunter", va: "Reina Ueda", img: "https://s4.anilist.co/file/anilistcdn/character/large/b138789-AhE8m0LWjE7E.png" }
    ]
  },
  {
    id: 4,
    title: "Demon Slayer: Pelatihan Hashira",
    score: 8.94,
    year: 2024,
    season: "Spring 2024",
    status: "Completed",
    episodes: 8,
    duration: "24 min/ep",
    studio: "ufotable",
    source: "Manga",
    genres: ["Action", "Fantasy", "Historical", "Shounen"],
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166240-PBV7zukIHW7V.png",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166240-YdxoEhrfwNk0.jpg",
    trailerId: "0b_wW2VpZmg",
    synopsis: "Tanjiro dan para pembasmi iblis lainnya menjalani pelatihan intensif bersama para Hashira (Pilar) untuk mempersiapkan pertempuran pamungkas melawan Muzan Kibutsuji di Kastil Tak Terbatas.",
    airingDay: "Minggu",
    characters: [
      { name: "Tanjiro Kamado", role: "Demon Slayer", va: "Natsuki Hanae", img: "https://s4.anilist.co/file/anilistcdn/character/large/b126071-BTNEc1nRIv68.png" },
      { name: "Nezuko Kamado", role: "Demon Sister", va: "Akari Kito", img: "https://s4.anilist.co/file/anilistcdn/character/large/b127518-NRlq1CQ1v1ro.png" }
    ]
  },
  {
    id: 5,
    title: "Chainsaw Man",
    score: 8.71,
    year: 2022,
    season: "Fall 2022",
    status: "Completed",
    episodes: 12,
    duration: "24 min/ep",
    studio: "MAPPA",
    source: "Manga",
    genres: ["Action", "Supernatural", "Shounen", "Comedy"],
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-DdP4vAdssLoz.png",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/127230-o8IRwCGVr9KW.jpg",
    trailerId: "q15CRdE5Bv0",
    synopsis: "Denji adalah pemuda miskin yang hidup bersama Pochita, iblis gergaji mesin. Demi melunasi utang ayahnya kepada yakuza, ia bekerja sebagai pemburu iblis. Setelah dikhianati dan dibunuh, ia bangkit kembali sebagai 'Chainsaw Man' manusia berkepala gergaji.",
    airingDay: "Selasa",
    characters: [
      { name: "Denji", role: "Chainsaw Man", va: "Kikunosuke Toya", img: "https://s4.anilist.co/file/anilistcdn/character/large/b130102-FO1VHNnEnLlB.png" },
      { name: "Makima", role: "Public Safety Chief", va: "Tomori Kusunoki", img: "https://s4.anilist.co/file/anilistcdn/character/large/b137080-UHcynYNjb5ZU.png" }
    ]
  },
  {
    id: 6,
    title: "Oshi no Ko Season 2",
    score: 8.92,
    year: 2024,
    season: "Summer 2024",
    status: "Completed",
    episodes: 13,
    duration: "24 min/ep",
    studio: "Doga Kobo",
    source: "Manga",
    genres: ["Drama", "Supernatural", "Romance"],
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166531-dAL5MsqDHUkj.jpg",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166531-vUu7iDwUkC67.jpg",
    trailerId: "C83X97m6U4k",
    synopsis: "Aqua dan Ruby Hoshino terus menelusuri rahasia gelap industri hiburan demi membalas dendam atas kematian ibu mereka, idol legendaris Ai Hoshino. Kali ini panggung teater 2.5D Tokyo Blade menjadi arena konflik emosional yang memuncak.",
    airingDay: "Rabu",
    characters: [
      { name: "Aqua Hoshino", role: "Actor & Strategist", va: "Takeo Otsuka", img: "https://s4.anilist.co/file/anilistcdn/character/large/b183885-HOmw8CqcJdv3.jpg" },
      { name: "Ruby Hoshino", role: "Idol B-Komachi", va: "Yurie Igoma", img: "https://s4.anilist.co/file/anilistcdn/character/large/b183884-iyo3BmTuhJ0l.jpg" },
      { name: "Akane Kurokawa", role: "Genius Actress", va: "Manaka Iwami", img: "https://s4.anilist.co/file/anilistcdn/character/large/b203384-YuSppFDMw2wn.png" }
    ]
  },
  {
    id: 7,
    title: "Spy x Family Code: White",
    score: 8.45,
    year: 2023,
    season: "Winter 2023",
    status: "Completed",
    episodes: 1,
    duration: "110 min",
    studio: "Wit Studio / CloverWorks",
    source: "Original Story",
    genres: ["Action", "Comedy", "Shounen"],
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx158928-xqE0euKlQMnY.jpg",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/158928-7j4JK7pGvZnZ.jpg",
    trailerId: "M1fH_GkGv2w",
    synopsis: "Keluarga Forger melakukan perjalanan liburan musim dingin demi membantu Anya memenangkan kompetisi memasak di Akademi Eden. Namun tanpa sengaja mereka terseret dalam konspirasi militer rahasia yang mengancam perdamaian dunia.",
    airingDay: "Sabtu",
    characters: [
      { name: "Loid Forger", role: "Mata-mata (Twilight)", va: "Takuya Eguchi", img: "https://s4.anilist.co/file/anilistcdn/character/large/b138101-7NCB0Md8zA6G.png" },
      { name: "Anya Forger", role: "Telepatis Cilik", va: "Atsumi Tanezaki", img: "https://s4.anilist.co/file/anilistcdn/character/large/b138100-4Li0tWRCa5bQ.png" },
      { name: "Yor Forger", role: "Pembunuh Bayaran", va: "Saori Hayami", img: "https://s4.anilist.co/file/anilistcdn/character/large/b138102-ZOAu9jI2d5ke.png" }
    ]
  },
  {
    id: 8,
    title: "Bocchi the Rock!",
    score: 8.87,
    year: 2022,
    season: "Fall 2022",
    status: "Completed",
    episodes: 12,
    duration: "24 min/ep",
    studio: "CloverWorks",
    source: "4-koma Manga",
    genres: ["Comedy", "Slice of Life", "Music"],
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx130003-HTDmeL4RGeJ4.png",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/130003-5F90a7BtsPQN.jpg",
    trailerId: "k5F09t7fG48",
    synopsis: "Hitori Gotoh adalah siswi pemalu dengan kecemasan sosial ekstrem yang sangat mahir bermain gitar solo di lemari kamarnya. Impiannya untuk bergabung dalam band akhirnya terwujud saat diajak bergabung dengan Kessoku Band.",
    airingDay: "Minggu",
    characters: [
      { name: "Hitori Gotoh", role: "Gitaris Utama", va: "Yoshino Aoyama", img: "https://s4.anilist.co/file/anilistcdn/character/large/b257562-Ru35NYPfsqhY.png" },
      { name: "Nijika Ijichi", role: "Pemain Drum & Pemimpin", va: "Sayumi Suzushiro", img: "https://s4.anilist.co/file/anilistcdn/character/large/b261674-a8tJYvtzqWgC.png" }
    ]
  },
  {
    id: 9,
    title: "Cyberpunk: Edgerunners",
    score: 8.61,
    year: 2022,
    season: "Fall 2022",
    status: "Completed",
    episodes: 10,
    duration: "24 min/ep",
    studio: "Studio Trigger",
    source: "Video Game",
    genres: ["Action", "Sci-Fi"],
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx120377-ayZPoxiWt4Li.jpg",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/120377-c15oLS8CA31s.jpg",
    trailerId: "JtqIas3bYhg",
    synopsis: "Di kota masa depan Night City yang terobsesi dengan teknologi dan modifikasi tubuh cybernetic, seorang remaja jalanan bernama David Martinez bertahan hidup setelah kehilangan segalanya dengan menjadi tentara bayaran di luar hukum: Edgerunner.",
    airingDay: "Senin",
    characters: [
      { name: "David Martinez", role: "Edgerunner", va: "KENN", img: "https://s4.anilist.co/file/anilistcdn/character/large/b284158-z1uGKC3IYVa1.png" },
      { name: "Lucy", role: "Netrunner", va: "Aoi Yuuki", img: "https://s4.anilist.co/file/anilistcdn/character/large/b40-MNypXsxSRb1R.png" }
    ]
  },
  {
    id: 10,
    title: "Attack on Titan: Bab Terakhir",
    score: 9.07,
    year: 2023,
    season: "Fall 2023",
    status: "Completed",
    episodes: 2,
    duration: "85 min",
    studio: "MAPPA",
    source: "Manga",
    genres: ["Action", "Drama", "Fantasy", "Shounen"],
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx162314-qIWdAAFtvY8J.jpg",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/162314-N5M4XMz6O1j4.jpg",
    trailerId: "E7Wytqe21-0",
    synopsis: "Eren Yeager melepaskan jutaan Titan Kolosal dalam fenomena Rumbling untuk melenyapkan seluruh kehidupan di luar Pulau Paradis. Sahabat-sahabat lamanya dari Pasukan Pengintai harus bersatu dengan musuh lama untuk menghentikannya.",
    airingDay: "Senin",
    characters: [
      { name: "Eren Yeager", role: "Founding Titan", va: "Yuki Kaji", img: "https://s4.anilist.co/file/anilistcdn/character/large/b40882-dsj7IP943WFF.jpg" },
      { name: "Mikasa Ackerman", role: "Prajurit Elit", va: "Yui Ishikawa", img: "https://s4.anilist.co/file/anilistcdn/character/large/b40881-F3gr1PkreDvj.png" },
      { name: "Levi Ackerman", role: "Prajurit Terkuat Manusia", va: "Hiroshi Kamiya", img: "https://s4.anilist.co/file/anilistcdn/character/large/b45627-CR68RyZmddGG.png" }
    ]
  },
  {
    id: 11,
    title: "Mushoku Tensei: Reinkarnasi Pengangguran Season 2",
    score: 8.65,
    year: 2024,
    season: "Spring 2024",
    status: "Completed",
    episodes: 24,
    duration: "24 min/ep",
    studio: "Studio Bind",
    source: "Light Novel",
    genres: ["Fantasy", "Isekai", "Adventure", "Drama"],
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146065-IjirxRK26O03.png",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/146065-33RDijfuxLLk.jpg",
    trailerId: "o5c0A2zPz4k",
    synopsis: "Rudeus Greyrat melanjutkan perjalanannya sebagai petualang bernama 'Quagmire'. Panggilan dari Akademi Sihir Ranoa mempertemukannya kembali dengan sosok dari masa lalunya yang penuh kenangan tak terlupakan.",
    airingDay: "Minggu",
    characters: [
      { name: "Rudeus Greyrat", role: "Penyihir Agung", va: "Yumi Uchiyama", img: "https://s4.anilist.co/file/anilistcdn/character/large/b88348-bIe5XnXdRpmX.png" },
      { name: "Sylphiette", role: "Fitz si Bisu", va: "Ai Kayano", img: "https://s4.anilist.co/file/anilistcdn/character/large/b88346-h8kCL93AXj4n.png" }
    ]
  },
  {
    id: 12,
    title: "Bleach: Perang Darah Seribu Tahun",
    score: 9.04,
    year: 2023,
    season: "Summer 2023",
    status: "Ongoing",
    episodes: 26,
    duration: "24 min/ep",
    studio: "Pierrot",
    source: "Manga",
    genres: ["Action", "Fantasy", "Shounen", "Supernatural"],
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116674-p3zK4PUX2Aag.jpg",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/116674-l2YlIyJzvGSV.jpg",
    trailerId: "0kL_iN5t8qM",
    synopsis: "Kedamaian Soul Society runtuh seketika saat kekaisaran Quincy, Wandenreich yang dipimpin kaisar Yhwach, mendeklarasikan perang terbuka. Ichigo Kurosaki harus menggali kekuatan tersembunyi yang sesungguhnya.",
    airingDay: "Sabtu",
    characters: [
      { name: "Ichigo Kurosaki", role: "Shinigami Pengganti", va: "Masakazu Morita", img: "https://s4.anilist.co/file/anilistcdn/character/large/b5-a7bkJgjhhigE.png" },
      { name: "Rukia Kuchiki", role: "Kapten Divisi 13", va: "Fumiko Orikasa", img: "https://s4.anilist.co/file/anilistcdn/character/large/b6-25WoBeWMZXBc.png" }
    ]
  }
];

export const CHARACTER_SPOTLIGHT: CharacterSpotlightItem[] = [
  {
    name: "Satoru Gojo",
    anime: "Jujutsu Kaisen: Insiden Shibuya",
    quote: "Jangan khawatir, aku adalah yang terkuat.",
    role: "Penyihir Tingkat Khusus",
    power: "Limitless & Hollow Purple",
    element: "Ruang & Void",
    tag: "🔥 Terkuat",
    img: "https://s4.anilist.co/file/anilistcdn/character/large/b127691-9zqh1xpIubn7.png"
  },
  {
    name: "Frieren",
    anime: "Frieren: Setelah Akhir Perjalanan",
    quote: "Menghabiskan waktu dengan manusia adalah hal paling berharga.",
    role: "Penyihir Elf Legendaris",
    power: "Zoltraak & Penguasaan Sihir Kuno",
    element: "Mana Murni",
    tag: "⭐ Elf Abadi",
    img: "https://s4.anilist.co/file/anilistcdn/character/large/b176754-PCnpqIOkjhFk.png"
  },
  {
    name: "Sung Jin-woo",
    anime: "Solo Leveling: Kebangkitan",
    quote: "Bangkitlah.",
    role: "Shadow Monarch",
    power: "Ekstraksi Bayangan & Telekinesis",
    element: "Bayangan Kegelapan",
    tag: "👑 Shadow Monarch",
    img: "https://s4.anilist.co/file/anilistcdn/character/large/b129928-BCEjVaP0AQSw.png"
  },
  {
    name: "Levi Ackerman",
    anime: "Attack on Titan: Bab Terakhir",
    quote: "Pilihlah keputusan yang tidak akan kau sesali.",
    role: "Kapten Pasukan Pengintai Khusus",
    power: "Manuver 3D & Kecepatan Pisau Mutlak",
    element: "Akrobatik Pedang",
    tag: "⚔️ Prajurit Terkuat",
    img: "https://s4.anilist.co/file/anilistcdn/character/large/b45627-CR68RyZmddGG.png"
  }
];

export const WEEKLY_SCHEDULE: Record<string, ScheduleItem[]> = {
  "Senin": [
    { time: "20:00 WIB", title: "Cyberpunk: Edgerunners (Tayang Ulang)", ep: "Ep. 04", studio: "Trigger", type: "HD" },
    { time: "22:30 WIB", title: "Attack on Titan: Bab Terakhir", ep: "Spesial 02", studio: "MAPPA", type: "FHD" }
  ],
  "Selasa": [
    { time: "21:00 WIB", title: "Chainsaw Man", ep: "Ep. 11", studio: "MAPPA", type: "HD" },
    { time: "23:00 WIB", title: "Tokyo Revengers", ep: "Ep. 08", studio: "LIDENFILMS", type: "HD" }
  ],
  "Rabu": [
    { time: "20:30 WIB", title: "Oshi no Ko Season 2", ep: "Ep. 09", studio: "Doga Kobo", type: "FHD" },
    { time: "22:00 WIB", title: "Tower of God Season 2", ep: "Ep. 06", studio: "The Answer Studio", type: "HD" }
  ],
  "Kamis": [
    { time: "21:00 WIB", title: "Jujutsu Kaisen: Insiden Shibuya", ep: "Ep. 18", studio: "MAPPA", type: "FHD" },
    { time: "23:30 WIB", title: "Dr. STONE: Dunia Baru", ep: "Ep. 10", studio: "TMS Entertainment", type: "HD" }
  ],
  "Jumat": [
    { time: "20:00 WIB", title: "Frieren: Setelah Akhir Perjalanan", ep: "Ep. 21", studio: "Madhouse", type: "FHD" },
    { time: "22:00 WIB", title: "Shangri-La Frontier", ep: "Ep. 15", studio: "C2C", type: "HD" }
  ],
  "Sabtu": [
    { time: "21:30 WIB", title: "Solo Leveling: Kebangkitan", ep: "Ep. 12", studio: "A-1 Pictures", type: "FHD" },
    { time: "23:00 WIB", title: "Bleach: Perang Darah Seribu Tahun", ep: "Ep. 24", studio: "Pierrot", type: "FHD" },
    { time: "23:45 WIB", title: "Spy x Family Code: White", ep: "Movie Clip", studio: "Wit Studio", type: "HD" }
  ],
  "Minggu": [
    { time: "20:15 WIB", title: "Demon Slayer: Pelatihan Hashira", ep: "Ep. 08", studio: "ufotable", type: "FHD" },
    { time: "21:45 WIB", title: "Mushoku Tensei: Reinkarnasi Pengangguran S2", ep: "Ep. 17", studio: "Studio Bind", type: "FHD" },
    { time: "23:00 WIB", title: "Bocchi the Rock!", ep: "Tayang Ulang 06", studio: "CloverWorks", type: "HD" }
  ]
};
