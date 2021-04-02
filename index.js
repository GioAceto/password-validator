
const validatePassword = (pwd) => {
    let result = false
    let cap = 0
    let low = 0
    let num = 0
    let spcl = 0
    let spclArray = ['\!', '\"', '\#', '\$', '\%', '\&', '\'', '\(', '\)', '\*', '\+', '\-', '\.', '\/', '\:', '\;', '\<', '\=', '\>', '\?', '\@', '\[', '\\', '\]', '\^', '\_', '\`', '\{', '\|', '\}', '\~']
    for (let i = 0; i < pwd.length; i++) {
        if (isNaN(pwd[i]) && spclArray.indexOf(pwd[i]) === -1) {
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
    }
    if ((pwd.length > 8) && (cap > 0) && (low > 0) && (num > 0) && (spcl > 0)) {
        result = true
    }
    return result
}



module.exports = validatePassword