'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥰 sexy number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 69;

document.querySelector('.guess').value = 666;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'NO NUMBER 🥵';

    displayMessage('NO NUMBER!');

    //when the playe wins
  } else if (guess === secretNumber) {
    displayMessage('🥰 Correct number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'TOO HIGH!' : 'TOO LOW');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'TOO HIGH!' : 'TOO LOW';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game fam 🌹😩');
      // document.querySelector('.message').textContent ='You lost the game fam 🌹😩';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is too  high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       'Too Big step brother 🌝';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'You lost the game fam 🌹😩';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //when guess is too small
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Small Step-Bro 🌚';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'You lost the game fam 🌹😩';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
