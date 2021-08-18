import "./App.css";
import Login from "./components/Login";
import { useEffect } from "react";
import { Route, Switch } from "react-router";
import Welcome from "./components/Welcome";
import { checkUser } from "./redux/action";

import Restricted from "./components/Restricted";
import NotAuthorized from "./components/NotAuthorized";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(user);

  
  useEffect(() => {
    dispatch(checkUser());
  }, []);





  return (
    <div className="app">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/welcome"
          render={() => (user.loading ? <Login /> : <Welcome />)}
        />
        <Route
          exact
          path="/restricted"
          render={() =>
            user.role.includes("MANAGER") ? (
              <Restricted />
            ) : user.role == "" ? (
              <Login />
            ) : (
              <NotAuthorized />
            )
          }
        />
        <Route exact path="/notAuthorized" component={NotAuthorized} />
      </Switch>
    </div>
  );
}
export default App;
