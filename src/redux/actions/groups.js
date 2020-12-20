import { groupsAPI } from "../../api";

export const setLoader = () => ({
  type: "SET_LOADER",
});

export const setGroups = (items) => ({
  type: "SET_GROUPS",
  payload: items,
});

export const loadingGroups = () => async (dispatch) => {
  try{
    dispatch(setLoader())
    let resposne = await groupsAPI.getGroups();
    dispatch(setLoader())
    dispatch(setGroups(resposne.data));
  }
  catch (e){
    alert(e)
  }
};