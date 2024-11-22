import { FieldValue } from "~/form/types/FieldValue";

const isEqual = (input1: FieldValue, input2: FieldValue): boolean => {
  return input1 === input2;
};

export { isEqual };
