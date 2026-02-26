"use client";

import Image from "next/image";
import Link from "next/link";
import carouselStamps from "@/data/carousel-stamps.json";

export function StampGrid() {
  const stamps = carouselStamps as { id: number; title: string; image: string; url: string }[];

  if (!stamps?.length) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-orange-200 bg-orange-50/50 p-12 text-center">
        <p className="text-gray-600">スタンプを準備中です</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative mx-auto max-w-5xl">
        <div className="relative z-10 flex items-center gap-2 rounded-t-2xl bg-gray-800 p-4 shadow-2xl">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <div className="ml-4 flex h-6 flex-1 items-center overflow-hidden whitespace-nowrap rounded-md bg-gray-700 px-3 font-mono text-[10px] text-gray-300 opacity-50">
            https://store.line.me/stickershop/author/5966269/ja
          </div>
        </div>
        <div className="relative overflow-hidden rounded-b-2xl border-x-4 border-b-4 border-gray-800 bg-gray-100 shadow-2xl">
          <div className="scrollbar-hide flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-6 px-4 py-8 md:gap-10 md:px-8">
            {stamps.map((stamp) => (
              <div key={stamp.id} className="shrink-0 snap-center first:pl-4 last:pr-4">
                <Link
                  href={stamp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  <div className="w-[280px] overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl md:w-[360px]">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/10">
                        <span className="translate-y-4 rounded-full bg-white/90 px-6 py-2 font-bold text-orange-500 shadow-lg opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          ストアを見る
                        </span>
                      </div>
                      <Image
                        src={stamp.image}
                        alt={stamp.title}
                        width={360}
                        height={270}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-gray-800">{stamp.title}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute bottom-4 right-8 hidden animate-pulse text-sm text-gray-400 md:block">
            Scroll →
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link
          href="https://store.line.me/stickershop/author/5966269/ja"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-green-200"
        >
          LINEストアで全作品を見る
        </Link>
      </div>
    </div>
  );
}
