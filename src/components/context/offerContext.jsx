import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { tokenContext } from "./tokenContext";

export const offerContext = createContext();

export default function OfferContextProvider({ children }) {

    const [offer, setOffer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { token } = useContext(tokenContext);

    async function getAllOffers() {
        try {
            setLoading(true);
            setError(null);
            console.log("🔹 Sending request with token:", token);

            const domain = process.env.NODE_ENV === 'production' ? '' : 'https://e-commarce-website-eight.vercel.app';
            const { data } = await axios.get(
                `${domain}/api/v1/offer/top-offer`,
                {
                    headers: token
                        ? { Authorization: `Bearer ${token}` }
                        : {},
                }
            );

            console.log("✅ Offers fetched:", data.data);
            setOffer(data.data);
        } catch (error) {
            console.error(
                "❌ Error fetching Offers:",
                error.response?.data || error.message
            );
            setError(error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (token) {
            getAllOffers();
        } else {
            console.log("⚠️ Token not available yet");
            setLoading(false);
        }
    }, [token]);


    return <>
        <offerContext.Provider value={{ offer, setOffer, loading, error, refetch: getAllOffers }}>
            {children}
        </offerContext.Provider>
    </>
}