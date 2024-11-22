import { ConditionGroupOperator } from "~/condition/types/ConditionGroupOperator";
import { Condition } from "~/condition/types/Condition";
import { FormValues } from "~/form/types/FormValues";

type ConditionGroup<FV extends FormValues = FormValues> = {
  operator: ConditionGroupOperator;
  conditions: (Condition<FV> | ConditionGroup<FV>)[];
};

export type { ConditionGroup };
