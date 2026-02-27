import Image from "next/image";
import { siteConfig, themeColors } from "@/constants/siteConfig";

export const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-20 md:px-12 md:py-24 lg:px-20"
      style={{
        backgroundColor: themeColors.background,
        color: themeColors.secondary,
      }}
    >
      <div
        className="absolute inset-0 opacity-25 mix-blend-multiply"
        style={{
            backgroundImage: "url(/hero/header-bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(255,251,235,0.4) 70%, rgba(255,251,235,0.95) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-12">
        <div className="flex flex-col text-left">
          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            {siteConfig.title}
          </h1>
          <p
            className="mb-8 max-w-lg text-base leading-relaxed md:text-lg"
            style={{ color: themeColors.secondary }}
          >
            {siteConfig.description}
          </p>
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
