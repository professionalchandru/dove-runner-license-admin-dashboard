import type { EditSeatsMessageProps } from "./types";

export function EditSeatsMessage({ message }: EditSeatsMessageProps) {
  if (!message) {
    return null;
  }

  return (
    <p className="rounded-md bg-amber-100 px-2 py-1.5 text-xs text-amber-950 dark:bg-amber-900/40 dark:text-amber-100">
      {message}
    </p>
  );
}
