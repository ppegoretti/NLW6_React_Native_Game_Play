import { ReactNode } from "react";

export type CategorySelectProps = {
  categorySelected: string
  setCategory: (categoryId: string) => void
}
