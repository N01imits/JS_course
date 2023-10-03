'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
	interestRate: 1.2, // %
	pin: 1111,

	movementsDates: [
		'2019-11-18T21:31:17.178Z',
		'2019-12-23T07:42:02.383Z',
		'2020-01-28T09:15:04.904Z',
		'2020-04-01T10:17:24.185Z',
		'2020-05-08T14:11:59.604Z',
		'2020-05-27T17:01:17.194Z',
		'2020-07-11T23:36:17.929Z',
		'2020-07-12T10:51:36.790Z',
	],
	currency: 'EUR',
	locale: 'pt-PT', // de-DE
};

const account2 = {
	owner: 'Jessica Davis',
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,

	movementsDates: [
		'2019-11-01T13:15:33.035Z',
		'2019-11-30T09:48:16.867Z',
		'2019-12-25T06:04:23.907Z',
		'2020-01-25T14:18:46.235Z',
		'2020-02-05T16:33:06.386Z',
		'2020-04-10T14:43:26.374Z',
		'2020-06-25T18:49:59.371Z',
		'2020-07-26T12:01:20.894Z',
	],
	currency: 'USD',
	locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (acc, sort = false) {
	containerMovements.innerHTML = '';

	const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

	movs.forEach(function (mov, i) {
		const type = mov > 0 ? 'deposit' : 'withdrawal';

		const date = new Date(acc.movementsDates[i]);
		const day = `${date.getDate()}`.padStart(2, 0);
		const month = `${date.getMonth() + 1}`.padStart(2, 0);
		const year = date.getFullYear();
		const displayDate = `${day}/${month}/${year}`;

		const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
		<div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

		containerMovements.insertAdjacentHTML('afterbegin', html);
	});
};

const calcDisplayBalance = function (acc) {
	acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
	labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
	const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
	labelSumIn.textContent = `${incomes.toFixed(2)}€`;

	const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
	labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

	const interest = acc.movements
		.filter(mov => mov > 0)
		.map(deposit => (deposit * acc.interestRate) / 100)
		.filter((int, i, arr) => {
			// console.log(arr);
			return int >= 1;
		})
		.reduce((acc, int) => acc + int, 0);
	labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
	accs.forEach(function (acc) {
		acc.username = acc.owner
			.toLowerCase()
			.split(' ')
			.map(name => name[0])
			.join('');
	});
};
createUsernames(accounts);

const updateUI = function (acc) {
	// Display movements
	displayMovements(acc);

	// Display balance
	calcDisplayBalance(acc);

	// Display summary
	calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

//? всегда авторизирован
currentAccount = account1;
updateUI(account1);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
	// Prevent form from submitting
	e.preventDefault();

	currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
	console.log(currentAccount);

	if (currentAccount?.pin === +inputLoginPin.value) {
		// Display UI and message
		labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
		containerApp.style.opacity = 100;

		//? текущая дата
		const now = new Date();
		const day = `${now.getDate()}`.padStart(2, 0);
		const month = `${now.getMonth() + 1}`.padStart(2, 0);
		const year = now.getFullYear();
		const hour = `${now.getHours()}`.padStart(2, 0);
		const min = `${now.getMinutes()}`.padStart(2, 0);
		labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

		// Clear input fields
		inputLoginUsername.value = inputLoginPin.value = '';
		inputLoginPin.blur();

		// Update UI
		updateUI(currentAccount);
	}
});

btnTransfer.addEventListener('click', function (e) {
	e.preventDefault();
	const amount = Math.floor(inputTransferAmount.value);
	const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
	inputTransferAmount.value = inputTransferTo.value = '';

	if (
		amount > 0 &&
		receiverAcc &&
		currentAccount.balance >= amount &&
		receiverAcc?.username !== currentAccount.username
	) {
		// Doing the transfer
		currentAccount.movements.push(-amount);
		receiverAcc.movements.push(amount);

		// Add transfer date
		currentAccount.movementsDates.push(new Date().toISOString());
		receiverAcc.movementsDates.push(new Date().toISOString());

		// Update UI
		updateUI(currentAccount);
	}
});

