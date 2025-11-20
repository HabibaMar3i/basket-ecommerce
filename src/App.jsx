import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./refreshToken";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MainLayout from "./layouts/MainLayout/MainLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import HomePage from "./pages/HomePage/HomePage";
import Blog from "./pages/Blog/Blog";
import AboutUs from "./pages/AboutUs/AboutUs";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import ContactUs from "./pages/ContactUs/ContactUs";
import Shop from "./pages/Shop/Shop";
import Categories from "./pages/Categories/Categories";
import Orders from "./pages/Orders/Orders";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRoute from "./components/AuthRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wishlist from "./pages/Wishlist/Wishlist";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <HomePage /> },
        { path: "about-us", element: <AboutUs /> },
        { path: "blog", element: <Blog /> },
        { path: "cart", element: <Cart /> },
        { path: "checkout", element: <Checkout /> },
        { path: "contact-us", element: <ContactUs /> },
        { path: "shop", element: <Shop /> },
        { path: "categories/:id", element: <Categories /> },
        { path: "orders", element: <Orders /> },
        { path: "profile", element: <Profile /> },
        { path: "wishlist", element: <Wishlist /> },
      ],
    },
    {
      path: "",
      element: (
        <AuthRoute>
          <AuthLayout />
        </AuthRoute>
      ),
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
