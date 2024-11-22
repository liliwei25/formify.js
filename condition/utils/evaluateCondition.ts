import { getOperatorAssessor } from "~/condition/utils/getOperatorAssessor";
import { Condition } from "~/condition/types/Condition";
import { FormValues } from "~/form/types/FormValues";

const evaluateCondition = <FV extends FormValues = FormValues>(
  formValues: FV,
  condition: Condition<FV>,
): boolean => {
  const assessor = getOperatorAssessor(condition.operator);
  const reference = condition.referenceField
    ? formValues[condition.referenceField]
    : condition.value;
  return assessor(formValues[condition.field], reference);
};

export { evaluateCondition };
