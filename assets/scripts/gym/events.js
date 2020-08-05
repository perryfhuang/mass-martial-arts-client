'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui')

const onCreateGym = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)

  api.createGym(formData)
    .then(ui.createGymSuccess)
    .catch(ui.createGymFail)
}

const onShowAll = function (event) {
  api.showGyms()
    .then(ui.showGymsSuccess)
    .catch(ui.showGymsFail)
}

module.exports = {
  onCreateGym,
  onShowAll
}
