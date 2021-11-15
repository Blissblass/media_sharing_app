import React, { useContext } from "react";
import UserContext from './UserContext';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = (props) => {
  const { user } = useContext(UserContext);
  
  return(
    user ? <props.element /> : <Navigate to="/login" />
  )
};

export default ProtectedRoute;