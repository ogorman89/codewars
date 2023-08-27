// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
  const [name1, name2, name3] = names
  const numNames = names.length
  
  if (numNames > 3) {
    return `${name1}, ${name2} and ${numNames-2} others like this`
  } else if (numNames === 3){
    return `${name1}, ${name2} and ${name3} like this`
  } else if (numNames === 2){
    return `${name1} and ${name2} like this`
  } else if (numNames === 1){
    return `${name1} likes this`
  } else {
    return `no one likes this`
  }
}