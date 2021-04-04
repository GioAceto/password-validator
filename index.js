const validateCase = require('./validate-case')
const validateNum = require('./validate-num')
const validateSpcl = require('./validate-special')

const validatePassword = (pwd) => {
  let minLength = 8
  let result = false

  if ((pwd.length >= minLength) && (validateCase(pwd) && validateNum(pwd) && validateSpcl(pwd) === true)) {
    result = true
  }

  return result
}

module.exports = validatePassword
