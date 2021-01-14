import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";

const Nav = () => {
  return (
    <Navbar variant="dark">
      <Link to="/" className="navbar-brand nav-link">
        Aubrey Polk
      </Link>
      <Navbar.Collapse className="justify-content-end">
      <NavLink to="/portfolio" className="nav-link">
        Portfolio
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
