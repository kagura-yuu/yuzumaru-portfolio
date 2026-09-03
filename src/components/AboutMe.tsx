import Image from "next/image";
import { siteConfig } from "@/constants/siteConfig";
import { FaXTwitter } from "react-icons/fa6";

export const AboutMe = () => {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          <div className="group relative shrink-0">
            <div className="h-48 w-48 overflow-hidden rounded-full border-[6px] border-white bg-yellow-100 shadow-xl transition-transform duration-500 group-hover:scale-105 md:h-56 md:w-56">
              <Image
                src="/hero/profile.webp"
                alt="Yuzumaru"
                width={224}
                height={224}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 animate-float-y drop-shadow-md">
              <Image
                src="/profile-yuzu-transparent.webp"
                alt=""
                width={64}
                height={64}
                className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                aria-hidden
              />
            </div>
          </div>

          <div className="flex-1 space-y-6 text-center md:text-left">
            <div>
              <div className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                QA Engineer & Creator
              </div>
              <h2
                className="text-3xl font-bold text-gray-800"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                Yuzumaru / ゆずまる
              </h2>
            </div>
            <p className="text-sm font-medium leading-loose text-gray-600 md:text-base">
              <span className="font-bold text-orange-500">「品質」と「温かみ」、そして「挑戦」を。</span>
              <br />
              <br />
              普段はQAエンジニアとして品質に向き合いながら、プライベートでは
              <span className="border-b-2 border-orange-200">3児のパパ</span>
              として育児に奮闘中。
              <br />
              限られた時間の中でアイデアを形にするため、
              <span className="font-bold text-gray-700">生成AIを相棒にした制作</span>
              にも取り組んでいます。
              <br />
              <br />
              このサイトは、スタンプ・Web・アプリなど、これまでに手がけたものの紹介です。
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2 md:justify-start">
              <a
                href={siteConfig.sns.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm text-gray-600 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-500"
              >
                <FaXTwitter />
                <span>X で近況を見る</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
