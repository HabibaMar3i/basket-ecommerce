import { Input } from "@heroui/react";
import logo from "./../../assets/logo.svg";

export default function Header() {
    return (
        <>
            <header className="bg-white w-full">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 px-4 py-3">
                    <img
                        src={logo}
                        alt="Basket logo"
                        className="h-10 sm:h-12 cursor-pointer"
                    />

                    <div className="w-full sm:w-[500px]">
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

                    <div className="flex items-center gap-4 sm:gap-6">
                        {/* User */}
                        <button className="border border-gray-300 rounded-full p-2 hover:border-[#35AFA0] transition">
                            <i className="fa-regular fa-user text-[#3E445A]"></i>
                        </button>

                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-[#3E445A] text-sm sm:text-base">$0.00</span>
                            <i className="fa-solid fa-cart-shopping text-[#35AFA0] text-lg"></i>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
