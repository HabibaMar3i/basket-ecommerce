import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { tokenContext } from "./tokenContext";

export const categoryContext = createContext();

export default function CategoryContextProvider({ children }) {
    const [category, setCategory] = useState(null);
    const { token } = useContext(tokenContext);

    async function getAllCategory() {
        try {
            console.log("🔹 Sending request with token:", token);

            const domain = process.env.NODE_ENV === 'production' ? 'https://cors-anywhere.herokuapp.com/https://e-commarce-website-eight.vercel.app' : 'https://e-commarce-website-eight.vercel.app';
            const { data } = await axios.get(
                `${domain}/api/v1/category/get-category`,
                {
                    headers: token
                        ? { Authorization: `Bearer ${token}` }
                        : {},
                }
            );

            console.log("✅ Categories fetched:", data.categories);
            setCategory(data.categories);
        } catch (error) {
            console.error(
                "❌ Error fetching categories:",
                error.response?.data || error.message
            );
        }
    }

    useEffect(() => {
        if (token) {
            getAllCategory();
        } else {
            console.log("⚠️ Token not available yet");
        }
    }, [token]);

    return <>
        <categoryContext.Provider value={{ category, setCategory }}>
            {children}
        </categoryContext.Provider>
    </>
}
