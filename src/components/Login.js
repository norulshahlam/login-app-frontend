import axios from 'axios';
import React from 'react'
import { API_URL } from '../Constants'

const Login = () =>
{


  const handleSubmit = (e) =>
  {
    const username = e.target.username.value;
    const password = e.target.password.value;
  
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);

    axios.post(`${API_URL}/login`,
      {
        headers: {
          authorization:
          'Basic ' + window.btoa(username + ":" + password)
        }
      })
      .then((response) =>
      {
         console.log(response.data)
         console.log("success")
      }).catch((error) =>
      {
        console.log(error)
      })
  }

  return (
    <div className="login">
      <h1>
    Welcome to My Login App!
      </h1>

      <h2>
        Enter your credentials:
      </h2>
      {/* <form onSubmit={(e)=>handleSubmit(e)}> */}
      <form action="http://localhost:8000/login" method="POST">
      <input type="text"  placeholder="username" name="username" id="username" /><br />
      <input type="text" placeholder="password" name="password" id="password" /><br />
      <input type="submit" value="Submit" />
    </form>
    </div>
  )
}

export default Login
