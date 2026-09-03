import { seasons } from "@/lib/season";

export const SeasonKicker = () => {
  return (
    <p className="season-kicker-wrap mb-3 max-w-lg text-xs leading-relaxed text-orange-600/90">
      {seasons.map((season) => (
        <span key={season.id} data-season-line={season.id} className="season-line">
          {season.label} · {season.kicker}
        </span>
      ))}
    </p>
  );
};
