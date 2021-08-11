import React, { useState } from "react";
import Rider_cycle from "../../../../../src/Images/cycle.png";
import "./Join_Rider.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Join_rider = () => {
  // const [rider, setRider] = useState({});

  // const handleChange = (e) => {
  //   const newRider = { ...rider };
  //   newRider[e.target.name] = e.target.value;
  //   setRider(newRider);
  //   console.log(newRider);
  // };
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
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(rider);
  //   fetch("http://localhost:5000/api/ridingRequest", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(rider),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };
  // const address = [
  //   { value: "Dhaka", label: "Dhaka" },
  //   { value: "Chittagong", label: "Chittagong" },
  // ];
  // const vehicle = [
  //   { value: "Cycle", label: "Cycle" },
  //   { value: "Motor_Bike", label: "Motor_Bike" },
  // ];
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

          {/* <h2 className="mb-3 text-secondary">Login</h2> */}
          {/* <form onSubmit={handleSubmit}>
            <div className="form-group ">
              <label htmlFor="">Rider Name</label>
              <input
                type="text"
                name="name"
                onBlur={handleChange}
                placeholder="Rider Name"
                required
                className="form-control"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                onBlur={handleChange}
                placeholder="Email"
                required
                className="form-control "
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="">Phone</label>
              <input
                type="phone"
                name="phone"
                placeholder="Phone"
                onBlur={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="">Address Area</label>
              <Select options={address} isClearable={true} />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="">Vehicle</label>

              <Select options={vehicle} isClearable={true} />
            </div>
            <label for="cars">Choose a destination:</label>
                    <select placeholder="select your destination" {...register("destination")}>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chittagong">Chittagong</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Barishal">Barishal</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Khulna">Khulna</option>
                    </select>

            <br />
            <input type="submit" value="Submit" />
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Join_rider;
