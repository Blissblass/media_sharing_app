import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import './components/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Routes>
  </Router>,
  document.getElementById('root')
);