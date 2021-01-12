import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-dark">
        <Link to="/" className="navbar-brand">
          Aubrey Polk
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-right"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ml-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/portfolio" className="nav-link">
              Portfolio
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
