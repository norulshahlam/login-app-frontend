import "./App.css";
import Login from "./components/Login";
import { Route, Switch } from "react-router";
import Welcome from "./components/Welcome";
import Restricted from "./components/Restricted";
import NotAuthorized from "./components/NotAuthorized";

function App()
{
  return (
    <div className="app">
      <Switch>
        <Route exact path="/login" component={Login} />
          <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/restricted" component={Restricted} />
        <Route exact path="/notAuthorized" component={NotAuthorized} />
      </Switch>
    </div>
  );
}
export default App;
