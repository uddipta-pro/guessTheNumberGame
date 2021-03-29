'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number');
  } else if (guess == secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    displayMessage('🥳Correct Guess You won');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#009999';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too High!!' : 'Too Low !!';
      displayMessage(guess > secretNumber ? 'Too High!!' : 'Too Low !!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('😝You Lost the game');

    document.querySelector('.score').textContent = score - 1;
  }
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Your guess is too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😝You Lost the game';

  //       document.querySelector('.score').textContent = score - 1;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Your guess is too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😝You Lost the game';

  //       document.querySelector('.score').textContent = score - 1;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('body').style.color = '#eee';
  document.querySelector('.guess').value = null;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
});
