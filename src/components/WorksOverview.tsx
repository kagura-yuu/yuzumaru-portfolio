import { siteConfig } from "@/constants/siteConfig";

export const WorksOverview = () => {
  return (
    <section
      id="works"
      className="scroll-mt-24 bg-background px-6 py-16 md:px-12 lg:px-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold tracking-widest text-orange-500">WORKS</p>
          <h2
            className="text-2xl font-bold text-gray-800 md:text-3xl"
            style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
          >
            やってきたこと
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
            制作は Design / Web / App に分けてまとめています。
            依頼を募集するページではなく、これまで形にしてきたものの記録です。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {siteConfig.categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="group rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
            >
              <span className="text-xs font-bold tracking-widest text-orange-500">{category.label}</span>
              <h3
                className="mt-2 text-lg font-bold text-gray-800"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                {category.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{category.description}</p>
              <span className="mt-4 inline-block text-xs font-bold text-orange-400 group-hover:text-orange-500">
                詳しく見る →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
