
const validatePassword = (pass) => {
    let result = false
    let cap = 0
    let low = 0
    let num = 0
    let spclArray = ['\!']
    for (let i = 0; i < pass.length; i++) {
        if (isNaN(pass[i]) && pass[i] === pass[i].toUpperCase()) {
            for (let count = 0; count < spclArray.length; count++) {
                if (spclArray[count] !== pass[i]) {
                    cap++
                }
            }

        }
    }
    if ((pass.length > 8) && (cap > 0)) {
        result = cap
    }
    return result
}



module.exports = validatePassword

                //if (pass[i] === pass[i].toLowerCase()) {
            //low++
            //}
            //if (!isNaN(pass[i])) {
            //num++
            //}
