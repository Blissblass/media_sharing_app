import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserContext from './components/UserContext';
import Navbar from './components/Navbar';
import Alerts from './components/Alerts';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import AuthRoute from './components/AuthRoute';
import UserProfile from './components/UserProfile';
import './components/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Index = () => {

  const [notifs, setNotifs] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  
  return(
    <div>
      <Router>
        <UserContext.Provider value={{user, setUser}}>
          <Navbar />
          <Alerts notifs={notifs} setNotifs={setNotifs} />
          <Routes>
            <Route exact path="/" element={<ProtectedRoute element={Home} />} />
            <Route exact path="/login" element={<AuthRoute element={Login} setNotifs={setNotifs} />} />
            <Route exact path="/signup" element={<AuthRoute element={SignUp} setNotifs={setNotifs} />} />
            <Route exact path="/user/:id" element={<ProtectedRoute element={UserProfile} />} />
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