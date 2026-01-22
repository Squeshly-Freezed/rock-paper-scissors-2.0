let computerScore = 0;
let humanScore = 0;
let gameRounds = 0;

const results = document.querySelector("#results");
const resultsSpan = document.querySelector("#results-span");
const homeChosen = document.querySelector("#home-chosen");
const guestChosen = document.querySelector("#guest-chosen");
homeChosen.classList.add("visible");
guestChosen.classList.add("visible");
const welcomeBox = document.querySelector("#welcome-box");
const welcomeSpan = document.querySelector("#welcome-span");
const winBox = document.querySelector("#win-box");
const loseBox = document.querySelector("#lose-box");



function playRound(humanChoice, computerChoice) {
    let hC = humanChoice.toLowerCase();
    let cC = computerChoice;

    if (hC == cC) {
        resultsSpan.textContent = `It's a tie.`;
    } else if (hC == "rock" && cC == "scissors" || hC == "scissors" && cC == "paper" || hC == "paper" && cC == "rock") {
        ++humanScore;
        resultsSpan.textContent = `You win. ${hC} beats ${cC}.`;
    } else { 
        ++computerScore;
        resultsSpan.textContent = `You lose. ${cC} beats ${hC}.`;
    }

    if (humanScore == 5) {
        resultsSpan.textContent = "";
        winBox.showModal()
        humanScore = 0;
    } else  if (computerScore == 5) {
        resultsSpan.textContent = "";
        loseBox.showModal()
        humanScore = 0;
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
            welcomeBox.showModal();
        }, 20000);
    })
}
showWelcome();


function rpsChosenFade () {
    setTimeout( () => {
        homeChosen.classList.remove("visible");
        guestChosen.classList.remove("visible");
    }, 500);
}

welcomeBox.addEventListener("click", (event) => {
    if (event.target === welcomeBox) welcomeBox.close();
});