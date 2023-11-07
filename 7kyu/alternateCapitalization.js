// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
    let s1 = ''
    let s2 = ''
    s.split('').map((x,i) => {
      if (i % 2 === 0){
        s1 += x.toUpperCase()
        s2 += x.toLowerCase()
      } else {
        s2 += x.toUpperCase()
        s1 += x.toLowerCase()
      }
      })
    return [s1,s2]
  };