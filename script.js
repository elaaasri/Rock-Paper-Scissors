// Random Computer Choice :
function getComputerChoice() {
    let randomChoice = ["Rock", "Paper", "Scissors"];
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
};

// Selecting Elements :
let btns = document.querySelectorAll("button");
let ResultContainer = document.querySelector("#Results-Container");
let Footer = document.querySelector(".Footer");

// Creating New Elements :  
let finalResult  = document.createElement('h1');
let winnerResult = document.createElement("h3");
let playerScore = document.createElement("div");
let computerScore = document.createElement("div");
let endResult = document.createElement("h1");

// Setting Attributes : 
finalResult.setAttribute('class', 'Final-Result');
winnerResult.setAttribute('class', "Winner-Result");
playerScore.setAttribute("class", "Score");
computerScore.setAttribute("class", "Score");
endResult.setAttribute("class", "End-Game");

// Appending :
ResultContainer.appendChild(finalResult);
ResultContainer.appendChild(winnerResult);
ResultContainer.appendChild(playerScore);
ResultContainer.appendChild(computerScore);
ResultContainer.appendChild(playerScore);
ResultContainer.appendChild(computerScore);
ResultContainer.prepend(endResult);

// Elements Start Textcontent: 
finalResult.textContent = "Choose Your Weapon?";
winnerResult.textContent = "First to Score 5 Wins The Game!";
playerScore.textContent = "Player Score : 0";
computerScore.textContent = "Computer Score : 0";

let pScore = 0;
let cScore = 0;

function playRound(playerSelection,computerSelection) {
    if (ResultContainer.classList.contains("active")){
        if (playerSelection.value === computerSelection) {
        finalResult.textContent = `IT'S A TIE!`;
        winnerResult.textContent = `${playerSelection.value} Ties with ${computerSelection}`
    } else if (playerSelection.value === "Rock" && computerSelection === "Scissors" || playerSelection.value === "Paper" && computerSelection === "Rock" || playerSelection.value === "Scissors" && computerSelection === "Paper") {
        finalResult.textContent ="You Won!";
        winnerResult.textContent = `${playerSelection.value} beats ${computerSelection}`
        playerScore.textContent = `Player Score : ${++pScore}`
        
    } else {
        finalResult.textContent ="You Lost!";
        winnerResult.textContent = `${computerSelection} beats ${playerSelection.value}`
        computerScore.textContent = `Computer Score : ${++cScore}`;
    };
    if (pScore === 5) {
        endResult.textContent = "PLAYER WON!";
        ResultContainer.classList.remove("active"); 
    } else if (cScore === 5) {
        endResult.textContent = "COMPUTER WON!";
        ResultContainer.classList.remove("active");
    };
}
};

// Buttons Clicked : 
let ArrFromBtns = Array.from(btns);
ArrFromBtns.forEach(btn => btn.addEventListener("click", function() {
    playRound(this.classList, getComputerChoice());
}));

// Restart Button :
let restartButton = document.createElement("button");
restartButton.setAttribute("class", "Restart");
restartButton.textContent = "PLAY AGAIN!";
Footer.before(restartButton);
restartButton.onclick = function(e) {
    window.location.reload();
};
