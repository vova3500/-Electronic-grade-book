const setUsers = "SET_USERS";

const initialState = {
  items: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case setUsers: {

      let newUsers = [...action.payload].map((user)=>{
        let newUser = {...user}
        newUser.groups = user.groups[0].name
        newUser.key = newUser.id
        return newUser
      })
      return {
        ...state,
        items: newUsers,
      };
    }
    default: {
      return state;
    }
  }
};

export default users;