import axios from "axios";
import DataModel from "./classes/DataModel";

export async function fetchData() {
  return axios
    .get("http://localhost:3000/user/12/")
    .then(function (response) {
      const user = new DataModel(response.data.data);
      return user;
    })
    .catch(function (error) {
      console.log(error);
    });
}
