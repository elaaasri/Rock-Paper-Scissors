function getComputerChoice() {
    let randomChoice = ["Rock", "Paper", "Scissors"];
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
};
getComputerChoice();

let playerSelection = prompt('choose?','');
let caseInsensitive = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

function playRound(playerSelection, computerSelection) {
    console.log(`- Player: ${playerSelection}`);
    console.log(`- Computer: ${computerSelection}`);
    // Conditional Ternary Operator:
    playerSelection === computerSelection 
    ? console.log("Its A Tie!") 
    : playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock" 
    ? console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`) 
    : playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper" 
    ? console.log(`You Win! ${playerSelection} beats ${computerSelection}!`) 
    : playerSelection === null || playerSelection === ''
    ? console.log("Make Your Choice!") 
    : console.log("Wrong Input!");
}

let counter = 1;
function game() {
    console.log("#".repeat(15));
    for (let i = 0; i < 5; i++) {
        console.log(`###--ROUND[${counter++}]:`);
        playRound(caseInsensitive, getComputerChoice());
        console.log("#".repeat(15));
    }
}
game();