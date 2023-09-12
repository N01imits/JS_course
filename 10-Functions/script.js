'use strict';

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
