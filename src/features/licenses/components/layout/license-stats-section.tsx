import { formatStatValue } from "../../utils";
import { LicenseStat } from "../shared";
import { LICENSE_STAT_CARDS } from "./constant";
import type { LicenseStatsSectionProps } from "./types";

export function LicenseStatsSection({ stats }: LicenseStatsSectionProps) {
  return (
    <section className="grid grid-cols-2 gap-3 lg:grid-cols-5">
      {LICENSE_STAT_CARDS.map((card) => (
        <LicenseStat
          key={card.key}
          label={card.label}
          value={formatStatValue(stats, card.key)}
          detail={card.detail}
        />
      ))}
    </section>
  );
}
