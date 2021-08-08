import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AllHome from "./Components/AllHome/AllHome";
import BusinessInformation from "./Components/AllHome/BusinessInformation/BusinessInformation";
import CreateParcel from "./Components/CreateParcel/CreateParcel";
import Login from "./Components/Login/Login";
import SignIn from "./Components/Login/SignIn";
import Info from "./Components/AllHome/Home/Navbar/Info";
import Rider from "./Components/AllDashboard/RiderDashboard/Rider";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <AllHome></AllHome>
          </Route>
          <Route path="/businessInformation">
            <BusinessInformation></BusinessInformation>
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
          <Route path="/RiderDashboard">
            <Rider></Rider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
