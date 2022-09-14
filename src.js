//Selector scores 
const scoreOne = document.querySelector(".playerOne");
const scoreTwo = document.querySelector(".playerTwo");

//Selector buttons 
const btnOne = document.querySelector(".oneBtn");
const btnTwo = document.querySelector(".twoBtn");
const btnReset = document.querySelector(".resetBtn");

// Score Logic
var countPlayerOne = 0
var countPlayerTwo = 0
var Input = document.querySelector(".input");

scoreOne.innerText = countPlayerOne;
scoreTwo.innerText = countPlayerTwo;

// Event Score

btnOne.addEventListener('click', function () {
    countPlayerOne++;
    scoreOne.innerText = countPlayerOne;
    Game(scoreOne, scoreTwo);
});

btnTwo.addEventListener('click', function () {
    countPlayerTwo++;
    scoreTwo.innerText = countPlayerTwo;
    Game(scoreOne, scoreTwo);
});

btnReset.addEventListener('click', function () {
    resetScore();
    Input.value = "Choose";
    btnOne.disabled = false;
    btnTwo.disabled = false;
    Input.disabled = false;
});


function resetScore() {
    countPlayerOne = 0;
    countPlayerTwo = 0;

    scoreOne.innerText = countPlayerOne;
    scoreTwo.innerText = countPlayerTwo;
    scoreOne.style.color = 'black';
    scoreTwo.style.color = 'black';
    Input.disabled = false;
}

// Game Win Player

function Game(winnerOne, winnerTwo) {

    Input.disabled = true;
    if (Input.value === "Choose") {
        swal('Alert', 'Select the points!', 'info');
        resetScore();
    }

    if (countPlayerOne === parseInt(Input.value)) {
        winnerOne.style.color = 'green';
        winnerTwo.style.color = 'red';
        swal('Player one win', 'Congratulations!', 'success');
        interruptor();

    } 
    if (countPlayerTwo === parseInt(Input.value)) {

        winnerTwo.style.color = 'green';
        winnerOne.style.color = 'red';
        swal('Player two win', 'Congratulations!', 'success');
        interruptor();
    }
}

function interruptor() {
    btnOne.disabled = true;
    btnTwo.disabled = true;
}
