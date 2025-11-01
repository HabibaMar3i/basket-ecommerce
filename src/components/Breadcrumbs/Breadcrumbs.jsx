import { useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
    const location = useLocation();
    
    const getPageName = () => {
        const path = location.pathname.replace('/', '');
        if (!path) return 'Home';
        return path.replace('-', ' ');
    };

    const currentPage = getPageName();
    
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3 text-[13px] sm:text-sm text-gray-500 py-3 px-4 uppercase">
                <span className="text-[#3E445A] cursor-pointer transition-colors">Home</span>
                <i className="fa-solid fa-chevron-right text-[10px] text-gray-400"></i>
                <span className="text-gray-500">{currentPage}</span>
            </div>
        </div>
    );
}
