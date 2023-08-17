'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

const widthBlockOfNumber = function (width) {
	document.querySelector('.number').style.width = width;
};

const bodyBackgroundColor = function (color) {
	document.querySelector('body').style.backgroundColor = color;
};

const scoreFunction = function (score) {
	document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	// * When there is no input
	if (!guess) {
		displayMessage('⛔ No number');

		// * When player wins
	} else if (guess === secretNumber) {
		displayMessage('🎉 Correct Number!');
		document.querySelector('.number').textContent = secretNumber;
		bodyBackgroundColor('#60b347');
		widthBlockOfNumber('30rem');

		// * highscore
		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}

		// * When guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? '📈s Too high' : '📉 Too low');
			guess > secretNumber ? '📈s Too high' : '📉 Too low';
			score--;
			scoreFunction(score);
		} else {
			displayMessage('💥 You lost the game');
			scoreFunction(0);
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	scoreFunction(score);
	displayMessage('Start guessing...');
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	bodyBackgroundColor('#222');
	widthBlockOfNumber('15rem');
});
