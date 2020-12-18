const setUsers = "SET_USERS";
const setSearchUsers = "SET_SEARCH_USERS"
const sendUsers = "SEND_USERS";
const deleteUser = "DELETE_USER"

const initialState = {
  items: [],
  seacrhItems: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    
    case setUsers: {
      let newUsers = [...action.payload].map((user)=>{
        let newUser = {...user}
        newUser.key = newUser.id 
        return newUser
      })
      
      return {
        ...state,
        items: newUsers,
      };
    }

    case setSearchUsers: {
      return {
        ...state,
        seacrhItems: action.payload,
      };
    }

    case sendUsers: {
      return {
        ...state,
        items: [...state.items ,action.payload],
      };
    }

    case deleteUser: {
      let newUsers = [...state.items].filter((item)=> item.id !== action.payload)
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