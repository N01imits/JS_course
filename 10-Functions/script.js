'use strict';

/* //* Default Parameters
const bookings = [];

//? после выхода ES6 можно писать default значения прямо в функции
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
	//? ES5 установка значений по умолчанию
	// 	numPassengers = numPassengers || 1;
	// 	price = price || 1;

	const booking = { flightNum, numPassengers, price };
	console.log(booking);
	bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 30, 800);
createBooking('LH123', 20);
 */

/* //* How passing arguments works: value vs reference
const flight = 'LH234';
const ilya = {
	name: 'Ilya Belyakov',
	passport: 12123123123123,
};

const checkIn = function (flightNum, passenger) {
	flightNum = 'LH999';
	passenger.name = 'Mr.' + passenger.name;

	if (passenger.passport === 12123123123123) {
		alert('Checked in');
	} else {
		alert('Wrong passport');
	}
};

// checkIn(flight, ilya);
// console.log(flight);
// console.log(ilya);

//? in the same as doing
// const flightNum = flight;
// const passenger = ilya;

const newPassport = function (person) {
	person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(ilya);
checkIn(flight, ilya); */

/* //* first-class and higher-order functions
// Смотри в тетради, либо в презентации

//* Functions Accepting Callback Functions
const oneWord = function (str) {
	return str.replaceAll(' ', '').toLowerCase();
	// return str.replace(/ /g, '').toLowerCase(); // раньше так было
};

const upperFirstWord = function (str) {
	const [first, ...others] = str.split(' ');
	return [first.toUpperCase(), ...others].join(' ');
};

//? higher-order function
const transformer = function (str, fn) {
	console.log(`Original string: ${str}`);
	console.log(`Transformed string: ${fn(str)}`);

	console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);

transformer('JavaScript is the best', oneWord);

//? в обратные вызовы используются постоянно
const high5 = function () {
	console.log('hello');
};

['Ilya', 'Denis'].forEach(high5); */

/* //* functions returning functions
const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting} ${name}`);
	};
};

const gtreeterHey = greet('Hey');
gtreeterHey('Jonas');
gtreeterHey('Ilya');

greet('Hello')('f');

const greetArr = greeting => name => {
	console.log(`${greeting} ${name}`);
};

greetArr('Hey')('Ilya'); */

/* //* The call and apply methods
const lufthansa = {
	airline: 'Lufthansa',
	iataCode: 'LH',
	bookings: [],
	// book: function() {}
	book(flightNum, name) {
		console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

		this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
	},
};

lufthansa.book(223, 'Ilya Belyakov');
lufthansa.book(223, 'Ivan');
console.log(lufthansa);

const eurowings = {
	airline: 'Eurowings',
	iataCode: 'EW',
	bookings: [],
};

const book = lufthansa.book;

//! ошибка тк this указывает на глобальный объект, в строгом режиме this =  undefined
// book(23, 'Sarah');

//* нужно исрльзовать метод call для того чтобы все работало
book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

book.call(lufthansa, 23, 'Sarah Williams');

const swiss = {
	airline: 'Swiss',
	iataCode: 'LX',
	bookings: [],
};

book.call(swiss, 123, 'Ilya Belyakov');

//* Apply метод делает тоже самое что и call, только берет данные из массива
//* данный метод не используется в современном JS
//* так как можно использовать call и деструктуризировать массив чере ...
const flightData = [454, 'Alexandr Petrov'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//* bind метод
//* bind возвращает новуб функцию в которой this всегда указвает на объект eurowings
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(228, 'Steven Williams');

//* теперь при вызове этой функции, this всегда привязан к eurowings, а номер рейса всегда 23
//* теперь при вызове функции нужно указывать только name
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Bel ');

//* C прослушиванием событий
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
	console.log(this);

	this.planes++;
	console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//* Частичное применение - означает: предварительно задать параметры
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // null т.к нам не важно на что указывает this(в стрелочной функции вообще нет this)
console.log(addVAT(100));
console.log(addVAT(250));

//* функция возвращает функцию без bind привязки
const addTaxRate = function (rate) {
	return function (value) {
		return value + value * rate;
	};
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

//* стрелочная функция
// const addTaxRate = rate => value => value + value * rate;
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
*/

//* Coding Challenge #1

// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

/* const poll = {
	question: 'What is your favourite programming language?',
	options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
	// This generates [0, 0, 0, 0]. More in the next section!
	answers: new Array(4).fill(0),
	registerNewAnswer() {
		// получение ответа
		const answer = Number(
			prompt(`${this.question}\n ${this.options.join('\n')}\n(Write option number)`),
		);
		// регистрация ответа
		typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

		this.displayResults();
		this.displayResults('string');
	},
	displayResults(type = 'array') {
		if (type === 'array') {
			console.log(this.answers);
		} else if (type === 'string') {
			console.log(`Poll results are ${this.answers.join(', ')}`);
		}
	},
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }); */

//* mmediately Invoked Function Expressions (IIFE)
(function () {
	console.log('this will never run again');
})();

(() => console.log('This will ALSO never run again'))();
