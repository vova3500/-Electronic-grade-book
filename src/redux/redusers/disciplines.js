const setDisciplines = "SET_DISCIPLINES";
const setLoader ="SET_LOADER"

const initialState = {
  items: [],
  loader: false
};

const disciplines = (state = initialState, action) => {
  switch (action.type) {
    case setLoader: {
      return {
        ...state,
        loader: !state.loader,
      };
    }

    case setDisciplines: {
      return {
        ...state,
        items: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default disciplines;