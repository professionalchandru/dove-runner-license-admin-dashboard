import type { License } from "../../model";
import type { UseEditSeatsFormSave } from "../../hooks/types";

export type LicensePanelDetailProps = {
  label: string;
  value: string;
};

export type LicensePanelProps = {
  license: License | null;
  isSaving: boolean;
  saveError: string | null;
  onClose: () => void;
  onSaveSeats: UseEditSeatsFormSave;
};

export type LicensePanelHeaderProps = {
  customerName: string;
  status: License["status"];
  plan: License["plan"];
};

export type LicensePanelBodyProps = {
  license: License;
};

export type LicensePanelFooterProps = {
  license: License;
  isSaving: boolean;
  saveError: string | null;
  onClose: () => void;
  onSaveSeats: UseEditSeatsFormSave;
};

export type EditSeatsFormProps = {
  seatsUsed: number;
  seatsAllowed: number;
  isSaving: boolean;
  onCancel: () => void;
  onSave: UseEditSeatsFormSave;
};

export type EditSeatsStepperProps = {
  value: string;
  atMax: boolean;
  isSaving: boolean;
  invalid: boolean;
  onChangeBy: (delta: number) => void;
  onValueChange: (next: string) => void;
  onCancel: () => void;
};

export type EditSeatsActionsProps = {
  isSaving: boolean;
  onCancel: () => void;
};

export type EditSeatsMessageProps = {
  message: string | null;
};
