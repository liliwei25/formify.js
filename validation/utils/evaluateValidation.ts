import { Validation } from "~/validation/types/Validation";
import { getValidationAssessor } from "~/validation/utils/getValidationAssessor";
import { FieldValue } from "~/form/types/FieldValue";

const evaluateValidation = (
  formValue: FieldValue,
  validation: Validation,
): string | null => {
  const assessor = getValidationAssessor(validation);
  const result = assessor.call(undefined, formValue, validation.value);
  return result ? null : validation.errorMessage;
};

export { evaluateValidation };
