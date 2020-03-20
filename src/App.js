import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>        
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            < Contact/>
          </Route>          
        </Switch>
      </div>
    </Router>
  );
}



export default App;
