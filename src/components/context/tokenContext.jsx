import { createContext, useState , useEffect } from "react";

export let tokenContext = createContext();

export default function TokenContextProvider(props) {
    const [token, setToken] = useState(null)

     useEffect(() => {
        const storedToken = localStorage.getItem('userToken');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    return <tokenContext.Provider value={{token,setToken}}>
        {props.children}
    </tokenContext.Provider>
} 