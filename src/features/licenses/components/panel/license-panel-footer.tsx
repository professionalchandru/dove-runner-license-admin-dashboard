import { EditSeatsForm } from "./edit-seats-form";
import type { LicensePanelFooterProps } from "./types";

export function LicensePanelFooter({
  license,
  isSaving,
  saveError,
  onClose,
  onSaveSeats,
}: LicensePanelFooterProps) {
  return (
    <div className="shrink-0 border-t bg-muted/30 px-5 py-4">
      <EditSeatsForm
        key={`${license.id}-${license.seatsAllowed}`}
        seatsUsed={license.seatsUsed}
        seatsAllowed={license.seatsAllowed}
        isSaving={isSaving}
        onCancel={onClose}
        onSave={onSaveSeats}
      />
      {saveError ? (
        <p className="mt-3 rounded-md bg-red-100 px-2 py-1.5 text-xs text-red-950 dark:bg-red-900/40 dark:text-red-100">
          {saveError}
        </p>
      ) : null}
    </div>
  );
}
