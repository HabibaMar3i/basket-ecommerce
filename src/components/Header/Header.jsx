import { Input } from "@heroui/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/contexts";
import logo from "./../../assets/logo.svg";

export default function Header() {
    const { totalPrice, getCartItemCount } = useContext(CartContext);
    const itemCount = getCartItemCount();
    
    return (
        <>
            <header className="bg-white w-full">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 md:gap-8 px-4 md:px-6 py-3">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Basket logo"
                            className="h-10 sm:h-12 md:h-14 cursor-pointer hover:opacity-80 transition-opacity"
                        />
                    </Link>

                    <div className="w-full sm:w-[500px] md:w-[600px]">
                        <Input
                            type="text"
                            placeholder="Search for Products, fruit, meat, eggs .etc..."
                            endContent={<i className="fa-solid fa-magnifying-glass text-gray-500"></i>}
                            classNames={{
                                inputWrapper: "rounded-sm px-4 py-1",
                                input: "text-sm sm:text-base",
                            }}
                        />
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                        <Link to="/profile" className="border border-gray-300 rounded-full p-2 hover:border-[#35AFA0] hover:bg-[#35AFA0] group transition-all">
                            <i className="fa-regular fa-user text-[#3E445A] group-hover:text-white transition-colors"></i>
                        </Link>

                        <Link to="/cart" className="flex items-center gap-2 hover:opacity-80 transition-opacity relative">
                            <span className="font-semibold text-[#3E445A] text-sm sm:text-base">${(totalPrice || 0).toFixed(2)}</span>
                            <div className="relative">
                                <i className="fa-solid fa-cart-shopping text-[#35AFA0] text-lg hover:scale-110 transition-transform"></i>
                                {itemCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {itemCount}
                                    </span>
                                )}
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}
