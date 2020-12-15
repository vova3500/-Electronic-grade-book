import { usersAPI } from "../../api";

export const setUsers = (items) => ({
  type: "SET_USERS",
  payload: items,
});

export const setSearchUsers = (items) => ({
  type: "SET_SEARCH_USERS",
  payload: items,
});

export const sendUsers = (newUsers) => ({
  type: "SEND_USERS",
  payload: newUsers,
});

export const loadingUsers = () => async (dispatch) => {
  try{
    let resposne = await usersAPI.getUsers();
    dispatch(setUsers(resposne.data));
  }
  catch (e){
    alert(e)
  }
};

export const loadingSendUsers = (user) => async (dispatch) => {
  try{
   let respons = await usersAPI.sendUsers(user);
    dispatch(sendUsers(respons.data));
  }
  catch (e){
    alert(e)
  }
};