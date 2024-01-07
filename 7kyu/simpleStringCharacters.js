// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

function solve(s){
    //upper, lower, numbers, special chars
    // a-z 97 - 122
    // A-Z 65 - 90
    // 0 - 9 48 - 57
    let result = [0,0,0,0]
    s.split('').map(x => {
      let code = x.charCodeAt()
      if (code > 64 && code < 91){
        result[0] += 1
      }else if (code > 96 && code < 123){
        result[1] += 1
      }else if (code > 47 && code < 58){
        result[2] += 1
      } else {
        result[3] += 1
      }
    })
   return result
  }