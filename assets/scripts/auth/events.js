'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onLogin = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.login(formData)
    .then(ui.loginSuccess)
    .catch(ui.loginFail)
}

const onChangepw = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.changepw(formData)
    .then(ui.changepwSuccess)
    .catch(ui.changepwFail)
}

const onLogout = function () {
  api.logout()
    .then(ui.logoutSuccess)
    .catch(ui.logoutFail)
}

module.exports = {
  onSignUp,
  onLogin,
  onChangepw,
  onLogout
}
