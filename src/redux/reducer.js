import { CHECK_USER, AUTHENTICATE, LOGOUT } from "./constants";
const initialState = { name: "", username: "", role: [], loading: true };
export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHECK_USER:
    case AUTHENTICATE:
      return {
        ...state,
        ...payload,
      };
    case LOGOUT:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
