// MMA HELPER
'use strict'

// Handlebars.registerHelper('ifMMA', function(concentration, options) {
//     return (concentration == 'MMA') ? options.fn(this) : options.inverse(this);
// });

const ifMMA = concentration => {
  if (concentration === 'MMA') {
    return true
  } else {
    return false
  }
}

module.exports = ifMMA
