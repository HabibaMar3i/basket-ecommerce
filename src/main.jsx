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
import { CheckoutProvider } from "./components/context/CheckoutProvider.jsx";
import { OrdersProvider } from "./components/context/OrdersProvider.jsx";
import ProductContextProvider from "./components/context/productContext.jsx";
import OfferContextProvider from "./components/context/offerContext.jsx";
import WishlistProvider from "./components/context/WishlistProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroUIProvider>
      <TokenContextProvider>
        <CategoriesProvider>
          <ProductProvider>
            <WishlistProvider>
              <ProductContextProvider>
                <OfferContextProvider>
                  <GetProductByIdProvider>
                    <CartProvider>
                      <CheckoutProvider>
                        <OrdersProvider>
                          <App />
                        </OrdersProvider>
                      </CheckoutProvider>
                    </CartProvider>
                  </GetProductByIdProvider>
                </OfferContextProvider>
              </ProductContextProvider>
            </WishlistProvider>
          </ProductProvider>
        </CategoriesProvider>
      </TokenContextProvider>
    </HeroUIProvider>
  </StrictMode>
);
