import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { checkUser, authenticate } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const [error, setError] = useState(false);
  const user = useSelector((state) => state);

  console.log(user);

  useEffect(() => {
    dispatch(checkUser());
    if (user) {
      history.push("/welcome");
    }
  }, [user]);

  const handleSubmit = (e) => {
    console.log("submit")
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    let bodyFormData = new FormData();
    bodyFormData.append("username", username);
    bodyFormData.append("password", password);

    dispatch(authenticate(bodyFormData));
  };

  return (
    <div className="login">
      {error && <h1>Invalid credentials!</h1>}
      <h1>Welcome to My Login App!</h1>
      <h2>Enter your credentials:</h2>
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
