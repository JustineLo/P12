/**
 * @param {Object} data
   @param {number} data.id
   @param {Object} data.userInfos
   @param {string} data.userInfos.firstName
   @param {string} data.userInfos.lastName
   @param {number} data.userInfos.age
   @param {number} data.score
   @param {Object} data.keyData
   @param {number} data.keyData.calorieCoun
   @param {number} data.keyData.proteinCount
   @param {number} data.keyData.carbohydrateCount
 */

class UserModel {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.userInfos = data.userInfos;
    this.age = data.userInfos.age;
    this.score = data.score || data.todayScore;
    this.keyData = data.keyData;
    this.calorieCount = data.keyData.calorieCount;
    this.proteinCount = data.keyData.proteinCount;
    this.carbohydrateCount = data.keyData.carbohydrateCount;
    this.lipidCount = data.keyData.lipidCount;
  }
}

export default UserModel;
