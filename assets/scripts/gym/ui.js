'use strict'

const createGymSuccess = function () {
  $('.message').text('Your gym was added to the database!')
  $('form').trigger('reset')
}
const createGymFail = function (error) {
  $('.message').text('Failed to create gym.\nSee error message: ' + error.message)
  $('form').trigger('reset')
}

module.exports = {
  createGymSuccess,
  createGymFail
}
