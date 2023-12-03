// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    let dict = {}
    
    arr.map(x => {
      if (dict[x]){
        dict[x] += 1
      } else {
        dict[x] = 1
      }
    })
    
    let maxKey = Object.keys(dict)[0]
    console.log(dict)
    //console.log(maxKey)
    
    for (let key of Object.keys(dict)){
      if (dict[key] >= dict[maxKey]){
        maxKey = key
      }
    }
    return +maxKey
  }