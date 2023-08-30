// 'use strict';

// function calcAge(birthYear) {
// 	const age = 2023 - birthYear;

// 	function printAge() {
// 		let output = `${firstName}, You are ${age}, born in ${birthYear}`; // здесь firstName будет выводить Ilya
// 		// тк функция идет по scope chain и находит переменную в глобальной области видимости
// 		console.log(output);

// 		if (birthYear >= 1981 && birthYear <= 1996) {
// 			var millenial = true;
// 			// создание новой переменной с одинаковым именем и с внешней области видимости
// 			const firstName = 'Jonas'; // переменная в блоке перебивает переменную глобальную
// 			// тк JS ищет сначала переменную в блоке, если не находит то переходит выше по scope chain
// 			const str = `Oh, you're a millenial, ${firstName}`;
// 			console.log(str);
// 			function add(a, b) {
// 				return a + b;
// 			}

// 			// Переназначение пересенной с внешней областью видимости
// 			output = 'NEW1!';

// 			// const output = 'NEW VAR';
// 		}
// 		// add(2, 3);
// 		console.log(millenial);
// 		console.log(output);
// 	}

// 	printAge();

// 	return age;
// }

// const firstName = 'Ilya';
// calcAge(1995);

// Переменные
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Ilya';
let job = 'student';
const year = 1999;

// Функции
console.log(addDecl(1, 2));
// console.log(addExpr(1, 2)); // при таком вызове var принимает значение undefined
// console.log(addArrow(1, 2)); // при таком вызове var принимает значение undefined

function addDecl(a, b) {
	return a + b;
}

const addExpr = function (a, b) {
	return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShopCard();

var numProducts = 10;

function deleteShopCard() {
	console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.z);
console.log(x === window.y);
