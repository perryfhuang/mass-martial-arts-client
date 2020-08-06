'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gymEvents = require('./gym/events')
const uiEvents = require('./gym/ui')
const uiAuthEvents = require('./auth/ui')

$(() => {
  // Auth event listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#login').on('submit', authEvents.onLogin)
  $('#changepw').on('submit', authEvents.onChangepw)
  $('#logout').on('click', authEvents.onLogout)

  // Login button listener for immediately AFTER user has signed up
  $('.login-after-signup').on('click', uiAuthEvents.loginAfterSignUp)

  // Button listeners for after failed auth events
  $('.login-after-fail').on('click', uiAuthEvents.loginAfterFail)
  $('.sign-up-after-fail').on('click', uiAuthEvents.signUpAfterFail)
  $('.changepw-after-fail').on('click', uiAuthEvents.changepwAfterFail)

  // Gym resource event listeners
  $('#create-gym').on('submit', gymEvents.onCreateGym)
  $('#show-all').on('click', gymEvents.onShowAll)
  $('#update-gym').on('submit', gymEvents.onUpdateGym)
  // Delete gym with event delegation (able to delete AFTER gyms list is added to HTML aka AFTER page load)
  $('.gyms-list').on('click', '.delete-gym', gymEvents.onDeleteGym)
  // Show update gym form with same event delegation concept
  $('.gyms-list').on('click', '.update-gym', uiEvents.showUpdateForm)
})
