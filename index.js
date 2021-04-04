const validatePassword = (pwd) => {
    let minLength = 8
    let result = false

    if ((pwd.length >= minLength) && (validateCase(pwd) && validateNum(pwd) && validateSpcl(pwd) === true)) {
        result = true
    }

    return result
}


const validateCase = (pwd) => {
    let spclArray = ['\!', '\"', '\#', '\$', '\%', '\&', '\'', '\(', '\)', '\*', '\+', '\-', '\.', '\/', '\:', '\;', '\<', '\=', '\>', '\?', '\@', '\[', '\\', '\]', '\^', '\_', '\`', '\{', '\|', '\}', '\~', ' ']
    let cap = 0
    let low = 0
    let caseResult = false
    let required = 1

    for (let i = 0; i < pwd.length; i++) {
        let char = pwd[i]

        if (isNaN(char) && spclArray.indexOf(char) === -1) {
            if (char === char.toUpperCase()) {
                cap++
            } else if (char === char.toLowerCase()) {
                low++
            }
        }
    }
    if (cap && low >= required) {
        caseResult = true
    }

    return caseResult
}

const validateNum = (pwd) => {
    let num = 0
    let numResult = false
    let required = 1

    for (let i = 0; i < pwd.length; i++) {
        let char = pwd[i]

        if (!isNaN(char)) {
            num++
        }
    }
    if (num >= required) {
        numResult = true
    }

    return numResult
}

const validateSpcl = (pwd) => {
    let spclArray = ['\!', '\"', '\#', '\$', '\%', '\&', '\'', '\(', '\)', '\*', '\+', '\-', '\.', '\/', '\:', '\;', '\<', '\=', '\>', '\?', '\@', '\[', '\\', '\]', '\^', '\_', '\`', '\{', '\|', '\}', '\~', ' ']
    let spcl = 0
    let spclResult = false
    let required = 1

    for (let i = 0; i < pwd.length; i++) {
        let char = pwd[i]

        if (isNaN(char) && spclArray.indexOf(char) > -1) {
            spcl++
        }
    }
    if (spcl >= required) {
        spclResult = true
    }

    return spclResult
}


module.exports = validatePassword
