import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import { Link, useHistory } from "react-router-dom";
import { checkUser, logout } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Welcome = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state);
  const handleClick = (e) => {
    e.preventDefault();
    console.log(3);
    dispatch(logout());
  };
  
  useEffect(() => {
    dispatch(checkUser());
    if(user.name ==="")
    history.push("/login")
  }, []);

  return (
    <div>
      {user.loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <div className="header">
            <h2>welcome</h2>
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
            <UserDetails />
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
