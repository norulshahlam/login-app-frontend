import React,{ useEffect, useState,useContext } from "react";
import UserDetails from "./UserDetails";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../Constants'
import { UserContext } from "./UserContext";

const Welcome = () =>
{
  const history = useHistory();
  // const [user, setUser] = useState({name:"", username:"", role:[]});
  const { user, setUser } = useContext(UserContext);
  
  useEffect(() =>
  {
    if (user.name == "") {
      history.push("/login")
    }
    // axios.get(`${API_URL}/userdetails`)
    // .then((response) =>
    // {
    //   setUser({name: response.data.name, username: response.data.principal.username, role: response.data.principal.authorities.map((item)=> item.authority.slice(5))})
    //   console.log("success")
    // }).catch((error) =>
    // {
    //  history.push("/login")
    //   console.log(error)
    // })
  },[])
  console.log(user)
  
  return (
    <div>
      <div className="header">
        <h2>welcome</h2>
          <a href= "http://localhost:8000/logout">Logout</a>
        {user.role.includes("MANAGER") && <Link to="/restricted">Restricted page</Link>}

      </div>
      <div>
        <UserDetails user={ user}/>
      </div>
    </div>
  );
};

export default Welcome;
