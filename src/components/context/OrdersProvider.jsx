import { createContext, useContext, useState, useEffect } from "react";

const OrdersContext = createContext();

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error("useOrders must be used within OrdersProvider");
  }
  return context;
};

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const userData = JSON.parse(localStorage.getItem("userData") || '{}');
      const userId = userData.id;
      console.log('User ID:', userId);
      
      const response = await fetch(`https://e-commarce-website-eight.vercel.app/api/v1/order/get-user-orders/${userId}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("userToken")}`
        }
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) throw new Error(data.message || "Failed to fetch orders");
      
      setOrders(data.orders || []);
      setError(null);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };



  return (
    <OrdersContext.Provider value={{ orders, loading, error, fetchOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};