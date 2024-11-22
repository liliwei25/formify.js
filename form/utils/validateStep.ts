import { FormStep } from "~/form/types/FormStep";
import { evaluateValidation } from "~/validation/utils/evaluateValidation";
import { FormValues } from "~/form/types/FormValues";

const validateStep = <FV extends FormValues = FormValues>(
  formValues: FV,
  step: FormStep,
): (string | null)[] => {
  return (step.validations ?? []).map((validation) =>
    evaluateValidation(formValues[step.key], validation),
  );
};

export { validateStep };
