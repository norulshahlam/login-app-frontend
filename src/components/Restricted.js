import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";
import { API_URL } from "../Constants";

const Restricted = () => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

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
        // redirect to /welcome if not MANAGER role
        if (!response.data.principal.authorities[0].authority.includes("MANAGER")) {
          history.push("/notAuthorized");
        }
      })
      .catch(() => {
        // redirect to /login if not logged in
        history.push("/login");
      })
  }, []);
  return <div>restricted page</div>;
};

export default Restricted;
