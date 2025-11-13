import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "./contexts";

const CheckoutContext = createContext();

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within CheckoutProvider");
  }
  return context;
};

export const CheckoutProvider = ({ children }) => {
  const { clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const createOrder = async (orderData, onSuccess) => {
    setLoading(true);
    try {
      console.log('Order data:', orderData);
      const response = await fetch("https://e-commarce-website-eight.vercel.app/api/v1/order/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("userToken")}`
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('API Error:', response.status, errorData);
        throw new Error(`Failed to create order: ${response.status}`);
      }
      
      toast.success("Order placed successfully!");
      clearCart();
      onSuccess?.();
    } catch (error) {
      console.error('Order creation error:', error);
      toast.error("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CheckoutContext.Provider value={{ createOrder, loading }}>
      {children}
    </CheckoutContext.Provider>
  );
};