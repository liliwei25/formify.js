import { isValidInput } from "~/condition/utils/isValidInput";
import { FieldValue } from "~/form/types/FieldValue";

const isLesserThan = (input1: FieldValue, input2: FieldValue): boolean => {
  if (
    [input1, input2].some((input) => !isValidInput(input, ["string", "number"]))
  ) {
    return false;
  }
  if (isNaN(+input1) || isNaN(+input2)) {
    return input1 < input2;
  }
  return +input1 < +input2;
};

export { isLesserThan };
