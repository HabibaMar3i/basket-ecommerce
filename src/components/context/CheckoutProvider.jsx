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
      const domain = 'https://e-commarce-website-eight.vercel.app';
      const orderResponse = await fetch(`${domain}/api/v1/order/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("userToken")}`
        },
        body: JSON.stringify(orderData)
      });

      if (!orderResponse.ok) {
        throw new Error(`Failed to create order: ${orderResponse.status}`);
      }
      
      const orderResult = await orderResponse.json();
      const orderId = orderResult.orderId;
      
      if (!orderId) {
        throw new Error('No order ID returned from order creation');
      }
      
      const stripeResponse = await fetch(`${domain}/api/v1/payment/checkout/${orderId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("userToken")}`
        }
      });
      
      if (!stripeResponse.ok) {
        throw new Error(`Failed to create checkout: ${stripeResponse.status}`);
      }
      
      const stripeData = await stripeResponse.json();
      
      if (stripeData.checkoutUrl || stripeData.url) {
        const redirectUrl = stripeData.checkoutUrl || stripeData.url;
        window.location.href = redirectUrl;
      } else {
        toast.success("Order placed successfully!");
        clearCart();
        onSuccess?.();
      }
    } catch (error) {
      toast.error("Failed to process payment. Please try again.");
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
