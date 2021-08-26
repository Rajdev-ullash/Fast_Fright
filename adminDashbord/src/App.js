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
        </Switch>
      </Router>
    </div>
  );
};

export default App;