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
    method: 'GET'
  })
}

const deleteGym = function (gymId) {
  return $.ajax({
    url: config.apiUrl + '/gyms/' + gymId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGym = function (formData, gymId) {
  return $.ajax({
    url: config.apiUrl + '/gyms/' + gymId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createGym,
  showGyms,
  deleteGym,
  updateGym
}
