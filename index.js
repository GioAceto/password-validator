import { validateCap, validateLow, validateNum, validateSpcl } from './sub-functions'

const validatePassword = (pass) => {
    while (pass.length > 8) {
        if ((validateCap = true) &&
            (validateLow = true) &&
            (validateNum = true) &&
            (validateSpcl = true)) {
            return true
        }
    }
    return false
}
module.exports = validatePassword