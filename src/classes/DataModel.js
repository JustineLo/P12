class DataModel {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.userInfos = data.userInfos;
    this.age = data.userInfos.age;
    this.todayScore = data.todayScore;
    this.keyData = data.keyData;
    this.calorieCount = data.keyData.calorieCount;
    this.proteinCount = data.keyData.proteinCount;
    this.carbohydrateCount = data.keyData.carbohydrateCount;
    this.lipidCount = data.keyData.lipidCount;
  }

  getId() {
    return this.id;
  }

  getFirstName() {
    return this.userInfos.firstName;
  }

  getLastName() {
    return this.userInfos.lastName;
  }

  getAge() {
    return this.userInfos.age;
  }

  getTodayScore() {
    return this.todayScore;
  }

  getCalorieCount() {
    return this.keyData.calorieCount;
  }

  getProteinCount() {
    return this.keyData.proteinCount;
  }

  getCarbonhydrateCount() {
    return this.keyData.carbonhydrateCount;
  }

  getLipidCount() {
    return this.keyData.lipidCount;
  }
}

export default DataModel;
