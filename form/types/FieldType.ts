import { InputType } from "~/form/types/InputType";

type FieldType<IT extends InputType> = IT extends InputType.Text
  ? string
  : IT extends InputType.Boolean
    ? boolean
    : IT extends InputType.Number
      ? number
      : string | number;

export type { FieldType };
