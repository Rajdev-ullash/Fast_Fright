import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [user, setUser] = useState(false)
    const handleChange = () =>{

    }
    const handleSubmit =()=>{

    }
    
    return (
        <div>
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
                  <Link onClick={() => setUser(!user)}>
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
        </div>
    );
};

export default SignIn;