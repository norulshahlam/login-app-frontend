import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";
import { API_URL } from "../Constants";

const Restricted = () => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  if (user.role.includes("USER")) {
    console.log(user.role)
    console.log(6)
    history.push("/welcome");
  }
  if (user.name === "") {
    console.log(user.name)
    console.log(user.role)
    console.log(7);
    history.push("/login");
  }
  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/userdetails`,
    })
      .then((response) => {
        console.log(response);
        setUser({
          name: response.data.name,
          username: response.data.principal.username,
          role: response.data.principal.authorities.map((item) =>
            item.authority.slice(5)
          ),
        });
        console.log(user.name)
      })
      .catch(() => {})
      .finally(() => {
       
      });
  }, []);
  return <div>restricted page</div>;
};

export default Restricted;
