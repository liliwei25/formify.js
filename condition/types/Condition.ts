import { ReferenceCondition } from "~/condition/types/ReferenceCondition";
import { FormValues } from "~/form/types/FormValues";
import { ValueCondition } from "~/condition/types/ValueCondition";
import { FieldCondition } from "~/condition/types/FieldCondition";

type Condition<FV extends FormValues> = FieldCondition<FV> &
  (ReferenceCondition<FV> | ValueCondition);

export type { Condition };
