import { ConditionOperator } from "~/condition/types/ConditionOperator";
import { FormValues } from "~/form/types/FormValues";

type FieldCondition<FV extends FormValues = FormValues> = {
  field: keyof FV;
  operator: ConditionOperator;
};

export type { FieldCondition };
