import { CHECK_USER, AUTHENTICATE, LOGOUT } from "./constants";
import axios from "axios";
import { API_URL } from "../Constants";

export const checkUser = () => {
  return (dispatch) => {
    axios.get(`${API_URL}/userdetails`).then((response) => {
      if (response.data.name) {
        dispatch({
          type: CHECK_USER,
          payload: {
            name: response.data.name,
            username: response.data.principal.username,
            role: response.data.principal.authorities.map((item) =>
              item.authority.slice(5)
            ),
            loading: false,
          },
        });
      }
    });
  };
};
export const logout = () => {
  return (dispatch) => {
    axios.get(`${API_URL}/logout`).then((response) => {
      dispatch({
        type: LOGOUT,
        payload: {
          name: "",
          username: "",
          role: [""],
          loading: true,
        },
      });
    });
  };
};

export const authenticate = (bodyFormData) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: `${API_URL}/login`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data; charset=utf-8" },
    }).then((response) => {
      if (response.data.name) {
        dispatch({
          type: AUTHENTICATE,
          payload: {
            name: response.data.name,
            username: response.data.principal.username,
            role: response.data.principal.authorities.map((item) =>
              item.authority.slice(5)
            ),
          },
        });
      }
    });
  };
};
