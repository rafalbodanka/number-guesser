'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector('.score').textContent;
let highscore = 0;
console.log(number);

const decreaseScore = function () {
  score--;
  document.querySelector('.score').textContent = score;
  if (score <= 0) {
    document.querySelector('.check').disabled = true;
    document.querySelector('.message').textContent =
      "It's over! Refresh to start again.";
  }
};

const releaseNumber = function () {
  document.querySelector('.check').disabled = true;
  document.querySelector('.number').textContent = number;
};

const restartGame = function () {
  document.querySelector('.number').textContent = '?';
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  document.querySelector('.check').disabled = false;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
};

document.querySelector('.again').addEventListener('click', restartGame);

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess > 20 || guess <= 0) {
    document.querySelector('.message').textContent = 'Pick between 1-20!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'CORRECT!';
    releaseNumber();
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    score = 20;
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guess > number) {
    document.querySelector('.message').textContent = 'Too high!';
    decreaseScore();
    document.querySelector('.score').textContent = score;
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'Too low!';
    decreaseScore();
  }
});
