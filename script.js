let btns = document.querySelectorAll("button");
let rockBtn = document.querySelector(".Rock");
let paperBtn = document.querySelector(".Paper")
let scissorsBtn = document.querySelector(".Scissors");

function getComputerChoice() {
    let randomChoice = ["Rock", "Paper", "Scissors"];
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
};

function playRound(playerSelection,computerSelection) {
    // creating new elements : 
    let finalResult  = document.createElement('h1');
    let playerResult = document.createElement('div');
    let computerResult = document.createElement("div");
    // setting attributes : 
    finalResult.setAttribute('class', 'Final-Result');
    playerResult.setAttribute('class', 'Player-Result');
    computerResult.setAttribute("class","Computer-Result")
    // appending :
    document.body.appendChild(finalResult);
    document.body.appendChild(playerResult);
    document.body.appendChild(computerResult);

    if (playerSelection.value === computerSelection) {
        finalResult.textContent = `IT'S A TIE!`;
        playerResult.textContent = `Player : ${playerSelection.value}`;
        computerResult.textContent = `Computer : ${computerSelection}`;
    } else if (playerSelection.value === "Rock" && computerSelection === "Scissors" || playerSelection.value === "Paper" && computerSelection === "Rock" || playerSelection.value === "Scissors" && computerSelection === "Paper") {
        finalResult.textContent ="You Won!";
        playerResult.textContent = `Player : ${playerSelection.value}`;
        computerResult.textContent = `Computer : ${computerSelection}`;
    } else {
        finalResult.textContent ="You Lost!";
        playerResult.textContent = `Player : ${playerSelection.value}`;
        computerResult.textContent = `Computer : ${computerSelection}`;
    };
};

let ArrFromBtns = Array.from(btns);
ArrFromBtns.forEach(btn => btn.addEventListener("click", function() {
    playRound(this.classList, getComputerChoice())
}))

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