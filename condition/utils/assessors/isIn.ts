import { FieldValue } from "~/form/types/FieldValue";

const isIn = (input1: FieldValue, input2: FieldValue): boolean => {
  if (Array.isArray(input2) || typeof input2 === "string") {
    return input2.includes(<never>input1);
  }
  return false;
};

export { isIn };
