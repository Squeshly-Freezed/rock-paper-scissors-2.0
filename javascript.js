let computerScore = 0;
let humanScore = 0;
let gameRounds = 0;

const results = document.querySelector("#results");
const homeChosen = document.querySelector("#home-chosen");
const guestChosen = document.querySelector("#guest-chosen");
const modal = document.querySelector(".modal");
const welcomeBox = document.querySelector("#welcome-box");
const welcomeSpan = document.querySelector("#welcome-span");
const winBox = document.querySelector("#win-box");
const loseBox = document.querySelector("#lose-box");


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
        results.textContent = "";
        winBox.showModal()
    } else  if (computerScore == 5) {
        results.textContent = "";
        loseBox.showModal()
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    guestChosen.style.visibility = "visible";
    if (computerChoice == 0) {
        guestChosen.src = "imgs/rock.png";
        return "rock";
    } else if (computerChoice == 1) {
        guestChosen.src = "imgs/paper.png";
        return "paper";
    } else {
        guestChosen.src = "imgs/scissors.png";
        return "scissors";
    }
}

const rpsContainer = document.querySelector("#rpsContainer").addEventListener("click", event => {
    let target = event.target;
    homeChosen.style.visibility = "visible";
    switch(target.id) {
        case "rock-image":
            playRound("rock", getComputerChoice());
            homeChosen.src = "imgs/rock.png";
            break;
        case "paper-image":
            playRound("paper", getComputerChoice());
            homeChosen.src = "imgs/paper.png";
            break;
        case "scissors-image":
            playRound("scissors", getComputerChoice());
            homeChosen.src = "imgs/scissors.png";
            break;
    }
});

const showWelcome = function(){
    window.addEventListener("load", () => {
        setTimeout( () => {
            welcomeBox.showModal();
        }, 30000);
    })
}
showWelcome();