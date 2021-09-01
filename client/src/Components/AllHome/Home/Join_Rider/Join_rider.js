import React, { useState } from "react";
import Rider_cycle from "../../../../../src/Images/cycle.png";
import "./Join_Rider.css";

const Join_rider = () => {
  const [joinRider, setJoinRider] = useState({});
  const handleChange = (e) => {
    const joinRiderInfo = { ...joinRider };
    joinRiderInfo[e.target.name] = e.target.value;
    setJoinRider(joinRiderInfo);
    console.log(joinRiderInfo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/api/ridingRequest`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(joinRider),
    })
      // .then((res) => console.log("server side response", res));
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Rider add SuccessFully");
        }
      });
  };

  return (
    <div className="row mt-3 ">
      <div className="col-sm-12 col-md-7  rider">
        <img className="img-fluid" src={Rider_cycle} alt="" />
      </div>
      <div className="col-md-5 mb-3 rider-container p-5">
        <form onSubmit={handleSubmit}>
          <input
            onBlur={handleChange}
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            required
          />

          <br />

          <input
            onBlur={handleChange}
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            required
          />
          <br />
          <input
            onBlur={handleChange}
            type="number"
            name="phone"
            className="form-control"
            placeholder="phone"
            required
          />
          <br />
          <input
            onBlur={handleChange}
            type="text"
            name="address"
            className="form-control"
            placeholder="Address"
            required
          />
          <br />
          <label>Delivery-Area</label>
          <select
            onBlur={handleChange}
            type="text"
            name="deliveryArea"
            className="form-control"
          >
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Barishal">Barishal</option>
            <option value="Manikgonj">Manikgonj</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Khulna">Khulna</option>
          </select>
          <br />
          <label>Choose a Vehicle</label>
          <select
            onBlur={handleChange}
            type="text"
            name="vehicle"
            className="form-control"
          >
            <option value="Cycle">Cycle</option>
            <option value="Bike">Bike</option>
          </select>
          <input className="submit mt-3" type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default Join_rider;
