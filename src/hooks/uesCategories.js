import { useContext } from "react";
import { CategoriesContext } from "../components/context/contexts";

export const useCategories = () => {
  return useContext(CategoriesContext);
};
