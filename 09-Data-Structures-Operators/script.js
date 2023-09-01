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

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	orderDelivery: function ({ timeDelivery = '20:00', address, mainIndex = 0, starterIndex = 0 }) {
		// указаны значения по умолчанию
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${timeDelivery}`,
		);
	},

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
};

restaurant.orderDelivery({
	timeDelivery: '22:30',
	address: 'Via del Sole, 21',
	mainIndex: 2,
	starterIndex: 2,
});

// деструктуризация объектов
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
console.log(o, c);

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

//значения по умолчанию
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
 */
