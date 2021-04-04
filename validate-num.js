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

module.exports = validateNum