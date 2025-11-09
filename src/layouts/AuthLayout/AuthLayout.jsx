import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from "./../../assets/logo.svg";

export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="Logo" className="h-8 w-auto" />
                        </Link>
                        <div className="flex space-x-4">
                            <Link to="/login" className="text-gray-600 hover:text-[#35AFA0] px-3 py-2 rounded-md text-sm font-medium">
                                Login
                            </Link>
                            <Link to="/register" className="bg-[#35AFA0] text-white hover:bg-[#2d8f82] px-4 py-2 rounded-md text-sm font-medium">
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}