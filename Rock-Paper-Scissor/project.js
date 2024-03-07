/*
let player= document.querySelector("#rock-btn");
let cpt1=document.querySelector("#paper-btn");
let cpt2=document.querySelector("#scissor-btn");
let gameResult=document.querySelector(".winner");
let verifyy=document.querySelectorAll(".verify");


player.addEventListener("click", ()=>{
    let winDeclare=playGame();
    gameResult.textContent="The Result is:"+ winDeclare;
    let playerSelected = 'rock';
    let winDeclare=playGame(playerSelected);
    gameResult.textContent="The Result is:"+ winDeclare;
    verifyy.textContent="The Player choice is:"+ playerSelected;
    
});

cpt1.addEventListener("click", ()=>{
    let playerSelected = 'paper';
    let winDeclare=playGame(playerSelected);
    gameResult.textContent="The Result is:"+ winDeclare;
    verifyy.textContent="The Player choice is:"+ playerSelected;
});

cpt2.addEventListener("click", ()=>{
    let playerSelected = 'scissor';
    let winDeclare=playGame(playerSelected);
    gameResult.textContent="The Result is:"+ winDeclare;
    verifyy.textContent="The Player choice is:"+ playerSelected;
});


const computerChoice= ()=>{
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'paper';
        case 1:
            return 'scissors';
        case 2:
            return 'rock';
    }
}


const playerChoice = () => {
    const playerSelected = Math.floor(Math.random() * 3);
    switch(playerSelected){
        case 0:
            return 'paper';
        case 1:
            return 'scissors';
        case 2:
            return 'rock'; // Corrected from case 3 to case 2
    }
}





const playGame = (playerSelected) => {
   
    let computerSelected = computerChoice();
    
    console.log("Computer's choice:", computerSelected);
    console.log("Player's choice:", playerSelected);

    if (computerSelected === playerSelected) {
        console.log("It's a tie!");
        return "It's a tie!";
        
    } else if (
        (computerSelected === 'rock' && playerSelected === 'scissors') ||
        (computerSelected === 'paper' && playerSelected === 'rock') ||
        (computerSelected === 'scissors' && playerSelected === 'paper')
    ) {
        console.log("Computer wins!");
        return "Computer wins!";
        
    } else {
        console.log("Player wins!");
        return "Player wins!";
        
}*/

const player= document.querySelector("#rock-btn");
let cpt1=document.querySelector("#paper-btn");
let cpt2=document.querySelector("#scissor-btn");
let gameResult=document.querySelector(".winner");
let playerChoiceDisplay=document.querySelector(".player-choice");
let computerChoiceDisplay=document.querySelector(".computer-choice");

player.addEventListener("click", ()=>{
    let playerSelected = 'rock';
    let winDeclare=playGame(playerSelected);
    gameResult.textContent="The Result is:"+ winDeclare;
    playerChoiceDisplay.textContent="The Player choice is:"+ playerSelected;
});

cpt1.addEventListener("click", ()=>{
    let playerSelected = 'paper';
    let winDeclare=playGame(playerSelected);
    gameResult.textContent="The Result is:"+ winDeclare;
    playerChoiceDisplay.textContent="The Player choice is:"+ playerSelected;
});

cpt2.addEventListener("click", ()=>{
    let playerSelected = 'scissors';
    let winDeclare=playGame(playerSelected);
    gameResult.textContent="The Result is:"+ winDeclare;
    playerChoiceDisplay.textContent="The Player choice is:"+ playerSelected;
});

const computerChoice= ()=>{
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'paper';
        case 1:
            return 'scissors';
        case 2:
            return 'rock';
    }
}

const playGame = (playerSelected) => {
    let computerSelected = computerChoice();

    console.log("Computer's choice:", computerSelected);
    console.log("Player's choice:", playerSelected);

    computerChoiceDisplay.textContent="The Computer choice is:"+ computerSelected;

    if (computerSelected === playerSelected) {
        console.log("It's a tie!");
        return "It's a tie!";

    } else if (
        (computerSelected === 'rock' && playerSelected === 'scissors') ||
        (computerSelected === 'paper' && playerSelected === 'rock') ||
        (computerSelected === 'scissors' && playerSelected === 'paper')
    ) {
        console.log("Computer wins!");
        return "Computer wins!";

    } else {
        console.log("Player wins!");
        return "Player wins!";
    }
}