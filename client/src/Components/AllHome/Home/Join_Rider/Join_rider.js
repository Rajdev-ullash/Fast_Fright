import React, { useState } from "react";
import Rider_cycle from "../../../../../src/Images/cycle.png";
import "./Join_Rider.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Join_rider = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/api/ridingRequest`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => console.log("server side response", res));
  };

  return (
    <div className="row mt-3 ">
      <div className="col-sm-12 col-md-7  rider">
        <img className="img-fluid" src={Rider_cycle} alt="" />
      </div>
      <div className="col-md-5 rider-container">
        <div className="p-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <input {...register("exampleRequired", { required: true })} /> */}
            <div className="form-group p-1">
              <input
                className="form-control"
                placeholder="Rider Name *"
                {...register("name", { required: true })}
              />
            </div>
            <div className="form-group p-1">
              <input
                className="form-control"
                placeholder="Rider Email *"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-group p-1">
              <input
                className="form-control"
                placeholder="Rider Phone *"
                {...register("phone", { required: true })}
              />
            </div>
            <div className="form-group p-1">
              <input
                className="form-control"
                placeholder="Rider Address *"
                {...register("address", { required: true })}
              />
            </div>
            <div className="form-group p-1">
              <label for="cars">Choose a Delivery Area:</label>
              <select
                placeholder="select your address"
                {...register("deliveryArea")}
              >
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Barishal">Barishal</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Khulna">Khulna</option>
              </select>
            </div>
            <div className="form-group p-1">
              <label for="cars">Choose a Vehicle:</label>
              <select
                placeholder="select your vehicle"
                {...register("vehicle")}
              >
                <option value="Cycle">Cycle</option>
                <option value="Motor Bike">Motor Bike</option>
              </select>
            </div>

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join_rider;
