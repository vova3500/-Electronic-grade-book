import { usersAPI } from "../../api";

export const setLoader = () => ({
  type: "SET_LOADER",
});

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

export const deleteUser = (id) => ({
  type: "DELETE_USER",
  payload: id,
});

export const updateUser = (user) => ({
  type: "UPDATE_USER",
  payload: user,
});

export const loadingUsers = () => async (dispatch) => {
  try{
   dispatch(setLoader())
    let resposne = await usersAPI.getUsers();
    dispatch(setLoader())
    dispatch(setUsers(resposne.data));
  }
  catch (e){
    alert(e)
  }
};

export const loadingSendUsers = (user) => async (dispatch) => {
  try{
    dispatch(setLoader())
    let respons = await usersAPI.sendUsers(user);
    dispatch(setLoader())
    dispatch(sendUsers(respons.data));
  }
  catch (e){
    alert(e)
  }
};

export const loadingDeleteUser = (id) => async (dispatch) => {
  try{
    dispatch(setLoader())
    await usersAPI.deleteUser(id);
    dispatch(setLoader())
    dispatch(deleteUser(id));
  }
  catch (e){
    alert(e)
  }
};

export const loadingUpdateUser = (id,rating) => async (dispatch) => {
  try{
    // console.log(rating);
    dispatch(setLoader())
    let respons = await usersAPI.updateRating(id,rating);
    dispatch(setLoader())
    dispatch(updateUser(respons.data))
    // dispatch(deleteUser(id,disciplineId,count));
  }
  catch (e){
    alert(e)
  }
};