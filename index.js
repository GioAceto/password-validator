const validatePassword = (pass) => {
    while (pass.length > 8) {
        if (cap > 0 && low > 0 && spcl > 0) {
            return true
        }
    }
    return false
}
module.exports = validatePassword