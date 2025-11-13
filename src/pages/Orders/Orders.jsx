import React, { useEffect } from "react";
import { Spinner } from "@heroui/react";
import { useOrders } from "../../components/context/OrdersProvider";

export default function Orders() {
  const { orders, loading, error, fetchOrders } = useOrders();

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <div className="flex justify-center p-8"><Spinner size="lg" /></div>;
  if (error) return <div className="text-center text-red-500 p-8">Error: {error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      
      {orders.length === 0 ? (
        <div className="text-center text-gray-500">No orders found</div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="border rounded-lg p-4 bg-white shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">Order #{order._id}</h3>
                <span className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Name:</strong> {order.FirstName} {order.LastName}</p>
                  <p><strong>Contact:</strong> {order.Contact}</p>
                  <p><strong>Address:</strong> {order.Address}</p>
                  <p><strong>City:</strong> {order.City}</p>
                </div>
                <div>
                  <p><strong>Delivery:</strong> {order.Delivery}</p>
                  <p><strong>Payment:</strong> {order.paymentMethod}</p>
                  <p><strong>Status:</strong> <span className="text-green-600">{order.status || 'Pending'}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}