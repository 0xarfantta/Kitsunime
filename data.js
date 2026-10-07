// Comprehensive Curated Anime Data with High Quality Images & Information
const ANIME_DATABASE = [
    {
        id: 1,
        title: "Jujutsu Kaisen: Shibuya Incident",
        japaneseTitle: "呪術廻戦 渋谷事変",
        romaji: "Jujutsu Kaisen Season 2",
        score: 9.15,
        year: 2023,
        season: "Fall 2023",
        status: "Completed",
        episodes: 23,
        duration: "24 min/ep",
        studio: "MAPPA",
        source: "Manga",
        genres: ["Action", "Fantasy", "Shounen", "Supernatural"],
        poster: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop",
        banner: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1600&auto=format&fit=crop",
        trailerId: "pkZXBNda_vU", // YouTube ID or trailer link
        synopsis: "Tanggal 31 Oktober di Shibuya, tabir diturunkan dan ribuan warga sipil terjebak. Segel terhadap penyihir terkuat modern, Satoru Gojo, menjadi tujuan utama para roh terkutuk. Pertarungan habis-habisan yang menentukan masa depan dunia jujutsu dimulai.",
        airingDay: "Kamis",
        characters: [
            { name: "Satoru Gojo", role: "Penyihir Terkuat", va: "Yuichi Nakamura", img: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=300&auto=format&fit=crop" },
            { name: "Yuji Itadori", role: "Wadah Sukuna", va: "Junya Enoki", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=300&auto=format&fit=crop" },
            { name: "Ryomen Sukuna", role: "Raja Kutukan", va: "Junichi Suwabe", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop" }
        ]
    },
    {
        id: 2,
        title: "Sousou no Frieren",
        japaneseTitle: "葬送のフリーレン",
        romaji: "Frieren: Beyond Journey's End",
        score: 9.38,
        year: 2023,
        season: "Fall 2023",
        status: "Completed",
        episodes: 28,
        duration: "24 min/ep",
        studio: "Madhouse",
        source: "Manga",
        genres: ["Adventure", "Fantasy", "Drama", "Shounen"],
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
        banner: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop",
        trailerId: "qgQunxD0qLk",
        synopsis: "Setelah kelompok pahlawan mengalahkan Raja Iblis, sang penyihir elf Frieren yang berumur ribuan tahun memulai perjalanan baru untuk memahami arti hidup fana manusia dan mengenang kenangan bersama rekan-rekannya.",
        airingDay: "Jumat",
        characters: [
            { name: "Frieren", role: "Elf Mage", va: "Atsumi Tanezaki", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop" },
            { name: "Fern", role: "Apprentice Mage", va: "Kana Ichinose", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop" },
            { name: "Stark", role: "Warrior", va: "Chiaki Kobayashi", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" }
        ]
    },
    {
        id: 3,
        title: "Solo Leveling: Arise",
        japaneseTitle: "俺だけレベルアップな件",
        romaji: "Ore dake Level Up na Ken",
        score: 8.82,
        year: 2024,
        season: "Winter 2024",
        status: "Ongoing",
        episodes: 12,
        duration: "24 min/ep",
        studio: "A-1 Pictures",
        source: "Web Novel / Manhwa",
        genres: ["Action", "Fantasy", "Adventure", "Supernatural"],
        poster: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&auto=format&fit=crop",
        banner: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
        trailerId: "a09N_x810oM",
        synopsis: "Sung Jin-woo, hunter terlemah peringkat E tanpa bakat, terjebak dalam dungeon ganda misterius. Setelah hampir mati, ia terbangun di rumah sakit dengan antarmuka 'System' aneh yang hanya bisa dilihatnya, memberinya kemampuan unik untuk naik level tanpa batas.",
        airingDay: "Sabtu",
        characters: [
            { name: "Sung Jin-woo", role: "Shadow Monarch", va: "Taito Ban", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop" },
            { name: "Cha Hae-in", role: "S-Rank Hunter", va: "Reina Ueda", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop" }
        ]
    },
    {
        id: 4,
        title: "Kimetsu no Yaiba: Hashira Training",
        japaneseTitle: "鬼滅の刃 柱稽古編",
        romaji: "Demon Slayer: Kimetsu no Yaiba",
        score: 8.94,
        year: 2024,
        season: "Spring 2024",
        status: "Completed",
        episodes: 8,
        duration: "24 min/ep",
        studio: "ufotable",
        source: "Manga",
        genres: ["Action", "Fantasy", "Historical", "Shounen"],
        poster: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=600&auto=format&fit=crop",
        banner: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1600&auto=format&fit=crop",
        trailerId: "0b_wW2VpZmg",
        synopsis: "Tanjiro dan para pembasmi iblis lainnya menjalani pelatihan intensif bersama para Hashira (Pilar) untuk mempersiapkan pertempuran pamungkas melawan Muzan Kibutsuji di Kastil Tak Terbatas.",
        airingDay: "Minggu",
        characters: [
            { name: "Tanjiro Kamado", role: "Demon Slayer", va: "Natsuki Hanae", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop" },
            { name: "Nezuko Kamado", role: "Demon Sister", va: "Akari Kito", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop" }
        ]
    },
    {
        id: 5,
        title: "Chainsaw Man",
        japaneseTitle: "チェンソーマン",
        romaji: "Chainsaw Man",
        score: 8.71,
        year: 2022,
        season: "Fall 2022",
        status: "Completed",
        episodes: 12,
        duration: "24 min/ep",
        studio: "MAPPA",
        source: "Manga",
        genres: ["Action", "Supernatural", "Shounen", "Comedy"],
        poster: "https://images.unsplash.com/photo-1569701813229-33284b643e3c?q=80&w=600&auto=format&fit=crop",
        banner: "https://images.unsplash.com/photo-1569701813229-33284b643e3c?q=80&w=1600&auto=format&fit=crop",
        trailerId: "q15CRdE5Bv0",
        synopsis: "Denji adalah pemuda miskin yang hidup bersama Pochita, iblis gergaji mesin. Demi melunasi utang ayahnya kepada yakuza, ia bekerja sebagai pemburu iblis. Setelah dikhianati dan dibunuh, ia terlahir kembali sebagai 'Chainsaw Man' setengah iblis.",
        airingDay: "Selasa",
        characters: [
            { name: "Denji", role: "Chainsaw Man", va: "Kikunosuke Toya", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop" },
            { name: "Makima", role: "Public Safety Chief", va: "Tomori Kusunoki", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop" }
        ]
    },
    {
        id: 6,
        title: "Oshi no Ko Season 2",
        japaneseTitle: "【推しの子】第2期",
        romaji: "Oshi no Ko Season 2",
        score: 8.92,
        year: 2024,
        season: "Summer 2024",
        status: "Completed",
        episodes: 13,
        duration: "24 min/ep",
        studio: "Doga Kobo",
        source: "Manga",
        genres: ["Drama", "Supernatural", "Romance"],
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
        banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop",
        trailerId: "C83X97m6U4k",
        synopsis: "Aqua dan Ruby Hoshino terus menelusuri rahasia gelap industri hiburan Jepang demi membalas dendam atas kematian ibu mereka, sang idol legendaris Ai Hoshino. Kali ini panggung teater 2.5D Tokyo Blade menjadi arena konflik emosional yang intens.",
        airingDay: "Rabu",
        characters: [
            { name: "Aqua Hoshino", role: "Actor & Strategist", va: "Takeo Otsuka", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop" },
            { name: "Ruby Hoshino", role: "Idol B-Komachi", va: "Yurie Igoma", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop" },
            { name: "Akane Kurokawa", role: "Genius Actress", va: "Manaka Iwami", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop" }
        ]
    },
    {
        id: 7,
        title: "Spy x Family Code: White",
        japaneseTitle: "SPY×FAMILY CODE: White",
        romaji: "Spy x Family Movie",
        score: 8.45,
        year: 2023,
        season: "Winter 2023",
        status: "Completed",
        episodes: 1,
        duration: "110 min",
        studio: "Wit Studio / CloverWorks",
        source: "Original Story",
        genres: ["Action", "Comedy", "Shounen"],
        poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600&auto=format&fit=crop",
        banner: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1600&auto=format&fit=crop",
        trailerId: "M1fH_GkGv2w",
        synopsis: "Keluarga Forger melakukan perjalanan liburan musim dingin ke wilayah Frigis demi membantu Anya memenangkan kompetisi memasak di Akademi Eden. Namun mereka secara tidak sengaja terlibat dalam konspirasi militer berbahaya yang mengancam perdamaian dunia.",
        airingDay: "Sabtu",
        characters: [
            { name: "Loid Forger", role: "Spy (Twilight)", va: "Takuya Eguchi", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" },
            { name: "Anya Forger", role: "Telepath", va: "Atsumi Tanezaki", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop" },
            { name: "Yor Forger", role: "Assassin (Thorn Princess)", va: "Saori Hayami", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop" }
        ]
    },
    {
        id: 8,
        title: "Bocchi the Rock!",
        japaneseTitle: "ぼっち・ざ・ろっく！",
        romaji: "Bocchi the Rock!",
        score: 8.87,
        year: 2022,
        season: "Fall 2022",
        status: "Completed",
        episodes: 12,
        duration: "24 min/ep",
        studio: "CloverWorks",
        source: "4-koma Manga",
        genres: ["Comedy", "Slice of Life", "Music"],
        poster: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop",
        banner: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop",
        trailerId: "k5F09t7fG48",
        synopsis: "Hitori Gotoh adalah gadis pemalu dengan kecemasan sosial ekstrem yang sangat mahir bermain gitar. Impiannya untuk bergabung dalam band terwujud ketika ia diajak oleh Nijika Ijichi untuk bergabung dengan Kessoku Band.",
        airingDay: "Minggu",
        characters: [
            { name: "Hitori Gotoh", role: "Lead Guitarist", va: "Yoshino Aoyama", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop" },
            { name: "Nijika Ijichi", role: "Drummer & Leader", va: "Sayumi Suzushiro", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop" }
        ]
    },
    {
        id: 9,
        title: "Cyberpunk: Edgerunners",
        japaneseTitle: "サイバーパンク エッジランナーズ",
        romaji: "Cyberpunk: Edgerunners",
        score: 8.61,
        year: 2022,
        season: "Fall 2022",
        status: "Completed",
        episodes: 10,
        duration: "24 min/ep",
        studio: "Studio Trigger",
        source: "Video Game",
        genres: ["Action", "Sci-Fi"],
        poster: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop",
        banner: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1600&auto=format&fit=crop",
        trailerId: "JtqIas3bYhg",
        synopsis: "Di kota masa depan Night City yang terobsesi dengan teknologi dan modifikasi tubuh, seorang anak jalanan berbakat bernama David Martinez berjuang bertahan hidup setelah kehilangan segalanya dengan menjadi 'Edgerunner' - tentara bayaran di luar hukum.",
        airingDay: "Senin",
        characters: [
            { name: "David Martinez", role: "Edgerunner", va: "KENN", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop" },
            { name: "Lucy", role: "Netrunner", va: "Aoi Yuuki", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop" }
        ]
    },
    {
        id: 10,
        title: "Attack on Titan: The Final Chapters",
        japaneseTitle: "進撃の巨人 The Final Season",
        romaji: "Shingeki no Kyojin",
        score: 9.07,
        year: 2023,
        season: "Fall 2023",
        status: "Completed",
        episodes: 2,
        duration: "85 min",
        studio: "MAPPA",
        source: "Manga",
        genres: ["Action", "Drama", "Fantasy", "Shounen"],
        poster: "https://images.unsplash.com/photo-1533158307587-828f0a76ef96?q=80&w=600&auto=format&fit=crop",
        banner: "https://images.unsplash.com/photo-1533158307587-828f0a76ef96?q=80&w=1600&auto=format&fit=crop",
        trailerId: "E7Wytqe21-0",
        synopsis: "Eren Yeager melepaskan jutaan Colossal Titan dalam fenomena Rumbling untuk memusnahkan seluruh peradaban di luar Pulau Paradis. Rekan-rekan lamanya dari Pasukan Pengintai harus bersatu dengan musuh lama untuk menghentikan sahabat terbaik mereka.",
        airingDay: "Senin",
        characters: [
            { name: "Eren Yeager", role: "Founding Titan", va: "Yuki Kaji", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" },
            { name: "Mikasa Ackerman", role: "Scout Elite", va: "Yui Ishikawa", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop" },
            { name: "Levi Ackerman", role: "Humanity's Strongest", va: "Hiroshi Kamiya", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop" }
        ]
    },
    {
        id: 11,
        title: "Mushoku Tensei: Jobless Reincarnation S2",
        japaneseTitle: "無職転生 II ～異世界行ったら本気だす～",
        romaji: "Mushoku Tensei II",
        score: 8.65,
        year: 2024,
        season: "Spring 2024",
        status: "Completed",
        episodes: 24,
        duration: "24 min/ep",
        studio: "Studio Bind",
        source: "Light Novel",
        genres: ["Fantasy", "Isekai", "Adventure", "Drama"],
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
        banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop",
        trailerId: "o5c0A2zPz4k",
        synopsis: "Rudeus Greyrat yang patah hati setelah ditinggalkan Eris melanjutkan perjalanannya sebagai petualang bernama 'Quagmire'. Panggilan untuk masuk ke Akademi Sihir Ranoa mempertemukannya kembali dengan sosok masa lalunya, Sylphiette.",
        airingDay: "Minggu",
        characters: [
            { name: "Rudeus Greyrat", role: "Archmage", va: "Yumi Uchiyama", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop" },
            { name: "Sylphiette", role: "Fitz the Silent", va: "Ai Kayano", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop" }
        ]
    },
    {
        id: 12,
        title: "Bleach: Thousand-Year Blood War",
        japaneseTitle: "BLEACH 千年血戦篇",
        romaji: "Bleach: Sennen Kessen-hen",
        score: 9.04,
        year: 2023,
        season: "Summer 2023",
        status: "Ongoing",
        episodes: 26,
        duration: "24 min/ep",
        studio: "Pierrot",
        source: "Manga",
        genres: ["Action", "Fantasy", "Shounen", "Supernatural"],
        poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
        banner: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
        trailerId: "0kL_iN5t8qM",
        synopsis: "Kedamaian Soul Society hancur saat kekaisaran Quincy, Wandenreich yang dipimpin Yhwach, mendeklarasikan perang terbuka. Ichigo Kurosaki harus menggali asal-usul kekuatannya yang sebenarnya untuk melindungi tiga dunia.",
        airingDay: "Sabtu",
        characters: [
            { name: "Ichigo Kurosaki", role: "Substitute Shinigami", va: "Masakazu Morita", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" },
            { name: "Rukia Kuchiki", role: "Captain Division 13", va: "Fumiko Orikasa", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop" }
        ]
    }
];

// Character Spotlight Database
const CHARACTER_SPOTLIGHT = [
    {
        name: "Satoru Gojo",
        anime: "Jujutsu Kaisen",
        quote: "Jangan khawatir, aku adalah yang terkuat.",
        japaneseQuote: "大丈夫、僕 最強だから。",
        role: "Special Grade Sorcerer",
        power: "Infinity & Hollow Purple",
        element: "Void / Space",
        tag: "🔥 Terkuat",
        img: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Frieren",
        anime: "Sousou no Frieren",
        quote: "Menghabiskan waktu dengan manusia adalah hal paling berharga.",
        japaneseQuote: "人間の寿命は短いって、わかってたのに…",
        role: "Legendary Elf Mage",
        power: "Zoltraak & Magic Mastery",
        element: "Pure Mana",
        tag: "⭐ Elf Abadi",
        img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Sung Jin-woo",
        anime: "Solo Leveling",
        quote: "Bangkitlah. (Arise)",
        japaneseQuote: "起きろ (Arise)",
        role: "Shadow Monarch",
        power: "Shadow Extraction & Telekinesis",
        element: "Darkness / Shadows",
        tag: "👑 Shadow Monarch",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Levi Ackerman",
        anime: "Attack on Titan",
        quote: "Pilihlah keputusan yang tidak akan kau sesali.",
        japaneseQuote: "悔いが残らない方を自分で選べ。",
        role: "Captain of Special Ops Squad",
        power: "Omni-Directional Mobility Mastery",
        element: "Acrobatic / Blades",
        tag: "⚔️ Manusia Terkuat",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
    }
];

// Weekly Schedule Data mapping
const WEEKLY_SCHEDULE = {
    "Senin": [
        { time: "20:00 WIB", title: "Cyberpunk: Edgerunners (Re-run)", ep: "Ep. 04", studio: "Trigger", type: "HD" },
        { time: "22:30 WIB", title: "Attack on Titan: Final", ep: "Special 02", studio: "MAPPA", type: "FHD" }
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
        { time: "21:00 WIB", title: "Jujutsu Kaisen: Shibuya", ep: "Ep. 18", studio: "MAPPA", type: "FHD" },
        { time: "23:30 WIB", title: "Dr. STONE: New World", ep: "Ep. 10", studio: "TMS Entertainment", type: "HD" }
    ],
    "Jumat": [
        { time: "20:00 WIB", title: "Sousou no Frieren", ep: "Ep. 21", studio: "Madhouse", type: "FHD" },
        { time: "22:00 WIB", title: "Shangri-La Frontier", ep: "Ep. 15", studio: "C2C", type: "HD" }
    ],
    "Sabtu": [
        { time: "21:30 WIB", title: "Solo Leveling: Arise", ep: "Ep. 12", studio: "A-1 Pictures", type: "FHD" },
        { time: "23:00 WIB", title: "Bleach: Thousand-Year Blood War", ep: "Ep. 24", studio: "Pierrot", type: "FHD" },
        { time: "23:45 WIB", title: "Spy x Family Code: White", ep: "Movie Clip", studio: "Wit Studio", type: "HD" }
    ],
    "Minggu": [
        { time: "20:15 WIB", title: "Kimetsu no Yaiba: Hashira Training", ep: "Ep. 08", studio: "ufotable", type: "FHD" },
        { time: "21:45 WIB", title: "Mushoku Tensei Season 2", ep: "Ep. 17", studio: "Studio Bind", type: "FHD" },
        { time: "23:00 WIB", title: "Bocchi the Rock!", ep: "Re-air 06", studio: "CloverWorks", type: "HD" }
    ]
};
