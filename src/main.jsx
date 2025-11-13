import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import "./index.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "flowbite/dist/flowbite.min.js";
import TokenContextProvider from "./components/context/tokenContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TokenContextProvider>
      <HeroUIProvider>
        <App />
      </HeroUIProvider>
    </TokenContextProvider>
  </StrictMode>
);
