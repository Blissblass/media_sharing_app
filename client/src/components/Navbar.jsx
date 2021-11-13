import React from "react";
import './Navbar.css'
import Colours from "./Colours";

const Navbar = (props) => {

  return(
    <nav style={{backgroundColor: Colours.black}} className="navbar navbar-dark navbar-expand-lg">
      <h3 style={{fontSize:30, color: Colours.white}}  className="navbar-brand m-3">Sound.io</h3>
    </nav>
  )
};

export default Navbar;