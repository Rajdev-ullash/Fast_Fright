import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const history = useHistory()
  const [user, setUser] = useState(true);
  const [userInfo, setUerInfo] = useState({})
  const handleChange = (e) => {
    const newUserInfo = { ...userInfo }
    newUserInfo[e.target.name] = e.target.value;
    setUerInfo(newUserInfo)
    console.log(newUserInfo)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // const formdata = new FormData()
    // formdata.append('firstName',userInfo.firstName)
    // formdata.append('lastName',userInfo.lastName)
    // formdata.append('email',userInfo.email)
    // formdata.append('password',userInfo.password)
    // formdata.append('phone',userInfo.phone)
    console.log(userInfo)
    
      fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
      },
        body: JSON.stringify(userInfo)
      })
      .catch(err => console.log(err))



  }
  return (
    <div className="mt-5 ">
      <div className=" ">
        <div className="d-flex justify-content-center">
          <div className="shadow p-5 col-md-4 login-container">
            <h3>{user ? "Create an account" : "Login"}</h3>
            <div className="login ">
              <form onSubmit={handleSubmit}>
                {user && (
                  <input onBlur={handleChange}
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="First Name"
                    required
                  />
                )}

                <br />
                {user && (
                  <input onBlur={handleChange}
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last Name"
                    required
                  />
                )}

                <br />

                <input onBlur={handleChange}
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
                <br />
                <input onBlur={handleChange}
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  required
                />
                <br />
                <input onBlur={handleChange}
                  type="number"
                  name="phone"
                  className="form-control"
                  placeholder="phone"
                  required
                />
                <br />
                {/* {user && (
                  <input onBlur={handleChange}
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="confirm password"
                    required
                  />
                )} */}
                <br />
                {user ?
                  <input
                    className="submit"
                    type="submit"
                    value="Sign Up"
                  /> :
                  <input
                    className="submit"
                    type="submit"
                    value="Sign In"
                  />}
                <p>
                  {user ? "Already" : "Don't"} Have An account?{" "}
                  <Link onClick={() => history.push('/signIn')}>
                    {user ? "Login" : "Create An Account"}
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
