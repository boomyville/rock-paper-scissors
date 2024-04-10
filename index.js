function getComputerChoice() {
  //List options available
  const options = ["ROCK", "PAPER", "SCISSORS"];
  //Pick a random one 
  return options[Math.floor(Math.random() * options.length)];
}

function play(playerInput) {
  let computerInput = getComputerChoice();
  switch(playerInput) {
    case "ROCK":
      if(computerInput == "ROCK") return "Draw"
      if(computerInput == "SCISSORS") return "Win"
      if(computerInput == "PAPER") return "Lose"
      break;
    case "SCISSORS":
      if(computerInput == "ROCK") return "Lose"
      if(computerInput == "SCISSORS") return "Draw"
      if(computerInput == "PAPER") return "Win"
      break;
    case "PAPER":
      if(computerInput == "ROCK") return "Win"
      if(computerInput == "SCISSORS") return "Lose"
      if(computerInput == "PAPER") return "Draw"
      break;
    default: 
      return "Invalid"
  }
}

let score = 0;
let games = 5; //Should be 0

// Lets use the DOM
