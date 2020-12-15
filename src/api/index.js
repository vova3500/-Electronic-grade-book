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
  }
};

export const groupsAPI = {
  getGroups() {
    return instance.get(
      "groups"
    );
  },
};