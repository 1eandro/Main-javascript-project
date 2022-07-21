

  let introduction = prompt(" make your choice!, rock, paper, scissors");
  let computerChoice = ["rock , paper, scissors"]
  
 
  let introductionScore = 0;
  let computerScore = 0;

  let rock = 1;
  let paper = 2;
  let scissors = 3;


  function computerPlay (){
    
     let computerChoice = Math.floor(Math.random()*3);
     
    if (computerChoice === 1){
      return "rock";
    }else if ( computerChoice === 2){
      return "paper"
    }else{
      return "scissors";
    }

    
  }
 
  console.log(computerPlay(computerChoice))
 

  function winner ( ) {
    if (introduction === computerChoice){
     return  " It's a tie";
    }

    else if (introduction === "rock"){
      if( computerChoice === "paper"){
      return "computer won";
        Score++;

      }else{
      return " you lose";
        introductionScore++;
      }
      
    }
    
    else if (introduction === "scissors"){
      if (computerChoice === "rock"){
      return "computer won";
        computerScore++;
      }else{
      return"You won";
        introductionScore++;
      }
    }
    else if (introduction === "paper"){
      if(computerChoice === "scissors"){
      return "computer won";
        computerScore++;
      }
      else{
      return "You won";
        introductionScore++;
      }
    }
  }
  console.log(winner(introduction,computerChoice));


  function game (){
    for(let i=0;i<5;i++){
      introductionSelection = prompt("rock, paper, Scissors");
    }

  }
