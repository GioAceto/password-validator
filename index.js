
const validatePassword = (pass) => {
    let num = 0
    if (pass.length > 8) {
        for (let i = 0; i < pass.length; i++) {
            if (!isNaN(pass[i])) {
                num++
            }
        }
        if (num > 0) { return true }
    }
    return false
}

module.exports = validatePassword
