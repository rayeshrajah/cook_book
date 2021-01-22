import axios from "axios";
import { USERS } from "../constants/types";

export const getUsers = () => {
  return (dispatch) => {
    axios
      .get("/users")
      .then((response) => {
        const data = response.data;
        dispatch({
          type: USERS,
          payload: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
