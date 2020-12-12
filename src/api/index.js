import axios from "axios";

const instance = axios.create({
  baseURL: "https://json-server-my.herokuapp.com",
});

export const usersAPI = {
  getUsers() {
    return instance.get(
      "students?_embed=groups"
    );
  },
};