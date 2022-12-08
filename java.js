// Set the different moves, as well as the set of moves where the player win
let gameMoves = ['paper', 'rock', 'scissors']; 
let playerWin = [["rock","scissors"],['paper', 'rock'], ["scissors",'paper']]

// Create Leaderboard
let scoreGame = [0, 0];


// Create a round of the game.
function playGround() {

  // Set a random choice for the computer
  function getComputerChoice(randomItem) {
    return randomItem[Math.floor(Math.random()*randomItem.length)]
  }
  let computerSelection = "paper"
  
  //getComputerChoice(gameMoves)

  //Get the user's choice, case insensitive.
  let playerSelection = (prompt("what's your move ?")).toLowerCase();

  //Determine the winner
  let matchResult = playerSelection + computerSelection
  if (computerSelection === playerSelection )
   { prompt ("Draw ! try again")}
  else if (matchResult == ["rock","scissors"] || ['paper', 'rock'] || ["scissors",'paper'])
    {scoreGame[0] += 1
    prompt ("You Win!" + "Player : " + scoreGame[0] + " Ordi : " + scoreGame[1])}
  else
    {scoreGame[1] += 1
    prompt ("You Lose ! " + "Player : " + scoreGame[0] + " Ordi : " + scoreGame[1])}
}


function gameStart() {
  if (scoreGame.length == 0) {
    prompt("Welcome to the playground where you can play ShiFuMi till one's dead ! ")
  }
  else if (scoreGame.includes(5) == false) {
    prompt("La partie continue")
  }
  while (scoreGame.includes(4) == false){
    playGround()
  }
  if (scoreGame[0] == 5){
    prompt("Bravo soldat, t'a gagné")
  }
  else if(scoreGame[1] == 5){
    prompt("Dommage... Tu m'a déçu")
  }
}




// Start the game and write the result. 
gameStart()
let resultRound = playGround();
console.log(resultRound);
console.log(computerSelection);
console.log(playerSelection);
 