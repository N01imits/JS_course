'use strict';
// выбираем элементы
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// стартовые значения
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

let currentScore = 0;
// бросок кости
btnRoll.addEventListener('click', function () {
	// 1. генерация случайного броска игральной кости
	const dice = Math.trunc(Math.random() * 6) + 1; // +1 для того чтобы генерация была жо 6 включительно
	// 2. отображение кости
	diceElement.classList.remove('hidden');
	diceElement.src = `dice-${dice}.png`;
	// 3. сравнение выпавшей кости с единицей: если правда -> переключить игрока
	if (dice !== 1) {
		//добавить кость к значению
		currentScore += dice;
		current0Element.textContent = currentScore;
	} else {
		// переключение игрока если dice === 1
	}
});
