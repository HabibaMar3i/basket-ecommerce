import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import "./index.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "flowbite/dist/flowbite.min.js";
import TokenContextProvider from "./components/context/tokenContext.jsx";
import { CategoriesProvider } from "./components/context/CategoriesProvider.jsx";
import { ProductProvider } from "./components/context/productsProvider.jsx";
import { GetProductByIdProvider } from "./components/context/GetProductByIdProvider.jsx";
import CartProvider from "./components/context/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroUIProvider>
      <TokenContextProvider>
        <CategoriesProvider>
          <ProductProvider>
            <GetProductByIdProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </GetProductByIdProvider>
          </ProductProvider>
        </CategoriesProvider>
      </TokenContextProvider>
    </HeroUIProvider>
  </StrictMode>
);
