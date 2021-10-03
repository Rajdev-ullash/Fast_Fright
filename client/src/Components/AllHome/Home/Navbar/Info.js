import React, { useState } from "react";

const Info = () => {
  const [info, setInfo] = useState({});
  const handleChange = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
    console.log(newInfo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://immense-headland-98077.herokuapp.com/api/userInfo", {
      method: "POST",
      headers: {
        "context-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className=" d-flex flex-column justify-content-center align-items-center mt-5">
      <form onSubmit={handleSubmit} className="w-50 p-3 shadow rounded">
        <div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Your Shop Name/Your Name
            </label>
            <input
              type="text"
              name="name"
              onBlur={handleChange}
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Shop Name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              onBlur={handleChange}
              name="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Your Email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Phone Number
            </label>
            <input
              type="number"
              onBlur={handleChange}
              name="phone"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Your Phon Number"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Address
            </label>
            <textarea
              class="form-control"
              onBlur={handleChange}
              name="address"
              id="exampleFormControlTextarea1"
              rows="8"
              placeholder="Enter Your Address"
            ></textarea>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Info;
