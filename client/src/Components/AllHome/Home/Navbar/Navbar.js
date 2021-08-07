import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-light navbar-dark">
      <div className="container-fluid container">
        <Link to="/home" className="navbar-brand textColor">
          Fast Freight
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link
              to="/"
              className="nav-link active textColor ms-4"
              aria-current="page"
            >
              Home
            </Link>
            <Link to="/order" className="nav-link active ms-4">
              About
            </Link>
            <Link to="/admin" className="nav-link textColor active ms-4">
              Service
            </Link>
            <Link to="/login" className="nav-link active textColor ms-4">
              Login
            </Link>
            <Link to="/createParcel" className="nav-link active textColor ms-4">
              Create Parcel
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
