let randomNumber = parseInt(Math.random() * 100) + 1;
const submit=document.querySelector("#subt");
const userInput=document.querySelector("#guessField");
const guessSlot =document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");


const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p= document.createElement("p");

let prevGuess=[];
let guessCount=1;

let playGame=true;

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);    })
}


function validateGuess(guess){
    if(isNaN(guess) || guess < 1 || guess > 100){
        displayMessage("Please enter a valid number between 1 and 100.");
    }
    else{
        prevGuess.push(guess);
        if(guessCount ===11){
            displayGuesses(guess);
            displayMessage(`Game Over! The number was ${randomNumber}.`);
            endGame();
        }
        else{
            displayGuesses(guess);
            checkGuess(guess);
            
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulations! ${guess} is the correct number!`);
        endGame();
    }
    else if(guess< randomNumber){
        displayMessage(`${guess} is too low!`);
    }
    else{
        displayMessage(`${guess} is too high!`);
    }
}

function displayGuesses(guess){
    userInput.value ="";
    guessSlot.innerHTML += `${guess}, `;
    guessCount++;
    remaining.innerHTML = `${11 -guessCount}`;
}

function displayMessage(message){
    lowOrHi.innerHTML= `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value="";
    userInput.setAttribute("disabled", true);
    p.classList.add("button");
    p.innerHTML = `<button class="button" id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton=document.querySelector("#newGame");
    newGameButton.addEventListener("click",function(){
        randomNUmber = parseInt(Math.random() * 100) + 1;
        prevGuess=[];
        guessCount=1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - guessCount}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        displayMessage("");
        playGame=true;
    })
}


