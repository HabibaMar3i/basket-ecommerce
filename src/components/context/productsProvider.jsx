import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsContext } from "./contexts";
export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const domain = "https://e-commarce-website-eight.vercel.app";
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${domain}/api/v1/product/get-all-product`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(res.data.products);
      } catch (err) {
        setError(err.response?.data?.message || "Error feching products");
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      fetchProducts();
    } else {
      setError("No token found");
      setLoading(false);
    }
  }, []);
  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
}
