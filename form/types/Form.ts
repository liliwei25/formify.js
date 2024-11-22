import { FormVersion } from "~/form/types/FormVersion";

interface Form {
  id: string;

  title: string;

  versions: FormVersion[];
}

export type { Form };
