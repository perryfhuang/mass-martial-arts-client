'use strict'
const config = require('../config')
const store = require('../store')

const createGym = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/gyms',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGyms = function () {
  return $.ajax({
    url: config.apiUrl + '/gyms',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  createGym,
  showGyms
}
