import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const NavbarButtons = () => {

  return(
    <div className="me-3">
      <Link to="/login">
        <Button type="button" variant="outline-primary" size="lg" className="me-5 ms-5">
          Log in
        </Button>
      </Link>

      <Link to="/signup">
        <Button type="button" variant="outline-primary" size="lg">Sign Up</Button>
      </Link>
    </div>
  )
};

export default NavbarButtons;