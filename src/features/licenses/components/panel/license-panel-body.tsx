import { formatIsoDate } from "../../utils";
import { SeatUsage } from "../shared";
import { LicensePanelDetail } from "./license-panel-detail";
import type { LicensePanelBodyProps } from "./types";

export function LicensePanelBody({ license }: LicensePanelBodyProps) {
  return (
    <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-5 py-5">
      <div className="rounded-xl border bg-muted/40 p-4">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Seats used / allowed
        </p>
        <div className="mt-2">
          <SeatUsage
            used={license.seatsUsed}
            allowed={license.seatsAllowed}
            size="md"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <LicensePanelDetail
          label="Renewal date"
          value={formatIsoDate(license.renewalDate)}
        />
        <LicensePanelDetail
          label="Account owner email"
          value={license.ownerEmail}
        />
        <LicensePanelDetail
          label="Created date"
          value={formatIsoDate(license.createdAt)}
        />
        <LicensePanelDetail label="Notes" value={license.notes} />
      </div>
    </div>
  );
}
