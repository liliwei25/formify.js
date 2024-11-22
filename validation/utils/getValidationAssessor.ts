import { Validation } from "~/validation/types/Validation";
import { TextValidation } from "~/validation/types/TextValidation";
import { NumberValidation } from "~/validation/types/NumberValidation";
import { isAtLeast } from "~/validation/utils/assessors/isAtLeast";
import { isAtMost } from "~/validation/utils/assessors/isAtMost";
import { hasLength } from "~/validation/utils/assessors/hasLength";
import { isInteger } from "~/validation/utils/assessors/isInteger";
import { isPositive } from "~/validation/utils/assessors/isPositive";
import { isNegative } from "~/validation/utils/assessors/isNegative";
import { isNonNegative } from "~/validation/utils/assessors/isNonNegative";
import { ValidationAssessor } from "~/validation/types/ValidationAssessor";
import { EnumValidation } from "~/validation/types/EnumValidation";
import { isEnum } from "~/validation/utils/assessors/isEnum";
import { isMultipleOf, isNonPositive } from "~/validation";

const getValidationAssessor = (validation: Validation): ValidationAssessor => {
  switch (validation.type) {
    case EnumValidation.IsEnum:
      return isEnum;
    case TextValidation.Min:
    case NumberValidation.Min:
      return isAtLeast;
    case TextValidation.Max:
    case NumberValidation.Max:
      return isAtMost;
    case TextValidation.Length:
      return hasLength;
    case NumberValidation.Integer:
      return isInteger;
    case NumberValidation.Positive:
      return isPositive;
    case NumberValidation.NonPositive:
      return isNonPositive;
    case NumberValidation.Negative:
      return isNegative;
    case NumberValidation.NonNegative:
      return isNonNegative;
    case NumberValidation.MultipleOf:
      return isMultipleOf;
    default:
      return () => false;
  }
};

export { getValidationAssessor };
