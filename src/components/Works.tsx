"use client";

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

        {/* メイングリッド：左（画像） / 右（テキスト） */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ▼ 左カラム：デバイスモックアップエリア ▼ */}
          <div className="relative group">
            {/* PC Mockup Container */}
            <div className="relative z-10 w-full aspect-[16/10] rounded-lg border-[8px] border-gray-900 bg-gray-900 shadow-2xl md:border-[12px]">
              <div className="relative h-full w-full overflow-hidden rounded bg-white">
                <img
                  src={pcSrc}
                  alt="Piano School LP PC"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            {/* Phone Mockup Container (PCの右下に重ねる) */}
            <div className="absolute -bottom-[10%] -right-[2%] z-20 w-[28%] aspect-[9/19] rounded-[1.5rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-y-4">
              <div className="relative h-full w-full overflow-hidden rounded-[1.2rem] bg-white">
                <img
                  src="/works/piano-lp-sp.jpg"
                  alt="Piano School LP SP"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* 背景装飾 */}
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

            {/* LINE連携ブロック (緑枠) */}
            <div className="relative overflow-hidden rounded-2xl border border-green-200 bg-green-50/80 p-6 shadow-sm">
              {/* 背景装飾 */}
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-green-200 opacity-50 mix-blend-overlay blur-xl" />
              <div className="relative z-10 space-y-4">
                {/* ヘッダー */}
                <div className="mb-4 flex items-center gap-3 border-b border-green-200 pb-3">
                  <div className="h-8 w-8 shrink-0">
                    <img src="/works/line-icon.png" alt="LINE" className="h-full w-full object-contain" />
                  </div>
                  <h4
                    className="font-bold text-green-800"
                    style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                  >
                    LINE公式アカウント導入支援
                  </h4>
                </div>
                <div className="flex flex-col items-start gap-5 sm:flex-row">
                  <div className="w-full shrink-0 overflow-hidden rounded-lg border border-green-100 shadow-md sm:w-1/3">
                    <img
                      src="/works/piano-line-richmenu.jpg"
                      alt="Rich Menu"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2 text-sm leading-relaxed text-green-900">
                    <p>
                      お問い合わせのハードルを下げるため、LINE公式アカウントを導入。Webサイトと連携させ、集客動線を構築しました。
                    </p>
                    <ul className="list-outside list-disc pl-4 text-xs text-green-800 opacity-90">
                      <li>体験レッスン予約へスムーズに誘導</li>
                      <li>迷わず使えるリッチメニューを作成</li>
                    </ul>
                  </div>
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
