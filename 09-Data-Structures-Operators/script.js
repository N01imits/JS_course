'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
	[weekdays[3]]: {
		// в [] можно писать любые вычисляемые значения после ES6
		open: 12,
		close: 22,
	},
	[weekdays[4]]: {
		open: 11,
		close: 23,
	},
	[weekdays[5]]: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

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

	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	// * before ES6
	// openingHours: openingHours,

	// * улучшенные литералы объектов(после ES6)
	openingHours, // js понимает, но если изменить переменную в которой хранится объект, то здесь тоже нужно менять

	// * before ES6
	// деструктуризация объекта через функцию
	// orderDelivery: function ({ timeDelivery = '20:00', address, mainIndex = 0, starterIndex = 0 }) {
	// 	 указаны значения по умолчанию
	// 	console.log(
	// 		`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${timeDelivery}`,
	// 	);
	// },

	// * after ES6
	orderDelivery({ timeDelivery = '20:00', address, mainIndex = 0, starterIndex = 0 }) {
		// необязательно писать слово function
		// указаны значения по умолчанию
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${timeDelivery}`,
		);
	},

	orderPasta(ing1, ing2, ing3) {
		console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
	},

	orderPizza(mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};

//* Coding Challenge #3
const gameEvents = new Map([
	[17, '⚽ GOAL'],
	[36, '� Substitution'],
	[47, '⚽ GOAL'],
	[61, '� Substitution'],
	[64, '� Yellow card'],
	[69, '� Red card'],
	[70, '� Substitution'],
	[72, '� Substitution'],
	[76, '⚽ GOAL'],
	[80, '⚽ GOAL'],
	[92, '� Yellow card'],
]);
//* 1) Create an array 'events' of the different game events that happened (no
//* duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

//* 2) After the game has finished, is was found that the yellow card from minute 64
//* was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

//* 3) Compute and log the following string to the console: "An event happened, on
//* average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(`An event happened an average, every ${90 / gameEvents.size} minutes`);

const time = [...gameEvents.keys()].pop(); // возвращает последний элемент массива
console.log(time);
console.log(`An event happened an average, every ${time / gameEvents.size} minutes`);

//* 4) Loop over 'gameEvents' and log each element to the console, marking
//* whether it's in the first half or second half (after 45 min) of the game, like this:
//* [FIRST HALF] 17: ⚽ GOAL
for (const [min, event] of gameEvents) {
	const half = min <= 45 ? 'FIRST' : 'SECOND';
	console.log(`[${half} HALF] ${min}: ${event}`);
}

/* //* maps: iteration
const question = new Map([
	['question', 'What is the best programming language in the world?'],
	[1, 'C'],
	[2, 'Java'],
	[3, 'JavaScript'],
	['correct', 3],
	[true, 'Correct 🌟'],
	[false, 'Try again 🎃'],
]);

console.log(question);

//* конвертация объекта в мар
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// ? quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
	if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));
// console.log(answer === question.get('correct') ? question.get(true) : question.get(false));

//* convert map to array
console.log([...question]); // такое же что и снизу
console.log([...question.entries()]); // такое же что и сверху
console.log([...question.values()]); // значения в массиве
console.log([...question.keys()]); // ключи в массиве
 */

/* //*MAPS
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');

rest
	.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
	.set('open', 11)
	.set('close', 23)
	.set(true, 'We are open')
	.set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(1));
console.log(rest.set(2, 'Lisbon, Portugal'));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

const arr = [1, 2];

console.log(rest.has(2));
console.log(rest.delete(2));
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading'); // ? Интересно
//? rest.set([1, 2], 'Test');
//? console.log(rest.get([1, 2])); // undefined
console.log(rest.size);
console.log(rest);
console.log(rest.get(arr));
// rest.clear(); */

/* //* SETS
const ordersSet = new Set(['Pizza', 'Pizza', 'Risotto', 'Pasta', 'Risotto']);
console.log(ordersSet);

console.log(new Set('Ilya'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Milk'));
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);
// ordersSet.clear();

for (const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef'];
const staffUnique = [...new Set(staff)]; // spread оператор для преобразования в массив
console.log(staffUnique);

console.log(new Set(staff).size); */

/* // * Перебор объектов
//* Property Names (ключи)
const properties = Object.keys(openingHours); // в properties хранится массив
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
	openStr += `${day}, `; // добавляем к строке дни
}
console.log(openStr);

//* Property Values (значения)
const values = Object.values(openingHours);
console.log(values); // в консоли будет 3 значения

//* Entrie object (весь объект)
const entries = Object.entries(openingHours);
console.log(entries);

//* деструктуризация
for (const [day, { open, close }] of entries) {
	console.log(`On ${day} we open at ${open} and close at ${close}`);
} */

/*// * оператор необязательная цепочка (?.)
//* так мы проверяем существует ли объект, условие не выполнится
if (restaurant.openingHours && restaurant.openingHours.mon) {
	console.log(restaurant.openingHours.mon.opem);
}

// получаем ошибку из-за отсутствия свойств (mon и open)
// console.log(restaurant.openingHours.mon.open);

// * необязательная цепочка
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const wdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of wdays) {
	const open = restaurant.openingHours[day]?.open ?? 'closed'; // оператор ?? работает как || только false = undefined или null
	console.log(`On ${day}, we open at ${open}`);
}

// * методы и оператор ?.
console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);

// * массивы и оператор ?.
const users = [{ name: 'Ilya', email: 'hello@ilya.io' }];
// const users = [];

console.log(users[0]?.email ?? 'User array empty');
*/

/* // * The for-of loop
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); // выведет все элементы по порядку

for (const item of menu.entries()) console.log(item);

//* старый способ
// for (const item of menu.entries()) {
// 	console.log(`${item[0] + 1}: ${item[1]}`);
// }

//*  новый способ
for (const [i, item] of menu.entries()) {
	console.log(`${i + 1}: ${item}`);
} */

// console.log([...menu.entries()]);

const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski',
		],
		[
			'Burki',
			'Schulz',
			'Hummels',
			'Akanji',
			'Hakimi',
			'Weigl',
			'Witsel',
			'Hazard',
			'Brandt',
			'Sancho',
			'Gotze',
		],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

/* //* challenge #2
//* 1) Loop over the game.scored array and print each player name to the console,
//* along with the goal number (Example: "Goal 1: Lewandowski"

for (const [numberGoal, player] of game.scored.entries()) {
	console.log(`Goal ${numberGoal + 1}: ${player}`);
}

// const [players1, players2] = game.players;
// const allPlayers = [...players1, ...players2];
// for (const [number, player] of allPlayers.entries()) {
// 	console.log(`number ${number + 1}: player ${player}`);
// }

//* 2) Use a loop to calculate the average odd and log it to the console
//* (We already studied how to calculate averages, you can go check if you don't remember)

//* новый способ
const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) avg += odd;
avg /= odds.length;
console.log(avg);

//* старый способ
// for (let i = 0; i < odds.length; i++) {
// 	avg += odds[i];
// }
// avg /= odds.length;
// console.log(avg);

//* Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//* Odd of victory Bayern Munich: 1.33
//* Odd of draw: 3.25
//* Odd of victory Borussia Dortmund: 6.5
//* Get the team names directly from the game object, don't hardcode them
//* (except for "draw"). Hint: Note how the odds and the game objects have the
//* same property names

for (const [team, odd] of Object.entries(game.odds)) {
	const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
	console.log(`Odd of ${teamStr}: ${odd}`);
}

//* BONUS
//* Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value.
//* In this game, it will look like this:
const scorers = {};
for (const player of game.scored) {
	scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers); */

/* //* CODING CHALLENGE #1
/// * 1) Create one player array for each team (variables 'players1' and 'players2')
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
const [players1, players2] = game.players;
console.log(players1, players2);

//* 2) The first player in any player array is the goalkeeper and the others are field
//* players. For Bayern Munich (team 1) create one variable ('gk') with the
//* goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
//* field players
// const [gk, ...fieldPlayers] = [...game.players[0]];
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//* 3) Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//* 4) During the game, Bayern Munich (team 1) used 3 substitute players. So create a
//*  new array ('players1Final') containing all the original team1 players plus
//* 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//* 5) Based on the game.odds object, create one variable for each odd (called'team1', 'draw' and 'team2')
// const { team1 } = { ...game.odds }; менее читаемый
// const { team1, x: draw, team2 } = game.odds;
const {
	// деструктуризация объекта дважды
	odds: { team1, x: draw, team2 }, // draw новая переменная в которой хранится значение из x
} = game;
console.log(team1, draw, team2);

//* 6) Write a function ('printGoals') that receives an arbitrary number of player
//* names (not an array) and prints each of them to the console, along with the
//* number of goals that were scored in total (number of player names passed in)
const printGoals = function (...players) {
	console.log(players);
	console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

//* 7) The team with the lower odd is more likely to win. Print to the console which
//* team is more likely to win, without using an if/else statement or the ternary
//* operator.
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);
*/

/* 
//* Logical Assignment Operators
const rest1 = {
	name: 'Capri',
	// numGuests: 20,
	numGuests: 0,
};

const rest2 = {
	name: 'La Piazza',
	owner: 'Giovanni Rossi',
};

//* оператор ||=
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//* оператор ??= (false = undefined и null)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//* оператор &&=
rest1.owner = rest1.owner && '<ANONIM>';
rest2.owner = rest2.owner && '<ANONIM>';
rest2.owner &&= '<anonim>';
rest1.owner &&= '<anonim>';

console.log(rest1);
console.log(rest2); */

/* 
//* Оператор ??
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 12;
console.log(guests);

// false только: undefined and null (нет 0 и '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
 */

/* 
//* короткие прерывания && и ||
console.log('---OR---');
//* любые типы данных, возрващают также любые типы, короткие замыкания, && и ||
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

//* 2) функции и оператор rest
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

/* //* оператор spread ...
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

//* Реальный пример
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

//* деструктуризация массивов
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
