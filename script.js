'use strict';
//Fetching all necessary tags
const playerX = document.querySelector('.player--0');
const playerY = document.querySelector('.player--1');
const playerXName = document.querySelector('#name--0');
const playerYName = document.querySelector('#name--1');

const scoreX = document.querySelector('#score--0');
const scoreY = document.querySelector('#score--1');
const currentX = document.querySelector('#current--0');
const currentY = document.querySelector('#current--1');

const diceRoll = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

let scores, currentScore, isActivePlayer, playing; //global variables to use to update scores and check which player is active

//Initialization function to start new game and accept names of each player when game is started
const init = function () {
  playerXName.textContent = String(prompt('Enter Player 1 Name'));
  playerYName.textContent = String(prompt('Enter Player 2 Name'));
  scores = [0, 0];
  currentScore = isActivePlayer = 0;
  playing = true;

  scoreX.textContent = 0;
  scoreY.textContent = 0;
  currentX.textContent = 0;
  currentY.textContent = 0;

  diceRoll.classList.add('hidden'); //hiding dice icon when game is started
  playerX.classList.remove('player--winner');
  playerY.classList.remove('player--winner');
  playerX.classList.add('player--active');
  playerY.classList.remove('player--active');
  document.getElementById('winnerMessage').style.display = 'none'; //hiding winner message
  const audio = document.getElementById('myAudio');
  audio.pause();
};
init();
buttonNew.addEventListener('click', init);
//function to generate random dice number
function Dice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}
const generateImage = n => {
  document.querySelector('.dice').src = `dice-${n}.png`;
};
//function to generate image
const switchPlayer = function () {
  document.getElementById(`current--${isActivePlayer}`).textContent = 0;
  currentScore = 0;
  isActivePlayer = isActivePlayer === 0 ? 1 : 0;
  playerX.classList.toggle('player--active');
  playerY.classList.toggle('player--active');
};
//rolling dice button
buttonRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Dice();

    diceRoll.classList.remove('hidden');
    generateImage(dice);

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${isActivePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
//switching player when hold button is pressed
buttonHold.addEventListener('click', function () {
  if (playing) {
    scores[isActivePlayer] += currentScore;

    document.getElementById(`score--${isActivePlayer}`).textContent =
      scores[isActivePlayer];

    if (scores[isActivePlayer] >= 20) {
      playing = false;
      diceRoll.classList.add('hidden');

      document
        .querySelector(`.player--${isActivePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${isActivePlayer}`)
        .classList.remove('player--active');
      let playerName;
      if (isActivePlayer === 0) {
        playerName = playerXName.textContent;
      } else {
        playerName = playerYName.textContent;
      }
      document.getElementById('playerName').textContent = playerName;
      document.getElementById('winnerMessage').style.display = 'block';
      const audio = document.getElementById('myAudio');
      audio.play();

      function createFirework() {
        const fireworksContainer = document.getElementById(
          'fireworks-container'
        );
        const firework = document.createElement('div');
        firework.className = 'firework';

        // Randomly select a firework style
        const fireworkStyles = ['firework-1', 'firework-2', 'firework-3'];
        const randomStyle =
          fireworkStyles[Math.floor(Math.random() * fireworkStyles.length)];
        firework.classList.add(randomStyle);

        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';

        fireworksContainer.appendChild(firework);

        setTimeout(() => {
          firework.remove();
        }, 1000);
      }

      setInterval(createFirework, 100);
    } else {
      switchPlayer();
    }
  }
});
