import React, { useContext, useEffect, useState } from "react";
import { WishListContext } from "./contexts";
import axios from "axios";
import { tokenContext } from "./tokenContext";

export default function WishlistProvider({ children }) {
  const { token } = useContext(tokenContext);
  const domain = "https://e-commarce-website-eight.vercel.app";
  //
  const [userId, setUserId] = useState(null);
  const [loading, setloading] = useState(false);
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
      setloading(true);
      await axios.post(
        `${domain}/api/v1/wishlist/add-favorite`,
        {
          userId,
          productId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("done");
      await getWishlist();
    } catch {
      console.log("error Add wishlist");
    } finally {
      setloading(false);
    }
  };
  //
  const getWishlist = async () => {
    if (!userId) {
      console.log("non userId ");
      return;
    }
    try {
      setloading(true);
      const { data } = await axios.get(
        `${domain}/api/v1/wishlist/get-favorite/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setWishlist(data.products);
    } catch {
      console.log("error get wishlist");
    } finally {
      setloading(false);
    }
  };
  const removeWishlist = async (productId) => {
    if (!userId) {
      console.log("non userId ");
      return;
    }
    try {
      setloading(true);
      await axios.delete(
        `${domain}/api/v1/wishlist/delete-favorite/${userId}`,
        {
          data: { userId, productId },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getWishlist();
      console.log("delete product");
    } catch {
      console.log("error delete product");
    } finally {
      setloading(false);
    }
  };
  return (
    <WishListContext.Provider
      value={{ addToWishlist, getWishlist, removeWishlist, wishlist, loading }}
    >
      {children}
    </WishListContext.Provider>
  );
}
