const validatePassword = (pwd) => {
    let result = false
    let cap = 0
    let low = 0
    let num = 0
    let spcl = 0
    let required = 1
    let spclArray = ['\!', '\"', '\#', '\$', '\%', '\&', '\'', '\(', '\)', '\*', '\+', '\-', '\.', '\/', '\:', '\;', '\<', '\=', '\>', '\?', '\@', '\[', '\\', '\]', '\^', '\_', '\`', '\{', '\|', '\}', '\~', ' ']

    for (let i = 0; i < pwd.length; i++) {
        if (isNaN(pwd[i]) && spclArray.indexOf(pwd[i]) === required - 2) {
            if (pwd[i] === pwd[i].toUpperCase()) {
                cap++
            } else if (pwd[i] === pwd[i].toLowerCase()) {
                low++
            }
        } else if (!isNaN(pwd[i])) {
            num++
        } else if (spclArray.indexOf(pwd[i]) > -1) {
            spcl++
        }
        if ((pwd.length > 8) && ((cap && low && num && spcl) >= required)) {
            result = true
        }
    }

    return result
}


module.exports = validatePassword