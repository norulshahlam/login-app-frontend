import logo from "./logo.svg";
import { useState, useContext } from "react";
import "./App.css";
import {Redirect} from "react-router-dom"
import Login from "./components/Login";
import { Route, Switch } from "react-router";
import Welcome from "./components/Welcome";
import Restricted from "./components/Restricted";
import { UserContext } from "./components/UserContext";

function App()
{
  
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="app">
      <Switch>
        <Route exact path="/login" component={Login} />
       
          <Route exact path="/welcome" component={Welcome} />
  
          
          <Route exact path="/restricted" component={Restricted} />
     
        
      </Switch>
    </div>
  );
}

export default App;
