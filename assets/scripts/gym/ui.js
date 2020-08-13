'use strict'
const gymsHandlebarsTemplate = require('../handlebars/gyms.handlebars')
const gymHandlebarsTemplate = require('../handlebars/gym.handlebars')
const gymsMMAHandlebarsTemplate = require('../handlebars/gyms-mma.handlebars')
const gymsBoxingHandlebarsTemplate = require('../handlebars/gyms-boxing.handlebars')
const gymsBJJHandlebarsTemplate = require('../handlebars/gyms-bjj.handlebars')
const gymsJudoHandlebarsTemplate = require('../handlebars/gyms-judo.handlebars')
const gymsKarateHandlebarsTemplate = require('../handlebars/gyms-karate.handlebars')
const gymsKickboxingHandlebarsTemplate = require('../handlebars/gyms-kickboxing.handlebars')
const gymsMuayThaiHandlebarsTemplate = require('../handlebars/gyms-muay-thai.handlebars')
const gymsTKDHandlebarsTemplate = require('../handlebars/gyms-tkd.handlebars')
const gymsWrestlingHandlebarsTemplate = require('../handlebars/gyms-wrestling.handlebars')
const getGymsModalHandlebarsTemplate = require('../handlebars/get-gyms-modal.handlebars')
const api = require('./api')

const createGymSuccess = function (response) {
  $('form').trigger('reset')
  const gymHtml = gymHandlebarsTemplate({ gym: response.gym })
  // APPEND NEW GYM TO CURRENT LIST
  $('.gyms-list').append(gymHtml)
  $('#createGymModal').modal('hide')
  $('#createGymSuccess').modal('show')
}
const createGymFail = function () {
  $('#createGymModal').modal('hide')
  $('#createGymFail').modal('show')
  $('form').trigger('reset')
}

const showGymsSuccess = function (response) {
  const getGymsModal = getGymsModalHandlebarsTemplate()
  $('body').append(getGymsModal)
  $('#getGymsSuccess').modal('show')
  const gymsHtml = gymsHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('form').trigger('reset')
}
const showGymsFail = function () {
  $('form').trigger('reset')
}

const showMMAGymsSuccess = function (response) {
  const gymsHtml = gymsMMAHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('form').trigger('reset')
  $('#getMMAGyms').modal('show')
}
const showMMAGymsFail = function () {
  $('form').trigger('reset')
}

const showBoxingGymsSuccess = function (response) {
  const gymsHtml = gymsBoxingHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('form').trigger('reset')
  $('#getBoxingGyms').modal('show')
}
const showBoxingGymsFail = function () {
  $('form').trigger('reset')
}

const showBJJGymsSuccess = function (response) {
  const gymsHtml = gymsBJJHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('form').trigger('reset')
  $('#getBJJSuccess').modal('show')
}
const showBJJGymsFail = function () {
  $('form').trigger('reset')
}

const showJudoGymsSuccess = function (response) {
  const gymsHtml = gymsJudoHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('form').trigger('reset')
  $('#getJudoGyms').modal('show')
}
const showJudoGymsFail = function () {
  $('form').trigger('reset')
}

const showKarateGymsSuccess = function (response) {
  const gymsHtml = gymsKarateHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('form').trigger('reset')
  $('#getKarateGyms').modal('show')
}
const showKarateGymsFail = function () {
  $('form').trigger('reset')
}

const showKickboxingGymsSuccess = function (response) {
  const gymsHtml = gymsKickboxingHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('form').trigger('reset')
  $('#getKickboxingGyms').modal('show')
}
const showKickboxingGymsFail = function () {
  $('form').trigger('reset')
}

const showMuayThaiGymsSuccess = function (response) {
  const gymsHtml = gymsMuayThaiHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('form').trigger('reset')
  $('#getMuayThaiGyms').modal('show')
}
const showMuayThaiGymsFail = function () {
  $('form').trigger('reset')
}

