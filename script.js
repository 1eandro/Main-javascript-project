

  const introduction = prompt(" make your choice!, rock, paper, scissors");
  const playerSelection = ["rock ,paper, scissors"]
  const computerSelection = ["ROCK, PAPER, SCISSORS"];
  let playerScore = 0;
  let computerScore = 0;
  let player;
  let computer;
  

  function computerPlay (){
    Math.floor(Math.random()*3);
    
  }

  

  function winner () {
    if (player === computer){
      resut.textContent = "draw"
    }

    else if (player == "rock"){
      if( computer == "paper"){
        result.textContent = "computer won";

        computerScore++;

      }else{
        result.textContent = "player won"
        playerScore++;
      }
      
    }
    
    else if (player == "scissors"){
      if (computer == "rock"){
        result.textContent = "computer won"
        computerScore++;
      }else{
        result.textContent ="player won";
        playerScore++;
      }
    }
    else if (player == "paper"){
      if(computer == "scissors"){
        result.textContent = "computer won";
        computerScore++;
      }
      else{
        result.textContent = "player won";
        playerScore++;
      }
    }
  }

  
