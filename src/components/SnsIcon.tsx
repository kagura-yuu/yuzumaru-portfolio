import type { IconType } from "react-icons";
import { FaXTwitter, FaGithub, FaInstagram, FaYoutube, FaFacebook, FaPinterest, FaTiktok, FaThreads } from "react-icons/fa6";
import { SiEtsy, SiGumroad, SiLine } from "react-icons/si";

export type SnsIconId =
  | "x"
  | "note"
  | "github"
  | "line"
  | "instagram"
  | "threads"
  | "tiktok"
  | "youtube"
  | "etsy"
  | "gumroad"
  | "pinterest"
  | "facebook";

const ICONS: Partial<Record<SnsIconId, { Icon: IconType; color: string }>> = {
  x: { Icon: FaXTwitter, color: "#000000" },
  github: { Icon: FaGithub, color: "#181717" },
  instagram: { Icon: FaInstagram, color: "#E4405F" },
  youtube: { Icon: FaYoutube, color: "#FF0000" },
  facebook: { Icon: FaFacebook, color: "#1877F2" },
  pinterest: { Icon: FaPinterest, color: "#E60023" },
  tiktok: { Icon: FaTiktok, color: "#000000" },
  threads: { Icon: FaThreads, color: "#000000" },
  etsy: { Icon: SiEtsy, color: "#F1641E" },
  gumroad: { Icon: SiGumroad, color: "#000000" },
  line: { Icon: SiLine, color: "#06C755" },
};

type SnsIconProps = {
  id: SnsIconId;
  href: string;
  label: string;
};

export const SnsIcon = ({ id, href, label }: SnsIconProps) => {
  const spec = ICONS[id];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="flex w-11 flex-col items-center gap-1 text-gray-600 transition hover:-translate-y-0.5"
    >
      <span
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200"
        style={{ color: spec?.color ?? "#41C9B4" }}
      >
        {id === "note" || !spec ? (
          <span className="text-xs font-black leading-none">n</span>
        ) : (
          <spec.Icon className="text-[15px]" />
        )}
      </span>
      <span className="text-[10px] font-medium leading-none text-gray-500">{label}</span>
    </a>
  );
};
