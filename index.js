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
      if(computerInput == "ROCK") return 0
      if(computerInput == "SCISSORS") return 1
      if(computerInput == "PAPER") return -1
      break;
    case "SCISSORS":
      if(computerInput == "ROCK") return -1
      if(computerInput == "SCISSORS") return 0
      if(computerInput == "PAPER") return 1
      break;
    case "PAPER":
      if(computerInput == "ROCK") return 1
      if(computerInput == "SCISSORS") return -1
      if(computerInput == "PAPER") return 0
      break;
    default: 
      return "Invalid"
  }
}

let score = 0;
let games = 5; //Should be 0

// Lets use the DOM
document.querySelectorAll("button").forEach(function(button) {
  
  let result = document.querySelector("score");
  document.querySelector("score").textContent = Number(document.querySelector("score").textContent) + Number(result)
  document.querySelector("games").textContent = Number(document.querySelector("games").textContent) + 1;
  
  if(result == 0) {
    document.querySelector("games").textContent = "Draw."
  } else if (result == 1) {
    document.querySelector("games").textContent = "Win!"
  } else {
    document.querySelector("games").textContent = "Lose..."
  }
  button.addEventListener('event', event);
})