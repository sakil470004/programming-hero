import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='flex items-center h-[600px] justify-center'>
            <progress className="progress w-56"></progress></div>
    }
    if (user) {
        return children;
    }
    toast.error("You need To Login First For Current Page")
    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
};

export default PrivateRoute;