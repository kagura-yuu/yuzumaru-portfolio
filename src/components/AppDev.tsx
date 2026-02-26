import { FaAndroid } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export const AppDev = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 px-6 py-16 md:px-12 lg:px-20">
      <div className="container relative mx-auto max-w-4xl">
        <div className="group relative flex flex-col items-center gap-8 rounded-3xl border-2 border-orange-200 bg-white p-8 shadow-lg md:flex-row md:gap-10 md:p-10">
          {/* 背景装飾 */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-200 opacity-50 mix-blend-multiply blur-3xl transition-transform duration-700 group-hover:scale-150" />

          {/* アイコン */}
          <div className="relative mx-auto shrink-0 md:mx-0">
            <div className="flex h-24 w-24 rotate-3 items-center justify-center rounded-2xl bg-gray-800 shadow-lg transition-transform group-hover:rotate-6">
              <FaAndroid className="text-5xl text-green-400" />
            </div>
            <div className="absolute -bottom-2 -left-2 rounded-full bg-white p-2 shadow-sm">
              <IoSettingsOutline className="animate-spin text-xl text-gray-500" style={{ animationDuration: "3s" }} />
            </div>
          </div>

          {/* テキストエリア */}
          <div className="z-10 w-full flex-1">
            <div className="mb-6 text-center md:text-left">
              <div className="mb-3 inline-block rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                Developing
              </div>
              <h2
                className="mb-2 leading-tight text-2xl font-bold text-gray-800 md:text-3xl"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                家族の時間を、ゆっくり温める。
                <br />
                <span className="text-orange-500">Android App &quot;KotoKoto&quot;</span>
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                お鍋がコトコト煮込まれるように、家族の関係を温かく育てたい。
                <br />
                そんな想いから生まれた、タスク管理アプリです。
              </p>
            </div>

            {/* コンセプトリスト（グリッドで整列） */}
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

            <p className="mt-4 text-center text-xs text-gray-400 md:text-right">
              ※現在、QAエンジニアの視点でユーザビリティテストを重ねながら鋭意制作中。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
