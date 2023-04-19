import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from './features/auth/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route  path="/" element={<Login/>}>
        </Route>
        <Route path="/home" element={<Home/>} >
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
