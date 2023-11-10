// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

function largestPairSum(numbers){
  return numbers.sort((a,b) => a-b).slice(-2).reduce((a,c) => a +c, 0);
}