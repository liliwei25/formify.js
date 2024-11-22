import { FieldValue } from "~/form/types/FieldValue";
import { isEqual } from "~/condition/utils/assessors/isEqual";
import { isGreaterThan } from "~/condition/utils/assessors/isGreaterThan";

const isGreaterThanEquals = (
  input1: FieldValue,
  input2: FieldValue,
): boolean => {
  return isEqual(input1, input2) || isGreaterThan(input1, input2);
};

export { isGreaterThanEquals };
