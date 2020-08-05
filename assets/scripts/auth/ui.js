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

const loginSuccess = function (response) {
  $('.message').text('Succesfully logged in.')
  $('form').trigger('reset')
  store.user = response.user
  console.log(store)
}
const loginFail = function () {
  $('.message').text('Login failed. =(\nPlease check credentials.')
}

const changepwSuccess = function () {
  $('.message').text('Password changed!')
  $('form').trigger('reset')
}
const changepwFail = function () {
  $('.message').text('Failed to change password.')
}

const logoutSuccess = function () {
  $('.message').text('Succesfully logged out.\nCya later!')
  $('form').trigger('reset')
  store.user = null
  // $('#main-menu').fadeIn(500)
  // $('#logout, #new-game, #stats, #show-changepw, #change-pw').hide()
}
const logoutFail = function () {
  $('.message').text('Failed to logout. =(')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  loginSuccess,
  loginFail,
  changepwSuccess,
  changepwFail,
  logoutSuccess,
  logoutFail
}
