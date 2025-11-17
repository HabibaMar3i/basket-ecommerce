import { useContext } from "react";
import { WishListContext } from "../components/context/contexts";

export const useWishlist = () => {
  return useContext(WishListContext);
};
