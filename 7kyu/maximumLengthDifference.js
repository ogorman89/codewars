// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

function mxdiflg(a1, a2) {
    if (a1.length < 1 || a2.length < 1) return -1
    let a1Lens = a1.map(x=>x.length)
    let a1Max = Math.max(...a1Lens)
    let a1Min = Math.min(...a1Lens)
    
    let a2Lens = a2.map(x=>x.length)
    let a2Max = Math.max(...a2Lens)
    let a2Min = Math.min(...a2Lens)
    
    return Math.max(a1Max-a2Min,a2Max-a1Min)
}