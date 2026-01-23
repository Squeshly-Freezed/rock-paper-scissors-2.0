let computerScore = 0;
let humanScore = 0;
let gameRounds = 0;

const results = document.querySelector("#results");
const resultsSpan = document.querySelector("#results-span");
const homeChosen = document.querySelector("#home-chosen");
const guestChosen = document.querySelector("#guest-chosen");
const dialogBox = document.querySelector("#dialog-box");
const welcomeSpan = document.querySelector("#welcome-span");
const runningScore = document.querySelector("#running-score");


function playRound(humanChoice, computerChoice) {
    let hC = humanChoice.toLowerCase();
    let cC = computerChoice;

    if (hC == cC) {
        resultsSpan.textContent = `It's a tie.`;
    } else if (hC == "rock" && cC == "scissors" || hC == "scissors" && cC == "paper" || hC == "paper" && cC == "rock") {
        ++humanScore;
        resultsSpan.textContent = `You win - ${hC} beats ${cC}.`;

    } else { 
        ++computerScore;
        resultsSpan.textContent = `You lose - ${cC} beats ${hC}.`;

    }

    if (humanScore == 5) {
        resultsSpan.textContent = "";
        dialogBox.showModal()
        dialogBox.firstElementChild.innerHTML = "You rock!<br><br>You've won the game!";
        humanScore = 0;
        computerScore = 0;
    } else  if (computerScore == 5) {
        resultsSpan.textContent = "";
        dialogBox.showModal()
        dialogBox.firstElementChild.innerHTML = "You suck!<br><br>You've lost the game!";
        humanScore = 0;
        computerScore = 0;
    }
    runningScore.textContent = `HOME: ${humanScore} \u00A0\u00A0\u00A0\u00A0 GUEST: ${computerScore}`;
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
    rpsChosenFade();
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
            dialogBox.showModal();
            dialogBox.firstElementChild.innerHTML = 
            `Welcome to Rock Paper Scissors!<br><br>The first player to win 5 rounds wins the game!`;
        }, 300);
    })
}

homeChosen.classList.add("visible");
guestChosen.classList.add("visible");
function rpsChosenFade () {
    setTimeout( () => {
        homeChosen.classList.remove("visible");
        guestChosen.classList.remove("visible");
    }, 600);
    homeChosen.classList.add("visible");
    guestChosen.classList.add("visible");
}

dialogBox.addEventListener("click", (event) => {
    if (event.target != dialogBox) dialogBox.close();
});

showWelcome();