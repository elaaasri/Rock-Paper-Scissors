   // Random Computer Choice :
function getComputerChoice() {
    let randomChoice = ["Rock", "Paper", "Scissors"];
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
};
    // Selecting Elements :
let btns = document.querySelectorAll("button");
let ResultContainer = document.querySelector(".Results-Container");

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
ResultContainer.appendChild(endResult);
// Elements Start Textcontent: 
finalResult.textContent = "Choose You're Weapon";
winnerResult.textContent = "First to Score 5 Wins The Game!";
playerScore.textContent = "Player Score : 0";
computerScore.textContent = "Computer Score : 0";

let pScore = 0;
let cScore = 0; 

function playRound(playerSelection,computerSelection) {
    if (playerSelection.value === computerSelection) {
        finalResult.textContent = `IT'S A TIE!`;
        winnerResult.textContent = `${playerSelection.value} Ties with ${computerSelection}`
        playerScore.textContent = `Player Score : ${pScore}`;
        computerScore.textContent = `Computer Score : ${cScore}`;
    } else if (playerSelection.value === "Rock" && computerSelection === "Scissors" || playerSelection.value === "Paper" && computerSelection === "Rock" || playerSelection.value === "Scissors" && computerSelection === "Paper") {
        finalResult.textContent ="You Won!";
        winnerResult.textContent = `${playerSelection.value} beats ${computerSelection}`
        playerScore.textContent = `Player Score : ${++pScore}`

    } else {
        finalResult.textContent ="You Lost!";
        winnerResult.textContent = `${computerSelection} beats ${playerSelection.value}`
        computerScore.textContent = `Computer Score : ${++cScore}`;
    };

    console.log(pScore);
    console.log(cScore);

    if (pScore === 5) {
        endResult.textContent = "YOU WON!";
    } else if (cScore === 5) {
        endResult.textContent = "COMPUTER WON!";
    };
};

    // Restart Button :
let restartButton = document.createElement("button");
restartButton.setAttribute("class", "Restart");
restartButton.textContent = "Play Again";
document.body.appendChild(restartButton);
restartButton.onclick = function(e) {
    window.location.reload();
};

    // Buttons Clicked : 
let ArrFromBtns = Array.from(btns);
ArrFromBtns.forEach(btn => btn.addEventListener("click", function() {
    playRound(this.classList, getComputerChoice());
}));


// let Pscore = 0;
// let Cscore = 0;
// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(`#Round [${i + 1}]`)
//         let playerSelection = prompt('choose','');
//         let computerSelection = getComputerChoice();
//         let result = playRound(playerSelection, computerSelection);
//         if (result === "win") {
//             console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
//             console.log(`=> Player Scored ${++Pscore}`);
//         } else if (result === "loose"){
//             console.log(`You Loose! ${computerSelection} beats ${playerSelection}`)
//             console.log(`=> Computer Scored ${++Cscore}`);
//         } else {
//             console.log("Its A tie!");
//         }
//     }
//     console.log(`###-The Final Result : ${Pscore} - ${Cscore}`)
//     if (Pscore > Cscore) {
//             console.log("###---The Winner is The PLAYER!");
//         } else if (Cscore > Pscore) {
//             console.log("- The Winner is The COMPUTER!");
//         } else {
//             console.log("- Its A Tie!");
//         }
// }  
// game();