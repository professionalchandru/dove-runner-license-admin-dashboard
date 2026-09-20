"use client";

import { useEditSeatsForm } from "../../hooks";
import { EditSeatsActions } from "./edit-seats-actions";
import { EditSeatsMessage } from "./edit-seats-message";
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
      <EditSeatsMessage message={message} />
      <EditSeatsActions isSaving={isSaving} onCancel={onCancel} />
    </form>
  );
}
