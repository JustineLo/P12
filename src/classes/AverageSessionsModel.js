/**
 * @param {Object} data 
 * @param {number} data.userId 
 * @param {Array<Object>} data.sessions 
 */

class AverageSessionsModel {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}

export default AverageSessionsModel;
