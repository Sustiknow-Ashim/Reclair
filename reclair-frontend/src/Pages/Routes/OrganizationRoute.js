

import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useOrganization from '../../Hooks/organizationHooks';

const OrganizationRoute = ({children}) => {

    const [user,loading] = useContext(AuthContext);
    const location = useLocation();
    const [isOrganization, isOrganizationLoading] = useOrganization(user?.email)

    if(loading || isOrganizationLoading){
        return <h2>loading....</h2>
    }

    if (user && isOrganization) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default OrganizationRoute;