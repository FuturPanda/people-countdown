
let gameMoves = ['paper', 'rock', 'scissors']; 

function getComputerChoice(randomItem) {
  return randomItem[Math.floor(Math.random()*randomItem.length)]
}
let playerSelection =  (prompt("what's your move ?")).toLowerCase();
let computerSelection = getComputerChoice(gameMoves)

console.log(computerSelection)

function playGround() {
  if (computerSelection === playerSelection )
  console.log ("Draw ! try again")
  else if (playerSelection === "Paper") {
    if (computerSelection === 'Rock')
    console.log ("You Win ! Paper beats Rock")
    else if (computerSelection === 'Scissors')
    console.log ("You Loose ! Paper get beat by Scissors")
  }
  else if (playerSelection === "Rock") {
    if (computerSelection === 'Paper')
    console.log ("You Loose ! Paper beats Rock")
    else if (computerSelection === 'Scissors')
    console.log ("You Win ! Rock beats Scissors everytime")
  }
  else if (playerSelection === "Scissors") {
    if (computerSelection === 'Rock')
    console.log ("You Loose ! Rock still Beat Scissors")
    else if (computerSelection === 'Paper')
    console.log ("You Win ! Paper gets beat by Scissors")
  }
  else 
  console.log ("Interdit de tricher ! ")
}

playGround();
/*
1. Get the Computer Choice
2. Store the player fix choice for the beggining. 
3. 

*/