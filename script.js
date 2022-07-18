

  const introduction = prompt(" make your choice!, rock, paper, scissors");
  const playerSelection = ("rock ,paper, scissors");
  const computerSelection = ("ROCK, PAPER, SCISSORS");
  let playerScore = 0;
  let computerScore = 0;
  
  

  function computerPlay (){
    Math.floor(Math.random()*3);
    
  }

  

  function winner () {
    if (player === computer){
     return  " It's a tie";
    }

    else if (player === "rock"){
      if( computer === "paper"){
      return "computer won";
        computerScore++;

      }else{
      return "player won";
        playerScore++;
      }
      
    }
    
    else if (player === "scissors"){
      if (computer === "rock"){
      return "computer won";
        computerScore++;
      }else{
      return"player won";
        playerScore++;
      }
    }
    else if (player === "paper"){
      if(computer === "scissors"){
      return "computer won";
        computerScore++;
      }
      else{
      return "player won";
        playerScore++;
      }
    }
  }

  
