import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";

export function StampGrid() {
  const series = siteConfig.stampSeries;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {series.map((stamp) => (
        <Link
          key={stamp.id}
          href={stamp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-orange-50">
            <Image
              src={stamp.image}
              alt={stamp.title}
              fill
              className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-1 p-5">
            <h3 className="font-bold text-gray-800">{stamp.title}</h3>
            <p className="text-sm leading-relaxed text-gray-600">{stamp.blurb}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
