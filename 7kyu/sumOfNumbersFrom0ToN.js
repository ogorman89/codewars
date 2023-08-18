// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(n) {
      console.log(n)
      if (n === 0){
      return '0=0'
      } else if (n < 0){
        return `${n}<0`
      }
      let nums = []
      for (let i = 0; i <= n; i++){
        nums.push(i)
      }
      let sum = nums.reduce((a,c)=> a + c, 0)
      return nums.join('+') + ` = ${sum}`
      };
  
    return SequenceSum;
  
  })();