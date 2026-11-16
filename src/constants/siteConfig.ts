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
  description: "QAエンジニアの視点と、デザイン・Web・アプリづくりの実践をまとめたポートフォリオ。作っているスタンプやデジタル商品、運営しているサービスも紹介しています。",
  url: "https://yuzumaru-works.com",
  ogImage: "/ogp.jpg",
  keywords: ["QA Engineer", "ポートフォリオ", "Web制作", "Next.js", "LINEスタンプ", "LINEスタンプ制作代行", "ココナラ", "スプレッドシート自動化", "AI事務", "知育プリント", "たびのしおり", "ゆずまる", "Yuzumaru"],
  googleAnalyticsId: "G-XXXXXXXXXX",
  sns: {
    x: "https://x.com/YuzumaruWorks",
    twitter: "https://x.com/YuzumaruWorks",
    github: "https://github.com/kagura-yuu",
    note: "https://note.com/yuzumaru_works",
    lineStamp: "https://store.line.me/stickershop/author/5966269/ja",
    booth: "https://kensho-lab.booth.pm/",
    etsy: "https://www.etsy.com/shop/YoyakuLab",
    gumroad: "https://yoyakulab.gumroad.com/",
  },
  shops: [
    {
      id: "kensho",
      name: "暮らしの検証ラボ（BOOTH）",
      blurb: "暮らしの年間管理テンプレートや、防災ファミリー備蓄セットなど、生活まわりのデジタル商品を扱っています。検証記事からショップへつなぐ発信もしています。",
      href: "https://kensho-lab.booth.pm/",
      linkLabel: "ショップを見る →",
    },
    {
      id: "yoyaku",
      name: "Yoyaku Lab（Etsy／Gumroad）",
      blurb: "訪日旅行者向けの英語ガイドを扱っています。予約のコツや、主要駅のミニブックなど、旅の準備に使える内容です。",
      href: "https://www.etsy.com/shop/YoyakuLab",
      linkLabel: "Etsy を見る →",
      extraHref: "https://yoyakulab.gumroad.com/",
      extraLinkLabel: "Gumroad を見る →",
    },
  ],
  snsBrands: [
    {
      id: "yuzumaru",
      name: "YuzumaruWorks",
      links: [
        { label: "X", href: "https://x.com/YuzumaruWorks", id: "x" as const },
        { label: "note", href: "https://note.com/yuzumaru_works", id: "note" as const },
        { label: "GitHub", href: "https://github.com/kagura-yuu", id: "github" as const },
        { label: "LINE", href: "https://store.line.me/stickershop/author/5966269/ja", id: "line" as const },
      ],
    },
    {
      id: "kensho",
      name: "暮らしの検証ラボ",
      links: [
        { label: "X", href: "https://x.com/ku_kensho_lab", id: "x" as const },
        { label: "note", href: "https://note.com/ku_kensho_lab", id: "note" as const },
        { label: "Instagram", href: "https://www.instagram.com/kensho.lab.japan", id: "instagram" as const },
        { label: "Threads", href: "https://www.threads.com/@kensho.lab.japan", id: "threads" as const },
        { label: "TikTok", href: "https://www.tiktok.com/@kensho.lab.japan", id: "tiktok" as const },
        { label: "YouTube", href: "https://www.youtube.com/@ku_kensho_lab", id: "youtube" as const },
      ],
    },
    {
      id: "yoyaku",
      name: "Yoyaku Lab",
      links: [
        { label: "Instagram", href: "https://www.instagram.com/yoyaku.lab", id: "instagram" as const },
        { label: "Pinterest", href: "https://www.pinterest.com/yoyakulab", id: "pinterest" as const },
        { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61596749001997", id: "facebook" as const },
      ],
    },
  ],
  services: [
    {
      id: "s1",
      title: "LINEスタンプ制作",
      description: "ペット・お子様・オリジナルキャラクター。言葉の提案から画像制作、申請用データまでまとめて作っています。",
      url: "https://coconala.com/services/4509832",
    },
    {
      id: "s2",
      title: "家計／業務シートの自動化",
      description: "家計・レッスン料・売上と経費など、毎月の手集計を、入力すれば集計されるシートに整えています。",
      url: "https://coconala.com/services/4509867",
    },
    {
      id: "s3",
      title: "AI事務の型づくり",
      description: "文字起こしや記録、お知らせ文など、毎回ゼロからやっている事務を、決まった型で回せる形にしています。",
      url: "https://coconala.com/services/4509888",
    },
    {
      id: "s4",
      title: "お試し制作",
      description: "LINEスタンプの小さいセット、または管理シートの簡易版。まずは小さく形にしてみたい方向けです。",
      url: "https://coconala.com/services/4509905",
    },
  ],
  printProducts: [
    {
      title: "幼児知育プリント",
      description: "ひらがな・かず・線なぞり。シール台紙と一緒に使える、おうち学習向けの印刷データ。",
    },
    {
      title: "ご褒美シール台紙セット",
      description: "お手伝い・トイレトレーニング・歯みがきなど、日常の習慣づけに使える台紙の印刷データ。",
    },
    {
      title: "ピアノレッスンプリント",
      description: "練習チェック表・レッスン記録・月謝まわりのシート。ピアノ教室の現場の使い方をもとに設計。",
    },
  ],
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
      description: "公開中のWebサービスと、開発中のゲーム・アプリ。",
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
  tabiShiori: {
    title: "たびのしおり",
    url: "https://tabi-no-shiori.net",
    launched: "2026.9.18",
    tagline: "旅の準備から、行ったきろくまで。",
    category: "App / 公開",
    tech: ["React", "TypeScript", "Firebase"],
    image: "/works/tabi-shiori-pc.jpg",
    imageMobile: "/works/tabi-shiori-sp.jpg",
    imageSamples: "/works/tabi-shiori-samples.jpg",
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
  { href: "#services", label: "More" },
  { href: "#contact", label: "Contact" },
];
