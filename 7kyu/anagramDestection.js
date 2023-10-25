// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
function newDict(word){
    let dict = {}
    for (let i = 0; i < word.length; i++)
      if (word[i] in dict){
        dict[word[i]] += 1
      } else {
        dict[word[i]] = 1
      }
    return dict
  }
  
  var isAnagram = function(test, original) {
    test = test.toLowerCase()
    original = original.toLowerCase()
    let testDict = newDict(test)
    let originalDict = newDict(original)
    //console.log(testDict)
    //console.log(originalDict)
    for (let key in testDict){
      console.log(key,testDict[key],originalDict[key])
      if (testDict[key] !== originalDict[key] || test.length !== original.length){
        return false
      }
    } 
    return true
  };