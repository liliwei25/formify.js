import { Validation } from "~/validation/types/Validation";
import { InputType } from "~/form/types/InputType";
import { ConditionGroup } from "~/condition/types/ConditionGroup";
import { Key } from "~/form/types/Key";

interface FormStep<T extends InputType = InputType> {
  key: Key;

  inputType: T;

  conditions?: ConditionGroup;

  validations?: Validation[];
}

export type { FormStep };
