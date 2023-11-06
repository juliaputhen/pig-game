//this is a comment
//We are team 7
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