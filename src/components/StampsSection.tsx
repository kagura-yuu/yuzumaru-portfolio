import { StampGrid } from "@/components/StampGrid";
import { siteConfig } from "@/constants/siteConfig";

export const StampsSection = () => {
  return (
    <section
      id="design"
      className="scroll-mt-24 overflow-x-hidden bg-background px-6 py-16 md:px-12 lg:px-20"
    >
      <div className="mb-12 text-center">
        <p className="mb-2 text-xs font-bold tracking-widest text-orange-500">DESIGN</p>
        <h2
          className="mb-4 text-3xl font-bold text-gray-800"
          style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
        >
          LINEスタンプ
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
          ゆるふわな日常から、家族・ペット・音大生まで、シリーズごとに作っています。
          新作は増えていくので、ここでは世界観の入口だけを置いています。全作品はLINEスタンプの作者ページへ。
        </p>
      </div>
      <div className="mx-auto w-full min-w-0 max-w-5xl">
        <StampGrid />
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-gray-400">
        制作には生成AIも使っています。量より、キャラの温度感と「送りたくなる一言」を優先しています。
      </p>
      <div className="mt-8 text-center">
        <a
          href={siteConfig.sns.lineStamp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-green-600"
        >
          作者ページで全作品を見る
        </a>
      </div>
    </section>
  );
};
