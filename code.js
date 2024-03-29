// Defining consts for DOM manipulation.
const resultVerdict = document.getElementsByClassName("results")[0];
const resultUser = document.getElementsByClassName("userScore")[0];
const resultCpu = document.getElementsByClassName("compScore")[0];
const startBtn = document.getElementById("start");

// Defining const for buttons. 
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");


// Setting the options for the game.
const rpsOptions = ["Rock", "Paper", "Scissors"]

// Function for computer random RPS selection.
// One first implementation forgot to add the return.
// Always remember the return.
function computerPlay() {
    return rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
}

// function to prompt the user for option.
function userPrompt() {
    return prompt("Time to play! \nPlease make a selection. \nOptions: Rock, Paper, or Scissors.");
} 
// Store the value as a variable.
// var userSelection = userPrompt()
let usrWins = false
let cpuWins = false

// Comparison Code and Logic.
function compareSelections(selectValue) {
    let userSelection = selectValue;
    let computerSelect = computerPlay();

    // Reset booleans for who has won.
    usrWins = false;
    cpuWins = false;

    // output for the user to see what they selected.
    // output for user to see what cpu has selected.
    console.log("The computer selected" + " " + computerSelect)
    console.log("You selected" + " " + userSelection)

    // Game logic for RPS.
    if (computerSelect == userSelection) {
        resultVerdict.innerHTML = "The game is a tie \nNobody Wins.";
    } else if (userSelection == "Rock") {
        if (computerSelect == "Paper") {
            resultVerdict.innerHTML = "Paper Beats Rock.\nYou Lost!";
            cpuWins = true;
        } else {
            resultVerdict.innerHTML = "Rock beats Scissors.\nYou win!";
            usrWins = true;
        }
    } else if (userSelection == "Paper") {
        if (computerSelect == "Scissors") {
            resultVerdict.innerHTML = "Scissors beat paper.\nDamn you lost!";
            cpuWins = true;
        } else {
            resultVerdict.innerHTML = "Paper beats rock.\nNice you win!";
            usrWins = true;
        }

    } else if (userSelection == "Scissors") {
        if (computerSelect == "Rock") {
            resultVerdict.innerHTML = "Rock beats Scissors.\nSorry you lost!";
            cpuWins = true;
        } else {
            resultVerdict.innerHTML = "Scissors beat Paper!\nYou win!.";
            usrWins = true;
        }
    } else {
        // If the user entered something other then RPS.
        resultVerdict.innerHTML = "Not sure how we got here.\nCheck the code and try again."
    }
    
    // Return values of who won the game.
    return;
} 

// Function for reset of game via button.
startBtn.addEventListener('click', () => {
    resetGame();
});

// Function for selecting RPS options.
rockBtn.addEventListener('click', () => {
    startGame('Rock');
});
paperBtn.addEventListener('click', () => {
    startGame('Paper');
});
scissorBtn.addEventListener('click', () => {
    startGame('Scissors');
})

let usrScore = 0;
let cpuScore = 0;

// Start game.
function startGame(selectValue) {
    // Set initial values for scores.
    
    compareSelections(selectValue);
    if (usrWins == true) {
        usrScore++;
        // resultUser.appendChild(usrUpdate);
        resultUser.innerHTML = `Your score is ${usrScore}`
    } else if (cpuWins == true) {
        cpuScore++;
        // resultCpu.appendChild(cpuUpdate);
        resultCpu.innerHTML = `Computers score is ${cpuScore}`
    }
    return;
    // Defining the text nodes to be appended to the h2 DOM items. 
    // Does not work for some reason. 
    // console.log("Your score is " + usrScore)
    // console.log("Computers score is " + cpuScore)
    // let usrUpdate = document.createTextNode(`Your score is ${usrScore}`);
    // let cpuUpdate = document.createTextNode(`Computers score is ${cpuScore}`);
    // For loop to play 5 games.
    // for (let i = 0; i < 5; i++){
}

function resetGame() {
    resultVerdict.innerHTML = "Play the game to see who wins!"
    resultUser.innerHTML = "Your score is 0"
    resultCpu.innerHTML = "Computers score is 0"
    usrScore = 0
    cpuScore = 0
    
}