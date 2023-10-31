// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    //a 97
    //z 122
    //A 65
    //Z 90
    console.log("|".charCodeAt())
    return message.split('').map(ltr => {
      let j = ltr.charCodeAt()
      let i = j + 13
      if (j < 65 || j > 122 || (j > 90 && j < 97)){
        return ltr
      }
      if (ltr === ltr.toLowerCase()){
        if (i > 122){
          return String.fromCharCode(i-122+96)
        } else {
          return String.fromCharCode(i)
        }
      } else if (ltr === ltr.toUpperCase()){
        if (i > 90){
          return String.fromCharCode(i-90+64)
        } else {
          return String.fromCharCode(i)
        }
      }
    }).join('')
                          }