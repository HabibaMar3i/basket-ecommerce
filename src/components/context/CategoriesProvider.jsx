import axios from "axios";
import { useEffect, useState } from "react";
import { CategoriesContext } from "./contexts";

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const domain = "https://e-commarce-website-eight.vercel.app";
    const fetchCategorise = async () => {
      try {
        const res = await axios.get(`${domain}/api/v1/category/get-category`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategories(res.data.categories);
      } catch (err) {
        setError(err.response?.data?.message || "Error feching categories");
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      fetchCategorise();
    } else {
      setError("No token found");
      setLoading(false);
    }
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories, loading, error }}>
      {children}
    </CategoriesContext.Provider>
  );
}
