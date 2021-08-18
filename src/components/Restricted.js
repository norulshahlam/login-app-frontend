import React, { useEffect } from "react";

import {checkUser} from "../redux/action"
import {useDispatch} from "react-redux"

const Restricted = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUser());
  }, []);
  return <div>restricted page</div>;
};

export default Restricted;
