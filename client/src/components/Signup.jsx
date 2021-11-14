import React from "react";
import { Button } from "react-bootstrap";

const SignUp = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.currentTarget;
    const data = {
      "registration": {
        username: inputs[0].value,
        email: inputs[1].value,
        password: inputs[2].value,
        password_confirmation: inputs[3].value
      }
    }

    fetch('/users', { 
      'method': 'POST',
      mode: 'cors',
      headers: new Headers({"content-type": 'application/json'}),
      body: JSON.stringify(data)
    })
    .catch(err => console.log(err))
    .then(data => data.json())
    .then(data => console.log(data))
  };

  return(
    <div>
      <div className="text-white w-50 text-center" style={{position: "relative", top: 50}}>
        <h1><strong>Welcome to Sound.io.</strong></h1>
        <h2>Listen without limits.</h2>
      </div>

      <div className="card container mt-4 me-4 p-4 w-50 float-end text-center shadow-lg">
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <input type="text" className="form-control form-control-lg mt-2 shadow-sm" placeholder="Username..." />  
          <input type="email" className="form-control form-control-lg mt-3 shadow-sm" placeholder="Email..." />  
          <input type="password" className="form-control form-control-lg mt-3 shadow-sm" placeholder="Password..." />  
          <input type="password" className="form-control form-control-lg mt-3 shadow-sm" placeholder="Password Confirmation..." />  
          <Button type="submit" variant="outline-primary" size="lg" className="me-5 ms-5 mt-4 w-50">Sign Up!</Button>
        </form>
      </div>
  </div>
  )
};

export default SignUp;