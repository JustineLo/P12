class DataModel {
  constructor(data) {
    this.id = data.id;
    this.userInfos = {
      firstName: data.userInfos.firstName,
      lastName: data.userInfos.lastName,
      age: data.userInfos.age,
    };
    todayScore: data.todayScore;
    this.keyData = {
      calorieCount: data.keyData.calorieCount,
      proteinCount: data.keyData.proteinCount,
      carbonhydrateCount: data.keyData.carbonhydrateCount,
      lipidCount: data.keyData.lipidCount,
    };
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
