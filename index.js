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
let games = 0;
while(Math.abs(games) < 5) {
  console.log("Games played: " + games)
let prompt = window.prompt("Rock Paper or Scissors?");
let result = play(prompt.toUpperCase());
alert(result);
if(result == "Win") score++;
if(result == "Lose") score--;
games++;
alert("Current score: " + score);
if(games >= 5 && score !== 0) {
  if(score > 0) alert("Victory!");
  if(score < 0) alert("Game over!");
}
}
