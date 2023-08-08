// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    let asc = 1
    let des = 1
    for (let i = 0; i < array.length; i++){
      if (array[i] <= array[i+1]) asc++
      if (array[i] >= array[i+1]) des++
    }
  
    if (asc === array.length){
      return "yes, ascending"
    } else if (des === array.length){
      return "yes, descending"
    } else {
      return 'no'
    }
  }