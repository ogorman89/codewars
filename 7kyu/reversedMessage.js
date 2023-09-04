// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

// Example:

// reverseMessage('This is an example of a Reversed Message!');
// Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

function reverseMessage(str) {
  if (str == '') {
    return ''
  }
  let rev = str.split(' ').reverse()
  for (let i = 0; i < rev.length; i++){
    rev[i] = rev[i].split('').reverse().join('')
    rev[i] = rev[i][0].toUpperCase() + rev[i].substring(1).toLowerCase()
  }
  return rev.join(' ')
}