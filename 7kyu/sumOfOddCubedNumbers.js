// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    let sum = arr.map(x => x**3).filter(x => x % 2 !== 0).reduce((a,c) => a + c, 0) 
    return isNaN(sum) ? undefined : sum
    }