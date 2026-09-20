import { formatStatValue } from "../../utils";
import { LicenseStat } from "../shared";
import type { LicenseStatCard, LicenseStatsSectionProps } from "./types";

const LICENSE_STAT_CARDS: readonly LicenseStatCard[] = [
  { key: "total", label: "Licenses", detail: "Customer records" },
  { key: "active", label: "Active", detail: "Currently in use" },
  { key: "expiring", label: "Expiring soon", detail: "Renewals to watch" },
  { key: "suspended", label: "Suspended", detail: "Accounts on hold" },
  { key: "expired", label: "Expired", detail: "Past renewal" },
];

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
