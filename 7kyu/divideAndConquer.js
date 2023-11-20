// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let a = []
    let b = []
    x.map(y => typeof y === "string" ? b.push(+y) : a.push(+y))
  return a.reduce((a,c) => a + c,0) - b.reduce((a,c) => a + c,0)
  }