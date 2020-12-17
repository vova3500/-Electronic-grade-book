const setDisciplines = "SET_DISCIPLINES";

const initialState = {
  items: [],
};

const disciplines = (state = initialState, action) => {
  switch (action.type) {
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