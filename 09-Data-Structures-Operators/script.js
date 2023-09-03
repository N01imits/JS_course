'use strict';

// Data needed for a later exercise
const flights =
	'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	// деструктуризация объекта через функцию
	orderDelivery: function ({ timeDelivery = '20:00', address, mainIndex = 0, starterIndex = 0 }) {
		// указаны значения по умолчанию
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${timeDelivery}`,
		);
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 12;
console.log(guests);

// false только: undefined and null (нет 0 и '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

/* // * короткие прерывания && и ||
console.log('---OR---');
// * любые типы данных, возрващают также любые типы, короткие замыкания, && и ||
console.log(666 || 'Ilya');
console.log(true || 2);
console.log('' || 13);
console.log(true || 0);
console.log(0 || true);
console.log(undefined || null);
console.log(null || undefined);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 12;
console.log(guests2);

console.log('---And---');
console.log(0 && 'Joh');
console.log(1 && 2);
console.log('aga' && 2 && 3 && null && 'Ilya');

// практический пример
if (restaurant.orderPizza) {
	restaurant.orderPizza('mashrooms', 'spinach	');
}

// тоже самое что и IF сверху
restaurant.orderPizza && restaurant.orderPizza('mashrooms', 'spinach'); */

/* // * 1) деструктаризация и оператор rest
// Spread, потому что ... справа от знака =
const arr = [1, 2, ...[3, 4]];

// Rest, потому что находится слева от оператора =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Объекты
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// * 2) функции и оператор rest
const add = function (...numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) sum += numbers[i];
	console.log(sum);
};

add(2, 3);
add(2, 3, 4, 5, 6);
add(2, 3, 4, 5, 6, 7, 8, 9, 10);

const x = [23, 12, 666];
add(...x); // ? в функции мы распаковываем массив, а в вызове функции опять упаковываем

restaurant.orderPizza('mashrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mashrooms'); */

/* // * оператор ...
const arr = [7, 8];
const badNewArr = [1, 2, 3, arr[0], arr[1]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMainMenu = [...restaurant.mainMenu, 'Gnocci']; // здесь создан совершенно новый массив
console.log(newMainMenu);

// копирование массива
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// объединение массивов
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// итерируемые: массивы,строки, карты, множества НЕ ОБЪЕКТЫ
const str = 'Ilya';
const letters = [...str, ' ', ...'Belyakov'];
console.log(letters);
// console.log(`${...str}`); // ТАК НЕ РАБОТАЕТ

// * Реальный пример
const ingridients = [
	// prompt("Let's make pasta! Ingredient 1?"),
	// prompt('Ingredient 2?'),
	// prompt('Ingredient 3?'),
];

restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
restaurant.orderPasta(...ingridients);

// объекты и оператор ...
const newRestaurant = { foundedIn: 1984, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'New name';
console.log(restaurantCopy.name);
console.log(restaurant.name); */

/* // * деструктуризация объектов
restaurant.orderDelivery({
	timeDelivery: '22:30',
	address: 'Via del Sole, 21',
	mainIndex: 2,
	starterIndex: 2,
});

restaurant.orderDelivery({
	address: 'Via del Sole, 21',
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// значения по умаолчанию
const { starterMenu: starterMenuRestaurant = [], menu: mainMenuRestaurant = [] } = restaurant;
console.log(starterMenuRestaurant, mainMenuRestaurant);

// мутации переменных
let a = 111;
let b = 222;

const obj = { a: 12, b: 34, c: 55 };
({ a, b } = obj);
console.log(a, b);

// Влаженные объекты
const {
	fri: { open: o, close: c },
} = openingHours;
console.log(o, c); */

// * деструктуризация массивов
/* const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.mainMenu; // пробел чтобы пропустить элементв в массиве
console.log(main, secondary);

// const temp = main; // временная переменная чтобы изменить местами значения между main и secondary
// main = secondary;
// secondary = main;
// console.log(main, secondary);

// поменять значения местами
[main, secondary] = [secondary, main]; 
console.log(main, secondary);

// получаем два значения возвращаемые функцией(возвращает в виде массива), в консоль выводятся отдельные значения
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// влаженная дестриктуризация(разбиение массива)
const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];// значения по умолчанию
console.log(p, q, r);
 */
