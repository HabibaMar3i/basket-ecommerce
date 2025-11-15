import React, { useState } from "react";
import { GetProductByIdContext } from "./contexts";
import axios from "axios";

export function GetProductByIdProvider({ children }) {
  const [productById, setProductById] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("userToken");
  const domain = 'https://e-commarce-website-eight.vercel.app';

  const fetchProductById = async (id) => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `${domain}/api/v1/product/get-product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProductById(res.data.product);
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching product by ID");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GetProductByIdContext.Provider
      value={{ productById, loading, error, fetchProductById }}
    >
      {children}
    </GetProductByIdContext.Provider>
  );
}
