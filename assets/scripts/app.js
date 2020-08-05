'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gymEvents = require('./gym/events')
const uiEvents = require('./gym/ui')

$(() => {
  // Auth event listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#login').on('submit', authEvents.onLogin)
  $('#changepw').on('submit', authEvents.onChangepw)
  $('#logout').on('click', authEvents.onLogout)

  // Gym resource event listeners
  $('#create-gym').on('submit', gymEvents.onCreateGym)
  $('#show-all').on('click', gymEvents.onShowAll)
  $('#update-gym').on('submit', gymEvents.onUpdateGym)
  // Delete gym with event delegation (able to delete AFTER gyms list is added to HTML aka AFTER page load)
  $('.gyms-list').on('click', '.delete-gym', gymEvents.onDeleteGym)
  $('.gyms-list').on('click', '.update-gym', uiEvents.showUpdateForm)
})
