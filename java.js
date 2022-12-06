// Set the different moves, as well as the set of moves where the player win
let gameMoves = ['paper', 'rock', 'scissors']; 
let playerWin = [["rock","scissors"],['paper', 'rock'], ["scissors",'paper']]

// Set a random choice for the computer
function getComputerChoice(randomItem) {
  return randomItem[Math.floor(Math.random()*randomItem.length)]
}
let computerSelection = getComputerChoice(gameMoves)

//Get the user's choice, case insensitive.
let playerSelection =  (prompt("what's your move ?")).toLowerCase();

// Compare the two moves to know if there's a win combination for the player
function matchResult(movePlayer, moveComputer) {
  let fightMoves = [movePlayer, moveComputer]
  let whoWins = playerWin.includes(fightMoves) 
  if (whoWins == true)
  return true 
  else
  return false
}

// Create a round of the game.
function playGround() {
  matchResult(playerSelection, computerSelection);
  let resultPlay = matchResult(playerSelection, computerSelection);
  if (computerSelection === playerSelection )
  return ("Draw ! try again")
  else if (resultPlay == true)
  return ("You Win!")
  else
  return ("You Lose ! ")
}

// Start the game and write the result. 
playGround();
let resultRound = playGround();
console.log(resultRound);
 