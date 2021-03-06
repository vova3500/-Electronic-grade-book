import axios from "axios";

const instance = axios.create({
  baseURL: "https://json-server-my.herokuapp.com",
});

export const usersAPI = {
  getUsers() {
    return instance.get(
      "students?_expand=group"
    );
  },
  sendUsers(newUser) {
    return instance.post(
      "students",newUser
    );
  },
  deleteUser(id) {
    return instance.delete(
      `students/${id}`
    );
  },
  updateRating(id,rating) {
    return instance.patch(
      `students/${id}`,{rating}
    )
  }
};

export const groupsAPI = {
  getGroups() {
    return instance.get(
      "groups"
    );
  },
};

export const disciplinesAPI = {
  getDisciplines() {
    return instance.get(
      "disciplines"
    );
  },
};
