function getComputerChoice() {
    let randomChoice = ["Rock", "Paper", "Scissors"];
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
};

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log(`- Player : ${playerSelection}`);
    console.log(`- Computer : ${computerSelection}`);
        if (playerSelection === computerSelection) {
            return "Its A Tie!";
        } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper") {
            return `win`;
        } else {
            return `loose`;
        }
}

let Pscore = 0;
let Cscore = 0;
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(`#Round [${i + 1}]`)
        let playerSelection = prompt('choose','');
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result === "win") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
            console.log(`=> Player Scored ${++Pscore}`);
        } else if (result === "loose"){
            console.log(`You Loose! ${computerSelection} beats ${playerSelection}`)
            console.log(`=> Computer Scored ${++Cscore}`);
        } else {
            console.log("Its A tie!");
        }
    }
    console.log(`###-The Final Result : ${Pscore} - ${Cscore}`)
    if (Pscore > Cscore) {
            console.log("###---The Winner is The PLAYER!");
        } else if (Cscore > Pscore) {
            console.log("- The Winner is The COMPUTER!");
        } else {
            console.log("- Its A Tie!");
        }
}  
game();