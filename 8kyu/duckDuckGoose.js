// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

function duckDuckGoose(players, goose) {
    while (goose > players.length) {
      goose -= players.length
    }  
    return players[goose-1].name
  }