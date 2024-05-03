'use strict';
const checkBtn = document.querySelector('.check');
const inputField = document.querySelector('.guess');
const messageLabel = document.querySelector('.message');
let scoreLabel = document.querySelector('.score');
const againButton = document.querySelector('.again');
const highScoreLabel = document.querySelector('.highscore');
const secretNumberLabel = document.querySelector('.number');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const handleValidation = function (value) {
  if (value == '') {
    return '⛔ No number!';
  } else if (value == secretNumber) {
    return '🎉 Correct number!';
  } else if (value < secretNumber) {
    return '📈 Too low!';
  } else if (value > secretNumber) {
    return '💹 Too hight!';
  } else {
    return 'Start guessing...';
  }
};

const handleCheck = function () {
  const guessValue = inputField.value;
  const validationMessage = handleValidation(guessValue);
  if (guessValue != '' && validationMessage != '🎉 Correct number!') {
    score = score - 1;
    scoreLabel.textContent = score;
  }

  if (guessValue == secretNumber) {
    document.body.style.backgroundColor = 'green';
    if (scoreLabel.textContent > highScoreLabel.textContent) {
      highScoreLabel.textContent = score;
      secretNumberLabel.textContent = secretNumber;
    }
  }
  messageLabel.textContent = validationMessage;
};

const handleReset = function () {
  messageLabel.textContent = handleValidation('reset');
  inputField.value = '';
  score = 20;
  scoreLabel.textContent = score;
  secretNumberLabel.textContent = '?';
  document.body.style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
};

checkBtn.addEventListener('click', handleCheck);
againButton.addEventListener('click', handleReset);
