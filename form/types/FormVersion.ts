import { FormStep } from "~/form/types/FormStep";

interface FormVersion {
  versionId: string;

  createdAt: Date;

  steps: FormStep[];
}

export type { FormVersion };
