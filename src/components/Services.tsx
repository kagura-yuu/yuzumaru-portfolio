import { siteConfig } from "@/constants/siteConfig";

export const Services = () => {
  return (
    <section id="services" className="scroll-mt-24 bg-white px-6 py-16 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold tracking-widest text-orange-500">SERVICES</p>
          <h2
            className="text-2xl font-bold text-gray-800 md:text-3xl"
            style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
          >
            ご依頼メニュー
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
            制作のご依頼を受け付けています。受付はココナラを中心にご案内しています。
            同時にお受けできるのは2件まで、修正は2回まで対応します。
            まずは相談だけでも大丈夫です。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-orange-100 bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
            >
              <h3
                className="text-lg font-bold text-gray-800"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                {service.title}
              </h3>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">
                  {service.price}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-600">
                  {service.days}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.description}</p>
              <p className="mt-2 text-xs text-gray-400">{service.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-bold text-white shadow-lg transition-colors hover:bg-orange-500"
          >
            ご相談はこちらから
          </a>
          <p className="mt-3 text-xs text-gray-400">
            制作工程の一部にAIを活用しています。各サービスの詳細はお問い合わせ時にご案内します。
          </p>
        </div>

        <div className="mt-16">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-bold tracking-widest text-orange-500">PRODUCTS</p>
            <h3
              className="text-xl font-bold text-gray-800 md:text-2xl"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              ダウンロード商品（プリント）
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
              受託で作った型を商品化した、印刷して使うダウンロードデータです。
              BOOTH／minneでの販売に向けて準備中です。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {siteConfig.printProducts.map((product) => (
              <div key={product.title} className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
                <h4
                  className="text-base font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  {product.title}
                </h4>
                <p className="mt-2 text-sm font-bold text-orange-500">{product.price}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <a
              href={siteConfig.sns.booth}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-orange-100 bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
            >
              <span className="text-xs font-bold tracking-widest text-orange-500">SHOP</span>
              <h4
                className="mt-2 text-base font-bold text-gray-800"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                暮らしの検証ラボ（BOOTH）
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                暮らしの管理テンプレートなどを販売しているショップです。
              </p>
              <span className="mt-3 inline-block text-xs font-bold text-orange-400 group-hover:text-orange-500">
                ショップを見る →
              </span>
            </a>
            <div className="rounded-2xl border border-orange-100 bg-background p-6 shadow-sm">
              <span className="text-xs font-bold tracking-widest text-orange-500">SHOP</span>
              <h4
                className="mt-2 text-base font-bold text-gray-800"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                Yoyaku Lab（Etsy／Gumroad）
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                訪日旅行者向けの英語ガイドを販売している海外向けショップです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
