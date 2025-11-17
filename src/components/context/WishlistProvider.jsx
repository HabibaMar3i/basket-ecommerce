import React, { useContext, useEffect, useState } from "react";
import { WishListContext } from "./contexts";
import axios from "axios";
import { tokenContext } from "./tokenContext";

export default function WishlistProvider({ children }) {
  const { token } = useContext(tokenContext);
  const domain = "https://e-commarce-website-eight.vercel.app";
  //
  const [userId, setUserId] = useState(null);

  const [wishlist, setWishlist] = useState([]);
  //
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUserId(userData?.id);
  }, []);
  const addToWishlist = async (productId) => {
    if (!userId) {
      console.log("non userId ");
      return;
    }
    try {
      await axios.post(
        `${domain}/api/v1/wishlist/add-favorite`,
        {
          productId,
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("done");
      getWishlist();
    } catch {
      console.log("error Add wishlist");
    }
  };
  //
  const getWishlist = async () => {
    if (!userId) {
      console.log("non userId ");
      return;
    }
    try {
      const { data } = await axios.get(
        `${domain}/api/v1/wishlist/get-favorite/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setWishlist(data);
    } catch {
      console.log("error get wishlist");
    }
  };
  return (
    <WishListContext.Provider value={{ addToWishlist, getWishlist, wishlist }}>
      {children}
    </WishListContext.Provider>
  );
}
