/**
 * @param {Object} data 
   @param {number} data.userId
   @param {string} data.kind 
   @param {Object} data.data
 */

class PerformanceModel {
  constructor(data) {
    this.userId = data.userId;
    this.kind = data.kind;
    this.data = data.data;
  }
}

export default PerformanceModel;
