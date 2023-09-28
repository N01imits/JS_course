'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: 'Jessica Davis',
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: 'Steven Thomas Williams',
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: 'Sarah Smith',
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

//* Creating DOM Elements
const displayMovements = function (movements, sort = false) {
	containerMovements.innerHTML = '';
	// .textContent = 0;

	//* сортировка в ui (sortig arrays)
	const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

	movs.forEach(function (mov, i) {
		const type = mov > 0 ? 'deposit' : 'withdrawal';

		const html = `
		<div class="movements__row">
			<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
			<div class="movements__value">${mov}€</div>
		</div>
		
		`;

		containerMovements.insertAdjacentHTML('afterbegin', html);
	});
};

//* balance в bankist
const calcDisplayBalance = function (acc) {
	acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
	labelBalance.textContent = `${acc.balance}€`;
};

//* inc, out, interest
const calcDisplaySummary = function (acc) {
	const incomes = acc.movements
		.filter(mov => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);
	labelSumIn.textContent = `${incomes}€`;

	const out = acc.movements
		.filter(mov => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);
	labelSumOut.textContent = `${Math.abs(out)}€`;

	const interest = acc.movements
		.filter(mov => mov > 0)
		.map(deposit => (deposit * acc.interestRate) / 100)
		.filter(int => int >= 1)
		.reduce((acc, int) => acc + int, 0);
	labelSumInterest.textContent = `${interest}€`;
};

//* computing usernames
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
	//? display movements
	displayMovements(acc.movements);

	//? display balance
	calcDisplayBalance(acc);

	//? display summary
	calcDisplaySummary(acc);
};

//* Implementing Login
let currentAccount;

btnLogin.addEventListener('click', function (e) {
	//? предотвратить форму от отправки
	e.preventDefault();

	currentAccount = accounts.find(
		acc => acc.username === inputLoginUsername.value,
	);

	if (currentAccount?.pin === Number(inputLoginPin.value)) {
		labelWelcome.textContent = `Welcome back, ${
			currentAccount.owner.split(' ')[0]
		}`;

		containerApp.style.opacity = 100;

		updateUI(currentAccount);

		//? очистка полей ввоад
		inputLoginUsername.value = inputLoginPin.value = '';
		inputLoginPin.blur();

		//? обновление интерфейса
		updateUI(currentAccount);
	}
});

//* implementing transfers
btnTransfer.addEventListener('click', function (e) {
	e.preventDefault();
	const ammount = Number(inputTransferAmount.value);
	const receiverAcc = accounts.find(
		acc => acc.username === inputTransferTo.value,
	);
	inputTransferAmount.value = inputTransferTo.value = '';

	if (
		ammount > 0 &&
		receiverAcc &&
		currentAccount.balance >= ammount &&
		receiverAcc?.username !== currentAccount.username
	) {
		//? перевод денег
		currentAccount.movements.push(-ammount);
		receiverAcc.movements.push(ammount);

		//? обновление интерфейса
		updateUI(currentAccount);
	}
});

//* запрос кредита
btnLoan.addEventListener('click', function (e) {
	e.preventDefault();

	const amount = Number(inputLoanAmount.value);
	//или amount /10
	if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
		//? добавление денег
		currentAccount.movements.push(amount);

		//? обновление интерфейса
		updateUI(currentAccount);
	}
	inputLoanAmount.value = '';
});

//* The findIndex Method и удаление аккаунта
btnClose.addEventListener('click', function (e) {
	e.preventDefault();

	if (
		inputCloseUsername.value === currentAccount.username &&
		Number(inputClosePin.value) === currentAccount.pin
	) {
		const index = accounts.findIndex(
			acc => acc.username === currentAccount.username,
		);

		//? удаляем аккаунт
		accounts.splice(index, 1);

		//? скрываем интерфейс
		containerApp.style.opacity = 0;
	}

	inputCloseUsername.value = inputClosePin.value = '';
});

