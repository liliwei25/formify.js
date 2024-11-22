import { FieldValue } from "~/form/types/FieldValue";
import { isEqual } from "~/condition/utils/assessors/isEqual";
import { isLesserThan } from "~/condition/utils/assessors/isLesserThan";

const isLesserThanEquals = (
  input1: FieldValue,
  input2: FieldValue,
): boolean => {
  return isEqual(input1, input2) || isLesserThan(input1, input2);
};

export { isLesserThanEquals };
