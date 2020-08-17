'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('#signUpSuccess').modal('show')
  $('#signUpModal').modal('hide')

  $('form').trigger('reset')
}
const signUpFail = function () {
  $('#signUpFail').modal('show')
  $('#signUpModal').modal('hide')
}

const loginSuccess = function (response) {
  $('form').trigger('reset')
  $('.login, .signup').hide()
  $('.changepw, #logout, .create-gym, .fas, .user-button, #show-my-gyms').show()
  $('#loginSuccess').modal('show')
  $('#loginModal').modal('hide')
  $('.summary').html('A crowdsourced library of martial arts gyms in the Greater Boston Area.<br>Browse gyms by training concentration or add your own gym to the database.')
  $('.gyms-list').empty()
  $('#collapseExample').collapse('hide')
  store.user = response.user
}
const loginFail = function () {
  $('form').trigger('reset')
  $('#loginModal').modal('hide')
  $('#loginFail').modal('show')
}

const changepwSuccess = function () {
  $('#changepwModal').modal('hide')
  $('#changepwSuccess').modal('show')
  $('form').trigger('reset')
}
const changepwFail = function () {
  $('#changepwModal').modal('hide')
  $('#changepwFail').modal('show')
  $('form').trigger('reset')
}

const logoutSuccess = function () {
  $('form').trigger('reset')
  store.user = {}
  store.user._id = ''
  $('#logout, .changepw, .create-gym, .fas, .user-button, #show-my-gyms').hide()
  $('.login, .signup').show()
  $('#logoutSuccess').modal('show')
  $('.gyms-list').empty()
  $('.summary').html('A crowdsourced library of martial arts gyms in the Greater Boston Area.<br>Browse gyms by training concentration or <span class="signup"><a href="#" class="signUp">sign up</a> to add your own gym to the database.</span>')
}
const logoutFail = function () {
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
  $('form').trigger('reset')
}

const signUp = function () {
  $('form').trigger('reset')
  $('#loginModal').modal('hide')
  $('#signUpModal').modal('show')
}
const login = function () {
  $('form').trigger('reset')
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
