// TODO: replace 100 with a named constant e.g. const MAX_NUMBER = 100
const randomNumber = parseInt(Math.random()*100 +1);

// was: document.getElementById('submit') — HTML id is 'subt', not 'submit'
const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
// was: document.getElementById('guesses') — 'guesses' is a class not an id, use querySelector
const guessSlot = document.querySelector('.guesses');
// was: document.getElementById('lastResult') — 'lastResult' is a class not an id, use querySelector
const remaining = document.querySelector('.lastResult');
// was: document.getElementById('lowOrHi') — 'lowOrHi' is a class not an id, use querySelector
const lowerOrHi = document.querySelector('.lowOrHi');
const startOver = document.getElementById('startOver');

// TODO: move p inside endgame() — no need for it to be a global variable
const p = document.createElement('p');

let prev = []
let numGuesses = 1;

let playGame = true;

// TODO: the if(playGame) here is useless — playGame is always true at this point
// move the playGame check inside the click handler so clicks after game ends are ignored
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess  = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess < 1 || guess > 100){
        // TODO: replace alert() with displayMessage() to show error in the UI instead of a popup
        alert('please enter a valid number');
    }else{
        // TODO: prev array is tracked but never displayed — show previous guesses history or remove it
        prev.push(guess);
        // TODO: replace magic number 11 with a constant e.g. const MAX_GUESSES = 10, then check numGuesses > MAX_GUESSES
        if(numGuesses === 11){
             displayMessage(`Game Over! The number was ${randomNumber}`);
             endgame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulations! You guessed the number in ${numGuesses-1} guesses`);
        endgame();
    }else if(guess < randomNumber){
        displayMessage(`Your guess is low`);
    }else if(guess > randomNumber){
        displayMessage(`Your guess is high`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuesses++;
    remaining.innerHTML = `${11-numGuesses} guesses remaining`;
}

function displayMessage(message){
    // was: LowerOrHi.innerHTML — wrong case, variable is lowerOrHi (lowercase l) not LowerOrHi
    // TODO: wrapping every message in <h1> is too big — use a <p> or just set textContent
    lowerOrHi.innerHTML = `<h1>${message}</h1>`;
}

function endgame(){
    userInput.value  = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2>Start New Game</h2>`;
    startOver.append(p);
    playGame = false;
    // TODO: add a newGame() function that resets randomNumber, numGuesses, prev, re-enables input, clears the UI
}
