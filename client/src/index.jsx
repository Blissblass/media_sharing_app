import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);