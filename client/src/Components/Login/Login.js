import React, { useState } from "react";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import "./Login.css";
const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log('loggg',loggedInUser);
  const history = useHistory();
  const [error, setError] = useState(false);
  const [userInfo, setUerInfo] = useState({});
  const handleChange = (e) => {
    const newUserInfo = { ...loggedInUser };
    newUserInfo[e.target.name] = e.target.value;
    // setUerInfo(newUserInfo);
    console.log('new user',newUserInfo);
    setLoggedInUser(newUserInfo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loggedInUser.password === loggedInUser.confirmPassword) {
      console.log(loggedInUser);

      fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loggedInUser),
      })
        .then((res) => res.json())
        .then((data) => {
          history.push("/signIn");
          console.log(data);
        })
        .catch((err) => console.log(err));
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className="mt-5 ">
      <div className=" ">
        <div className="d-flex justify-content-center">
          <div className="shadow p-5 col-md-4 login-container">
            <h3 className="mb-4">Create An Account</h3>
            <div className="login ">
              <form onSubmit={handleSubmit}>
                <input
                  onBlur={handleChange}
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name"
                  required
                />

                <br />
                <input
                  onBlur={handleChange}
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Last Name"
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
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  required
                />
                <br />
                <input
                  onBlur={handleChange}
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="confirm password"
                  required
                />
                {error && <p style={{ color: "red" }}>Password didn't match</p>}
                {!error && <br />}
                <input className="submit mt-3" type="submit" value="Sign Up" />
                <p className="mt-3">
                  Don't Have an Account{" "}
                  <Link className="ms-2" to="/signIn">
                    Login
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

export default Login;
