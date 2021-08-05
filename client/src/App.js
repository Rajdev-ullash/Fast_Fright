import "./App.css";
import Home from "./Components/AllHome/Home/Home";
import AllHome from "./Components/AllHome/AllHome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BusinessInformation from "./Components/AllHome/BusinessInformation/BusinessInformation";
import Login from "./Components/Login/Login";
import SignIn from "./Components/Login/SignIn";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
