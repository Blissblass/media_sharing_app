import React, { useContext } from "react";
import UserContext from './UserContext';
import { Navigate } from 'react-router-dom';


const AuthRoute = (props) => {
  const { user } = useContext(UserContext);

  return(
    user ? <Navigate to="/" /> : <props.element setNotifs={props.setNotifs}  />
  )
};

export default AuthRoute;