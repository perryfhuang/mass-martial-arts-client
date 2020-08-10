// ifowner HELPER
'use strict'
const store = require('../../store.js')

const ifowner = owner => {
  if (store.user._id === owner) {
    return true
  } else {
    return false
  }
}

module.exports = ifowner
