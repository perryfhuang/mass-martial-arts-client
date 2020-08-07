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
const onShowBJJ = function () {
  api.showGyms()
    .then(ui.showBJJGymsSuccess)
    .catch(ui.showBJJGymsFail)
}
const onShowJudo = function () {
  api.showGyms()
    .then(ui.showJudoGymsSuccess)
    .catch(ui.showJudoGymsFail)
}
const onShowKarate = function () {
  api.showGyms()
    .then(ui.showKarateGymsSuccess)
    .catch(ui.showKarateGymsFail)
}
const onShowKickboxing = function () {
  api.showGyms()
    .then(ui.showKickboxingGymsSuccess)
    .catch(ui.showKickboxingGymsFail)
}
const onShowMuayThai = function () {
  api.showGyms()
    .then(ui.showMuayThaiGymsSuccess)
    .catch(ui.showMuayThaiGymsFail)
}
const onShowTKD = function () {
  api.showGyms()
    .then(ui.showTKDGymsSuccess)
    .catch(ui.showTKDGymsFail)
}
const onShowWrestling = function () {
  api.showGyms()
    .then(ui.showWrestlingGymsSuccess)
    .catch(ui.showWrestlingGymsFail)
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
  onShowBoxing,
  onShowBJJ,
  onShowJudo,
  onShowKarate,
  onShowKickboxing,
  onShowMuayThai,
  onShowTKD,
  onShowWrestling
}
