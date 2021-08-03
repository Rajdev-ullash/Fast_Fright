import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [user, setUser] = useState(false);
  return (
    <div className="mt-5 ">
      <div className=" ">
        <div className="d-flex justify-content-center">
          <div className="shadow p-5 col-md-4 login-container">
            <h3>{user ? "Create an account" : "Login"}</h3>
            <div className="login ">
              <form>
                {user && (
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="First Name"
                    required
                  />
                )}

                <br />
                {user && (
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Last Name"
                    required
                  />
                )}

                <br />

                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
                <br />
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  required
                />
                <br />
                {user && (
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="confirm password"
                    required
                  />
                )}
                <br />
                <input
                  className="submit"
                  type="submit"
                  value={user ? "Sign Up" : "Sign In"}
                />
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
};

export default Login;
