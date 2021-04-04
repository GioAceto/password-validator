const validatePassword = (pwd) => {
    let result = false
    let cap = 0
    let low = 0
    let num = 0
    let spcl = 0
    let required = 1
    let spclArray = ['\!', '\"', '\#', '\$', '\%', '\&', '\'', '\(', '\)', '\*', '\+', '\-', '\.', '\/', '\:', '\;', '\<', '\=', '\>', '\?', '\@', '\[', '\\', '\]', '\^', '\_', '\`', '\{', '\|', '\}', '\~', ' ']

    for (let i = 0; i < pwd.length; i++) {
        let char = pwd[i]
        if (isNaN(char) && spclArray.indexOf(char) === -1) {
            if (char === char.toUpperCase()) {
                cap++
            } else if (char === char.toLowerCase()) {
                low++
            }
        } else if (!isNaN(char)) {
            num++
        } else if (spclArray.indexOf(char) > -1) {
            spcl++
        }
        if ((pwd.length > 8) && ((cap && low && num && spcl) >= required)) {
            return true
        }
    }

    return result
}


module.exports = validatePassword