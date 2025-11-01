import TopBar from "../TopBar/TopBar";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Breadcrumbs from './../Breadcrumbs/Breadcrumbs';

export default function NavbarComponent() {
  return (
    <>
      <TopBar />
      <Header />

      <nav className="bg-white border-b border-gray-200 pb-2">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between">
          <button className="bg-[#35AFA0] text-white flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-3 uppercase font-semibold text-sm w-full sm:w-auto rounded-4xl hover:bg-[#2d8f82] transition-colors">
            <i className="fa-solid fa-bars"></i>
            <span>All Categories</span>
            <i className="fa-solid fa-chevron-down text-xs"></i>
          </button>

          <ul className="flex flex-wrap justify-center sm:justify-end items-center gap-6 px-4 py-3 sm:py-0 text-[#3E445A] uppercase font-semibold text-sm">
            <li className="bg-[#F0FAFF] text-[#35AFA0] px-4 py-2 rounded-3xl hover:bg-[#35AFA0] hover:text-white transition-all">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-[#35AFA0] transition-colors">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-[#35AFA0] transition-colors flex items-center gap-1">
                <i className="fa-solid fa-drumstick-bite text-gray-500"></i> Meats & Seafood
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-[#35AFA0] transition-colors flex items-center gap-1">
                <i className="fa-solid fa-bread-slice text-gray-500"></i> Bakery
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-[#35AFA0] transition-colors flex items-center gap-1">
                <i className="fa-solid fa-mug-hot text-gray-500"></i> Beverages
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#35AFA0] transition-colors">Blog</Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-[#35AFA0] transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Breadcrumbs />
      
      </>
  );
}
