import React from 'react';
import DashboardOrders from './Components/AdminDashboard/DashboardOrders/DashboardOrders';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DashboardHome from './Components/AdminDashboard/DashboardHome/DashboardHome';
import DashboardNav from './Components/DashboardNavbar/DashboardNav';
import AdminBooking from './Components/AdminBooking/AdminBooking';
import AllRider from './Components/RiderList/AllRider/AllRider';
import AddRider from './Components/RiderList/AddRider/AddRider';
import SingleRider from './Components/RiderList/SingleRider/SingleRider';
import VerifiedRiderDetails from './Components/RiderList/AllRider/VerifiedRiderDetails/VerifiedRiderDetails';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <DashboardHome></DashboardHome>
          </Route>
          <Route  path='/Orders'>
            <DashboardOrders></DashboardOrders>
          </Route>
          <Route  path='/AdminBooking/:_id'>
            <AdminBooking></AdminBooking>
          </Route>
          <Route  path='/AllRider'>
            <AllRider></AllRider>
          </Route>
          <Route  path='/AddRider'>
            <AddRider></AddRider>
          </Route>
          <Route  path='/SingleRider/:id'>
            <SingleRider></SingleRider>
          </Route>
          <Route  path='/VerifiedRider/:id'>
            <VerifiedRiderDetails></VerifiedRiderDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;