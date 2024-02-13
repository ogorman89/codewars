// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

//    a:x1
//    b:y1
//    c:x2
//    d:y2

function slope(points){
    var [a, b, c, d] = points
    var slope = (d-b) / (c-a)
    return  Number.isFinite(slope) ? String(slope) : "undefined"
  }