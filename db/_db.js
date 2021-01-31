'use strict';

module.exports = function() {
  return {
    orders: require('./orders.json').orders,
    statuses: require('./statuses.json').statuses
  }
}