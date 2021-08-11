import axios from "axios";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";
import {API_URL} from "../Constants"
const Login = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const { user, setUser } = useContext(UserContext);
  console.log(user);


  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    let bodyFormData = new FormData();
    bodyFormData.append("username", username);
    bodyFormData.append("password", password);
    axios({
      method: "post",
      url: `${API_URL}/login`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data; charset=utf-8" },
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
        console.log("success login");
        history.push("/welcome");
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div className="login">
      {error && <h1>Invalid credentials!</h1>}
      <h1>Welcome to My Login App!</h1>
      <h2>Enter your credentials:</h2>
      {/* <form action="http://localhost:8000/login" method="POST"> */}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
        />
        <br />
        <input
          type="text"
          placeholder="password"
          name="password"
          id="password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
