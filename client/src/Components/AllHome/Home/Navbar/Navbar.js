import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav  className="navbar navbar-expand-lg  navbar-light navbar-dark bg-dark" >
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand textColor">Fast Freight</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="nav-link active textColor" aria-current="page">Home</Link>
                            <Link to="/order" className="textColor nav-link active">about</Link>
                            <Link to="/admin" className="nav-link textColor active">service</Link>
                            {/* <Link to="/allOrder" className="nav-link active">All order</Link> */}
                            <Link to="/login" className="nav-link active textColor">Login</Link>


                        </div>
                    </div>
                </div>
                

            </nav>
        </div>
    );
};

export default Navbar;