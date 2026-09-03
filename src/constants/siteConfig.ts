export const themeColors = {
  primary: "#FACC15",
  secondary: "#475569",
  accent: "#F97316",
  background: "#FFFBEB",
  card: "#FFFFFF",
  subText: "#94A3B8",
};

export const siteConfig = {
  name: "YuzumaruWorks",
  creatorName: "ゆずまる",
  title: "YuzumaruWorks",
  seoTitle: "YuzumaruWorks | QAエンジニア＆クリエイターのポートフォリオ",
  description: "QAエンジニアの視点と、デザイン・Web・アプリづくりの実践をまとめたポートフォリオ。",
  url: "https://yuzumaru-works.com",
  ogImage: "/ogp.jpg",
  keywords: ["QA Engineer", "ポートフォリオ", "Web制作", "Next.js", "LINEスタンプ", "ゆずまる", "Yuzumaru"],
  googleAnalyticsId: "G-XXXXXXXXXX",
  sns: {
    x: "https://x.com/YuzumaruWorks",
    twitter: "https://x.com/YuzumaruWorks",
    github: "https://github.com/kagura-yuu",
    note: "https://note.com/yuzumaru_works",
    lineStamp: "https://store.line.me/stickershop/author/5966269/ja",
  },
  categories: [
    {
      id: "design",
      label: "Design",
      title: "スタンプ・デザイン",
      description: "LINEスタンプを中心に、キャラクターと日常の絵を作っています。",
    },
    {
      id: "web",
      label: "Web",
      title: "Webサイト",
      description: "知人の教室サイトを、公開後も季節に合わせて整えています。",
    },
    {
      id: "systems",
      label: "App",
      title: "アプリ・仕組み",
      description: "家族向けアプリなど、仕組みの試作に取り組んでいます。",
    },
  ],
  musicSchool: {
    title: "田中久美子音楽教室",
    url: "https://tanakakumiko-music-school.com/",
    category: "Web / 継続",
    tech: ["Next.js", "Tailwind", "Vercel"],
    image: "/works/piano-school-pc.jpg",
    imageMobile: "/works/piano-school-sp.jpg",
    imageInstructor: "/works/piano-school-pc-instructor.jpg",
    lineImage: "/works/piano-line-richmenu.jpg",
    seasons: [
      { label: "公開中（新学期・残暑）", image: "/works/piano-school-pc.jpg" },
      { label: "夏のビジュアル", image: "/works/season-summer.png" },
      { label: "秋のビジュアル", image: "/works/season-autumn.jpg" },
    ],
  },
  stampSeries: [
    {
      id: "yuzumaru",
      title: "ゆずまるの日常",
      blurb: "挨拶・家族・リモート。ゆるふわ系の日常。",
      image: "/stamps/yuzumaru_daily_greetings_family_preview.png",
      url: "https://store.line.me/stickershop/product/33083974/ja",
    },
    {
      id: "family",
      title: "がんばるパパの日常",
      blurb: "仕事帰り、育児、ひと息。家族のやりとり向け。",
      image: "/stamps/33052402_preview.png",
      url: "https://store.line.me/stickershop/product/33052402/ja",
    },
    {
      id: "shu",
      title: "シュウの日常",
      blurb: "ミニチュアシュナウザーの、ちょっとした仕草。",
      image: "/stamps/33051614_preview.png",
      url: "https://store.line.me/stickershop/product/33051614/ja",
    },
    {
      id: "music",
      title: "音大生・音楽の日常",
      blurb: "レッスン、合唱、ピアノの先生まわり。",
      image: "/stamps/33055065_preview.png",
      url: "https://store.line.me/stickershop/product/33055065/ja",
    },
  ],
};

export const navItems = [
  { href: "#about", label: "Profile" },
  { href: "#works", label: "Works" },
  { href: "#contact", label: "Contact" },
];
