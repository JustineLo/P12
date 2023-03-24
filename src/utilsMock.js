export async function fetchUserData(id) {
  return axios
    .get(`http://localhost:3000/user/${id}/`)
    .then(function (response) {
      const user = new UserModel(response.data.data);
      return user;
    });
}
