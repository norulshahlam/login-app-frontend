import React, { useEffect, useState , useContext } from "react";
import UserDetails from "./UserDetails";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../Constants";
import { UserContext } from "./UserContext";

const Welcome = () => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);


  const handleClick = (e) => {
    e.preventDefault();
    console.log(3);
    axios
      .get(`${API_URL}/logout`)
      .then((response) => {
        console.log(response);
        setUser({name: "", username:"", role: [""]})
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() =>
  {

    axios({
      method: "get",
      url: `${API_URL}/userdetails`,
    })
      .then((response) =>
      {
        console.log(response)
        setUser({name: response.data.name, username: response.data.principal.username, role: response.data.principal.authorities.map((item)=> item.authority.slice(5))})
      })
      .catch(() =>
      {
        history.push("/login");
      });     

  }, []);

  return (
    <div>
      <div className="header">
        <h2>welcome</h2>
        <h3>{a}</h3>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Logout
        </button>
        {user.role.includes("MANAGER") && (
          <Link to="/restricted">Restricted page</Link>
        )}
      </div>
      <div>
        <UserDetails user={user} />
      </div>
    </div>
  );
};

export default Welcome;
