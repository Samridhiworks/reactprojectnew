import React from "react";
import { BrowserRouter, Link,Routes,Route } from "react-router-dom";
import myimg from './logo-1.png';
import Dashboard from "./Dashboard";

const Navbar = () => {
  return (
    <BrowserRouter>
    <header>
      <div className="lists">
        <div className="logo">
          <img src={myimg} alt="Logo" style={{ width: "150px", height: '109px' }} />
          <h1>HOUSE DECOR</h1>
        </div>
        <div className="all-list">
          <ul>
            <li><Link to="/dashboard">HOME</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="#">PRODUCTS</Link></li>
            <li><Link to="#">SERVICES</Link></li>
          </ul>
        </div>
      </div>
      
    </header>
{/* 
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes> */}
    </BrowserRouter>
  );
};

export default Navbar;
