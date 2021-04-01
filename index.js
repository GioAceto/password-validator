const validatePassword = (pass) => {
    while (pass.length > 8) {
        return validateCap &&
            validateLow &&
            validateNum &&
            validateSpcl
    }
    return false
}
module.exports = validatePassword