import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from '@heroui/react'
import './index.css'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'flowbite/dist/flowbite.min.js'
import TokenContextProvider from './components/context/tokenContext.jsx'
import CategoryContextProvider from './components/context/categoryContext.jsx'
import OfferContextProvider from './components/context/offerContext.jsx'
import ProductContextProvider from './components/context/productContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <TokenContextProvider>
      <ProductContextProvider>
        <OfferContextProvider>
          <CategoryContextProvider>
            <HeroUIProvider>
              <App />
            </HeroUIProvider>
          </CategoryContextProvider>
        </OfferContextProvider>
      </ProductContextProvider> 
    </TokenContextProvider>

  </StrictMode>,
)
