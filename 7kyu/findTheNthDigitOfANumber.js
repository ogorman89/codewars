var findDigit = function(num, nth){
    if(nth < 1) return -1
    if(nth > String(Math.abs(num)).length) return 0
    return Number(String(num).slice(-nth)[0])
  }