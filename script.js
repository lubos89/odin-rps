function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    let computerChoice = "";
    let choiceInteger = getRandomInt(3);

    if (choiceInteger === 0) {
        computerChoice = "rock"
    } else if (choiceInteger === 1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    console.log("Computer chose: ", computerChoice);
    return computerChoice;
}

function getPlayerChoice () {
    let playerChoice = "";

    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        playerChoice = prompt("Please, enter rock, paper or scissors: ").toLowerCase();
    }
    console.log("You chose: ", playerChoice);
    return playerChoice;
}

function playOneRound(playerSelection, computerSelection) {
    let winnerOfRound = "";

    if (computerSelection === playerSelection) {
        return winnerOfRound;
    }

    switch(computerSelection) {
        case "rock":
            winnerOfRound = playerSelection === "paper" ? "player" : "computer";
            break;
        case "paper":
            winnerOfRound = playerSelection === "scissors" ? "player" : "computer";
            break;
        case "scissors":
            winnerOfRound = playerSelection === "rock" ? "player" : "computer";
            break;
    }

    return winnerOfRound;
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    while (computerScore < 5 && playerScore < 5) {
        let result = playOneRound(getPlayerChoice(), getComputerChoice());

        if (result === "computer") {
            console.log("Computer wins this round.");
            computerScore += 1;
        } else if (result === "player") {
            console.log("You win this round.");
            playerScore += 1;
        } else {
            console.log("It's a draw.");
        }

        console.log("Your score is: ", playerScore);
        console.log("Computer score: ", computerScore);
    }
}