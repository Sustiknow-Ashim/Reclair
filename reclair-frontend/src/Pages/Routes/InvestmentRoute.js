
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useInvestment from '../../Hooks/investmentHooks';

const InvestmentRoute = ({children}) => {
    const{ user,loading} = useContext(AuthContext)
    const [isInvestment,isInvestmentLoading] = useInvestment(user?.email)
    const location = useLocation()

    if(loading || isInvestmentLoading){
        return <h2>loading....</h2>
    }

    if (user && isInvestment) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default InvestmentRoute;