const showTKDGymsSuccess = function (response) {
  const gymsHtml = gymsTKDHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('form').trigger('reset')
  $('#getTKDGyms').modal('show')
}
const showTKDGymsFail = function () {
  $('form').trigger('reset')
}

const showWrestlingGymsSuccess = function (response) {
  const gymsHtml = gymsWrestlingHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('form').trigger('reset')
  $('#getWrestlingGyms').modal('show')
}
const showWrestlingGymsFail = function () {
  $('form').trigger('reset')
}

const deleteGymConfirmation = function () {
  $('#confirmDeleteGym').modal('show')
  // Set data-id attribute on delete confirmation modal to data-id attribute of initial delete button (the gym's unique ID - to find and delete in database)
  $('.delete').data('id', $(this).data('id'))
}

const deleteGymSuccess = function () {
  // After successful delete, trigger a get-all-gyms event to refresh list
  api.showGyms()
    .then(() => $('#deleteGymSuccess').modal({ backdrop: 'static', keyboard: false }))
    .catch(showGymsFail)
}
const deleteGymFail = function () {
  $('deleteGymFail').modal('show')
}

const showUpdateForm = function () {
  // Attach GYM data-id somehow to this form - use .data jquery method
  // Set update-gym-submit button's data-id attribute to the data-id attribute of the specific gym
  $('.update-gym-submit').data('id', $(this).data('id'))

  // Auto populate current gym info into the form
  // This was done by setting data attributes for all gym info on the update button for each gym using handlebars template (data-name, data-street, data-hours, etc.), and then setting the form field using jquery (by getting the data-value from the button)
  $('.gym-name').val($(this).data('name'))
  $('.gym-concentration').val($(this).data('concentration'))
  $('.gym-street').val($(this).data('street'))
  $('.gym-city').val($(this).data('city'))
  $('.gym-state').val($(this).data('state'))
  $('.gym-zip').val($(this).data('zip'))
  $('.gym-hours').val($(this).data('hours'))
  $('.gym-link').val($(this).data('link'))

  $('#updateGymModal').modal('show')
  $('#update-gym').show()
}

const updateGymSuccess = function (response) {
  // After successful update, trigger get all gyms api call to refresh list
  // UPDATED -> refresh button calls GET all gyms api call
  // kind of clunky, but workaround for a modal bug that came up
  api.showGyms()
    .then(() => $('#updateGymModal').modal('hide'))
    .then(() => $('#update-gym').hide())
    .then(() => $('#updateGymSuccess').modal({ backdrop: 'static', keyboard: false }))
    .catch(showGymsFail)
}
const updateGymFail = function () {
  $('#updateGymFail').modal('show')
  $('#updateGymModal').modal('hide')
  $('#update-gym').hide()
}

const showCreateGymForm = function () {
  $('#createGymFail').modal('hide')
  $('#createGymModal').modal('show')
}

const showUpdateGymForm = function () {
  $('#updateGymFail').modal('hide')
  $('#updateGymModal').modal('show')
}
module.exports = {
  createGymSuccess,
  createGymFail,
  showGymsSuccess,
  showGymsFail,
  deleteGymSuccess,
  deleteGymFail,
  showUpdateForm,
  updateGymSuccess,
  updateGymFail,
  showCreateGymForm,
  showUpdateGymForm,
  showMMAGymsSuccess,
  showMMAGymsFail,
  showBoxingGymsSuccess,
  showBoxingGymsFail,
  showBJJGymsSuccess,
  showBJJGymsFail,
  showJudoGymsSuccess,
  showJudoGymsFail,
  showKarateGymsSuccess,
  showKarateGymsFail,
  showKickboxingGymsSuccess,
  showKickboxingGymsFail,
  showTKDGymsSuccess,
  showTKDGymsFail,
  showMuayThaiGymsSuccess,
  showMuayThaiGymsFail,
  showWrestlingGymsSuccess,
  showWrestlingGymsFail,
  deleteGymConfirmation
}
