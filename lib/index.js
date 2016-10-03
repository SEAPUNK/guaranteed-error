'use strict'

module.exports = function (err) {
  var fixStack = false
  if (!(err instanceof Error)) {
    err = new Error(err)
    fixStack = true
  }

  if (!err.name) err.name = 'Error'
  if (!err.message) err.message = '<No error message provided>'
  if (!err.stack || fixStack) {
    err.stack = (
      err.name + ': ' + err.message + '\n' +
      '    at <unknown>'
    )
  }

  return err
}
