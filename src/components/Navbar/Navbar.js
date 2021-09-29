import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
   return (
      <div className="navbar">
         <NavLink activeClassName="selected" to="/home">
            Home
         </NavLink>
         <NavLink activeClassName="selected" to="/friends">
            Friends
         </NavLink>
         <NavLink activeClassName="selected" to="/about">
            About
         </NavLink>
      </div>
   );
};

export default Navbar;
