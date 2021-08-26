import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rider from "./Components/RiderDashboard/Rider";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Rider></Rider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
