import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { CartContext } from "./contexts";
import { tokenContext } from "./tokenContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useContext(tokenContext);

  const refreshCart = async () => {
    const domain = 'https://e-commarce-website-eight.vercel.app';
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
      const errorMsg = err.response?.data?.message || "Error fetching cart";
      setError(errorMsg);
      toast.error(errorMsg);
    }
  };

  useEffect(() => {
    if (token) {
      refreshCart().finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [token]);
  // Add To Cart
  const addToCart = async (product) => {
    const domain = 'https://e-commarce-website-eight.vercel.app';
    try {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const userId = userData.id;
      
      await axios.post(
        `${domain}/api/v1/cart/add-cart`,
        {
          userId,
          productId: product._id || product.productId,
          quantity: 1
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      toast.success('Product added to cart!');
      await refreshCart();
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Error adding to cart';
      toast.error(errorMsg);
    }
  };
  // Decrease Quantity
  const decreaseQuantity = async (itemId) => {
    const item = cart.find(i => (i.productId || i._id || i.id) === itemId);
    if (item && item.quantity <= 1) {
      toast.warning('Quantity cannot be less than 1. Use remove to delete item.');
      return;
    }
    
    const domain = 'https://e-commarce-website-eight.vercel.app';
    try {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const userId = userData.id;
      
      await axios.post(
        `${domain}/api/v1/cart/add-cart`,
        {
          userId,
          productId: item?.productId || itemId,
          quantity: -1
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      toast.success('Quantity updated!');
      await refreshCart();
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Error updating quantity';
      toast.error(errorMsg);
    }
  };
  // Remove From Cart
  const removeFromCart = async (productId) => {
    const domain = 'https://e-commarce-website-eight.vercel.app';
    try {
      await axios.delete(
        `${domain}/api/v1/cart/remove/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      toast.success('Item removed from cart!');
      await refreshCart();
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Error removing item';
      toast.error(errorMsg);
    }
  };

  // Clear Cart
  const clearCart = async () => {
    const domain = 'https://e-commarce-website-eight.vercel.app';
    try {
      await axios.delete(
        `${domain}/api/v1/cart/clear-Cart`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      toast.success('Cart cleared!');
      setCart([]);
      setTotalPrice(0);
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Error clearing cart';
      toast.error(errorMsg);
    }
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + (item.quantity || 0), 0);
  };

  const getProductQuantityInCart = (productId) => {
    const item = cart.find(i => (i.productId || i._id) === productId);
    return item ? item.quantity : 0;
  };

  const isProductInCart = (productId) => {
    return cart.some(i => (i.productId || i._id) === productId);
  };

  return (
    <CartContext.Provider
      value={{ 
        cart, 
        totalPrice, 
        addToCart, 
        decreaseQuantity, 
        removeFromCart, 
        clearCart, 
        loading, 
        error,
        getCartItemCount,
        getProductQuantityInCart,
        isProductInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
