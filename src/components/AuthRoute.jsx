import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { tokenContext } from './context/tokenContext';

export default function AuthRoute({ children }) {
    const { token } = useContext(tokenContext);
    
    return !token ? children : <Navigate to="/" replace />;
}