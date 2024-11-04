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

const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const turnResult = document.getElementById("turn-result");
const drawRounds = document.getElementById("draw-rounds");
const playerRounds = document.getElementById("player-rounds");
const computerRounds = document.getElementById("computer-rounds");

const choice = ['rock', 'paper', 'scissors'];
let humanScore = 0;
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
	let randomChoice = Math.floor(Math.random() * choice.length);
	return choice[randomChoice];
}

// 5. Repeat the round (playRound):						done;
function playRound(humanChoice) {
	const humanIndex = choice.indexOf(humanChoice);
	const computerIndex = choice.indexOf(getComputerChoice());
	playerChoice.innerText = choice[humanIndex];
	computerChoice.innerText = choice[computerIndex];
	if (humanIndex === computerIndex) {
		updateScores("draw");
	} else if ((humanIndex === computerIndex + 1) || (humanIndex === computerIndex - 2)) {
		updateScores("player");
	} else {
		updateScores("computer");
	}
}

// 6. Update the scores (humanScore, computerScore):	done;
function updateScores(result) {
	switch (result) {
		case "draw":
			turnResult.innerText = "Draw";
			drawScore++;
			break;
		case "player":
			turnResult.innerText = "Player wins the round";
			humanScore++;
			break;
		case "computer":
			turnResult.innerText = "Computer wins the round";
			computerScore++;
			break;
	}
	drawRounds.innerText = drawScore;
	playerRounds.innerText = humanScore;
	computerRounds.innerText = computerScore;
}

// 7. Make a game (5 rounds, playGame): 				done;
function playGame(decision) {
	if (numRounds < 5) {
		numRounds++;
		playRound(decision);
	}
}