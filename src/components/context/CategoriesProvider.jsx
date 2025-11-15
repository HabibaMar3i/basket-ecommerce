import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CategoriesContext } from "./contexts";
import { tokenContext } from "./tokenContext";

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useContext(tokenContext);

  useEffect(() => {
    const domain = 'https://e-commarce-website-eight.vercel.app';
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
      setLoading(false);
    }
  }, [token]);
  return (
    <CategoriesContext.Provider value={{ categories, loading, error }}>
      {children}
    </CategoriesContext.Provider>
  );
}
