import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { tokenContext } from './context/tokenContext';

export default function ProtectedRoute({ children }) {
    const { token } = useContext(tokenContext);
    
    return token ? children : <Navigate to="/login" replace />;
}