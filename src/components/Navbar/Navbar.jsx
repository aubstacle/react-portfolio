import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";

const Nav = () => {
  return (
    <Navbar>
      <Link to="/" className="navbar-brand">
        Aubrey Polk
      </Link>
      <NavLink to="/" className="nav-link float-right">
        Home
      </NavLink>
      <NavLink to="/portfolio" className="nav-link float-right">
        Portfolio
      </NavLink>
      <NavLink to="/about" className="nav-link float-right">
        About
      </NavLink>
      <NavLink to="/contact" className="nav-link float-right">
        Contact
      </NavLink>
    </Navbar>
  );
};

export default Nav;
