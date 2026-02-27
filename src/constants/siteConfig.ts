export const themeColors = {
  primary: "#FACC15",    // アクセント用の濃いゆず色（ボタンや強調など）
  secondary: "#475569",  // 文字色（柔らかいダークグレー）
  accent: "#F97316",     // リンクなどのアクセント（オレンジ）
  background: "#FFFBEB", // 背景は「白に近い淡いクリーム色」
  card: "#FFFFFF",       // カード背景は白
  subText: "#94A3B8",    // 薄い文字色
};

export const siteConfig = {
  name: "YuzumaruWorks",
  creatorName: "ゆずまる",
  title: "YuzumaruWorks",
  description: "QA Engineer & Creator Portfolio | 品質と温かみのあるモノづくり",
  url: "https://yuzumaru-works.com",
  keywords: ["QA Engineer", "Web制作", "Next.js", "LINEスタンプ", "ゆずまる", "Yuzumaru", "ポートフォリオ"],
  googleAnalyticsId: "G-XXXXXXXXXX",
  sns: {
    x: "https://x.com/YuzumaruWorks",
    twitter: "https://x.com/YuzumaruWorks",
    github: "https://github.com/kagura-yuu",
    note: "https://note.com/yuzumaru_works",
    lineStamp: "https://store.line.me/stickershop/author/5966269/ja",
  },
  services: [
    { title: "LINEスタンプ制作", description: "使って楽しい、送って嬉しいスタンプを制作しています。" },
    { title: "Webページ制作", description: "スマホで見やすく、表示が速い、ちょうどいいサイトを作ります。" },
  ],
  works: [
    {
      title: "音楽教室LP制作",
      category: "LP制作",
      tech: ["Next.js", "Tailwind", "Vercel"],
      description: "シンプルで温かみのあるデザインの1枚完結LPです。",
      qaPoint:
        "QAエンジニアの視点で、マルチデバイス検証とLighthouseパフォーマンス計測を実施。表示速度とアクセシビリティに配慮した設計です。",
      qaPoints: [
        "表示速度の最適化（Lighthouse 90点以上）",
        "スマホ・タブレット完全対応",
        "マルチデバイス実機検証",
        "アクセシビリティ（読み上げ・キーボード操作）",
      ],
      image: "/works/piano-lp-pc.png",
      imageMobile: "/works/piano-lp-sp.jpg",
    },
  ],
  stampSheetCount: 5,
};

export const navItems = [
  { href: "#about", label: "Profile" },
  { href: "#stamps", label: "Stamps" },
  { href: "#works", label: "Works" },
  { href: "#contact", label: "Contact" },
];
