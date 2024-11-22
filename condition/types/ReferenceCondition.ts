import { FormValues } from "~/form/types/FormValues";

type ReferenceCondition<FV extends FormValues = FormValues> = {
  referenceField: keyof FV;
  value: never;
};

export type { ReferenceCondition };
