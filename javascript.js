let computerScore = 0;
let humanScore = 0;
let gameRounds = 0;
const rpsContainer = document.querySelector("#rpsContainer");
const results = document.querySelector("#results");
const homeChosen = document.querySelector("#home-chosen");
const guestChosen = document.querySelector("#guest-chosen");
const modal = document.querySelector(".modal");
const welcomeBox = document.querySelector("#welcome-box");
const welcomeSpan = document.querySelector("#welcome-span");


function playRound(humanChoice, computerChoice) {
    let hC = humanChoice.toLowerCase();
    let cC = computerChoice;

    if (hC == cC) {
        results.textContent = `It's a tie.`;
    } else if (hC == "rock" && cC == "scissors" || hC == "scissors" && cC == "paper" || hC == "paper" && cC == "rock") {
        ++humanScore;
        results.textContent = `You win. ${hC} beats ${cC}.`;
    } else { 
        ++computerScore;
        results.textContent = `You lose. ${cC} beats ${hC}.`;
    }

    if (humanScore == 5) {
        results.textContent = "*You win the game!*";
    } else  if (computerScore == 5) {
        results.textContent = "*You lose the game!*";
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        guestChosen.src = "img/rocktransparent.png";
        return "rock";
    } else if (computerChoice == 1) {
        guestChosen.src = "img/papertransparent.png";
        return "paper";
    } else {
        guestChosen.src = "img/scissorstransparent.png";
        return "scissors";
    }
}

rpsContainer.addEventListener("click", event => {
    let target = event.target;
    switch(target.id) {
        case "rock-image":
            playRound("rock", getComputerChoice());
            homeChosen.src = "img/rocktransparent.png";
            break;
        case "paper-image":
            playRound("paper", getComputerChoice());
            homeChosen.src = "img/papertransparent.png";
            break;
        case "scissors-image":
            playRound("scissors", getComputerChoice());
            homeChosen.src = "img/scissorstransparent.png";
            break;
    }
});

const showWelcome = function(){
    window.addEventListener("load", () => {
        setTimeout( () => {
            modal.style.visibility = "visible";
            welcomeBox.style.visibility = "visible";
        }, 500);
    })
}
showWelcome();

// welcomeSpan.onclick = "this.style.visibility='hidden'";
// welcomeBox.onclick = "this.style.visibility='hidden'";
// modal.onclick = "this.style.visibility='hidden'";