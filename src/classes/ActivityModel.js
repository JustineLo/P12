/**
 * @param {Object} data 
 * @param {number} data.userId 
 * @param {Array<Object>} data.sessions 
 */

class ActivityModel {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}

export default ActivityModel;
