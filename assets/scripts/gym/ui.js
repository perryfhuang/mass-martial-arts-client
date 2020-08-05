'use strict'
const gymsHandlebarsTemplate = require('../gyms.handlebars')

const createGymSuccess = function () {
  $('.message').text('Your gym was added to the database!')
  $('form').trigger('reset')
}
const createGymFail = function (error) {
  $('.message').text('Failed to create gym.\nSee error message: ' + error.message)
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
  $('.message').text('Deleted gym from database!')
}
const deleteGymFail = function () {
  $('.message').text('Failed to delete gym from database!')
}

const showUpdateForm = function () {
  // Attach GYM data-id somehow to this form - use .data jquery method
  // Set update-gym-submit button's data-id attribute to the data-id attribute of the specific gym
  $('.update-gym-submit').data('id', $(this).data('id'))
  console.log($('.update-gym-submit').data('id'))
  $('#update-gym').fadeIn(500)
}

const updateGymSuccess = function () {
  $('.message').text('Updated gym info!')
  $('#update-gym').hide()
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
