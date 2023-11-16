// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    return string.split('').map(x => {
        let code = x.charCodeAt()
        if (code > 64 && code < 91){
          return ' ' + x
        }
        return x
    }).join('')
  }