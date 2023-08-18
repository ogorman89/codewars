// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function caseCheck(x){
    let code = x.charCodeAt()
    if (code > 64 && code < 91){
        return 'upper'
    } else if (code > 96 && code < 123){
        return 'lower'
    } else {
      return false
    } 
  }
  
  function sameCase(a, b){
    return caseCheck(a) === caseCheck(b) && caseCheck(a) ? 1 : caseCheck(a) && caseCheck(b) ? 0 : -1
  }

//A 65
//Z 90
//a 97
//z 122