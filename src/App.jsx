import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import MainLayout from './layouts/MainLayout/MainLayout';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import HomePage from './pages/HomePage/HomePage';
import Blog from './pages/Blog/Blog';
import AboutUs from './pages/AboutUs/AboutUs';
import Cart from './pages/Cart/Cart';
import ContactUs from './pages/ContactUs/ContactUs';
import Shop from './pages/Shop/Shop';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import AuthRoute from './components/AuthRoute';

function App() {

  const routes = createBrowserRouter([
    {
      path: '', 
      element: <ProtectedRoute><MainLayout /></ProtectedRoute>, 
      children: [
        { index: true, element: <HomePage /> },
        { path: 'about-us', element: <AboutUs /> },
        { path: 'blog', element: <Blog /> },
        { path: 'cart', element: <Cart /> },
        { path: 'contact-us', element: <ContactUs /> },
        { path: 'shop', element: <Shop /> },
        { path: 'profile', element: <Profile /> }
      ]
    },
    {
      path: '', 
      element: <AuthRoute><AuthLayout /></AuthRoute>, 
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> }
      ]
    },
    { path: '*', element: <NotFound /> }
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
