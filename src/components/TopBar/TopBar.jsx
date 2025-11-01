import { Link } from "react-router-dom"

export default function TopBar() {
    return (
        <>
            <div className="bg-[#35AFA0] h-9 flex items-center justify-center px-2 text-center">
                <p className="text-white text-[11px] sm:text-xs">
                    Due to current circumstances, there may be slight delays in order processing
                </p>
            </div>

            <div className="bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 px-4 sm:px-8 py-2 border-b border-gray-200 text-[11px] sm:text-xs text-[#3E445A]">
                <ul className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
                    <li><Link to="/about-us" className="hover:text-[#35AFA0]">About Us</Link></li>
                    <li><Link to="/" className="hover:text-[#35AFA0]">Compare</Link></li>
                    <li><Link to="/" className="hover:text-[#35AFA0]">Wishlist</Link></li>
                </ul>

                <div className="flex justify-center sm:justify-center items-center gap-2 text-center">
                    <i className="fa-solid fa-user-shield"></i>
                    <p>100% Secure delivery without contacting the courier</p>
                </div>

                <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-3">
                    <p>Need help? Call Us:</p>
                    <span className="font-bold text-[#35AFA0]">+0020 500</span>
                    <div className="hidden sm:block h-4 w-px bg-gray-300 mx-2"></div>
                    <p>English <i className="fa-solid fa-chevron-down text-[#3E445A]"></i></p>
                    <p>USD <i className="fa-solid fa-chevron-down text-[#3E445A]"></i></p>
                </div>
            </div>
        </>
    )
}
