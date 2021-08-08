import React,{ useEffect } from "react";
import UserDetails from "./UserDetails";
import {Link} from "react-router-dom";

const Welcome = () =>
{
  useEffect(() =>
  {
    console.log(window.Object)
  })


  var req = new XMLHttpRequest();
  req.open('GET', document.location, false);
  req.send(null);
  var headers = req
  console.log("rsg", headers)
  
  
  return (
    <div>
      <div className="header">
        <h2>welcome</h2>
          <a href= "http://localhost:8000/logout">Logout</a>
      <Link to="/restricted">Restricted page</Link>

      </div>
      <div>
        <UserDetails />
      </div>
    </div>
  );
};

export default Welcome;
