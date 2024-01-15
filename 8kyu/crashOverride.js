// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// Examples
// // These two objects are preloaded, you need to use them in your code
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

function aliasGen(f,l){
    //A-Z 65-122
    const firstInitial = f[0].toUpperCase()
    const lastInitial = l[0].toUpperCase()
    const errorString = "Your name must start with a letter from A - Z." 
    if (firstInitial.charCodeAt() < 65 || firstInitial.charCodeAt() > 122) return errorString
    if (lastInitial.charCodeAt() < 65 || lastInitial.charCodeAt() > 122) return errorString
    return firstName[firstInitial] + ' ' + surname[lastInitial]
}