import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import './components/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Index = () => {
  const UserContext = createContext({username: null, email: null});
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch('/api/current_user')
      .then(data => data.json())
      .then(data => data.type === 'success' ? setUser(data) : console.log(data));
  }, []);

  return(
    <div>
      <Router>
        <UserContext.Provider value={user}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
          </UserContext.Provider>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);