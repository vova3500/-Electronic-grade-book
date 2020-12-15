import { groupsAPI } from "../../api";

export const setGroups = (items) => ({
  type: "SET_GROUPS",
  payload: items,
});

export const loadingGroups = () => async (dispatch) => {
  try{
    let resposne = await groupsAPI.getGroups();
    dispatch(setGroups(resposne.data));
  }
  catch (e){
    alert(e)
  }
};