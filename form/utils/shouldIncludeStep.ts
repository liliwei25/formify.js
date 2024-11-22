import { FormStep } from "~/form/types/FormStep";
import { evaluateConditionGroup } from "~/condition/utils/evaluateConditionGroup";
import { FormValues } from "~/form/types/FormValues";

const shouldIncludeStep = <FV extends FormValues = FormValues>(
  formValues: FV,
  step: FormStep,
): boolean => {
  if (!step.conditions) {
    return true;
  }
  return evaluateConditionGroup(formValues, step.conditions);
};

export { shouldIncludeStep };
