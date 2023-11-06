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
