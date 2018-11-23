const { Router: router } = require('express');
const { authenticate } = require('../../middleware');
const permission = require('../../middleware/permission-checker');
const { EDIT_USER, REMOVE_USER, CREATE_USER } = permission.actions;
const get = require('./get');
const { getStatistic } = require('./get-statistic');
const { getStatisticCount } = require('./get-statistic-count');
const getStatisticExcel = require('./get-statistic-excel');
const update = require('./update');
const list = require('./list');
const create = require('./create');
const remove = require('./remove');
const groups = require('./groups');
const approve = require('./approve');
const unApprove = require('./un-approve');
const deActivate = require('./de-activate');
/**
 * Provide Api for User

 GET /api/v1/users/ - Users list
 @header
        Authorization: Bearer {token}
 @optionalQueryParameters
         search {String} - value to search
         limit {Number} - count of item to send
         skip {Number} - value to search
         type {String} - volunteer || users || admin
         isApproved {Boolean} -  is user approved by admin
 GET /api/v1/users/statistic - Lessons list statistic
 @header
      Authorization: Bearer {token}
 GET /api/v1/users/statistic/excel - Lessons list statistic in excel
 @header
      Authorization: Bearer {token}
 @optionalQueryParameters
     filter.
       from {Date} - filter from date
       to {Date} - filter to date
       groupId - {String} - filter by group
       activityId - {String} - filter by activity

 GET /api/v1/users/:_id - Get User
 @header
        Authorization: Bearer {token}
 POST /api/v1/users/ - Create User
 @header
    Authorization: Bearer {token}
 @params
 email {string}
 avatar {Image}
 documentApproval {
          personalId: Boolean
          scanId: Boolean
       }
 profile: {Object}
 role: {String}

 PATCH /api/v1/users/:_id - Update User details
 @header
        Authorization: Bearer {token}
 @params
       email {string}
       avatar {Image}
       documentApproval {
          personalId: Boolean
          scanId: Boolean
       }
       profile: {Object}
       role: {String}
 GET /api/v1/users/:_id/groups - Groups list
 @header
        Authorization: Bearer {token}
 @optionalQueryParameters
       limit {Number} - count of item to send
       skip {Number} - value to search

 **/

module.exports = (models, { config }) => {
  const api = router();

  api.get('/auth', authenticate, get(models));
  api.get('/:_id', authenticate, get(models));

  return api;
};
