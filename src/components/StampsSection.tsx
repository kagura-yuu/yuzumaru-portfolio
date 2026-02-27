import { StampGrid } from "@/components/StampGrid";
import { themeColors } from "@/constants/siteConfig";

export const StampsSection = () => {
  return (
    <section
      id="stamps"
      className="overflow-x-hidden px-6 py-16 md:px-12 lg:px-20"
      style={{ backgroundColor: themeColors.background }}
    >
      <div className="mb-16 text-center">
        <h2
          className="mb-4 text-3xl font-bold text-gray-800"
          style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
        >
          LINEスタンプ
        </h2>
        <p className="mx-auto max-w-2xl leading-relaxed text-gray-600">
          基本は「ゆるふわ系」で、日常を優しく彩るスタンプを制作。
          <br />
          現在、オリジナルキャラ「ミアちゃん」や、異世界転生しちゃいそうな
          <br className="hidden md:block" />
          「限界系ネタスタンプ」など、幅広いジャンルを展開・製作中です。
        </p>
      </div>
      <div className="mx-auto w-full max-w-4xl min-w-0">
        <StampGrid />
      </div>
    </section>
  );
};
