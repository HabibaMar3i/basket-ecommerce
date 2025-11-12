import React, { useEffect, useState } from "react";
import { CartContext } from "./contexts";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
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
      value={{ cart, addToCart, decreaseQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
