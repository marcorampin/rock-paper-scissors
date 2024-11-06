/* Problem solving
 * 1. Understand the problem:
 * Create a rock paper scissors game with js. The user plays against the computer, no GUI is needed
 * 
 * 2. Plan
 * 	1. Create the html and js files: 					done;
 * 	2. Test the html and js connection: 				done;
 * 	3. Receive the user input (getHumanChoice):			done;
 * 	4. Make the computer choice (getComputerChoice):	done;
 * 	5. Repeat the round (playRound):					done;
 * 	6. Update the scores (humanScore, computerScore): 	done;
 * 	7. Make a game (5 rounds, playGame): 				done;
*/

const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const roundResultEl = document.getElementById("turn-result");
const drawRoundsEl = document.getElementById("draw-rounds");
const playerRoundsEl = document.getElementById("player-rounds");
const computerRoundsEl = document.getElementById("computer-rounds");

const choiceArr = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let numRounds = 0;


// 3. Receive the user input (getHumanChoice):			done;
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));


// 4. Make the computer choice (getComputerChoice):		done;
function getComputerChoice() {
	const randomChoice = Math.floor(Math.random() * choiceArr.length);
	return choiceArr[randomChoice];
}

// 5. Repeat the round (playRound):						done;
function playRound(playerChoice) {
	const playerIndex = choiceArr.indexOf(playerChoice);
	const computerIndex = choiceArr.indexOf(getComputerChoice());
	playerChoiceEl.innerText = choiceArr[playerIndex];
	computerChoiceEl.innerText = choiceArr[computerIndex];
	if (playerIndex === computerIndex) {
		updateScores("draw");
	} else if ((playerIndex === computerIndex + 1) || (playerIndex === computerIndex - 2)) {
		updateScores("player");
	} else {
		updateScores("computer");
	}
}

// 6. Update the scores (humanScore, computerScore):	done;
drawRoundsEl.innerText = 0;
playerRoundsEl.innerText = 0;
computerRoundsEl.innerText = 0;
function updateScores(result) {
	switch (result) {
		case "draw":
			roundResultEl.innerText = "Draw";
			drawScore++;
			drawRoundsEl.innerText = drawScore;
			break;
		case "player":
			roundResultEl.innerText = "Player wins the round";
			playerScore++;
			playerRoundsEl.innerText = playerScore;
			break;
		case "computer":
			roundResultEl.innerText = "Computer wins the round";
			computerScore++;
			computerRoundsEl.innerText = computerScore;
			break;
	}
}

// 7. Make a game (5 rounds, playGame): 				done;
function playGame(decision) {
	if (numRounds < 5) {
		numRounds++;
		playRound(decision);
	}
}
