import Image from "next/image";
import { siteConfig } from "@/constants/siteConfig";
import { SeasonKicker } from "@/components/SeasonKicker";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-background px-6 pb-20 pt-28 text-secondary md:px-12 md:pb-24 md:pt-32 lg:px-20"
    >
      <div
        className="absolute inset-0 opacity-25 mix-blend-multiply"
        style={{
          backgroundImage: "url(/hero/header-bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="hero-veil absolute inset-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-12">
        <div className="flex flex-col text-left">
          <p className="mb-3 text-xs font-bold tracking-widest text-orange-500">PORTFOLIO</p>
          <SeasonKicker />
          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            {siteConfig.title}
          </h1>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-secondary md:text-lg">
            {siteConfig.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {siteConfig.categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-orange-200 bg-white/80 px-4 py-1.5 text-xs font-bold text-gray-700 transition-colors hover:border-orange-400 hover:text-orange-600"
              >
                {category.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <div className="relative h-64 w-64 overflow-hidden rounded-[2rem] shadow-glow-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-hover md:h-80 md:w-80">
            <Image
              src="/hero/profile.webp"
              alt={siteConfig.creatorName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 320px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
