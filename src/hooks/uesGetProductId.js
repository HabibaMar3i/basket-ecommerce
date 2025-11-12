import { useContext } from "react";
import { GetProductByIdContext } from "../components/context/contexts";

export function useProductById() {
  const context = useContext(GetProductByIdContext);

  if (!context) {
    throw new Error(
      "useProductById must be used within a GetProductByIdProvider"
    );
  }

  return context;
}
