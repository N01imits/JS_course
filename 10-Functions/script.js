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

//* functions returning functions
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

greetArr('Hey')('Ilya');
