

  let introduction = prompt(" make your choice!, rock, paper, scissors");
  let computerChoice = ["rock , paper, scissors"] // o array aqui ta declarado errado, tem soh 1 valor aqui
  
 
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
        Score++; // essa e outras linhas q vem dps do return, nunca rodam, return eh sempre a ultima linha do bloco. Essa variavel Score tb nao existe em nenhum outro lugar

      }else{
      return " you lose";  // da uma formatada no codigo, ta faltando indentacao, dificulta a leitura
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
      introductionSelection = prompt("rock, paper, Scissors"); //nada ta acontecendo aqui, o prompt ta mandando o valor pra variavel introductionSelection e nada mais.
    }

  }
