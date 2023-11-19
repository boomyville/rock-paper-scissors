function getComputerChoice() {
  //List options available
  const options = ["ROCK", "PAPER", "SCISSORS"];
  //Pick a random one 
  return options[Math.floor(Math.random() * options.length)];
}

function playerChoice(input) {
  return input.toUpperCase();
}

function play(playerInput, computerInput) {
  switch(playerInput) {
    case "ROCK":
      if(computerInput == "ROCK") return "Draw"
      if(computerInput == "SCISSORS") return "Win"
      if(computerInput == "PAPER") return "Lose"
    case "SCISSORS":
      if(computerInput == "ROCK") return "Lose"
      if(computerInput == "SCISSORS") return "Draw"
      if(computerInput == "PAPER") return "Win"
    case "PAPER":
      if(computerInput == "ROCK") return "Win"
      if(computerInput == "SCISSORS") return "Lose"
      if(computerInput == "PAPER") return "Draw"
  }
}

