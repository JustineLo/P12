import axios from "axios";
import ActivityModel from "./classes/ActivityModel";
import UserModel from "./classes/UserModel";

export async function fetchUserData() {
  return axios
    .get("http://localhost:3000/user/12/")
    .then(function (response) {
      const user = new UserModel(response.data.data);
      return user;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function fetchActivityData() {
  return axios
    .get("http://localhost:3000/user/12/activity")
    .then(function (response) {
      const activity = new ActivityModel(response.data.data);
      return activity;
    })
    .catch(function (error) {
      console.log(error);
    });
}
