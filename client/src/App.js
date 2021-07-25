<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/AllHome/Home/Home";

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Raj</h1>
      <p>Munna</p>
      <h3>This is faruk</h3>

      <h2>This is faruk branch</h2> */}
      <Home />
    </div>
=======
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
       
     
>>>>>>> b101a20c88d5be3e2ee9a05bca3a832e2421ff8d
  );
}

export default App;
