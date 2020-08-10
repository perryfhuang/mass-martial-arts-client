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
  console.log(response)
  $('.message').text('Your gym was added to the database!')
  $('form').trigger('reset')
  const gymHtml = gymHandlebarsTemplate({ gym: response.gym })
  // APPEND NEW GYM TO CURRENT LIST
  $('.gyms-list').append(gymHtml)
  $('#createGymModal').modal('hide')
  $('#createGymSuccess').modal('show')
}
const createGymFail = function () {
  $('.message').text('Failed to create gym.')
  $('#createGymModal').modal('hide')
  $('#createGymFail').modal('show')
  $('form').trigger('reset')
}

const showGymsSuccess = function (response) {
  console.log(response)
  // $('#showGymsSuccess').modal('show')
  const getGymsModal = getGymsModalHandlebarsTemplate()
  $('body').append(getGymsModal)
  $('#getGymsSuccess').modal('show')
  const gymsHtml = gymsHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('.message').text('Retrieved all gyms from database')
  $('form').trigger('reset')
}
const showGymsFail = function (error) {
  $('.message').text('Failed to retrieve gyms from database.\nSee error message: ' + error.message)
  $('form').trigger('reset')
}

const showMMAGymsSuccess = function (response) {
  const gymsHtml = gymsMMAHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('.message').text('Retrieved all MMA gyms from database')
  $('form').trigger('reset')
  $('#getMMAGyms').modal('show')
}
const showMMAGymsFail = function (error) {
  $('.message').text('Failed to retrieve gyms from database.\nSee error message: ' + error.message)
  $('form').trigger('reset')
}

const showBoxingGymsSuccess = function (response) {
  // $('#showGymsSuccess').modal('show')
  const gymsHtml = gymsBoxingHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('.message').text('Retrieved all boxing gyms from database')
  $('form').trigger('reset')
  $('#getBoxingGyms').modal('show')
}
const showBoxingGymsFail = function (error) {
  $('.message').text('Failed to retrieve gyms from database.\nSee error message: ' + error.message)
  $('form').trigger('reset')
}

const showBJJGymsSuccess = function (response) {
  // $('#showGymsSuccess').modal('show')
  const gymsHtml = gymsBJJHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('.message').text('Retrieved all BJJ gyms from database')
  $('form').trigger('reset')
  $('#getBJJSuccess').modal('show')
}
const showBJJGymsFail = function (error) {
  $('.message').text('Failed to retrieve gyms from database.\nSee error message: ' + error.message)
  $('form').trigger('reset')
}

const showJudoGymsSuccess = function (response) {
  // $('#showGymsSuccess').modal('show')
  const gymsHtml = gymsJudoHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('.message').text('Retrieved all judo gyms from database')
  $('form').trigger('reset')
  $('#getJudoGyms').modal('show')
}
const showJudoGymsFail = function (error) {
  $('.message').text('Failed to retrieve gyms from database.\nSee error message: ' + error.message)
  $('form').trigger('reset')
}

const showKarateGymsSuccess = function (response) {
  // $('#showGymsSuccess').modal('show')
  const gymsHtml = gymsKarateHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('.message').text('Retrieved all karate gyms from database')
  $('form').trigger('reset')
  $('#getKarateGyms').modal('show')
}
const showKarateGymsFail = function (error) {
  $('.message').text('Failed to retrieve gyms from database.\nSee error message: ' + error.message)
  $('form').trigger('reset')
}

const showKickboxingGymsSuccess = function (response) {
  // $('#showGymsSuccess').modal('show')
  const gymsHtml = gymsKickboxingHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('.message').text('Retrieved all kickboxing gyms from database')
  $('form').trigger('reset')
  $('#getKickboxingGyms').modal('show')
}
const showKickboxingGymsFail = function (error) {
  $('.message').text('Failed to retrieve gyms from database.\nSee error message: ' + error.message)
  $('form').trigger('reset')
}

const showMuayThaiGymsSuccess = function (response) {
  // $('#showGymsSuccess').modal('show')
  const gymsHtml = gymsMuayThaiHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('.message').text('Retrieved all Muay Thai gyms from database')
  $('form').trigger('reset')
  $('#getMuayThaiGyms').modal('show')
}
const showMuayThaiGymsFail = function (error) {
  $('.message').text('Failed to retrieve gyms from database.\nSee error message: ' + error.message)
  $('form').trigger('reset')
}

const showTKDGymsSuccess = function (response) {
  // $('#showGymsSuccess').modal('show')
  const gymsHtml = gymsTKDHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('.message').text('Retrieved all Tae Kwon Do gyms from database')
  $('form').trigger('reset')
  $('#getTKDGyms').modal('show')
}
const showTKDGymsFail = function (error) {
  $('.message').text('Failed to retrieve gyms from database.\nSee error message: ' + error.message)
  $('form').trigger('reset')
}

const showWrestlingGymsSuccess = function (response) {
  // $('#showGymsSuccess').modal('show')
  const gymsHtml = gymsWrestlingHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('.message').text('Retrieved all wrestling gyms from database')
  $('form').trigger('reset')
  $('#getWrestlingGyms').modal('show')
}
const showWrestlingGymsFail = function (error) {
  $('.message').text('Failed to retrieve gyms from database.\nSee error message: ' + error.message)
  $('form').trigger('reset')
}

const deleteGymSuccess = function () {
  // After successful delete, trigger a get-all-gyms event to refresh list
  api.showGyms()
    .then(showGymsSuccess)
    .then(() => $('.message').text('Deleted gym from database and refreshed list!'))
    .catch(showGymsFail)
}
const deleteGymFail = function () {
  $('.message').text('Failed to delete gym from database!')
}

const showUpdateForm = function () {
  // Attach GYM data-id somehow to this form - use .data jquery method
  // Set update-gym-submit button's data-id attribute to the data-id attribute of the specific gym
  $('.update-gym-submit').data('id', $(this).data('id'))
  console.log($('.update-gym-submit').data('id'))

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

const updateGymSuccess = function () {
  // After successful update, trigger get all gyms api call to refresh list
  api.showGyms()
    .then(showGymsSuccess)
    .then(() => $('#showGymsSuccess').modal('hide'))
    .then(() => $('#updateGymModal').modal('hide'))
    .then(() => $('#update-gym').hide())
    .then(() => $('.message').text('Updated gym info and refreshed list!'))
    .then(() => $('#updateGymSuccess').modal('show'))
    .catch(showGymsFail)
}
const updateGymFail = function () {
  $('.message').text('Failed to update gym!')
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
  showWrestlingGymsFail
}
