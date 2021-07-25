import './App.css';
import Home from './Components/AllHome/Home/Home';
import AllHome from './Components/AllHome/AllHome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >
        <Router>
         
        <Switch>
          <Route exact path="/">
          <AllHome></AllHome>
          </Route>
        </Switch>
      </Router>
     </div>
       
     
  );
}

export default App;
