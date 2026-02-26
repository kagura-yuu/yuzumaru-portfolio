import Link from "next/link";
import { siteConfig, navItems } from "@/constants/siteConfig";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 px-6 py-16 md:px-12 lg:px-20">
      <div className="container mx-auto flex max-w-4xl flex-col items-center gap-12">
        <div className="max-w-lg space-y-4 text-center">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
            Contact
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            現在、お仕事のご依頼は知人の方に限らせていただいております。
            <br />
            メッセージやご感想は、X (Twitter) のDMまでお気軽にどうぞ！
          </p>
          <a
            href={siteConfig.sns.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block rounded-full border border-gray-500 px-6 py-2 text-sm transition-all hover:bg-white hover:text-gray-900"
          >
            X (Twitter) でメッセージを送る
          </a>
        </div>

        <hr className="w-full max-w-2xl border-gray-700" />

        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <nav className="flex gap-6 text-sm text-gray-400">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-6">
            <a
              href={siteConfig.sns.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-orange-400"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href={siteConfig.sns.note}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-orange-400"
              aria-label="Note"
            >
              <FaBookOpen size={20} />
            </a>
            <a
              href={siteConfig.sns.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-orange-400"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          © {currentYear} {siteConfig.title}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
