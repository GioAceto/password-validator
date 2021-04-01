const validatePassword = (pass) => {
    while (pass.length > 8) {
        return true
    }
    return false
}
module.exports = validatePassword