export type SeasonId = "spring" | "summer" | "earlyAutumn" | "autumn" | "winter";

export const seasons: {
  id: SeasonId;
  label: string;
  kicker: string;
}[] = [
  { id: "spring", label: "春", kicker: "やわらかい色で、制作の記録をまとめています。" },
  { id: "summer", label: "夏", kicker: "あかりを、配色に少しのせています。" },
  { id: "earlyAutumn", label: "初秋", kicker: "空気に合わせて、色味を整えています。" },
  { id: "autumn", label: "秋", kicker: "落ちつきを、ゆず色に混ぜています。" },
  { id: "winter", label: "冬", kicker: "あたたかさを、ゆず色で残しています。" },
];

export function getSeasonIdFromMonth(month: number): SeasonId {
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month === 9) return "earlyAutumn";
  if (month >= 10 && month <= 11) return "autumn";
  return "winter";
}

export function getJapanMonth(referenceDate = new Date()): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tokyo",
    month: "numeric",
  }).formatToParts(referenceDate);
  return Number(parts.find((part) => part.type === "month")?.value);
}

export function resolveSeasonId(referenceDate = new Date()): SeasonId {
  return getSeasonIdFromMonth(getJapanMonth(referenceDate));
}

/** 初回描画前に data-season を付ける（FOUC防止） */
export const seasonBootScript = `(function(){try{var p=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Tokyo",month:"numeric"}).formatToParts(new Date());var m=Number(p.find(function(x){return x.type==="month"}).value);var s=m>=3&&m<=5?"spring":m>=6&&m<=8?"summer":m===9?"earlyAutumn":m>=10&&m<=11?"autumn":"winter";document.documentElement.dataset.season=s;}catch(e){}})();`;
