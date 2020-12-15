const setGroups = "SET_GROUPS";

const initialState = {
  items: [],
};

const groups = (state = initialState, action) => {
  switch (action.type) {
    case setGroups: {
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

export default groups;