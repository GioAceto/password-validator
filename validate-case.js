const validateCase = (pwd) => {
  let spclArray = ['!', '#', '$', '%', '&', '\'', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '~', ' ']
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

module.exports = validateCase
