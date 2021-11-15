import React, { useContext } from "react";
import { Button } from 'react-bootstrap';
import UserContext from "./UserContext";


const Login = (props) => {

  const { setUser } = useContext(UserContext);


  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.currentTarget;
    const data = {
      user: {
        email: inputs[0].value,
        password: inputs[1].value,
      }
    }

    fetch('/users/sign_in', { 
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify(data)
    })
      .then(data => data.json())
      .then(data => {
        if(data.username) {
          props.setNotifs(null);
          localStorage.setItem('user', JSON.stringify(data));
          setUser(data);
        } else {
          props.setNotifs(null);
          props.setNotifs({ 'Error:': [data.error] });
        }
      });
  };

  return(
    <div>
      <div className="text-white w-50 text-center" style={{position: "relative", top: 50}}>
        <h1><strong>Welcome to Sound.io.</strong></h1>
        <h2>Listen without limits.</h2>
      </div>

      <div className="card container mt-4 me-4 p-4 w-50 float-end text-center shadow-lg">
        <h1>Log In</h1>

        <form onSubmit={handleSubmit}> 
          <input type="email" className="form-control form-control-lg mt-3 shadow-sm" placeholder="Email..." required />  
          <input type="password" className="form-control form-control-lg mt-3 shadow-sm" placeholder="Password..." required />  
          <Button type="submit" variant="outline-primary" size="lg" className="me-5 ms-5 mt-4 w-50">Log In</Button>
        </form>
      </div>
  </div>
  )
};

export default Login;