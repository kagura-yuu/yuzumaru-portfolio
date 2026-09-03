import Link from "next/link";
import { navItems, siteConfig } from "@/constants/siteConfig";

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-orange-100/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-12 lg:px-20">
        <Link href="#top" className="text-sm font-bold text-gray-800 md:text-base">
          {siteConfig.title}
        </Link>
        <nav className="flex gap-4 text-xs text-gray-600 md:gap-6 md:text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-orange-500">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
