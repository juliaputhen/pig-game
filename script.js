'use strict';
const playerX = document.querySelector('.player--0');
const playerY = document.querySelector('.player--1');
const scoreX = document.querySelector('#score--0');
const scoreY = document.getElementById('score--1');
const currentX = document.getElementById('current--0');
const currentY = document.getElementById('current--1');

const diceRoll = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = activePlayer = 0;
  playing = true;

  scoreX.textContent = 0;
  scoreY.textContent = 0;
  currentX.textContent = 0;
  currentY.textContent = 0;

  diceRoll.classList.add('hidden');
  playerX.classList.remove('player--winner');
  playerY.classList.remove('player--winner');
  playerX.classList.add('player--active');
  playerY.classList.remove('player--active');
  document.getElementById('winnerMessage').style.display = 'none';
};
init();
function Dice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}
const generateImage = n => {
  document.querySelector('.dice').src = `dice-${n}.png`;
};
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerX.classList.toggle('player--active');
  playerY.classList.toggle('player--active');
};

buttonRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Dice();

    diceRoll.classList.remove('hidden');
    generateImage(dice);

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

buttonHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceRoll.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      const playerName = 'Player' + Number(activePlayer + 1);
      document.getElementById('playerName').textContent = playerName;
      document.getElementById('winnerMessage').style.display = 'block';
    } else {
      switchPlayer();
    }
  }
});

buttonNew.addEventListener('click', init);
