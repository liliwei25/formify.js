import { ConditionOperator } from "~/condition/types/ConditionOperator";
import { isEqual } from "~/condition/utils/assessors/isEqual";
import { isGreaterThan } from "~/condition/utils/assessors/isGreaterThan";
import { isGreaterThanEquals } from "~/condition/utils/assessors/isGreaterThanEquals";
import { isLesserThan } from "~/condition/utils/assessors/isLesserThan";
import { isLesserThanEquals } from "~/condition/utils/assessors/isLesserThanEquals";
import { isIn } from "~/condition/utils/assessors/isIn";
import { ConditionAssessor } from "~/condition/types/ConditionAssessor";

const getOperatorAssessor = (
  operator: ConditionOperator,
): ConditionAssessor => {
  switch (operator) {
    case ConditionOperator.Equals:
      return isEqual;
    case ConditionOperator.GreaterThan:
      return isGreaterThan;
    case ConditionOperator.GreaterThanEquals:
      return isGreaterThanEquals;
    case ConditionOperator.LesserThan:
      return isLesserThan;
    case ConditionOperator.LesserThanEquals:
      return isLesserThanEquals;
    case ConditionOperator.And:
      return (input1, input2) => !!input1 && !!input2;
    case ConditionOperator.Or:
      return (input1, input2) => !!input1 || !!input2;
    case ConditionOperator.In:
      return isIn;
    default:
      return () => false;
  }
};

export { getOperatorAssessor };
