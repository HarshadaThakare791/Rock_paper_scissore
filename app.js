let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
   const options = ["rock", "paper","scissors"];
   const randIdx= Math.floor(Math.random() * 3);
   return options[randIdx];
};
const drawGame = () => {
   
    msg.innerText = "game was Draw. Play again.";
}

const showWinner = (userWin,userChoice, compChoice) => {
     if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
     }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
     }

}
const playGame = (userChoice) => {
    console.log("user choice =",userChoice);

const compChoice = genCompChoice();
 

 if(userChoice === compChoice) {
    drawGame();
 } else{
    let userWin = true;
    if(userChoice === "rock") {
       userWin = compChoice ==="paper" ? false:true;
    } else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true;
    } else{
        userWin = compChoice ==="rock" ? false:true;
    }

    showWinner(userWin, userChoice, compChoice);
 }
};

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Game reset. Play your move!";
    msg.style.backgroundColor = "#081b31"; 
});

choices.forEach((choice)=>{
   
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);

    });
});