import { useLocation, Link } from 'react-router-dom';

export default function Breadcrumbs() {
    const location = useLocation();
    
    const getPageName = () => {
        const path = location.pathname.replace('/', '');
        return path.replace('-', ' ');
    };

    const currentPage = getPageName();
    
    if (location.pathname === '/') return null;
    
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3 text-[13px] sm:text-sm text-gray-500 py-3 px-4 uppercase">
                <Link to="/" className="text-[#3E445A] cursor-pointer transition-colors hover:text-gray-700">Home</Link>
                <i className="fa-solid fa-chevron-right text-[10px] text-gray-400"></i>
                <span className="text-gray-500">{currentPage}</span>
            </div>
        </div>
    );
}