//* сортировка (sortig arrays)
let sorted = false;
btnSort.addEventListener('click', function (e) {
	e.preventDefault();
	displayMovements(currentAccount.movements, !sorted);
	sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//* LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//* simple array methods
/* let arr = ['a', 'b', 'c', 'd', 'e'];

//* slice
console.log(arr.slice(1));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//* splice
// console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

//* reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//* concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//* join
console.log(letters.join(' - '));
 */

//* the new at method
/* const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//* получить последний элемент массива
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Ilya'.at(-1));
 */

//* looping array: foreach
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
	if (movement > 0) {
		console.log(`Movement ${i + 1}: You deposited ${movement}`);
	} else {
		console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
	}
}

console.log('------FOREACH------');
movements.forEach(function (movement, i, arr) {
	if (movement > 0) {
		console.log(`Movement ${i + 1}: You deposited ${movement}`);
	} else {
		console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
	}
});
//0: function(200)
//1: function(450)
//2: function(400) */

//* forEach With Maps and Sets
/* const currencies = new Map([
	['USD', 'United States dollar'],
	['EUR', 'Euro'],
	['GBP', 'Pound sterling'],
]);

//? map
currencies.forEach(function (value, key, map) {
	console.log(`${key}: ${value}`);
});

//? set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _value, set) {
	console.log(`${_value}: ${value}`);
}); //_value - это типо ключ, на самом деле нет ключа
 */

//* coding challenge #1
/* const checkDogs = function (dogsJulia, dogsKate) {
	const dogsJuliaCorrected = [...dogsJulia];
	dogsJuliaCorrected.splice(0, 1);
	dogsJuliaCorrected.splice(-2);
	//? const allDogs = [...dogsJuliaCorrected, ...dogsKate];

	const allDogs = dogsJuliaCorrected.concat(dogsKate);

	//? можно было использовать slice
	dogsJulia.splice(1, 3);

	allDogs.forEach(function (dog, num) {
		// dog >= 3
		// 	? console.log(`Dog number ${num + 1}: is an adult and is ${dog} years old`)
		// 	: console.log(`Dog number ${num + 1}: is still a puppy`);

		if (dog >= 3) {
			console.log(`Dog number ${num + 1}: is an adult and is ${dog} years old`);
		} else {
			console.log(`Dog number ${num + 1}: is still a puppy`);
		}
	});
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
 */

//* The map method
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementsUsd = movements.map(function (mov) {
	return mov * euroToUsd;
	// return 23;
});

console.log(movements);
console.log(movementsUsd);

// const movementsToUSD = [];
// for (const mov of movements) movementsToUSD.push(mov * euroToUsd);
// console.log(movementsToUSD);

const movementsToUSD = movements.map(mov => mov * euroToUsd);
console.log(movementsToUSD);

const movementsDescriptions = movements.map(
	(mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`,
);

console.log(movementsDescriptions); 
*/

//* the filter method
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov, i, arr) {
	return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawls = movements.filter(mov => mov < 0);
console.log(withdrawls);
 */

//* the reduce method
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const balance = movements.reduce(function (acc, cur, i, arr) {
// 	console.log(`iteration №${i}: accumulation = ${acc}, current = ${cur}`);
// 	return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
// console.log(balance2);

//* максимальое значение
const max = movements.reduce((acc, mov) => {
	if (acc > mov) return acc;
	else return mov;
}, movements[0]);
console.log(max); */

//* coding challenge #2
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
/* const dogsAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogsAges2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogsAges) {
	const humanAges = dogsAges.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
	const adults = humanAges.filter(age => age >= 18);
	console.log(humanAges);
	console.log(adults);

	// const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
	const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
	return average;
};

// const calcAverageHumanAge = function (ages) {
// 	const humanAges = ages.map(age => {
// 		if (age <= 2) return age * 2;
// 		else return 16 + age * 4;
// 	});
// 	console.log(humanAges);
// };

const avg1 = calcAverageHumanAge(dogsAges1);
const avg2 = calcAverageHumanAge(dogsAges2);
console.log(avg1, avg2);

// const calcDisplayBalance = function (movements) {
// 	const balance = movements.reduce((acc, mov) => acc + mov, 0);
// 	labelBalance.textContent = `${balance}€`;
// }; 
*/

//* The Magic of Chaining Methods
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;
const totalDepositsUSD = movements
	.filter(mov => mov > 0)
	.map((mov, i, arr) => {
		// console.log(arr);
		return mov * euroToUSD;
	})
	.reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
 */

//* coding challenge #3
/* // Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
const calcAverageHumanAge = ages =>
	ages
		.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
		.filter(age => age >= 18)
		.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const dogsAges1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const dogsAges2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(dogsAges1, dogsAges2);
 */

//* The find Method
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstDrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstDrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
 */

//* some and every
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

//? includes: проверка на равенство
console.log(movements.includes(-130));

//? Some: проверка на условие
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

//? every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//? separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
 */

//* flat and flatMap
/* const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

//? flat
const overalBalance = accounts
	.map(acc => acc.movements)
	.flat()
	.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//? flatMap
const overalBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance); */

//* sortig arrays
/* //* strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

//* numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

//? return < 0, A, B (keep order)
//? return > 0, B, A (switch order)
//? сортировка по возростанию
// movements.sort((a, b) => {
// 	if (a > b) return 1;
// 	if (a < b) return -1;
// });

movements.sort((a, b) => a - b);
console.log(movements);

//? сортировка по убыванию
// movements.sort((a, b) => {
// 	if (a > b) return -1;
// 	if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
 */

//* More Ways of Creating and Filling Arrays
/* const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//? пустой массив + fill метод
const x = new Array(7);
console.log(x);
// x.fill(1);
x.fill(12, 1, 5);
console.log(x);

//? не пустой массив и fill
arr.fill(12, 2, 5);
console.log(arr);

//? Array.from
const y = Array.from({ length: 6 }, () => 1);
console.log(y);

const z = Array.from({ length: 12 }, (_, i) => i + 1);
console.log(z);

// const randomNumbers = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 101));
// console.log(randomNumbers);

labelBalance.addEventListener('click', function () {
	const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el =>
		Number(el.textContent.replace('€', '')),
	);

	console.log(movementsUI);

	const movementsUI2 = [...document.querySelectorAll('.movements__value')];
	console.log(movementsUI2);
});
 */

//* Array Methods Practice
// 1. ex
//? получаем вложенный массив из массива объектов
// const bankDepositSum = accounts.map(acc => acc.movements).flat();
// console.log(bankDepositSum);
const bankDepositSum = accounts
	.flatMap(acc => acc.movements)
	.filter(mov => mov > 0)
	.reduce((sum, curr) => sum + curr, 0);
console.log(bankDepositSum);

// 2. ex
// const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
	.flatMap(acc => acc.movements)
	// .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
	.reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

//? префиксная форма ++
let a = 10;
console.log(++a);
console.log(a);

// 3. ex
//? создание объекта
const { deposits, withdrawals } = accounts
	.flatMap(acc => acc.movements)
	.reduce(
		(sums, cur) => {
			// cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
			sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
			return sums;
		},
		{ deposits: 0, withdrawals: 0 },
	);
console.log(deposits, withdrawals);

// 4. ex
//? this is a nice title
const convertTitleCase = function (title) {
	const capitalization = str => str[0].toUpperCase() + str.slice(1);
	const exceptions = [
		'a',
		'and',
		'is',
		'an',
		'the',
		'but',
		'or',
		'on',
		'in',
		'with',
	];

	const titleCase = title
		.toLowerCase()
		.split(' ')
		.map(word =>
			exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1),
		)
		.join(' ');
	return capitalization(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
