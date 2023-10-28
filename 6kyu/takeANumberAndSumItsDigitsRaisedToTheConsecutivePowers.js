// The number 
// 89
// 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 

// 135 is another example 1^1 + 3^2 + 5^3 = 135

// Task
// We need a function to collect these numbers, that may receive two integers a, b that defines the range 

// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range 
// [a,b] the function should output an empty list.

// 90, 100 --> []
// Enjoy it!!

function sumDigPow(a, b) {
    let arr = []
    for (let i = a; i <= b; i++){
      let digitArr = String(i).split('')
      let newDigitArr = digitArr.map((x,j) => x**(j+1))
      let sum = newDigitArr.reduce((acc,cur) => acc += Number(cur),0)
      if(sum === i){
        arr.push(i)
      }
    }
    return arr
  }