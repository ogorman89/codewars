// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text) {
    //return text.slice(-1)
    let newStr = text.split(' ').map(x => {
      if(x.length > 2) {
       return x[0].charCodeAt() + x.slice(-1) + x.slice(2,-1) + x[1]
        } else if (x.length > 1){
          return x[0].charCodeAt() + x.slice(-1)
        } else {
          return x[0].charCodeAt()
        }
    }).join(' ')
    return newStr
    }