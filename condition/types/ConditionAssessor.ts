import { FieldValue } from "~/form/types/FieldValue";

type ConditionAssessor = (input1: FieldValue, input2: FieldValue) => boolean;

export type { ConditionAssessor };
