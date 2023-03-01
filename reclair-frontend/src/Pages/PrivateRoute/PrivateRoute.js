import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { BallTriangle } from  'react-loader-spinner'
// import ClipLoader from "react-spinners/ClipLoader";
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        return <h2 className='text-xl-3 text-center'>
<BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
</h2>

    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace ></Navigate>
};

export default PrivateRoute;