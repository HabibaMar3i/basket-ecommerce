import React, { useState, useContext } from "react";
import { CartContext } from "../../components/context/contexts";
import { Input, Button } from "@heroui/react";
import { useCheckout } from "../../components/context/CheckoutProvider";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, totalPrice } = useContext(CartContext);
  const { createOrder, loading } = useCheckout();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Contact: "",
    FirstName: "",
    LastName: "",
    Address: "",
    Apartment: "",
    PostCode: "",
    City: "",
    paymentMethod: "Card"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("userData") || '{}');
    const userId = userData.id;
    const orderData = {
      userId,
      ...formData,
      Delivery: "Home Delivery"
    };
    await createOrder(orderData, () => navigate("/orders"));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row justify-center items-start px-6 py-10 gap-8">
      <div className="w-full lg:w-1/2 max-w-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Contact</h2>
            <Input
              name="Contact"
              placeholder="Email or mobile phone number"
              value={formData.Contact}
              onChange={(e) => setFormData({ ...formData, Contact: e.target.value })}
              required
            />
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Delivery</h2>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <Input
                placeholder="First name"
                value={formData.FirstName}
                onChange={(e) => setFormData({ ...formData, FirstName: e.target.value })}
                required
              />
              <Input
                placeholder="Last name"
                value={formData.LastName}
                onChange={(e) => setFormData({ ...formData, LastName: e.target.value })}
                required
              />
            </div>

            <Input
              placeholder="Address"
              value={formData.Address}
              onChange={(e) => setFormData({ ...formData, Address: e.target.value })}
              required
              className="mb-3"
            />

            <div className="grid grid-cols-2 gap-3 mb-3">
              <Input
                placeholder="Apartment, suite, etc. (optional)"
                value={formData.Apartment}
                onChange={(e) => setFormData({ ...formData, Apartment: e.target.value })}
              />
              <Input
                placeholder="City"
                value={formData.City}
                onChange={(e) => setFormData({ ...formData, City: e.target.value })}
                required
              />
            </div>

            <Input
              placeholder="Postal code"
              value={formData.PostCode}
              onChange={(e) => setFormData({ ...formData, PostCode: e.target.value })}
              required
            />
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Shipping method</h2>
            <div className="border border-gray-300 rounded-md px-4 py-3 flex justify-between items-center">
              <span>Standard</span>
              <span className="font-medium">FREE</span>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Payment</h2>
            <p className="text-sm text-gray-500 mb-3">
              All transactions are secure and encrypted.
            </p>
            <Button
              type="submit"
              isLoading={loading}
              className="w-full bg-[#35AFA0] hover:bg-[#2d8f82] text-white mt-4"
              size="lg"
            >
              {loading ? "Processing..." : "Pay with Stripe"}
            </Button>
          </div>
        </form>
      </div>

      <div className="w-full lg:w-1/3 border-t lg:border-t-0 lg:border-l border-gray-200 pt-6 lg:pt-0 lg:pl-8">
        <div className="flex flex-col gap-4">
          {cart?.map((item) => (
            <div key={item.id || item._id} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src={item.Image?.url || "https://via.placeholder.com/60"}
                  alt={item.Name || item.name}
                  className="w-14 h-14 rounded-md border"
                />
                <p className="text-sm text-gray-700">
                  {item.Name || item.name}
                </p>
              </div>
              <span className="text-sm font-medium">${item.Price || item.price}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-6 pt-4 text-sm text-gray-700">
          <div className="flex justify-between mb-2">
            <span>Subtotal ({cart?.length || 0} items)</span>
            <span>${(totalPrice || 0).toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          <div className="flex justify-between font-semibold text-base mt-4">
            <span>Total</span>
            <span>USD ${(totalPrice || 0).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}