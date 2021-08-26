import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import {  useHistory } from "react-router-dom";
import AllHome from "./Components/AllHome/AllHome";
import BusinessInformation from "./Components/AllHome/BusinessInformation/BusinessInformation";
import CreateParcel from "./Components/CreateParcel/CreateParcel";
import Login from "./Components/Login/Login";
import SignIn from "./Components/Login/SignIn";
import Info from "./Components/AllHome/Home/Navbar/Info";
import Join_rider from './Components/AllHome/Home/Join_Rider/Join_rider'
// import Rider from "./Components/AllDashboard/RiderDashboard/Rider";
// import AdminDashBoard from "./Components/AllDashboard/AdminDashboard/AdminDashBoard";
import TrackParcel from "./Components/TrackParcel/TrackParcel";
// import AdminBookingDetails from "./Components/AllDashboard/AdminDashboard/AdminBookingDetails/AdminBookingDetails";
import { createContext } from "react";
import { useState } from "react";
export const UserContext = createContext();

function App() {
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useState({
    firstName:'',
    email:'',
    password:''
  });
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      const newUser = {... loggedInUser}
      newUser.firstName = user.firstName;
      newUser.email = user.email;
      setLoggedInUser(newUser);
    }
    console.log(user);
  }, []);
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Switch>
          <Route exact path="/">
            <AllHome></AllHome>
          </Route>
          <Route path="/businessInformation">
            <BusinessInformation></BusinessInformation>
          </Route>
          <Route path="/createParcel">
            <CreateParcel />
          </Route>
          <Route path="/rider">
            <Join_rider />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signIn">
            <SignIn></SignIn>
          </Route>
          <Route path="/Info">
            <Info></Info>
          </Route>
          {/* <Route path="/RiderDashboard">
            <Rider></Rider>
          </Route>
          <Route path="/AdminBooking/:id">
            <AdminBookingDetails></AdminBookingDetails>
          </Route>
          <Route path="/AdminDashboard">
            <AdminDashBoard></AdminDashBoard>
          </Route> */}
          <Route path="/createParcel">
            <CreateParcel></CreateParcel>
          </Route>
          <Route path="/trackParcel/:id">
            <TrackParcel></TrackParcel>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
