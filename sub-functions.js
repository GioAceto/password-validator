
const validateCap = (pass) => {

}

const validateLow = (pass) => {

}

const validateNum = (pass) => {
    let num = 0

    for (let i = 0; i < pass.length; i++) {
        if (!isNaN(pass[i])) {
            num++
        }
        if (num > 0) {
            return true
        }

        return false
    }
}

const validateSpcl = (pass) => {

}