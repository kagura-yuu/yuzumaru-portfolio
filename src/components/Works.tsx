import Image from "next/image";
import { siteConfig, themeColors } from "@/constants/siteConfig";
import { FaExternalLinkAlt, FaQuoteLeft } from "react-icons/fa";

const PC_IMAGE = "/works/piano-lp-pc.png";

export const Works = () => {
  const pcSrc = siteConfig.works?.[0]?.image ?? PC_IMAGE;
  return (
    <section id="works" className="px-6 py-16 md:px-12 lg:px-20" style={{ backgroundColor: themeColors.background }}>
      <div className="container mx-auto max-w-6xl">
        <h2
          className="mb-12 text-center text-2xl font-bold text-gray-800 md:text-3xl"
          style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
        >
          制作実績
        </h2>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative group">
            <div className="relative z-10 w-full aspect-[16/10] rounded-lg border-[8px] border-gray-900 bg-gray-900 shadow-2xl md:border-[12px]">
              <div className="relative h-full w-full overflow-hidden rounded bg-white">
                <Image
                  src={pcSrc}
                  alt="Piano School LP PC"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="absolute -bottom-[10%] -right-[2%] z-20 w-[28%] aspect-[9/19] rounded-[1.5rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-y-4">
              <div className="relative h-full w-full overflow-hidden rounded-[1.2rem] bg-white">
                <Image
                  src="/works/piano-lp-sp.jpg"
                  alt="Piano School LP SP"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 28vw, 14vw"
                />
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 -z-10 h-full w-full scale-110 rounded-full bg-yellow-100/60 opacity-50 mix-blend-multiply blur-3xl" />
          </div>

          {/* ▼ 右カラム：情報＆LINEブロック ▼ */}
          <div className="space-y-10">
            {/* LP基本情報 */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">LP制作</span>
              </div>

              <h3
                className="leading-tight text-3xl font-bold text-gray-800"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                音楽教室LP制作
              </h3>

              <div className="flex flex-wrap gap-2 font-mono text-xs text-gray-600">
                <span className="rounded border border-gray-200 bg-gray-100 px-2 py-1">Next.js</span>
                <span className="rounded border border-gray-200 bg-gray-100 px-2 py-1">Tailwind</span>
                <span className="rounded border border-gray-200 bg-gray-100 px-2 py-1">Vercel</span>
              </div>

              <p className="text-sm leading-loose text-gray-600 md:text-base">
                知人のピアノ・声楽教室のために制作した、あたたかみのある1枚完結LPです。
                <br />
                「優しい雰囲気」を最優先にデザインしつつ、Next.jsによる高速表示とSEO対策も実施。
              </p>

              {/* サイトへのリンクボタン */}
              <a
                href="https://tanakakumiko-music-school.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-bold text-white shadow-lg transition-colors hover:bg-orange-500"
              >
                実際のサイトを見る <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>

            {/* LINE連携ブロック */}
            <div className="bg-green-50/80 rounded-2xl p-6 md:p-8 border border-green-200 shadow-sm relative overflow-hidden mt-10">
              {/* 背景装飾 */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply blur-2xl opacity-50 translate-x-1/2 -translate-y-1/2" />

              {/* コンテンツエリア：画像とテキスト */}
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* ▼ スマホ画面風の画像エリア ▼ */}
                <div className="w-[260px] md:w-[280px] shrink-0 bg-white rounded-3xl border-[8px] border-gray-800 shadow-xl overflow-hidden flex flex-col">
                  {/* 上部：チャット画面（少し高さを制限してトリミング） */}
                  <div className="h-[240px] w-full bg-slate-100 relative overflow-hidden border-b border-gray-100">
                    <img
                      src="/works/piano-line-chat.jpg"
                      alt="LINE Chat"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* 下部：リッチメニュー（ここを魅せる！） */}
                  <div className="w-full relative">
                    <img
                      src="/works/piano-line-richmenu.jpg"
                      alt="Rich Menu"
                      className="w-full h-auto block"
                    />
                  </div>
                </div>

                {/* テキストエリア */}
                <div className="flex-1 space-y-4 text-green-900">
                  <h5 className="font-bold text-lg text-green-800" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                    「メニューをタップするだけ」の体験を設計
                  </h5>
                  <p className="text-sm leading-relaxed">
                    お問い合わせのハードルを下げるため、LINE公式アカウントを導入。Webサイトと連携させ、集客動線を構築しました。
                    特にこだわったのは、トーク画面下部に常駐する<strong>リッチメニュー</strong>の制作です。
                  </p>
                  <ul className="space-y-2 bg-white/60 p-4 rounded-xl text-sm border border-green-100">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✅</span>
                      <span>体験レッスン予約や講師紹介へスムーズに誘導</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✅</span>
                      <span>視覚的にわかりやすいメニューデザイン</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✅</span>
                      <span>「まずはスタンプを」等の自動応答で心理的ハードルを低減</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Client Voice (お客様の声) */}
            <div className="relative rounded-2xl border border-orange-100 bg-orange-50 p-6">
              <FaQuoteLeft className="absolute left-4 top-4 text-3xl text-orange-200" />
              <div className="relative z-10 pl-6">
                <p className="mb-3 text-sm italic text-gray-700">
                  「素敵なHPを作ってくれてありがとう！生徒さんからも『ホームページが見やすかったから』という理由でのお問い合わせが増えました。LINEの使い方も丁寧に教えてもらえて助かりました。」
                </p>
                <p className="text-right text-xs font-bold text-orange-500">— 田中久美子音楽教室 代表</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
