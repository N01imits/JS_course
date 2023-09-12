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
checkIn(flight, ilya);
 */
