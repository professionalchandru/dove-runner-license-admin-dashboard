"use client";

import { useState } from "react";
import { MAX_SEATS_ALLOWED, validateSeatsAllowed } from "../model";
import { nextWholeNumber } from "../utils";
import type {
  UseEditSeatsFormResult,
  UseEditSeatsFormSave,
} from "./types";

export function useEditSeatsForm(
  seatsUsed: number,
  seatsAllowed: number,
  onSave: UseEditSeatsFormSave,
): UseEditSeatsFormResult {
  const [value, setValue] = useState(String(seatsAllowed));
  const [message, setMessage] = useState<string | null>(null);

  function changeBy(delta: number) {
    setValue((current) => nextWholeNumber(current, delta, seatsAllowed));
    setMessage(null);
  }

  function updateValue(next: string) {
    if (next === "") {
      setValue(next);
      setMessage(null);
      return;
    }
    if (!/^\d+$/.test(next)) {
      return;
    }
    const parsed = Number(next);
    if (parsed > MAX_SEATS_ALLOWED) {
      setValue(String(MAX_SEATS_ALLOWED));
      setMessage(null);
      return;
    }
    setValue(next);
    setMessage(null);
  }

  async function submit() {
    const result = validateSeatsAllowed(value, seatsUsed);
    if (!result.ok) {
      setMessage(result.message);
      return;
    }
    setMessage(null);
    await onSave(result.seatsAllowed);
  }

  const parsedValue = Number.parseInt(value, 10);
  const atMax =
    !Number.isNaN(parsedValue) && parsedValue >= MAX_SEATS_ALLOWED;

  return {
    value,
    message,
    atMax,
    changeBy,
    updateValue,
    submit,
  };
}
