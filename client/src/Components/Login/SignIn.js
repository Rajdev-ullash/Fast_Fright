import React, { useState, useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Toastify from "toastify-js";

import "toastify-js/src/toastify.css";
import { UserContext } from "../../App";
const SignIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleChange = (e) => {
    const newSignInInfo = { ...loggedInUser };
    newSignInInfo[e.target.name] = e.target.value;
    setLoggedInUser(newSignInInfo);
    console.log("Singn Info", newSignInInfo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loggedInUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data)
        if (data.error) {
          Toastify({
            text: data.error,
            backgroundColor: "red",
            duration: 3000,
          }).showToast();
        } else {
          const access_token = data.access_token;
          const jsonAccessToken = JSON.stringify(access_token);
          localStorage.setItem("token", jsonAccessToken);
          localStorage.setItem("user",JSON.stringify(data.data))
          const user = {... loggedInUser}
          user.firstName = data.data.firstName;
          user.lastName = data.data.lastName;
          user.email = data.data.email;
          setLoggedInUser(user);
          console.log('user',user);
          Toastify({
            text: data.message,
            duration: 2000,
          }).showToast();
          history.replace(from);
        } 
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mt-5 ">
      <div className=" ">
        <div className="d-flex justify-content-center">
          <div className="shadow p-5 col-md-4 login-container">
            <h3>Login</h3>
            <div className="login ">
              <form onSubmit={handleSubmit}>
                <br />

                <input
                  onBlur={handleChange}
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
                <br />
                <input
                  onBlur={handleChange}
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  required
                />
                <br />

                <br />
                <input className="submit" type="submit" value="Sign In" />
                <p className="mt-3">
                  Already Have An account
                  <Link className="ms-2" to="/login">
                    Create An Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
