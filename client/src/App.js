import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AllHome from "./Components/AllHome/AllHome";
import BusinessInformation from "./Components/AllHome/BusinessInformation/BusinessInformation";
import Login from "./Components/Login/Login";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
