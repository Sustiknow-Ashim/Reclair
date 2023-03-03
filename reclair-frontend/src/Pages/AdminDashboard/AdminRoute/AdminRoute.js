import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from "../AdminHooks/AdminHooks";
const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    const [isAdmin,isAdminLoading ]= useAdmin(user.email);
    if(loading || isAdminLoading ){
        return <h2 className='text-xl-3 text-center'>Loading .</h2> 
    }

    if(user && isAdmin){
        return children
    }


    return <Navigate to="/" state={{from:location}} replace ></Navigate>
    
    
};

export default AdminRoute;