import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/PortfolioPage";
import Contact from "./pages/contact";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
     
        <Switch>
          <Route 
          exact path="/" 
          component={HomePage}
           />           
          
          <Route 
          exact path="/portfolio" 
          component={Portfolio} 
          />         
          
          <Route 
          exact path="/contact" 
          component={Contact}
           />               
        </Switch>
      
    </Router>
  );
}



export default App;
