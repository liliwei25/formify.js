import { TextValidation } from "~/validation/types/TextValidation";
import { NumberValidation } from "~/validation/types/NumberValidation";
import { EnumValidation } from "~/validation/types/EnumValidation";

type InputValidation = TextValidation | NumberValidation | EnumValidation;

export type { InputValidation };