btnLoan.addEventListener('click', function (e) {
	e.preventDefault();

	const amount = +inputLoanAmount.value;

	if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
		// Add movement
		currentAccount.movements.push(amount);

		// Add loan date
		currentAccount.movementsDates.push(new Date().toISOString());

		// Update UI
		updateUI(currentAccount);
	}
	inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
	e.preventDefault();

	if (
		inputCloseUsername.value === currentAccount.username &&
		+inputClosePin.value === currentAccount.pin
	) {
		const index = accounts.findIndex(acc => acc.username === currentAccount.username);
		console.log(index);
		// .indexOf(23)

		// Delete account
		accounts.splice(index, 1);

		// Hide UI
		containerApp.style.opacity = 0;
	}

	inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
	e.preventDefault();
	displayMovements(currentAccount.movements, !sorted);
	sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//* Converting and Checking Numbers
/* console.log(23 === 23.0);
console.log(0.2 + 0.1);
console.log(0.2 + 0.1 === 0.3);

console.log(Number('23'));
console.log(+'23');

//? parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e21px', 10));
console.log(Number.parseInt('  2.52w', 10));
console.log(Number.parseFloat('  2.4w   ', 10));

// console.log(parseFloat('  2.4w   ', 10));

//? проверяет является ли число Nan
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'1v'));
console.log(Number.isNaN(23 / 0));

//? лучшая проверка: является ли значение числом
console.log(Number.isFinite(23));
console.log(Number.isFinite(23 / 0));
console.log(Number.isFinite(+'23'));
console.log(Number.isFinite(2.4));

console.log(Number.isSafeInteger(23));
console.log(Number.isSafeInteger('23'));
console.log(Number.isSafeInteger(23.0));
console.log(Number.isSafeInteger(23.0 / 0));
 */

//* Math and Rounding
/* console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8));
console.log(Math.max(1, '2', 3, '4', 5, 6, 7, '8'));
console.log(Math.max(1, '2', 3, '4', 5, 6, 7, '8px'));

console.log(Math.min(-1, '2', 3, -4, 5, 6, 7, '8'));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

//? генерация рандомных чисел от 1 до 1
console.log(Math.trunc(Math.random() * 5) + 1);

//? функция для генерации рандомных чисел в диапазоне
const randomInt = (min, max) =>
	Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

//? округление чисел (при округлении всегда происходит преобразование в числа)
//? округление
console.log(Math.round(21.3));
console.log(Math.round(21.9));

//? округление в большую сторону всегда
console.log(Math.ceil(23.1));
console.log(Math.ceil('23.9'));
console.log(Math.ceil(-23.9));

//? округление всегда в меньшую сторону
console.log(Math.floor(-23.9));
console.log(Math.floor(23.3));
console.log(Math.floor(23.9));
console.log(Math.floor('23.9'));

//? отбрасывает часть после точки
console.log(Math.trunc(12.2));

//* rounding decimals

//? округляет, но при этом выводит строку (в скобках кол-во знаков после точки)
console.log((23.2).toFixed(1));
console.log(+(23.2).toFixed(3));
console.log((23.2).toFixed(3)); */

//* The remainder method
/* console.log(5 % 2);
console.log(5 / 2);

console.log(8 % 3);
console.log(8 / 3);

console.log(6 % 2);
console.log(6 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function () {
	[...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
		if (i % 2 === 0) row.style.backgroundColor = 'orange';
		if (i % 3 === 0) row.style.backgroundColor = 'yellow';
	});
}); */

//* Numeric Separators
/* const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

//? одно и тоже число
console.log(15_00 === 1_500);

//! не может преобразовать в число
console.log(Number('230_999'));
console.log(Number, parseInt('230_000'));
 */

//* working with bigInt
/* console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(2 ** 53 + 5);

console.log(4293049029301235802348023458340258304502345n);
console.log(BigInt(429));

//? операции
// доступны математические операции
console.log(100n + 100n);
// console.log(Math.sqrt(16n));

//! нельзя миксовать bigint и обычные числа
const huge = 9987987234972934792384923794n;
const num = 12;

//? нужно преобразовать num в bigint
console.log(huge * BigInt(num));

// исключения
console.log(20n < 30);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + ' is REALLY big!');

// деление
console.log(10n / 3n);
console.log(10 / 3);
 */

//* Creating Dates
/* const now = new Date();
console.log(now);

console.log(new Date('Tue Oct 03 2023 08:36:36'));
console.log(new Date('31 december, 2022'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2112, 12, 12, 12, 12, 12));
console.log(new Date(2037, 10, 33));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//* работа с датами
const future = new Date(2112, 12, 12, 12, 12, 12);
console.log(future);
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.toISOString());
console.log(now.getTime());

console.log(new Date(1696314044947));

console.log(Date.now());

now.setFullYear(2029);
console.log(now);
 */
