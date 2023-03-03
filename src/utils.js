import axios from "axios";
import ActivityModel from "./classes/ActivityModel";
import AverageSessionsModel from "./classes/AverageSessionsModel";
import PerformanceModel from "./classes/PerformanceModel";
import UserModel from "./classes/UserModel";

export async function fetchUserData() {
  return axios
    .get("http://localhost:3000/user/18/")
    .then(function (response) {
      const user = new UserModel(response.data.data);
      return user;
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
}

export async function fetchActivityData() {
  return axios
    .get("http://localhost:3000/user/18/activity")
    .then(function (response) {
      const activity = new ActivityModel(response.data.data);
      return activity;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function fetchAverageSessionsData() {
  return axios
    .get("http://localhost:3000/user/18/average-sessions")
    .then(function (response) {
      const activity = new AverageSessionsModel(response.data.data);
      return activity;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function fetchPerformanceData() {
  return axios
    .get("http://localhost:3000/user/18/performance")
    .then(function (response) {
      const performance = new PerformanceModel(response.data.data);
      return performance;
    })
    .catch(function (error) {
      console.log(error);
    });
}
