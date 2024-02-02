import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

export default function PrivateRoute({children}) {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <span className="loading loading-bars loading-md"></span>
    }
    if(user){
        return children
    }
    else{
        return <Navigate to='/login' state={{from:{location}}} replace/>
    }
  return (
    <div>PrivateRoute</div>
  )
}
