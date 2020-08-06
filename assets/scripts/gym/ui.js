'use strict'
const gymsHandlebarsTemplate = require('../gyms.handlebars')
const gymHandlebarsTemplate = require('../gym.handlebars')
const api = require('./api')

const createGymSuccess = function (response) {
  console.log(response)
  $('.message').text('Your gym was added to the database!')
  $('form').trigger('reset')
  const gymHtml = gymHandlebarsTemplate({ gym: response.gym })
  // APPEND NEW GYM TO CURRENT LIST
  $('.gyms-list').append(gymHtml)
}
const createGymFail = function () {
  $('.message').text('Failed to create gym.')
  $('form').trigger('reset')
}

const showGymsSuccess = function (response) {
  console.log(response)
  const gymsHtml = gymsHandlebarsTemplate({ gyms: response.gyms })
  $('.gyms-list').html(gymsHtml)
  $('.message').text('Retrieved all gyms from database')
  $('form').trigger('reset')
}
const showGymsFail = function (error) {
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

  $('#update-gym').fadeIn(500)
}

const updateGymSuccess = function () {
  // After successful update, trigger get all gyms api call to refresh list
  api.showGyms()
    .then(showGymsSuccess)
    .then(() => $('#update-gym').hide())
    .then(() => $('.message').text('Updated gym info and refreshed list!'))
    .catch(showGymsFail)
}
const updateGymFail = function () {
  $('.message').text('Failed to update gym!')
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
  updateGymFail
}
