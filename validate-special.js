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

module.exports = validateSpcl