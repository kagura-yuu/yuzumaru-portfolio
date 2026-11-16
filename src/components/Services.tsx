import { siteConfig } from "@/constants/siteConfig";
import { SnsIcon } from "@/components/SnsIcon";

export const Services = () => {
  return (
    <section id="services" className="scroll-mt-24 bg-white px-6 py-16 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold tracking-widest text-orange-500">SHOP</p>
          <h2
            className="text-2xl font-bold text-gray-800 md:text-3xl"
            style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
          >
            ショップ
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
            作ってきたものの一部は、ショップでも扱っています。ここでは内容だけ紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {siteConfig.shops.map((shop) => (
            <div key={shop.id} className="rounded-2xl border border-orange-100 bg-background p-6 shadow-sm">
              <span className="text-xs font-bold tracking-widest text-orange-500">SHOP</span>
              <h3
                className="mt-2 text-base font-bold text-gray-800"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                {shop.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 break-keep">{shop.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-4">
                <a
                  href={shop.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-orange-400 hover:text-orange-500"
                >
                  {shop.linkLabel}
                </a>
                {"extraHref" in shop && shop.extraHref ? (
                  <a
                    href={shop.extraHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-orange-400 hover:text-orange-500"
                  >
                    {shop.extraLinkLabel}
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-bold tracking-widest text-orange-500">SNS</p>
            <h2
              className="text-2xl font-bold text-gray-800 md:text-3xl"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              発信
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
              ブランドごとのSNSです。近況や検証、旅の案内はこちらから見られます。
            </p>
          </div>
          <div className="space-y-5">
            {siteConfig.snsBrands.map((brand) => (
              <div
                key={brand.id}
                className="flex flex-col gap-3 rounded-2xl border border-orange-100 bg-background px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <p
                  className="text-sm font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  {brand.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {brand.links.map((link) => (
                    <SnsIcon
                      key={`${brand.id}-${link.label}`}
                      id={link.id}
                      href={link.href}
                      label={link.label}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-bold tracking-widest text-orange-500">COCONALA</p>
            <h3
              className="text-xl font-bold text-gray-800 md:text-2xl"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              ココナラでの制作
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
              作ってきた型を、制作としても扱っています。内容の紹介のみです。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {siteConfig.services.map((service) => (
              <a
                key={service.id}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-orange-100 bg-background p-6 transition hover:border-orange-200 hover:shadow-sm"
              >
                <h4
                  className="text-base font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  {service.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{service.description}</p>
                <span className="mt-3 inline-block text-xs font-bold text-orange-400 group-hover:text-orange-500">
                  ココナラで見る →
                </span>
              </a>
            ))}
          </div>
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
              幼児知育・ご褒美シール台紙・ピアノレッスンの印刷データです。
              BOOTH／minneでの販売に向けて準備中です。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {siteConfig.printProducts.map((product) => (
              <div key={product.title} className="rounded-2xl border border-orange-100 bg-white p-6">
                <h4
                  className="text-base font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  {product.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
