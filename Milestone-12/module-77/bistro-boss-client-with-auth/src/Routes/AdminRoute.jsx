import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const [isAdmin, isAdminLoading]=useAdmin()
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading|| isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;