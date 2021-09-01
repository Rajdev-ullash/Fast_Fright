import React,{useContext, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
// import signin from '../../../images/signin.png';
import signin from "../../../images/signin.png";
const SignIn = () => {
  const [loggedInRider, setLoggedInRider] = useContext(UserContext);
  const history = useHistory();
  const [signInfo, setSignInfo] = useState({});
    const handleChange = (e) =>{
      const signInInfo = {... loggedInRider}
      signInInfo[e.target.name] = e.target.value;
      setLoggedInRider(signInInfo);
      console.log(signInInfo);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/riderSignIn',{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loggedInRider)
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            history.push('/rider')
            alert('SignIn SuccessFull')
          }
        })
    }
  return (
    <div className="mt-5 row mb-4">
      <div className="d-flex justify-content-center">
        <div className="shadow p-5 col-md-4 login-container">
          <h3>Login</h3>
          <div className="login ">
            <form onSubmit={handleSubmit}>
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

              <br />
              <input className="submit" type="submit" value="Sign In" />
              <p className="mt-3">
                Already Have An account
                <Link className="ms-2" to="/signUp">
                  Create An Account
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className = 'col-md-5'>
            <img className='' style ={{width: '600px', height: '500px'}} src={signin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
