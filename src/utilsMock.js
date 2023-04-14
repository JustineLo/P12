import UserModel from "./classes/UserModel";


/**
 * 
 * @param { number } id 
 */

export async function fetchUserData(id) {
  return new Promise((resolve) => {
    resolve({
        "id":19,
        "userInfos":{
          "firstName":"Justine",
          "lastName":"Lo",
          "age":44
        },
        "score":0.4,
        "keyData":{
          "calorieCount":3000,
          "proteinCount":100,
          "carbohydrateCount":150,
          "lipidCount":120
        }
      }
    );
  }).then(
    (data) => {
      const user = new UserModel(data);
      return user;
    }
  );
}

/**
 * 
 * @param { number } id 
 */

export async function fetchActivityData(id) {
  return new Promise((resolve) => {
    resolve({
        "userId":18,
        "sessions":
        [
          {
            "day":"2020-07-01",
            "kilogram":70,
            "calories":140
          },
          {
            "day":"2020-07-02",
            "kilogram":69,
            "calories":320
          },
          {
            "day":"2020-07-03",
            "kilogram":70,
            "calories":250
          },
          {
            "day":"2020-07-04",
            "kilogram":70,
            "calories":50
          },
          {
            "day":"2020-07-05",
            "kilogram":69,
            "calories":160
          },
          {
            "day":"2020-07-06",
            "kilogram":69,
            "calories":162
          },
          {
            "day":"2020-07-07",
            "kilogram":69,
            "calories":390
          }
        ]
      }
    );
  });
}

/**
 * 
 * @param { number } id 
 */

export async function fetchAverageSessionsData(id) {
  return new Promise((resolve) => {
    resolve({
        "userId":18,
        "sessions":[
          {
            "day":1,
            "sessionLength":30
          },
          {
            "day":2,
          "sessionLength":20
          },
          {
            "day":3,
          "sessionLength":20
        },
          {
            "day":4,
          "sessionLength":20
        },
          {
          "day":5,
          "sessionLength":10
        },
          {
            "day":6,
            "sessionLength":50
          },
          {
            "day":7,
            "sessionLength":50
          }
        ]
      }
    );
  });
}

/**
 * 
 * @param { number } id 
 */

export async function fetchPerformanceData(id) {
  return new Promise((resolve) => {
    resolve({
        "userId":18,
        "kind":
        {
          "1":"cardio",
          "2":"energy",
          "3":"endurance",
          "4":"strength",
          "5":"speed",
          "6":"intensity"
        },
        "data":
        [
          {
            "value":40,
            "kind":1
          },
          {
            "value":40,
            "kind":2
          },
          {
            "value":180,
            "kind":3
          },
          {
            "value":280,
            "kind":4
          },
          {
            "value":220,
            "kind":5
          },
          {
            "value":110,
            "kind":6
          }
        ]
      }
    );
  });
}