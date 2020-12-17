import { disciplinesAPI } from "../../api";

export const setDisciplines = (items) => ({
  type: "SET_DISCIPLINES",
  payload: items,
});

export const loadingDiscipline = () => async (dispatch) => {
  try{
    let resposne = await disciplinesAPI.getDisciplines();
    dispatch(setDisciplines(resposne.data));
  }
  catch (e){
    alert(e)
  }
};