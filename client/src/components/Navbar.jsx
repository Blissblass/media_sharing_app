import React from "react";
import './Navbar.css'
import Colours from "./Colours";
import NavbarButtons from "./NavbarButtons";

const Navbar = (props) => {

  return(
    <nav style={{backgroundColor: Colours.black}} 
        className="navbar navbar-dark navbar-expand-lg justify-content-between align-items-center">
      <h3 style={{fontSize:40, color: Colours.white}}  className="navbar-brand m-3">Sound.io</h3>
      <NavbarButtons />
    </nav>
  )
};

export default Navbar;