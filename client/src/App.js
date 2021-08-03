import "./App.css";
import Home from "./Components/AllHome/Home/Home";
import AllHome from "./Components/AllHome/AllHome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import Login from "./Components/Login/Login";
=======
import BusinessInformation from "./Components/AllHome/BusinessInformation/BusinessInformation";
>>>>>>> 9566f29457ae38145863bf147ecae001a5085520

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <AllHome></AllHome>
          </Route>
<<<<<<< HEAD
          <Route path="/login">
            <Login />
=======
          <Route  path="/businessInformation">
            <BusinessInformation></BusinessInformation>
>>>>>>> 9566f29457ae38145863bf147ecae001a5085520
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
