import { ReactNode } from "react";

export type CategorySelectProps = {
  categorySelected: string
  hasCheckBox?: boolean
  setCategory: (categoryId: string) => void
}
