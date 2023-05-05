import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from './features/auth/Login';
import Home from './components/Home';
import Notifications from './components/Notifications';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route  path="/login" element={<Login/>}>
        </Route>
        <Route path="/" element={<Home/>} >
        </Route>
        <Route path="/notifications" element={<Notifications/>} >
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
