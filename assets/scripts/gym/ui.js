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
  $('.gyms-list').append(gymsHtml)
  $('.message').text('Retrieved all gyms from database')
  $('form').trigger('reset')
}
const showGymsFail = function (error) {
  $('.message').text('Failed to retrieve gyms from database.\nSee error message: ' + error.message)
  $('form').trigger('reset')
}

module.exports = {
  createGymSuccess,
  createGymFail,
  showGymsSuccess,
  showGymsFail
}
