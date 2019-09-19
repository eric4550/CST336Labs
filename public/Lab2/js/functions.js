var randomNumber = Math.floor((Math.random() * 99) + 1);
var guesses = document.querySelector('#guesses');
var lastResult = document.querySelector('#lastResult');
var lowOrHigh = document.querySelector('#lowOrHigh');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton = document.querySelector('#resetButton');
var wonCount = 0;
var lostCount = 0;
var won = document.querySelector('#won');
var lost = document.querySelector('#lost');

guessField.focus();
// won.style.backgroundColor = '#edf2f9';
// lost.style.backgroundColor = '#edf2f9';
// won.innerHTML = 'won: ' + wonCount;
// lost.innerHTML = 'lost: ' + lostCount;
// resetButton.style.display = 'none';
$(resetButton).css("display", 'none')
$(won).html("Won: " + wonCount).css("background-color",'#edf2f9');
$(lost).html("Lost: " + lostCount).css("background-color",'#edf2f9');

function checkGuess() {
    var userGuess = Number(guessField.value);

    if (userGuess > 99 || isNaN(userGuess)) {
        alert('ERROR!');
        guessField.value = '';
    }
    else {

        if (guessCount == 1) {
            guesses.innerHTML = 'previous guesses: ';
        }
        guesses.innerHTML += userGuess + ' ';
        if (userGuess == randomNumber) {
            lastResult.innerHTML = 'congratulation! you got it right!';
            lastResult.style.backgroundColor = 'green';
            lowOrHigh.innerHTML = '';
            wonCount++;
            setGameOver();
        }
        else if (guessCount == 7) {
            lastResult.innerHTML = 'Sorry, you lost!';
            lostCount++;
            setGameOver();

        }
        else {
            lastResult.innerHTML = 'WRONG!';
            lastResult.style.backgroundColor = 'red';
            if (userGuess < randomNumber) {
                lowOrHigh.innerHTML = 'Last guess was too low!';
            }
            else if (userGuess > randomNumber) {
                lowOrHigh.innerHTML = 'Last guess was too high!';
            }
        }

        guessCount++;
        guessField.value = '';
        guessField.focus();
    }
}


//guessSubmit.addEventListener('click', checkGuess);
$('.guessSubmit').click(checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'inline';
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    // won.innerHTML = 'won: ' + wonCount;
    // lost.innerHTML = 'lost: ' + lostCount;
    $(won).html("Won: " + wonCount)
    $(lost).html("Lost: " + lostCount)
    // resetButton.style.display = 'none';
    $(resetButton).css("display", 'none')
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 99) + 1;

    console.log(randomNumber);
    //document.getElementById("numberToGuess").innerHTML = randomNumber;
}
