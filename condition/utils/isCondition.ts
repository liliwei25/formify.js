import { ConditionGroup } from "~/condition/types/ConditionGroup";
import { Condition } from "~/condition/types/Condition";
import { FormValues } from "~/form/types/FormValues";

const isCondition = <FV extends FormValues = FormValues>(
  condition: Condition<FV> | ConditionGroup<FV>,
): condition is Condition<FV> => {
  return !!(<Condition<FV>>condition).field;
};

export { isCondition };
