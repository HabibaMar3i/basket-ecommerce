import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { tokenContext } from "./tokenContext";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
    const [bestSeller, setBestSeller] = useState(null);
    const [loading, setLoading] = useState(true);
    const { token } = useContext(tokenContext);

    async function getAllBestSeller() {
        try {
            setLoading(true);
            console.log("🔹 Sending request with token:", token);

            const domain = process.env.NODE_ENV === 'production' ? '' : 'https://e-commarce-website-eight.vercel.app';
            const { data } = await axios.get(
                `${domain}/api/v1/product/get-bestseller`,
                {
                    headers: token
                        ? { Authorization: `Bearer ${token}` }
                        : {},
                }
            );

            console.log("✅ BestSeller fetched:", data.data);
            setBestSeller(data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (token) {
            getAllBestSeller();
        } else {
            console.log("⚠️ Token not available yet");
            setLoading(false);
        }
    }, [token]);

    return (
        <ProductContext.Provider value={{ bestSeller, setBestSeller, loading }}>
            {children}
        </ProductContext.Provider>
    );
}
