import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RiderFakeData from "./RaiderFakeData";
import "./Rider.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../App";

const Rider = () => {
  const [loggedInRider, setLoggedInRider] = useContext(UserContext);
  console.log('logg',loggedInRider)
  return (
    <div>
      <div className="row ">
        <div className="col-md-2 py-2 riderDashTop text-center">
          <h4 className="pl-3">Fast Fright</h4>
        </div>
        <div className="col-md-10 pt-2">
          <div className="d-flex justify-content-between">
            <h4>Order Lists</h4>

            {loggedInRider.email? <Link to="/signUp" style={{ paddingRight: "20px" }}>
            {loggedInRider.name}
            </Link>:
            <Link to="/signUp" style={{ paddingRight: "20px" }}>
              login
            </Link>}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 riderBookCntainer">
          <div className="riderList">
            <h6 className="py-1">
              {" "}
              <FontAwesomeIcon icon={faBriefcase} /> On Process
            </h6>
            <h6>
              {" "}
              <FontAwesomeIcon icon={faCheckCircle} />{" "}
              <span style={{ paddingRight: "12px" }}> Complete</span>
            </h6>
          </div>
        </div>
        <div className="col-md-10">
          {RiderFakeData.map((ride) => (
            <div className="d-flex justify-content-around my-2 py-2 rounded ride-list-container">
              <h4>{ride.shopName}</h4>
              <div>
                <small>Place Of Pickup</small>
                <p>{ride.pickUpFrom}</p>
              </div>
              <div>
                <small>Place of Destination</small>
                <p>{ride.destination}</p>
              </div>
              <div>
                <small>Stuffing Date</small>
                <p>{ride.staffingDate}</p>
              </div>
              <div>
                <small>Catagory</small>
                <p>{ride.catagory}</p>
              </div>
              <div className="pt-3">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rider;
