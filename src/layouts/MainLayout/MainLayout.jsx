import NavbarComponent from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <div>
            <NavbarComponent/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
