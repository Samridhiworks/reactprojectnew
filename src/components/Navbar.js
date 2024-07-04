import React from "react";
import { Link } from "react-router-dom";
import myimg from './logo-1.png';


const Navbar = () => {
  return (
   
    <header>
      <div className="lists">
        <div className="logo">
          <img src={myimg} alt="Logo" style={{ width: "150px", height: '109px' }} />
          <h1>HOUSE DECOR</h1>
        </div>
        <div className="all-list">
          <ul>
            <li><Link to="/login">HOME</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/login">PRODUCTS</Link></li>
            <li><Link to="/login">SERVICES</Link></li>
          </ul>
        </div>
      </div>
      
    </header>

   
    
  );
};

export default Navbar;
