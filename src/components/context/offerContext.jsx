import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { tokenContext } from "./tokenContext";

export const offerContext = createContext();

export default function OfferContextProvider({ children }) {

    const [offer, setOffer] = useState(null);
    const [offerWeek, setOfferWeek] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { token } = useContext(tokenContext);

    async function getAllOffers() {
        try {
            setLoading(true);
            setError(null);
            console.log("🔹 Sending request with token:", token);

            const domain = process.env.NODE_ENV === 'production' ? 'https://cors-anywhere.herokuapp.com/https://e-commarce-website-eight.vercel.app' : 'https://e-commarce-website-eight.vercel.app';
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

    async function getOffersThisWeek() {
        try {
            setLoading(true);
            setError(null);
            console.log("🔹 Sending request with token:", token);

            const domain = process.env.NODE_ENV === 'production' ? 'https://cors-anywhere.herokuapp.com/https://e-commarce-website-eight.vercel.app' : 'https://e-commarce-website-eight.vercel.app';
            const { data } = await axios.get(
                `${domain}/api/v1/offer/offer-this-week`,
                {
                    headers: token
                        ? { Authorization: `Bearer ${token}` }
                        : {},
                }
            );

            console.log("✅ OffersThisWeek fetched:", data.offers);
            setOfferWeek(data.offers);
        } catch (error) {
           console.log(error);
           
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (token) {
            getAllOffers();
            getOffersThisWeek();
        } else {
            console.log("⚠️ Token not available yet");
            setLoading(false);
        }
    }, [token]);


    return <>
        <offerContext.Provider value={{
            offer,
            setOffer,
            offerWeek,
            setOfferWeek,
            loading,
            error,
            refetch: getAllOffers,
            refetchWeekOffers: getOffersThisWeek
        }}>
            {children}
        </offerContext.Provider>
    </>
}