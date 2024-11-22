import { ConditionGroupOperator } from "~/condition/types/ConditionGroupOperator";
import { isCondition } from "~/condition/utils/isCondition";
import { evaluateCondition } from "~/condition/utils/evaluateCondition";
import { FormValues } from "~/form/types/FormValues";
import { ConditionGroup } from "~/condition/types/ConditionGroup";

const evaluateConditionGroup = <FV extends FormValues = FormValues>(
  form: FV,
  { operator, conditions }: ConditionGroup<FV>,
): boolean => {
  const assessor = operator === ConditionGroupOperator.Or ? "some" : "every";
  return conditions[assessor]((condition) =>
    isCondition(condition)
      ? evaluateCondition(form, condition)
      : evaluateConditionGroup(form, condition),
  );
};

export { evaluateConditionGroup };
