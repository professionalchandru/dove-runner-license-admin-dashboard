import { Minus, Plus } from "lucide-react";
import type { KeyboardEvent } from "react";
import { Button, Input, Label } from "@/components/ui";
import { MAX_SEATS_ALLOWED } from "../../model";
import { isBlockedSeatsKey } from "../../utils";
import type { EditSeatsStepperProps } from "./types";

export function EditSeatsStepper({
  value,
  atMax,
  isSaving,
  invalid,
  onChangeBy,
  onValueChange,
  onCancel,
}: EditSeatsStepperProps) {
  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      onChangeBy(1);
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      onChangeBy(-1);
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      onCancel();
      return;
    }
    if (isBlockedSeatsKey(event.key)) {
      event.preventDefault();
    }
  }

  return (
    <div className="grid gap-1.5">
      <Label htmlFor="seats-allowed">Edit seats allowed</Label>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Decrease seats allowed"
          disabled={isSaving}
          onClick={() => {
            onChangeBy(-1);
          }}
        >
          <Minus />
        </Button>
        <Input
          id="seats-allowed"
          type="number"
          inputMode="numeric"
          min={0}
          max={MAX_SEATS_ALLOWED}
          step={1}
          value={value}
          disabled={isSaving}
          aria-invalid={invalid ? true : undefined}
          className="text-center tabular-nums"
          onChange={(event) => {
            onValueChange(event.target.value);
          }}
          onKeyDown={handleKeyDown}
          onWheel={(event) => {
            event.currentTarget.blur();
          }}
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Increase seats allowed"
          disabled={isSaving || atMax}
          onClick={() => {
            onChangeBy(1);
          }}
        >
          <Plus />
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Arrow keys change the number. Enter saves.
      </p>
    </div>
  );
}
