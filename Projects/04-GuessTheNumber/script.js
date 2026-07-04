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

const p = document.createElement('p');

let prev = []
let numGuesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess  = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert('please enter a valid number');
    }else{
        prev.push(guess);
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
    // was: LowerOrHi.innerHTML — wrong case, variable is lowerOrHi (lowercase l)
    lowerOrHi.innerHTML = `<h1>${message}</h1>`;
}

function endgame(){
    userInput.value  = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2>Start New Game</h2>`;
    startOver.append(p);
    playGame = false;
}
