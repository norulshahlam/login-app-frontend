import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../Constants";

const Login = () => {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(error);
    const username = e.target.username.value;
    const password = e.target.password.value;
    setError(true);
    console.log(username, password);

    let bodyFormData = new FormData();
    bodyFormData.append("username", username);
    bodyFormData.append("password", password);
    console.log(1);
    axios({
      method: "post",
      url: "http://localhost:8000/login",
      data: bodyFormData,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log("hello", res);
      })
      .catch((error) => {
        console.log("err", error);
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
