import { createContext } from "react";
import { FilterValuesType } from "../types/context";

export const FilterContext = createContext<FilterValuesType | undefined>(
  undefined
);
