import { NavLink, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from "./../../assets/logo.svg";
import Footer from '../../components/Footer/Footer';

export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-md ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 mb-15">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="Logo" className="h-10 w-auto" />
                        </Link>
                        <div className="flex space-x-4">
                            <NavLink to="/login" className="text-[#35AFA0] border-2 border-[#35AFA0] hover:text-[#35AFA0] px-4 py-2 rounded-md text-sm font-medium">
                                Login
                            </NavLink>
                            <NavLink to="/register" className="bg-[#35AFA0] text-white hover:bg-[#2d8f82] px-4 py-2 rounded-md text-sm font-medium">
                                Register
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}