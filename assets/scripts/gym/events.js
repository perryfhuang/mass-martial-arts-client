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
const onShowMMA = function (event) {
  api.showGyms()
    .then(ui.showMMAGymsSuccess)
    .catch(ui.showMMAGymsFail)
}
const onShowBoxing = function () {
  api.showGyms()
    .then(ui.showBoxingGymsSuccess)
    .catch(ui.showBoxingGymsFail)
}

const onDeleteGym = function (event) {
  const gymId = $(event.target).data('id')
  api.deleteGym(gymId)
    .then(ui.deleteGymSuccess)
    .catch(ui.deleteGymFail)
}

const onUpdateGym = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const gymId = $('.update-gym-submit').data('id')
  formData._id = gymId
  console.log(formData)
  console.log(gymId)
  api.updateGym(formData, gymId)
    .then(ui.updateGymSuccess)
    .catch(ui.updateGymFail)
}

module.exports = {
  onCreateGym,
  onShowAll,
  onDeleteGym,
  onUpdateGym,
  onShowMMA,
  onShowBoxing
}
