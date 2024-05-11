'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.apiUsersGET = function apiUsersGET (req, res, next) {
  Default.apiUsersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUsersPOST = function apiUsersPOST (req, res, next, body) {
  Default.apiUsersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUsersPUT = function apiUsersPUT (req, res, next, body) {
  Default.apiUsersPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiWorkoutsGET = function apiWorkoutsGET (req, res, next) {
  Default.apiWorkoutsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiWorkoutsPOST = function apiWorkoutsPOST (req, res, next, body) {
  Default.apiWorkoutsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiWorkoutsPUT = function apiWorkoutsPUT (req, res, next, body, workoutId) {
  Default.apiWorkoutsPUT(body, workoutId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiWorkoutsWorkoutIdDELETE = function apiWorkoutsWorkoutIdDELETE (req, res, next, workoutId) {
  Default.apiWorkoutsWorkoutIdDELETE(workoutId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiWorkoutsWorkoutIdGET = function apiWorkoutsWorkoutIdGET (req, res, next, workoutId) {
  Default.apiWorkoutsWorkoutIdGET(workoutId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
