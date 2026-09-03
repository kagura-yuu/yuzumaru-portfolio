import Image from "next/image";
import { siteConfig } from "@/constants/siteConfig";
import { FaExternalLinkAlt, FaQuoteLeft } from "react-icons/fa";

export const Works = () => {
  const work = siteConfig.musicSchool;

  return (
    <section
      id="web"
      className="scroll-mt-24 bg-card px-6 py-16 md:px-12 lg:px-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-2 md:mb-12">
          <span className="text-xs font-bold tracking-widest text-orange-500">WEB</span>
          <h2
            className="text-2xl font-bold text-gray-800 md:text-3xl"
            style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
          >
            公開したあとも、季節に合わせて整える
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="group relative">
            <div className="relative z-10 aspect-[16/10] w-full rounded-lg border-[8px] border-gray-900 bg-gray-900 shadow-2xl md:border-[12px]">
              <div className="relative h-full w-full overflow-hidden rounded bg-white">
                <Image
                  src={work.image}
                  alt={`${work.title} PC`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="absolute -bottom-[10%] -right-[2%] z-20 aspect-[9/19] w-[28%] rounded-[1.5rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-y-4">
              <div className="relative h-full w-full overflow-hidden rounded-[1.2rem] bg-white">
                <Image
                  src={work.imageMobile}
                  alt={`${work.title} SP`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 28vw, 14vw"
                />
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 -z-10 h-full w-full scale-110 rounded-full bg-yellow-100/60 opacity-50 mix-blend-multiply blur-3xl" />
          </div>

          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                  {work.category}
                </span>
              </div>

              <h3
                className="text-3xl font-bold leading-tight text-gray-800"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                {work.title}
              </h3>

              <div className="flex flex-wrap gap-2 font-mono text-xs text-gray-600">
                {work.tech.map((tech) => (
                  <span key={tech} className="rounded border border-gray-200 bg-gray-100 px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm leading-loose text-gray-600 md:text-base">
                知人の出張ピアノ・声楽教室のWebサイトです。作って公開して終わりではなく、季節ごとのデザインとコピー、空き状況、LINEからの問い合わせ導線まで続けて整えています。
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-400">・</span>
                  <span>春・夏・新学期・秋・冬で、色とキャッチコピーを切り替え</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-400">・</span>
                  <span>体験案内やキャンペーン用の印刷ページも、同じサイト基盤で作成</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-400">・</span>
                  <span>スマホでの読みやすさと、実機での見え方を確認しながら更新</span>
                </li>
              </ul>

              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-bold text-white shadow-lg transition-colors hover:bg-orange-500"
              >
                公開中のサイトを見る <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h4
            className="mb-6 text-lg font-bold text-gray-800"
            style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
          >
            季節ごとの見え方
          </h4>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {work.seasons.map((season) => (
              <figure key={season.label} className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm">
                <div className="relative aspect-[1200/630] bg-[#fff8f0]">
                  <Image
                    src={season.image}
                    alt={season.label}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="px-4 py-3 text-center text-xs font-bold text-gray-600">
                  {season.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-4 md:p-6">
          <div className="relative aspect-[16/8] overflow-hidden rounded-xl bg-white">
            <Image
              src={work.imageInstructor}
              alt={`${work.title} 講師紹介セクション`}
              fill
              className="object-cover object-top"
              sizes="100vw"
            />
          </div>
          <p className="mt-3 text-center text-xs text-gray-500">講師紹介など、中面の見せ方も教室の空気に合わせて調整しています。</p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-green-200 bg-green-50/80 p-6 shadow-sm md:p-8">
          <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-green-200 opacity-50 mix-blend-multiply blur-2xl" />
          <div className="relative z-10 flex min-w-0 flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="flex w-[260px] shrink-0 flex-col self-center overflow-hidden rounded-3xl border-[8px] border-gray-800 bg-white shadow-xl sm:w-[280px] md:self-start">
              <div className="w-full bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={work.lineImage}
                  alt="LINE公式アカウント（チャット・リッチメニュー）"
                  className="block h-auto w-full align-top"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="min-w-0 flex-1 space-y-4 text-green-900">
              <h5 className="text-lg font-bold text-green-800" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                LINEからの問い合わせも、サイトと同じ体験に
              </h5>
              <p className="text-sm leading-relaxed">
                Webだけでなく、公式アカウントのリッチメニューも制作しました。予約や講師紹介へ、トーク画面からそのまま進めます。
              </p>
              <ul className="space-y-2 rounded-xl border border-green-100 bg-white/60 p-4 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-500">・</span>
                  <span>体験レッスン予約や講師紹介への導線</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-500">・</span>
                  <span>季節の案内と食い違わないメニュー構成</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-500">・</span>
                  <span>初めてでも迷いにくい自動応答</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative mt-8 rounded-2xl border border-orange-100 bg-orange-50 p-6">
          <FaQuoteLeft className="absolute left-4 top-4 text-3xl text-orange-200" />
          <div className="relative z-10 pl-6">
            <p className="mb-3 text-sm italic text-gray-700">
              「素敵なHPを作ってくれてありがとう！生徒さんからも『ホームページが見やすかったから』という理由でのお問い合わせが増えました。LINEの使い方も丁寧に教えてもらえて助かりました。」
            </p>
            <p className="text-right text-xs font-bold text-orange-500">— 田中久美子音楽教室 代表</p>
          </div>
        </div>
      </div>
    </section>
  );
};
