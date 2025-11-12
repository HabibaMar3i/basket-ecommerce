import { useContext } from "react";
import { ProductsContext } from "../components/context/contexts";

export const useProducts = () => {
  return useContext(ProductsContext);
};
