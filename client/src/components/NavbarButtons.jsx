import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const NavbarButtons = (props) => {

  const handleLogout = () => { 
    localStorage.removeItem('user');
    props.setUser(null);
  };
 
  return(
    props.user ? 
      <div className="me-3">
        <Link to={`/user/${props.user.id}`}>
          <Button type="button" variant="outline-primary" size="lg" className="me-5 ms-5">
            {props.user.username}
          </Button>
        </Link>

        
        <Button type="button" variant="outline-primary" size="lg" onClick={handleLogout}>Log Out</Button>
      </div>
    :
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