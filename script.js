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
 * 	6. Update the scores (humanScore, computerScore): 
 * 	7. Make a game (5 rounds, playGame): 
 * 	8. Print the choices and who wins: 
*/

const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const turnResult = document.getElementById("turn-result");
const playerRounds = document.getElementById("player-rounds");
const computerRounds = document.getElementById("computer-rounds");
const choice = ['rock', 'paper', 'scissors'];

// 3. Receive the user input (getHumanChoice):			done;
function getHumanChoice() {
	let humanChoice = '';
	while (!choice.includes(humanChoice)) {
		humanChoice = prompt('Choose between "Rock", "Paper" and "Scissors"').toLowerCase();
	}
	playerChoice.innerText = humanChoice;
	return humanChoice;
}

// 4. Make the computer choice (getComputerChoice):		done;
function getComputerChoice() {
	let randomChoice = Math.floor(Math.random() * choice.length);
	computerChoice.innerText = choice[randomChoice];
	return choice[randomChoice];
}

// 5. Repeat the round (playRound):						done;
function playRound() {
	const humanIndex = choice.indexOf(getHumanChoice());
	const computerIndex = choice.indexOf(getComputerChoice());
	if (humanIndex === computerIndex) {
		return 0;
	} else if ((humanIndex === computerIndex + 1) || (humanIndex === computerIndex - 2)) {
		return 1;
	} else {
		return 2;
	}
}
// 6. Update the scores (humanScore, computerScore): 
