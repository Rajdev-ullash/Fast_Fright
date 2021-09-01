import React, { useState } from "react";
import "./SignUp.css";
import login from "../../../images/login.png";
import { Link , useHistory} from "react-router-dom";
const SignUp = () => {
  const history = useHistory();
  const [signUpInfo, setSignUpInfo] = useState({});
  const handleChange = (e) => {
    const newSignUpInfo = { ...signUpInfo };
    newSignUpInfo[e.target.name] = e.target.value;
    setSignUpInfo(newSignUpInfo)
    console.log("rider", newSignUpInfo);

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const url = (`http://localhost:5000/api/riderSignUp`);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data){
          history.push('/signIn');
          alert('SignUp Successfully')
        }
      });
      // console.log(signUpInfo);
  };
  return (
    <div className="mt-5 mb-4">
      <div className="d-flex justify-content-center">
        <div className="shadow p-5 col-md-4 login-container">
          <h3 className="mb-4">Create An Account</h3>
          <div className="login ">
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
                type="id"
                name="riderId"
                className="form-control"
                placeholder="Id"
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
        <div className="col-md-4 signup">
          <img src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
