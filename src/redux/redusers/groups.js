const setLoader ="SET_LOADER"
const setGroups = "SET_GROUPS";

const initialState = {
  items: [],
  loader: false
};

const groups = (state = initialState, action) => {
  switch (action.type) {
    case setLoader: {
      return {
        ...state,
        loader: !state.loader,
      };
    }

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