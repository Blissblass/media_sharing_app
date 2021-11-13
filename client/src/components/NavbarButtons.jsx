import React from "react";
import { Button } from "react-bootstrap";


const NavbarButtons = () => {

  return(
    <div>
      <Button type="button" variant="outline-primary" size="lg" className="me-5 ms-5">Log In</Button>
      <Button type="button" variant="outline-primary" size="lg">Sign Up</Button>
    </div>
  )
};

export default NavbarButtons;