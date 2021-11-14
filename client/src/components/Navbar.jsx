import React, { useContext } from "react";
import './Navbar.css'
import Colours from "./Colours";
import NavbarButtons from "./NavbarButtons";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

const Navbar = (props) => {
  const { user, setUser } = useContext(UserContext);

  return(
    <nav style={{backgroundColor: Colours.black}} 
        className="navbar navbar-dark navbar-expand-lg justify-content-between align-items-center shadow">

      <h3 style={{fontSize:40, color: Colours.white}}  className="navbar-brand m-3 ms-2 ">
        <Link to="/" className="text-decoration-none text-white border-end  p-3">Sound.io</Link>
      </h3>
      <NavbarButtons user={user} setUser={setUser} />
    </nav>
  )
};

export default Navbar;