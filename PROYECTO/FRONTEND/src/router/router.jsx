import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "../app/Login";
import System from "../app/Dashboard";
import Home from "../app/Home";
import Register from "../app/Register";
import Places from "../app/Places";
import Promotion from "../app/Promotion";
import Service from "../app/Service";
import About from "../app/About";

import MenuLa from "../components/MenuLa";

const Path = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<System />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<MenuLa />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/places" element={<Places/>}/>
        <Route path="/promotion" element={<Promotion/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="*"
          element={
            <>
              <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: '90vh' }}>
                not found this path
              </h1>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default Path;
