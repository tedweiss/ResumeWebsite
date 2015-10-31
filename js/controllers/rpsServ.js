app.service('RpsServ', function(){
  this.compChoice = function(){
    var computerChoice = Math.random();
  if (computerChoice < 0.34) {
  	computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
  	computerChoice = "paper";
  } else {
  	computerChoice = "scissors";
  };
  return computerChoice;
};


  this.battle = function(userChoice){
      var cChoice = this.compChoice();
    if(userChoice === cChoice) {
      return("The result is a tie!");
  }
    if (userChoice === "rock") {
        if (cChoice === "scissors") {
            return ("Computer chose scissors. rock wins");
        }else {
            return ("Computer chose paper. paper wins");
        }
     }
     if (userChoice === "paper") {
       if (cChoice === "rock") {
           return ("Computer chose rock. paper wins");
       }else {
           return ("Computer chose scissors. scissors wins");
       }
   }
    if (userChoice === "scissors") {
        if (cChoice === "rock") {
            return ("Computer chose rock. rock wins");
        }else{
            return ("Computer chose paper. scissors wins");
        }
    }
  };
});