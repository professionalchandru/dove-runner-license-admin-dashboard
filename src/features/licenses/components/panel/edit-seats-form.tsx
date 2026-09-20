"use client";

import { useEditSeatsForm } from "../../hooks";
import { EditSeatsActions } from "./edit-seats-actions";
import { EditSeatsStepper } from "./edit-seats-stepper";
import type { EditSeatsFormProps } from "./types";

export function EditSeatsForm({
  seatsUsed,
  seatsAllowed,
  isSaving,
  onCancel,
  onSave,
}: EditSeatsFormProps) {
  const { value, message, atMax, changeBy, updateValue, submit } =
    useEditSeatsForm(seatsUsed, seatsAllowed, onSave);

  return (
    <form
      className="space-y-3"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        void submit();
      }}
    >
      <EditSeatsStepper
        value={value}
        atMax={atMax}
        isSaving={isSaving}
        invalid={Boolean(message)}
        onChangeBy={changeBy}
        onValueChange={updateValue}
        onCancel={onCancel}
      />
      {message ? (
        <p className="rounded-md bg-amber-100 px-2 py-1.5 text-xs text-amber-950 dark:bg-amber-900/40 dark:text-amber-100">
          {message}
        </p>
      ) : null}
      <EditSeatsActions isSaving={isSaving} onCancel={onCancel} />
    </form>
  );
}
