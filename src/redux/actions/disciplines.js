import { disciplinesAPI } from "../../api";

export const setLoader = () => ({
  type: "SET_LOADER",
});

export const setDisciplines = (items) => ({
  type: "SET_DISCIPLINES",
  payload: items,
});

export const loadingDiscipline = () => async (dispatch) => {
  try{
    dispatch(setLoader())
    let resposne = await disciplinesAPI.getDisciplines();
    dispatch(setLoader())
    dispatch(setDisciplines(resposne.data));
  }
  catch (e){
    alert(e)
  }
};