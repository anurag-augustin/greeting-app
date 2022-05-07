import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Link
} from "react-router-dom";

import "./css/style.css";
import Home from "./Home";
import About from "./About";
const Greeting = (props) => {
  return (
    <>
    
       <BrowserRouter>
       <div className="prog-bar">
    </div>
   
    <div className="navbar">
          <ul>
          <li><Link to="/greeting-app/">Home</Link></li>
          <li><Link to="/greeting-app/About/">About</Link></li>
          <li><Link to="#">Contact Us</Link></li>
          </ul>
        </div>
        <div className="bod">
        <Routes>
       
      
           <Route exact path="/greeting-app/"
           element = { <Home cssStyle={props.cssStyle} greeting={props.greeting} /> }/>
           <Route exact path="/greeting-app/About"
           element = { <About/> }/>
          
          
          </Routes>
          </div>

      
      {/* <Home cssStyle={props.cssStyle} greeting={props.greeting} /> */}
      

      {/* </Routes> */}
      <footer className="text-center">
       <p>Copyright &copy; Anurag Augustin Bilung</p> 
      </footer>
     
      </BrowserRouter>
    </>
  );
};

export default Greeting;
