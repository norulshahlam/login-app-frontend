import React from 'react'
import { Link } from "react-router-dom";

const NotAuthorized = () => {
  
  return (
    <div>

      <h1>

      Sorry! You dont have the right to access this page
      </h1>
      <Link to="/welcome"> Back to welcome page</Link>

    </div>
  )
}

export default NotAuthorized
