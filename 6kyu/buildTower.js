// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    let tower = []
    for (let i = 1; i <= nFloors; i++){
      let floor = " ".repeat(nFloors-i) + "*".repeat((i*2)-1) + " ".repeat(nFloors-i)
      tower.push(floor)
    }
    return tower
  }
  
  //example
  //   "     *     ", 5 spaces 1 *'s'
  //   "    ***    ", 4 spaces 3 *'s'
  //   "   *****   ", 3 spaces 5 *'s'
  //   "  *******  ", 2 spaces 7 *'s'
  //   " ********* ", 1 spaces 9 *'s'
  //   "***********"  0 spaces 11 *'s'