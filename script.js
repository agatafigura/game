window.addEventListener("DOMContentLoaded", getPlayerChoice);

var computerChoice = document.getElementById("player2");
var userChoice = document.getElementById("player1");

function getPlayerChoice() {
    console.log("get player choice");
    document.querySelector("button.rock").addEventListener("click", getRock);
    document.querySelector("button.paper").addEventListener("click", getPaper);
    document.querySelector("button.scissors").addEventListener("click", getScissors);
}

function getRock() {
    console.log("player choice - rock");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player1").addEventListener("animationend", showRock);
    makeRandomComputerChoice();
}

function showRock() {
    console.log("player shows rock");
    document.querySelector("#player1").classList.remove("paper");
    document.querySelector("#player1").classList.remove("scissors");
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("rock");
    determineWinner();
}

function getPaper() {
    console.log("player choice - paper");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player1").addEventListener("animationend", showPaper);
    makeRandomComputerChoice();
}

function showPaper() {
    console.log("player shows paper");
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.remove("scissors");
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("paper");
    determineWinner();
}

function getScissors() {
    console.log("player choice - scissors");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player1").addEventListener("animationend", showScissors);
    makeRandomComputerChoice();
}

function showScissors() {
    console.log("player shows scissors");
    document.querySelector("#player1").classList.remove("paper");
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("scissors");
    determineWinner();
}

function computerGetRock() {
    console.log("computer choice - rock");
    document.querySelector("#player2").classList.add("shake");
    document.querySelector("#player2").addEventListener("animationend", computerShowRock);
}

function computerShowRock() {
    console.log("computer shows rock");
    document.querySelector("#player2").classList.remove("shake");
}

function computerGetScissors() {
    console.log("computer choice - scissors");
    document.querySelector("#player2").classList.add("shake");
    document.querySelector("#player2").addEventListener("animationend", computerShowScissors);
}

function computerShowScissors() {
    console.log("computer shows scissors");
    document.querySelector("#player2").classList.remove("shake");
}

function computerGetPaper() {
    console.log("computer choice - paper");
    document.querySelector("#player2").classList.add("shake");
    document.querySelector("#player2").addEventListener("animationend", computerShowPaper);
}

function computerShowPaper() {
    document.querySelector("#player2").classList.remove("shake");
}

function makeRandomComputerChoice() {
    console.log("make random computer choice");
    document.querySelector("#player2").classList.add("shake");
    var array = ["rock", "paper", "scissors"];
    computerChoice = array[Math.floor(Math.random() * array.length)];
    console.log(computerChoice);
    if (computerChoice == "scissors") {
        document.querySelector("#player2").classList.remove("rock");
        document.querySelector("#player2").classList.remove("paper");
        document.querySelector("#player2").classList.add("scissors");
       computerGetScissors();
    }
    else if (computerChoice == "paper") {
        document.querySelector("#player2").classList.remove("rock");
        document.querySelector("#player2").classList.remove("scissors");
        document.querySelector("#player2").classList.add("paper");
        computerGetPaper();
    }
    else if (computerChoice == "rock") {
        document.querySelector("#player2").classList.remove("paper");
        document.querySelector("#player2").classList.remove("scissors");
        document.querySelector("#player2").classList.add("rock");
        computerGetRock();
    }
}

function determineWinner() {
    if (document.querySelector("#player2").classList.contains("rock") && document.querySelector("#player1").classList.contains("rock")) {
        showDraw();
    }
    if (document.querySelector("#player2").classList.contains("rock") && document.querySelector("#player1").classList.contains("paper")) {
        showWin();
    }
    if (document.querySelector("#player2").classList.contains("rock") && document.querySelector("#player1").classList.contains("scissors")) {
        showLose();
    }
    if (document.querySelector("#player2").classList.contains("paper") && document.querySelector("#player1").classList.contains("paper")) {
        showDraw();
    }
    if (document.querySelector("#player2").classList.contains("paper") && document.querySelector("#player1").classList.contains("rock")) {
        showLose();
    }
    if (document.querySelector("#player2").classList.contains("paper") && document.querySelector("#player1").classList.contains("scissors")) {
        showWin();
    }
    if (document.querySelector("#player2").classList.contains("scissors") && document.querySelector("#player1").classList.contains("scissors")) {
        showDraw();
    }
    if (document.querySelector("#player2").classList.contains("scissors") && document.querySelector("#player1").classList.contains("paper")) {
        showLose();
    }
    if (document.querySelector("#player2").classList.contains("scissors") && document.querySelector("#player1").classList.contains("rock")) {
        showWin();
    }
}

function showWin() {
    console.log("you win");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#win").classList.remove("hidden");
}

function showLose() {
    console.log("you lose");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#lose").classList.remove("hidden");
}

function showDraw() {
    console.log("show draw");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#draw").classList.remove("hidden");
}