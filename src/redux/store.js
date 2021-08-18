import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {userReducer} from "./reducer"
const initialState=userReducer.state;
const middleware = [thunk];
 const store = createStore(
  userReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))
); 

export default store