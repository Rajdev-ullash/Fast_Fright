import React, { useState } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const SignIn = () => {
  const history = useHistory();
  const [signInInfo, setSignInInfo] = useState({});
  const handleChange = (e) => {
    const newSignInInfo = { ...signInInfo };
    newSignInInfo[e.target.name] = e.target.value;
    setSignInInfo(newSignInInfo);
    console.log(newSignInInfo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signInInfo);
    fetch("http://localhost:5000/api/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(signInInfo),
    })
      .then((res) => res.json())
      .then((data) => {
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

          console.log(data);
          Toastify({
            text: data.message,
            duration: 3000,
          }).showToast();
          history.push("/");
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
