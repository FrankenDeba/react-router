import React from 'react';
import './App.css';
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import Contact from "./Components/Contact/Contact.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">

       <Link to = "/">home</Link>
       <Link to = "/about">about</Link>
       <Link to = "/contact">contact</Link>
       <Switch>

          
         
         <Route path = "/about">
           <About></About>
           </Route>

        

        <Route path = "/contact">
          <Contact></Contact>
        </Route>

        <Route path = "/">
          <Home></Home>
          </Route>

      </Switch>
      </div>
      </Router>
      
    );
  }
  
}

export default App;
