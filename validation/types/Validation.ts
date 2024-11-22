import { InputValidation } from "~/validation/types/InputValidation";

interface Validation {
  type: InputValidation;

  value?: unknown;

  errorMessage: string;
}

export type { Validation };
