import { usersAPI } from "../../api";

export const setUsers = (items) => ({
    type: "SET_USERS",
    payload: items,
  });

  export const loadingUsers = () => async (dispatch) => {
    let resposne = await usersAPI.getUsers();
    dispatch(setUsers(resposne.data));
  };