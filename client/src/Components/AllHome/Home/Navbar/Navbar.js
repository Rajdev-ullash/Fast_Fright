import {
  faBullhorn,
  faInfoCircle,
  faTag,
  faUserAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {UserContext} from '../../../../App'
import "./Navbar.css";
const Navbar = () => {
const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const [isTrue, setIsTrue] = useState(false);

  const handleUserClick = () => {
    setIsTrue(!isTrue);
  };
  const handleLogOut = () =>{
    const newUserInfo = {...loggedInUser};
      newUserInfo.email = '';
      newUserInfo.password = '';
      setLoggedInUser(newUserInfo);
      setIsTrue(false);
      localStorage.removeItem("user");
  }
  return (
    <div>
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
              <Link to="/rider" className="nav-link textColor active ms-4">
                Join Us Rider
              </Link>
              <Link
                to="/createParcel"
                className="nav-link active textColor ms-4"
              >
                Create Parcel
              </Link>
              {loggedInUser.email ?  <div
                onClick={() => handleUserClick()}
                className="nav-link active textColor ms-4 userItem"
              >
                {loggedInUser.firstName}
              </div>:
              <Link  to="/login" className="nav-link active textColor ms-4">
                Login
              </Link>}

            </div>
          </div>
        </div>
      </nav>
      {isTrue && (
        <div className="position-absolute bg-white d-block userInfo p-3 rounded">
          <h5 className="userItem">
            {" "}
            <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon> Test User
          </h5>
          <h5 className="userItem">
            {" "}
            <FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon> Announcement
          </h5>
          <h5 onClick={() => history.push("/manageOrder")} className="userItem">
            {" "}
            <FontAwesomeIcon icon={faTag}></FontAwesomeIcon> Order History
          </h5>
          <h5 className="userItem" onClick={() => history.push("/Info")}>
            {" "}
            <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon> Info
          </h5>
          <h5 className="userItem" onClick={handleLogOut}>
            {" "}
            <FontAwesomeIcon icon={faTag}></FontAwesomeIcon> LogOut
          </h5>
        </div>
      )}
    </div>
  );
};

export default Navbar;
