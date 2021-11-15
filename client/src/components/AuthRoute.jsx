import React, { useContext } from "react";
import UserContext from './UserContext';
import { Navigate } from 'react-router-dom';


const AuthRoute = (props) => {
  const { user } = useContext(UserContext);

  user ? <Navigate to="/" /> : <props.element />
};

export default AuthRoute;