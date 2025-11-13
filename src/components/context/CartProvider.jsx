import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "./contexts";
import { tokenContext } from "./tokenContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useContext(tokenContext);

  useEffect(() => {
    const domain = process.env.NODE_ENV === 'production' ? '' : 'https://e-commarce-website-eight.vercel.app';
    const fetchCart = async () => {
      try {
        const res = await axios.get(
          `${domain}/api/v1/cart/get-cart`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCart(res.data.cart?.items || []);
        setTotalPrice(res.data.cart?.totalPrice || 0);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching cart");
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      fetchCart();
    } else {
      setLoading(false);
    }
  }, [token]);
  // Add To Cart
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i._id === product._id);
      if (exists) {
        return prev.map((i) =>
          i._id === product._id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  // Decrease Quantity
  const decreaseQuantity = (productId) => {
    setCart((prev) => {
      const updated = prev
        .map((i) =>
          i._id === productId
            ? { ...i, quantity: Math.max(i.quantity - 1, 0) }
            : i
        )
        .filter((i) => i.quantity > 0);
      return updated;
    });
  };
  // Remove From Cart
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((i) => i._id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ cart, totalPrice, addToCart, decreaseQuantity, removeFromCart, loading, error }}
    >
      {children}
    </CartContext.Provider>
  );
}
