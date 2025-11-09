import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import MainLayout from './layouts/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import Blog from './pages/Blog/Blog';
import AboutUs from './pages/AboutUs/AboutUs';
import Cart from './pages/Cart/Cart';
import ContactUs from './pages/ContactUs/ContactUs';
import Shop from './pages/Shop/Shop';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';

function App() {

  const routes = createBrowserRouter([
    {
      path: '', element: <MainLayout />, children: [
        { index: true, element: <HomePage /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: 'about-us', element: <AboutUs /> },
        { path: 'blog', element: <Blog /> },
        { path: 'cart', element: <Cart /> },
        { path: 'contact-us', element: <ContactUs /> },
        { path: 'shop', element: <Shop /> },
        { path: 'profile', element: <Profile /> },
        { path: '*', element: <NotFound /> }
      ]
    }

  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
