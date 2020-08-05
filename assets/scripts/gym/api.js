'use strict'
const config = require('../config')

const createGym = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/gyms',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  createGym
}
