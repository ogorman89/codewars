// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n){
    let fact = 1
    while(n>0){
      fact *= n;
      n--;
    }
    return fact
  }