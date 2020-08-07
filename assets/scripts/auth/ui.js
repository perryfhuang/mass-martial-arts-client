'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('.message').text('Account created!')
  $('#signUpSuccess').modal('show')
  $('#signUpModal').modal('hide')

  $('form').trigger('reset')
}
const signUpFail = function () {
  $('.message').text('Account is taken, please try again.')
  $('#signUpFail').modal('show')
  $('#signUpModal').modal('hide')
}

const loginSuccess = function (response) {
  $('.message').text('Succesfully logged in.')
  $('form').trigger('reset')
  $('.login, .signup').hide()
  $('.changepw, #logout, .create-gym').show()
  $('#loginSuccess').modal('show')
  $('#loginModal').modal('hide')

  store.user = response.user
  console.log(store)
}
const loginFail = function () {
  $('.message').text('Login failed. =(\nPlease check credentials.')
  $('form').trigger('reset')
  $('#loginModal').modal('hide')
  $('#loginFail').modal('show')
}

const changepwSuccess = function () {
  $('.message').text('Password changed!')
  $('#changepwModal').modal('hide')
  $('#changepwSuccess').modal('show')
  $('form').trigger('reset')
}
const changepwFail = function () {
  $('.message').text('Failed to change password.')
  $('#changepwModal').modal('hide')
  $('#changepwFail').modal('show')
  $('form').trigger('reset')
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
  $('form').trigger('reset')
}

const loginAfterSignUp = function () {
  $('#signUpSuccess').modal('hide')
  $('form').trigger('reset')
}

const loginAfterFail = function () {
  $('#loginModal').modal('show')
  $('form').trigger('reset')
}

const signUpAfterFail = function () {
  $('#signUpModal').modal('show')
  $('form').trigger('reset')
}

const changepwAfterFail = function () {
  $('#changepwFail').modal('hide')
  $('#changepwModal').modal('show')
}

const signUp = function () {
  $('#loginModal').modal('hide')
  $('#signUpModal').modal('show')
}
const login = function () {
  $('#loginModal').modal('show')
  $('#signUpModal, #loginFail').modal('hide')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  loginSuccess,
  loginFail,
  changepwSuccess,
  changepwFail,
  logoutSuccess,
  logoutFail,
  loginAfterSignUp,
  loginAfterFail,
  signUpAfterFail,
  changepwAfterFail,
  signUp,
  login
}
