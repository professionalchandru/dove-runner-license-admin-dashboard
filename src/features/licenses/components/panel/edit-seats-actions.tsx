import { Button } from "@/components/ui";
import type { EditSeatsActionsProps } from "./types";

export function EditSeatsActions({
  isSaving,
  onCancel,
}: EditSeatsActionsProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button
        type="button"
        variant="outline"
        disabled={isSaving}
        onClick={onCancel}
      >
        Cancel
      </Button>
      <Button type="submit" disabled={isSaving}>
        {isSaving ? "Saving…" : "Save"}
      </Button>
    </div>
  );
}
