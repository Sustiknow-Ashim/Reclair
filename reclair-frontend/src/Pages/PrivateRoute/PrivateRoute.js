import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
// import ClipLoader from "react-spinners/ClipLoader";
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        return <h2 className='text-xl-3 text-center'>Loading ......</h2>
        // <ClipLoader  color={'#36d7b7'} loading={loading} size={150} />
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace ></Navigate>
};

export default PrivateRoute;