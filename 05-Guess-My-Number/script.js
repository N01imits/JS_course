'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	// преобразуем в число, чтобы в дальнейшем сравнивать число с чслом
	// addeventlisener добавляет прослушивание элемента, когда мы кликаем например на кнопку что-то
	// должно произойти или не должно, в данном примере прослушивается событие ckick,
	// когда происходит клик срабатывает функция

	// * When there is no input
	if (!guess) {
		document.querySelector('.message').textContent = '⛔ No number';

		// * When player wins
	} else if (guess === secretNumber) {
		document.querySelector('.message').textContent = '🎉 Correct Number!';
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';

		// * When guess is too high
	} else if (guess > secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = '📈s Too high';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = '💥 You lost the game';
			document.querySelector('.score').textContent = 0;
		}

		// * When guess is too low
	} else if (guess < secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = '📉 Too low';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = '💥 You lost the game';
			document.querySelector('.score').textContent = 0;
		}
	}
});
