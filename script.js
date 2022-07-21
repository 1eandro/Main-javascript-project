let introduction = prompt(' make your choice!, rock, paper, scissors');
let computerChoice = ['rock', 'paper', 'scissors'];

let introductionScore = 0;
let computerScore = 0;

let rock = 1;
let paper = 2;
let scissors = 3;

function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 1) {
    return 'rock';
  } else if (computerChoice === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

console.log(computerPlay(computerChoice));

function winner(introduction,computerChoice) {
  if (introduction === computerChoice) {
    return " It's a tie";
  } else if (introduction === 'rock') {
    if (computerChoice === 'paper') {
      Score++;
      return 'computer won';
    } else {
      introductionScore++;
      return ' you lose';
    }
  } else if (introduction === 'scissors') {
    if (computerChoice === 'rock') {
      computerScore++;
      return 'computer won';
    } else {
      introductionScore++;
      return 'computer won';
    }
  } else if (introduction === 'paper') {
    if (computerChoice === 'scissors') {
      computerScore++;
      return 'computer won';
    } else {
      introductionScore++;
      return 'You won';
    }
  }
}
console.log(winner(computerPlay(introduction, computerChoice)));

function game() {
  for (let i = 0; i < 5; i++) {
     
  }
}
