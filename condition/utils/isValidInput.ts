import { FieldValue } from "~/form/types/FieldValue";

const isValidInput = (input: FieldValue, acceptedTypes: string[]): boolean => {
  return acceptedTypes.includes(typeof input);
};

export { isValidInput };
