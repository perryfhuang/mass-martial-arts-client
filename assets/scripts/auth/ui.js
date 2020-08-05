'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('.message').text('Account created!')
  $('form').trigger('reset')
}
const signUpFail = function (error) {
  $('.message').text('Failed to create account.\nSee error message: ' + error.message)
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFail
}
