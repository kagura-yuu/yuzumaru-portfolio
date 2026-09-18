import Image from "next/image";
import { FaAndroid, FaExternalLinkAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { siteConfig } from "@/constants/siteConfig";

export const AppDev = () => {
  const app = siteConfig.tabiShiori;

  return (
    <section
      id="systems"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 px-6 py-16 md:px-12 lg:px-20"
    >
      <div className="container relative mx-auto max-w-6xl">
        <p className="mb-10 text-center text-xs font-bold tracking-widest text-orange-500">APP</p>

        <h2
          className="mb-8 text-2xl font-bold text-gray-800 md:text-3xl"
          style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
        >
          公開中サービス
        </h2>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="group relative">
            <div className="relative z-10 aspect-[16/10] w-full overflow-hidden rounded-lg border-[8px] border-gray-900 bg-gray-900 shadow-2xl md:border-[12px]">
              <Image
                src={app.image}
                alt={`${app.title} PC`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-[10%] -right-[2%] z-20 aspect-[9/19] w-[28%] overflow-hidden rounded-[1.5rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-y-4">
              <Image
                src={app.imageMobile}
                alt={`${app.title} SP`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 28vw, 14vw"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 -z-10 h-full w-full scale-110 rounded-full bg-teal-100/60 opacity-50 mix-blend-multiply blur-3xl" />
          </div>

          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-teal-700 px-3 py-1 text-xs font-bold text-white">
                {app.launched} 公開
              </span>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                {app.category}
              </span>
            </div>
            <h3
              className="text-3xl font-bold leading-tight text-gray-800"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              {app.title}
            </h3>
            <p className="text-sm font-medium text-teal-800">{app.tagline}</p>
            <div className="flex flex-wrap gap-2 font-mono text-xs text-gray-600">
              {app.tech.map((tech) => (
                <span key={tech} className="rounded border border-gray-200 bg-gray-100 px-2 py-1">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-sm leading-loose text-gray-600 md:text-base">
              2026年9月18日にサービスを開始した、家族・友だちと旅行をしおりとして共有するWebアプリです。
              予定・持ち物・お土産・費用・きろくを1冊にまとめ、リンクを送ると相手の画面にも反映されます。
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="font-bold text-orange-400">・</span>
                <span>一緒に編集するリンクと、登録不要の見るだけリンク</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-orange-400">・</span>
                <span>立て替え精算、持ち物チェック、印刷用の紙面</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-orange-400">・</span>
                <span>Firebase で認証・同期。一度開いた旅行はオフラインでも閲覧できる</span>
              </li>
            </ul>
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal-800 px-6 py-3 font-bold text-white shadow-lg transition-colors hover:bg-orange-500"
            >
              サービスを見る <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-2xl border border-stone-200 bg-white p-4 md:p-6">
          <div className="relative aspect-[1024/799] overflow-hidden rounded-xl bg-stone-50">
            <Image
              src={app.imageSamples}
              alt={`${app.title} サンプル旅行の一覧`}
              fill
              className="object-contain object-top"
              sizes="100vw"
            />
          </div>
          <p className="mt-3 text-center text-sm leading-relaxed text-gray-600">
            旅行ごとにカードで見やすくまとめることができます。
            これからの予定と終わった旅が分かれて並び、行き先・日程・予算が一目でわかります。
          </p>
        </div>

        <h2
          className="mb-8 mt-16 text-2xl font-bold text-gray-800 md:text-3xl"
          style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
        >
          絶賛開発中
        </h2>
        <div className="group relative flex flex-col items-center gap-8 rounded-3xl border-2 border-orange-200 bg-white p-8 shadow-lg md:flex-row md:gap-10 md:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-200 opacity-50 mix-blend-multiply blur-3xl transition-transform duration-700 group-hover:scale-150" />
          <div className="relative mx-auto shrink-0 md:mx-0">
            <div className="flex h-24 w-24 rotate-3 items-center justify-center rounded-2xl bg-gray-800 shadow-lg transition-transform group-hover:rotate-6">
              <FaAndroid className="text-5xl text-green-400" />
            </div>
            <div className="absolute -bottom-2 -left-2 rounded-full bg-white p-2 shadow-sm">
              <IoSettingsOutline className="animate-spin text-xl text-gray-500" style={{ animationDuration: "3s" }} />
            </div>
          </div>
          <div className="z-10 w-full flex-1">
            <div className="mb-6 text-center md:text-left">
              <h3
                className="mb-2 text-2xl font-bold leading-tight text-gray-800 md:text-3xl"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                家族の時間を、ゆっくり温める。
                <br />
                <span className="text-orange-500">Android App &quot;KotoKoto&quot;</span>
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                お鍋がコトコト煮込まれるように、家族の関係を温かく育てたい。
                <br />
                そんな想いから生まれた、タスク管理アプリです。
              </p>
            </div>
            <div className="space-y-5 rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
              <div className="grid grid-cols-1 items-start gap-2 md:grid-cols-[160px_1fr] md:gap-4">
                <div className="flex items-center gap-2 text-sm font-bold text-orange-600">
                  <span>🌱</span> 名もなき家事の見える化
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  見過ごされがちなタスクを可視化し、やった人が報われる仕組みに。
                </p>
              </div>
              <div className="grid grid-cols-1 items-start gap-2 md:grid-cols-[160px_1fr] md:gap-4">
                <div className="flex items-center gap-2 text-sm font-bold text-orange-600">
                  <span>🤝</span> タスクを「バトン」に
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  義務としての作業ではなく、家族への「信頼のバトン」として捉え直す。
                </p>
              </div>
              <div className="grid grid-cols-1 items-start gap-2 md:grid-cols-[160px_1fr] md:gap-4">
                <div className="flex items-center gap-2 text-sm font-bold text-orange-600">
                  <span>🎨</span> 温かいUIデザイン
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  攻撃的な色は使わず、通知も「警告」ではなく「エール」として届けます。
                </p>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500 md:text-right">
              最終段階に入っています。QAの視点で使いやすさを確認しながら開発を続けています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
