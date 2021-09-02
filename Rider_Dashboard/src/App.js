import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createContext } from "react";
import SignIn from "./Components/Login/SignIn/SignIn";
import SignUp from "./Components/Login/SignUp/SignUp";
import Rider from "./Components/RiderDashboard/Rider";
import SingleRiderData from "./Components/SingleRiderData/SingleRiderData";
export const UserContext = createContext();
function App() {
  const [loggedInRider, setLoggedInRider] = useState({
    name:'',
    id:'',
    password:'',
  })
  return (
    <UserContext.Provider value = {[loggedInRider, setLoggedInRider]}>
      <Router>
        <Switch>
          <Route exact path="/">
          <SignIn/>
          </Route>
          <Route path = '/signUp'>
            <SignUp/>
          </Route>
          <Route path ='/rider'>
            <Rider></Rider>
          </Route>
          <Route path ='/singleRiderData'>
            <SingleRiderData/>
          </Route>
          <Route path = '/signIn'>
            <SignIn/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
