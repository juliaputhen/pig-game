
//this is julia
'use strict';

// Selecting elements
const playerX = document.querySelector('.player--0');
const playerY = document.querySelector('.player--1');
const scoreX = document.querySelector('#score--0');
const scoreY = document.getElementById('score--1');
const currentX = document.getElementById('current--0');
const currentY = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;
// currentScore = 20;
function Dice(){
  const randomNumber=Math.floor(Math.random() * 6) + 1;
  //console.log(randomNumber);
  return randomNumber;
  }

//This is Roshan
const generateImage = (n) {
    document.getElementById("dice").src=`dice-${n}`;
    }

const start = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
  
    scoreX.textContent = 0;
    scoreY.textContent = 0;
    currentX.textContent = 0;
    currentY.textContent = 0;
  
    dice.classList.add('hidden');
    playerX.classList.remove('player--winner');
    playerY.classList.remove('player--winner');
    playerX.classList.add('player--active');
    playerY.classList.remove('player--active');
  };
  start();
  
  buttonNew.addEventListener('click',start);
rollDice.addEventListener('click', function () {
  if (playing) {
    const dice = dice();
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      playerSwitching();
    }
  }
});

//following is the hold button

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
// const buttonHold = document.querySelector('.btn--hold');

// let scores, currentScore, activePlayer, playing;
scores = 20;
playing = true;
activePlayer = 0;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

buttonHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
