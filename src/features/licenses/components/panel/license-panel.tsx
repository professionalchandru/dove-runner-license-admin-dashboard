"use client";

import { Sheet, SheetContent } from "@/components/ui";
import { LicensePanelBody } from "./license-panel-body";
import { LicensePanelFooter } from "./license-panel-footer";
import { LicensePanelHeader } from "./license-panel-header";
import type { LicensePanelProps } from "./types";

export function LicensePanel({
  license,
  isSaving,
  saveError,
  onClose,
  onSaveSeats,
}: LicensePanelProps) {
  return (
    <Sheet
      open={license !== null}
      onOpenChange={(open) => {
        if (!open && !isSaving) {
          onClose();
        }
      }}
    >
      <SheetContent side="right" className="gap-0 overflow-hidden p-0">
        {license ? (
          <div className="flex h-full min-h-0 flex-col">
            <LicensePanelHeader
              customerName={license.customerName}
              status={license.status}
              plan={license.plan}
            />
            <LicensePanelBody license={license} />
            <LicensePanelFooter
              license={license}
              isSaving={isSaving}
              saveError={saveError}
              onClose={onClose}
              onSaveSeats={onSaveSeats}
            />
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
