let userChoice = prompt(' make your choice!, rock, paper, scissors');
console.log('-> user choice: ' + userChoice)
let computerChoice;

let userScore = 0;
let computerScore = 0;

let rock = 1;
let paper = 2;
let scissors = 3;

function setComputerChoice() {
    let zeroOrOneOrTwo = Math.floor(Math.random() * 3);

    if (zeroOrOneOrTwo === 1) {
        computerChoice = 'rock';
    } else if (zeroOrOneOrTwo === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
}

setComputerChoice()

console.log('-> computer choice: ' + computerChoice);

function winner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        return " It's a tie";
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            return 'You lose. Paper beats rock!';
        } else {
            userScore++;
            return 'You won. Rock beats scissors';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            return 'You lose. Rock beats scissors!';
        } else {
            userScore++;
            return 'You won. Scissors beats paper!';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            return 'You lose. Scissors beats paper!';
        } else {
            userScore++;
            return 'You won. Paper beats Rock!';
        }
    }
}

let winnerResult = winner(userChoice, computerChoice)
console.log('-> game result: ' + winnerResult)
