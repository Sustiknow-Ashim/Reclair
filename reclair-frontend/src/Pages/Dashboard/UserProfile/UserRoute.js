
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import UserHooks from './UserHooks';

const UserRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext)
    const location = useLocation()
    const [isUser, isUserLoading] = UserHooks(user?.email)

    if(loading || isUserLoading){
        return <h2 className='text-xl-3 text-center'>Loading ......</h2> 
    }

    if(user || isUser){
        return children;
    }
    return <Navigate to="/" state={{from:location}} replace ></Navigate>
};

export default UserRoute;