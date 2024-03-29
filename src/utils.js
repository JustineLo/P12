import axios from "axios";
import ActivityModel from "./classes/ActivityModel";
import AverageSessionsModel from "./classes/AverageSessionsModel";
import PerformanceModel from "./classes/PerformanceModel";
import UserModel from "./classes/UserModel";

/**
 * 
 * @param { number } id 
 */

export async function fetchUserData(id) {
  return axios
    .get(`http://localhost:3000/user/${id}/`)
    .then(function (response) {
      const user = new UserModel(response.data.data);
      return user;
    });
}

/**
 * 
 * @param { number } id 
 */

export async function fetchActivityData(id) {
  return axios
    .get(`http://localhost:3000/user/${id}/activity`)
    .then(function (response) {
      const activity = new ActivityModel(response.data.data);
      return activity;
    });
}

/**
 * 
 * @param { number } id 
 */

export async function fetchAverageSessionsData(id) {
  return axios
    .get(`http://localhost:3000/user/${id}/average-sessions`)
    .then(function (response) {
      const activity = new AverageSessionsModel(response.data.data);
      return activity;
    });
}

/**
 * 
 * @param { number } id 
 */

export async function fetchPerformanceData(id) {
  return axios
    .get(`http://localhost:3000/user/${id}/performance`)
    .then(function (response) {
      const performance = new PerformanceModel(response.data.data);
      return performance;
    });
}
