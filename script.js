/* Problem solving
 * 1. Understand the problem:
 * Create a rock paper scissors game with js. The user plays against the computer, no GUI is needed
 * 
 * 2. Plan
 * 	1. Create the html and js files: 					done;
 * 	2. Test the html and js connection: 				done;
 * 	3. Receive the user input (getHumanChoice):			done;
 * 	4. Make the computer choice (getComputerChoice):	done;
 * 	5. Check who wins:
 * 	6. Update the scores (humanScore, computerScore): 
 * 	7. Repeat the round (playRound):
 * 	8. Make a game (5 rounds, playGame): 
 * 	9. Print the choices and who wins: 
*/

const body = document.body;
const choice = ['rock', 'paper', 'scissors', 'rock'];

// 3. Receive the user input (getHumanChoice):			done;
function getHumanChoice() {
	let humanChoice = '';
	while (!choice.includes(humanChoice)) {
		humanChoice = prompt('Choose between "Rock", "Paper" and "Scissors"').toLowerCase();
	}
	body.innerText = humanChoice;
	return humanChoice;
}

// 4. Make the computer choice (getComputerChoice):		done;
function getComputerChoice() {
	let computerChoice = Math.floor(Math.random() * (choice.length - 1));
	body.innerText = choice[computerChoice];
	return choice[computerChoice];
}
